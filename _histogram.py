from dash import dcc
import dash_bootstrap_components as dbc
import plotly.graph_objects as go

# Configura o gráfico com o tema escuro e fundo transparente
fig = go.Figure()

fig.update_layout(
    template="plotly_dark",
    paper_bgcolor="rgba(0, 0, 0, 0)"  # Fundo transparente do gráfico
)

# Componente de gráfico com o estilo de vidromorfismo
hist = dbc.Row(
    [dcc.Graph(id="hist-graph", figure=fig)],  # Componente do gráfico
    style={
        "height": "30vh",  # Define a altura do gráfico
        "padding": "20px",  # Espaçamento interno
        "border": "1px solid rgba(255, 255, 255, 0.3)",  # Borda sutil com transparência
        "box-shadow": "0 4px 30px rgba(0, 0, 0, 0.1)",  # Sombra leve para profundidade
        "border-radius": "12px",  # Bordas arredondadas
        "background": "rgba(255, 255, 255, 0.1)",  # Fundo semi-transparente
        "backdrop-filter": "blur(10px)",  # Filtro de desfoque para o efeito de vidro
        "-webkit-backdrop-filter": "blur(10px)",  # Compatibilidade com navegadores Webkit
    }
)
