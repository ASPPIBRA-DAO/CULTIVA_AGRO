# Importação de dependências necessárias do Dash
from dash.dependencies import Input, Output
import dash_bootstrap_components as dbc
import pandas as pd
import numpy as np 
import plotly.express as px
import plotly.graph_objects as go
from dotenv import load_dotenv
import os

# Importa a instância do aplicativo Dash
from app import app

# Importa componentes de outros módulos
from _map import *
from _controllers import *
from _histogram import *

# Carrega variáveis de ambiente do arquivo .env
load_dotenv()

# Chave de API do Mapbox
mapbox_token = os.getenv("MAPBOX_TOKEN")

# Carrega os dados de um arquivo CSV
df_data = pd.read_csv("dataset/cleaned_data.csv", index_col=0)

# Calcula a média das coordenadas geográficas
mean_lat = df_data["LATITUDE"].mean()
mean_long = df_data["LONGITUDE"].mean()

# Converte a área de pés quadrados para metros quadrados
df_data["size_m2"] = df_data["GROSS SQUARE FEET"] / 10.764
# Filtra registros com ano de construção maior que 0
df_data = df_data[df_data["YEAR BUILT"] > 0]
# Converte a coluna de data de venda para o formato datetime
df_data["SALE DATE"] = pd.to_datetime(df_data["SALE DATE"])

# Limita o tamanho das propriedades e preços de venda a valores máximos
df_data.loc[df_data["size_m2"] > 10000, "size_m2"] = 10000
df_data.loc[df_data["SALE PRICE"] > 50000000, "SALE PRICE"] = 50000000
df_data.loc[df_data["SALE PRICE"] < 100000, "SALE PRICE"] = 100000

# Layout do aplicativo
app.layout = dbc.Container(
    children=[
        dbc.Row([
            dbc.Col(
                [controllers],  # Adiciona os controles na coluna da esquerda
                md=3,
                style={"padding-right": "25px", "padding-left": "25px", "padding-top": "50px"}
            ),
            dbc.Col([map, hist], md=9),  # Adiciona o mapa e o histograma na coluna da direita
        ])
    ],
    fluid=True  # Define o layout como fluido
)

# Definição dos callbacks do aplicativo
@app.callback(
    [Output('hist-graph', 'figure'), Output('map-graph', 'figure')],
    [Input('location-dropdown', 'value'), 
     Input('slider-square-size', 'value'), 
     Input('dropdown-color', 'value')]            
)
def update_hist(location, square_size, color_map):
    # Copia o DataFrame original caso nenhuma localização seja selecionada
    if location is None:
        df_intermediate = df_data.copy()
    else:
        # Limita o tamanho da propriedade com base no slider
        size_limit = slider_size[square_size] if square_size is not None else df_data["GROSS SQUARE FEET"].max()
        # Filtra os dados com base na localização e tamanho
        df_intermediate = df_data[df_data["BOROUGH"] == location] if location != 0 else df_data.copy()
        df_intermediate = df_intermediate[df_intermediate["GROSS SQUARE FEET"] <= size_limit]

    # Criação do histograma
    hist_fig = px.histogram(df_intermediate, x=color_map, opacity=0.75)
    hist_layout = go.Layout(
        margin=go.layout.Margin(l=10, r=0, t=0, b=50),
        showlegend=False, 
        template="plotly_dark", 
        paper_bgcolor="rgba(0, 0, 0, 0)"
    )
    hist_fig.layout = hist_layout

    # Configuração do token de acesso do Mapbox
    px.set_mapbox_access_token(mapbox_token)

    # Criação do gráfico do mapa
    map_fig = px.scatter_mapbox(
        df_intermediate,
        lat="LATITUDE",
        lon="LONGITUDE",
        color=color_map,
        size="size_m2",
        size_max=20,
        zoom=9,
        opacity=0.4
    )

    # Cria uma escala de cores para o mapa
    color_scale = px.colors.sequential.GnBu
    df_quantiles = df_data[color_map].quantile(np.linspace(0, 1, len(color_scale))).to_frame()
    df_quantiles = round((df_quantiles - df_quantiles.min()) / (df_quantiles.max() - df_quantiles.min()) * 10000) / 10000
    df_quantiles.iloc[-1] = 1
    df_quantiles["colors"] = color_scale
    df_quantiles.set_index(color_map, inplace=True)
    
    # Atualização da linha problemática
    color_scale = [[i, j] for i, j in df_quantiles["colors"].items()]

    # Atualiza a escala de cores do mapa
    map_fig.update_coloraxes(colorscale=color_scale)

    # Atualiza o layout do mapa
    map_fig.update_layout(
        mapbox=dict(center=go.layout.mapbox.Center(lat=mean_lat, lon=mean_long)), 
        template="plotly_dark", 
        paper_bgcolor="rgba(0, 0, 0, 0)", 
        margin=go.layout.Margin(l=10, r=10, t=10, b=10)
    )
    
    return hist_fig, map_fig  # Retorna os gráficos atualizados

if __name__ == '__main__':
    # Executa o servidor do aplicativo
    app.run_server(host="0.0.0.0", port="8050")
