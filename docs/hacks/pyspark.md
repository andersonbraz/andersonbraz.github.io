# PySpark

## Boas Práticas

### Imports

Evite poluir o manespace global do seu projeto de código

```python
from pyspark.sql import functions as F
from pyspark.sql import types as T
```

### Select

Evite usar o withColumnRenamed quando for possível.

**RUIM:**

```python

df_output = df_input.withColumnRenamed("name", "fullname")

```

**BOM:**

```python
df_output = df_input.select(
    F.col("name").alias("fullname")
    ...
)
```

Evite usar o withColumn quando for possível. Veja alguns exemplos de códigos bem interessantes.

**RUIM:**

```python

df_output = df_input\
    .withColumn("months", F.round(F.months_between(F.col("end_date"), F.col("start_date"))))
    .withColumn("days_between", F.datediff(F.col("open_date"), F.col("close_date")))
    .withColumn("company", F.upper(F.col("company")))

```

**BOM:**

```python
df_output = df_input.select(
    F.round(F.months_between(F.col("end_date"), F.col("start_date"))).alias("months"),
    F.datediff(F.col("open_date"), F.col("close_date")).alias("days_between"),
    F.upper(F.col("company"))
)
```

### Window

Para explorarmos alguns cenários utilizando-se da função Window do PySpark temos que gerar uma amostra de dados e para isso utilizaremos a biblioteca Faker do Python. 

**Gerando uma amostra de dados Faker**

```python
from pyspark.sql import SparkSession
from pyspark.sql import functions as F
from pyspark.sql import types as T
from pyspark.sql.window import Window
from faker import Faker

fake = Faker("pt-BR")

disciplinas = ["Matemática", "Português", "Geografia", "História", "Física", "Biologia"] 
anos = [2020, 2021, 2022, 2023, 2024]

schema = T.StructType([
    T.StructField("ID", T.StringType(), True),
    T.StructField("NOME", T.StringType(), True),
    T.StructField("ANO", T.IntegerType(), True),
    T.StructField("NOTA", T.FloatType(), True),
    T.StructField("DISCIPLINA", T.StringType(), True)
])

data = []

for _ in range(100):

    data.append([
        fake.md5(),
        fake.name(),
        random.choice(anos),
        round(random.uniform(0, 9.99), 2),
        random.choice(disciplinas)
    ])

df_base = spark.createDataFrame(data, schema=schema)

```

Retornar com a função **Window** a maiores notas por disciplina

```python
win_spec_max = Window.partitionBy("DISCIPLINA").orderBy(F.col("NOTA").desc())

df_max_notas = df_base.withColumn("row_number", F.row_number().over(win_spec_max)) \
    .filter(F.col("row_number") == 1) \
    .drop("row_number")

df_max_notas.show()
```

Retornar com a função **Window** a menores notas por disciplina

```python
win_spec_min = Window.partitionBy("DISCIPLINA").orderBy(F.col("NOTA").asc())

df_min_notas = df_base.withColumn("row_number", F.row_number().over(win_spec_min)) \
    .filter(F.col("row_number") == 1) \
    .drop("row_number")

df_min_notas.show()
```

**Observação:** Disponibilizei [aqui](https://colab.research.google.com/drive/1_8AHPsZhM4aoTySOTcZiZqnTsSVMg7u_?usp=sharing){target=_blank}

## Funções Úteis

Ler arquivo csv e entregar dados em dataframe

```python
def read_csv(path_filename: str) -> DataFrame:

    df = spark.read\
        .option("sep", ",")\
        .option("decimal", ".")\
        .option("header", "true")\
        .option("encoding", "UTF-8")\
        .csv(path_filename)
        
    return df
```

Ler arquivo json e entregar dados em dataframe

```python
def read_json(path_filename: str) -> DataFrame:

    df = spark.read\
        .option("multiline", "true")\
        .option("encoding", "UTF-8")\
        .json(path_filename)
        
    return df
```

Retirar colunas duplicadas de um DataFrame

```python

def drop_cols_duplicates(df: DataFrame) -> DataFrame:

    dup_cols = df.columns
    dup_cols = [col for col in dup_cols if df.select(col).distinct().count() == 1]
    df = df.drop(*dup_cols)
    
    return df
```


Unir vários dataframes

```python
from functools import reduce

def union_all_dfs(*dfs)-> DataFrame:
    return reduce(Dataframe.unionAll, dfs)
```

Converter títulos de colunas para maiusculos

```python
def uppercase_columns(df: DataFrame) -> DataFrame:

    for col in df.columns:
        df = df.withColumnRenamed(col, col.upper())
    return df
```

Converter títulos de colunas para letras minúsculas

```python
def lowercase_columns(df: DataFrame) -> DataFrame:

    for col in df.columns:
        df = df.withColumnRenamed(col, col.lower())
    return df
```

Verificar valores nulos

```python
def check_null_values(df: DataFrame) -> DataFrame:

    columns = []
    null_counts = []
    non_null_counts = []

    for col in df.columns:
        columns.append(col)
        null_counts.append(df.filter(F.col(col).isNull()).count())
        non_null_counts.append(df.filter(F.col(col).isNotNull()).count())
    
    df = spark.DataFrame(list(zip(columns, null_counts, non_null_counts)),
                        ["Coluna", "Contagem de Nulos", "Contagem de Não Nulos"])

    return df
    
```

Adicionar/Somar meses a uma data

```python
def add_months_to_date(date_str: str, months: int) -> date:

    input_date = datetime.strftime(date_str, "%Y-%m-%d")
    future_date = input_date + timedelta(days=30 * months)
    return future_date.strftime("%Y-%m-%d")
```

Verificar registros duplicados a partir de colunas

```python
df_output = df_input.groupBy("name", "email").count().filter("count > 1")
df_output.show(truncate=False)
```