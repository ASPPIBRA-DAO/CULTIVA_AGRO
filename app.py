from flask import Flask, render_template
import dash
import dash_bootstrap_components as dbc
from dash import html  # Importa os componentes HTML do Dash

# Inicializa o Flask
server = Flask(__name__)

# Inicializa o Dash
app = dash.Dash(__name__, server=server, external_stylesheets=[dbc.themes.CYBORG])

# Define a rota Flask para o HTML
@server.route('/')
def home():
    return render_template('index.html')  # Certifique-se de que o arquivo está em 'templates/index.html'

# Configuração do layout do Dash
app.layout = dbc.Container(
    [
        dbc.Row(dbc.Col(html.H1("Dashboard com Dash"), className="text-center")),
        # Adicione mais componentes aqui
    ]
)

if __name__ == '__main__':
    app.run_server(debug=True)
