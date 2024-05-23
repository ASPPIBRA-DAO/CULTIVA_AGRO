from dash import html, dcc
import dash_bootstrap_components as dbc
from app import app


list_of_locations = {
    "All": 0,
    "Acre": 1,
    "Alagoas": 2,
    "Amapá": 3,
    "Amazonas": 4,
    "Bahia": 5,
    "Ceará": 6,
    "Distrito Federal": 7,
    "Espírito Santo": 8,
    "Goiás": 9,
    "Maranhão": 10,
    "Mato Grosso": 11,
    "Mato Grosso do Sul": 12,
    "Minas Gerais": 13,
    "Pará": 14,
    "Paraíba": 15,
    "Paraná": 16,
    "Pernambuco": 17,
    "Piauí": 18,
    "Rio de Janeiro": 19,
    "Rio Grande do Norte": 20,
    "Rio Grande do Sul": 21,
    "Rondônia": 22,
    "Roraima": 23,
    "Santa Catarina": 24,
    "São Paulo": 25,
    "Sergipe": 26,
    "Tocantins": 27
}



slider_size = [100, 500, 1000, 10000, 10000000]


controllers = dbc.Row([
    dcc.Store(id='store-global'),
    
    html.Img(id="logo", src=app.get_asset_url("logo_dark.png"), style={'width':'50%'}),
    
    html.H3("Monitoramento do Agronegócio no Brasil", style={"margin-top": "30px"}),
    
    html.P("""Utilize este dashboard para analisar a produção agrícola e pecuária nos estados brasileiros."""),
    
    html.H4("""Borough""", style={"margin-top": "50px", "margin-bottom": "50px"}),
    
    dcc.Dropdown(
        id="location-dropdown",
        options=[{"label": i, "value": j} for i, j in list_of_locations.items()],
        value=0,
        placeholder="Select a borought"
    ),
    
    html.P("""Metragem (m2)""", style={"margin-top": "20px"}),
    
    dcc.Slider(min=0, max=4, id='slider-square-size', value=4, marks = {i: str(j)for i, j in enumerate(slider_size)}),

    html.P("""Variável de análise""", style={"margin-top": "20px"}),
    
    dcc.Dropdown(
        options=[
            {'label': 'YEAR BUILT', 'value': 'YEAR BUILT'},
            {'label': 'TOTAL UNITS', 'value': 'TOTAL UNITS'},
            {'label': 'SALE PRICE', 'value': 'SALE PRICE'},
        ],
        value='SALE PRICE',
        id="dropdown-color")
    ])
