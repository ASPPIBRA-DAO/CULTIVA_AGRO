import json
import pandas as pd
import numpy as np
import requests
from dotenv import load_dotenv
import os

# Carrega as variáveis de ambiente do arquivo .env
load_dotenv()

# =================================================================
# Tratamento de dados de vendas
# Carrega o dataset de vendas de imóveis
df_data = pd.read_csv("dataset/nyc-rolling-sales.csv", index_col=0)

# Substitui valores inválidos por zero
df_data = df_data.replace(' -  ', 0)

# Converte colunas de interesse para o tipo float
object_cols = ["LAND SQUARE FEET", "GROSS SQUARE FEET", "SALE PRICE"]
df_data[object_cols] = df_data[object_cols].astype(float)  # Atualizado para usar float

# Converte a coluna de data de venda para o tipo datetime
df_data["SALE DATE"] = pd.to_datetime(df_data["SALE DATE"])

# Remove registros com preços de venda ou medidas de área iguais a zero
df_data = df_data[df_data["SALE PRICE"] != 0]
df_data = df_data[df_data["LAND SQUARE FEET"] != 0]
df_data = df_data[df_data["GROSS SQUARE FEET"] != 0]

# =================================================================
# Tratamento de dados LATITUDES e LONGITUDES
# Carrega a chave da API HERE a partir da variável de ambiente
here_api = os.getenv("GOOGLE_API_KEY")  # Altere o nome conforme definido no .env

# Verifica se o arquivo dict_notes.json existe
dict_address = {}
try:
    with open('dict_notes.json') as f:
        dict_address = json.load(f)
except FileNotFoundError:
    print("O arquivo dict_notes.json não foi encontrado. Um novo dicionário será inicializado.")

error = []
c = 0
total = len(df_data["ADDRESS"].unique())

# Loop para obter coordenadas de latitude e longitude para cada endereço
for address in df_data["ADDRESS"].unique():
    try:
        # Verifica se o endereço já foi processado
        if address in dict_address.keys():
            continue

        # Define a URL e os parâmetros para a requisição da API
        URL = "https://geocode.search.hereapi.com/v1/geocode"
        location = f"{address}, NYC"
        PARAMS = {'apikey': here_api, 'q': location} 

        # Faz a requisição à API
        r = requests.get(url=URL, params=PARAMS) 
        data = r.json()

        # Obtém latitude e longitude do resultado
        lat = data['items'][0]['position']['lat']
        long = data['items'][0]['position']['lng']
        
        # Atualiza o dicionário com as novas coordenadas
        dict_address[address] = {"latitude": lat, "longitude": long}
        with open('dict_notes.json', 'w') as f:
            json.dump(dict_address, f)

    except Exception as e:
        print(e)
        error.append(address)  # Armazena endereços que apresentaram erro

    c += 1
    print(c, total)

# ===================================
# Tratamento final
# Atualiza o dicionário de endereços com as coordenadas
# (não é necessário fazer isso novamente, pois já foi feito acima)

# Cria dicionários de latitude e longitude
dict_lat = {key: value["latitude"] for key, value in dict_address.items()}
dict_long = {key: value["longitude"] for key, value in dict_address.items()}

# Mapeia as coordenadas para o dataframe
df_data["LATITUDE"] = df_data["ADDRESS"].map(dict_lat)
df_data["LONGITUDE"] = df_data["ADDRESS"].map(dict_long)

# Salva os dados tratados em um novo arquivo CSV
df_data.to_csv("dataset/cleaned_data.csv")
