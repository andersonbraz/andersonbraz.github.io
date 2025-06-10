# Pandas

## Carregando Dados de Arquivos

### Lendo dados de um arquivo CSV

```python
import pandas as pd

df_output = pd.read_csv("file_name.csv")
```

### Lendo dados de um arquivo Excel

```python
import pandas as pd

df_output = pd.read_excel("file_name.csv")
```

## Carregando Dados de Bancos de Dados 

### Lendo dados do MySQL

```python
import mysql.connector
import pandas as pd

connection = mysql.connector.connect(
    host=host,
    user=user,
    password=password,
    database=database
)

cursor = connection.cursor()
query = "SELECT * FROM table_name"
df_output = pd.read_sql(query, connection)
cursor.close()
connection.close()
```

### Lendo dados do Microsoft SQL Server

```python
import pymssql
import pandas as pd

connection = pymssql.connect(
    server=server, 
    user=user, 
    password=password, 
    database=database
)

query = "SELECT * FROM table_name"
df = pd.read_sql(query, connection)
connection.close()

```

## Inspeções Básicas dos Dados

### Mostra primeiras linhas

```python
df.head()
```

### Mostra últimas linhas

```python
df.tail()
```

### Mostra tipos dos dados

```python
df.dtypes()
```

### Mostra sumário estatistico

```python
df.describe()
```

### Mostra indice, colunas e dados

```python
df.info()
```

## Limpeza de Dados

### Verifica valores null

```python
df.isnull().sum()
```

### Modifica valores null

Exemplo: Preenche valores nulos com um valor específico (valor igual a 0)

```python
df.fillna(0)
```

### Remove valores null

```python
df.dropna()
```

### Renomeia colunas

```python
df.rename(columns={'old_name': 'new_name'})
```

### Remove colunas

```python
df.drop(columns=['column_name'])
```

## Funções Úteis

### Manipulando planilhas do Excel

A função abaixo compara dois arquivos excel afim de descobrir se a estrutura de colunas (schema) entre os dois arquivos é a mesma.

```python
import pandas as pd

def compare_excel_structure(model_file, new_file):
    
    df_model = pd.read_excel(model_file)
    df_new = pd.read_excel(new_file)
    
    if set(df_model.columns) == set(df_new.columns):
        print("A estrutura de arquivos é a mesma.")
    else:
        missing_columns = set(df_model.columns) - set(df_new.columns)
        additional_columns = set(df_new.columns) - set(df_model.columns)
        
        if missing_columns:
            print(f"As colunas {missing_columns} estão ausentes no arquivo: ", new_file)
        if missing_columns:
            print(f"As colunas {additional_columns} foram adicionadas no novo arquivo: ", new_file)
    
```
