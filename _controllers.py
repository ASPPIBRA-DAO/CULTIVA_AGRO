from dash import html, dcc
import dash_bootstrap_components as dbc
from app import app

# Dicionário que mapeia os estados brasileiros e localidades dos EUA para valores numéricos
list_of_locations = {
    "All": 0,  # Valor padrão para todas as localidades
    "Manhattan": 1,
    "Bronx": 2,
    "Brooklyn": 3,
    "Queens": 4,
    "Staten Island ": 5,
    "Acre": 6,
    "Alagoas": 7,
    "Amapá": 8,
    "Amazonas": 9,
    "Bahia": 10,
    "Ceará": 11,
    "Distrito Federal": 12,
    "Espírito Santo": 13,
    "Goiás": 14,
    "Maranhão": 15,
    "Mato Grosso": 16,
    "Mato Grosso do Sul": 17,
    "Minas Gerais": 18,
    "Pará": 19,
    "Paraíba": 20,
    "Paraná": 21,
    "Pernambuco": 22,
    "Piauí": 23,
    "Rio de Janeiro": 24,
    "Rio Grande do Norte": 25,
    "Rio Grande do Sul": 26,
    "Rondônia": 27,
    "Roraima": 28,
    "Santa Catarina": 29,
    "São Paulo": 30,
    "Sergipe": 31,
    "Tocantins": 32
}

# Lista de tamanhos possíveis para o slider de metragem em m²
slider_size = [100, 500, 1000, 10000, 10000000]

# Define os controles da barra lateral do dashboard, organizados em uma linha
controllers = dbc.Row([
    dcc.Store(id='store-global'),  # Armazena dados globalmente no cliente

    # Logotipo do dashboard
    html.Img(id="logo", src=app.get_asset_url("logo_dark.png"), style={'width': '50%'}),

    # Título do dashboard
    html.H3("Monitoramento do Agronegócio no Brasil", style={"margin-top": "30px"}),

    # Descrição do uso do dashboard
    html.P("Utilize este dashboard para analisar a produção agrícola e pecuária nos estados brasileiros."),

    # Título da seção de seleção de estados
    html.H4("Estados", style={"margin-top": "50px", "margin-bottom": "50px"}),

    # Dropdown para selecionar o estado/localidade de análise
    dcc.Dropdown(
        id="location-dropdown",
        options=[{"label": i, "value": j} for i, j in list_of_locations.items()],  # Opções geradas a partir do dicionário
        value=0,  # Valor inicial: "All" (todos)
        placeholder="Select a borough"  # Placeholder quando nenhuma localidade está selecionada
    ),

    # Slider para seleção de metragem em m²
    html.P("Metragem (m2)", style={"margin-top": "20px"}),
    dcc.Slider(
        min=0, max=4,  # Define o intervalo do slider
        id='slider-square-size',
        value=4,  # Valor inicial do slider
        marks={i: str(j) for i, j in enumerate(slider_size)}  # Marcas para as opções de metragem
    ),

    # Dropdown para seleção da variável de análise
    html.P("Variável de análise", style={"margin-top": "20px"}),
    dcc.Dropdown(
        options=[
            {'label': 'YEAR BUILT', 'value': 'YEAR BUILT'},  # Analisar o ano de construção
            {'label': 'TOTAL UNITS', 'value': 'TOTAL UNITS'},  # Analisar o número total de unidades
            {'label': 'SALE PRICE', 'value': 'SALE PRICE'},  # Analisar o preço de venda
        ],
        value='SALE PRICE',  # Valor inicial definido para 'SALE PRICE'
        id="dropdown-color"  # ID do componente
    )
],
    
    # Estilização da barra lateral
    style={
        'padding': '20px',  # Espaçamento interno para os componentes
        'border': '1px solid rgba(255, 255, 255, 0.3)',  # Borda sutil e semi-transparente
        'box-shadow': '0 4px 30px rgba(0, 0, 0, 0.1)',  # Sombra leve para efeito de profundidade
        'border-radius': '12px',  # Cantos arredondados mais pronunciados
        'background': 'rgba(255, 255, 255, 0.1)',  # Fundo semi-transparente para o efeito vidro
        'backdrop-filter': 'blur(10px)',  # Filtro de desfoque para o efeito de vidro
        '-webkit-backdrop-filter': 'blur(10px)',  # Compatibilidade com navegadores baseados em Webkit
        'width': '20%',  # Largura da barra lateral
        'max-width': '300px',  # Largura máxima
        'min-width': '300px',  # Largura mínima
        'height': '100vh',  # Altura completa da viewport (tela)
        'display': 'flex',  # Uso de flexbox para disposição dos itens
        'flex-direction': 'column',  # Organiza os itens verticalmente
        'overflow-y': 'auto',  # Habilita a rolagem vertical se o conteúdo exceder a altura
        'margin': '0px',  # Afastamento das bordas externas para dar espaço ao redor da barra
        'padding': '30px',  # Aumenta o espaçamento interno entre os componentes
    }
)

# Layout principal do dashboard
layout = html.Div([
    controllers,  # Inclui a barra lateral definida anteriormente
    html.Div([  # Div para o conteúdo principal do dashboard
        # Espaço onde outros componentes (ex: mapas) podem ser inseridos
    ], style={
        'flex': '1',  # Faz com que o conteúdo principal ocupe todo o espaço disponível
        'padding': '20px',  # Espaçamento interno
    })
],
    style={
        'display': 'flex',  # Flexbox para organizar a barra lateral e o conteúdo principal lado a lado
        'height': '100vh'  # Altura total da tela
    }
)
