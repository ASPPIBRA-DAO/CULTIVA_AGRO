import pandas as pd
import sqlite3

# Nome do arquivo CSV e o nome do banco de dados SQLite
csv_file = 'Dataset/33_RJ.csv'  # Substitua pelo caminho do seu arquivo CSV
sqlite_db = 'seu_banco_de_dados.db'  # Nome do banco de dados SQLite

# Ler o arquivo CSV usando pandas
df = pd.read_csv(csv_file)

# Conectar ao banco de dados SQLite (será criado se não existir)
conn = sqlite3.connect(sqlite_db)
cursor = conn.cursor()

# Nome da tabela onde os dados serão inseridos
table_name = 'sua_tabela'  # Substitua pelo nome da tabela desejada

# Converter o DataFrame para uma tabela SQLite
df.to_sql(table_name, conn, if_exists='replace', index=False)

# Confirmar e fechar a conexão
conn.commit()
conn.close()

print(f"Dados do arquivo {csv_file} foram importados para a tabela {table_name} no banco de dados {sqlite_db}.")
