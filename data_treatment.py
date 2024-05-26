import json
import os
import pandas as pd
import numpy as np
import requests
from dotenv import load_dotenv

# Carregar variáveis de ambiente do arquivo .env
load_dotenv()

# Tratamento de dados de vendas
df_data = pd.read_csv("Dataset/nyc-rolling-sales.csv", index_col=0)

df_data = df_data.replace(' -  ', 0)
object_cols = ["LAND SQUARE FEET", "GROSS SQUARE FEET", "SALE PRICE"]
df_data[object_cols] = df_data[object_cols].astype(np.float)
df_data["SALE DATE"] = pd.to_datetime(df_data["SALE DATE"])

df_data = df_data[(df_data["SALE PRICE"] != 0) & (df_data["LAND SQUARE FEET"] != 0) & (df_data["GROSS SQUARE FEET"] != 0)]

# Tratamento de dados LATITUDES e LONGITUDES

# Chave da API do Google Maps
google_api_key = os.getenv("GOOGLE_API_KEY")

# Carregar dicionário de endereços do arquivo JSON
with open('dict_notes.json') as json_file:
    dict_address = json.load(json_file)

error = []
c = 0
total = len(df_data["ADDRESS"].unique())

for address in df_data["ADDRESS"].unique():
    try:
        if address in dict_address.keys():
            continue
        
        # Fazer solicitação HTTP para obter latitude e longitude
        URL = "https://maps.googleapis.com/maps/api/geocode/json"
        location = address + ", NYC"
        PARAMS = {'address': location, 'key': google_api_key} 
        r = requests.get(url=URL, params=PARAMS) 
        data = r.json()

        # Verificar se a resposta possui dados válidos
        if 'results' in data and data['results']:
            lat = data['results'][0]['geometry']['location']['lat']
            lng = data['results'][0]['geometry']['location']['lng']
            dict_address[address] = {"latitude": lat, "longitude": lng}
            with open('dict_notes.json', 'w') as f:
                json.dump(dict_address, f)
        else:
            error.append(address)
    except Exception as e:
        print("Erro ao processar endereço:", address, "-", e)
        error.append(address)

    c += 1
    print(c, total)

# Tratamento final

# Carregar dicionário de endereços do arquivo JSON novamente
with open('dict_notes.json') as json_file:
    dict_address = json.load(json_file)

# Extrair latitudes e longitudes do dicionário
dict_lat = {key: value["latitude"] for key, value in dict_address.items()}
dict_long = {key: value["longitude"] for key, value in dict_address.items()}

# Mapear latitudes e longitudes no dataframe
df_data["LATITUDE"] = df_data["ADDRESS"].map(dict_lat)
df_data["LONGITUDE"] = df_data["ADDRESS"].map(dict_long)

# Salvar os dados tratados em um novo arquivo CSV
df_data.to_csv("Dataset/cleaned_data.csv")
