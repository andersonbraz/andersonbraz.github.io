# Introdução a Engenharia de Dados no Google Cloud

## Visão Geral


| Tasks                 | Description                                | Solutions                                      |
|-----------------------|--------------------------------------------|------------------------------------------------|
| Replicate and Migrate | Transfer raw data into Google Cloud        | Google Cloud and others                        |
| Ingest                | Raw data is available in a data source     | Cloud Storage, Pub/Sub, Spanner and others.    |
| Transform             | Process data using EL, ELT, or ETL tools   | Dataproc, Dataflow, Dataform and others.       |
| Store                 | Processed data is available in a data sink | BigQuery, Dataplex, Bigtable and Analytics Hub |


## Ingestão

### Formatos de Dados

| Formats      | Types                          |
|--------------|--------------------------------|
| Unstructured | Documents, images, audio files |
| Structured   | Tables (Rows and Columns)      |


## Storage

### Cloud Storage

O **Cloud Storage oferece quatro classes de armazenamento principais**, cada uma projetada para diferentes necessidades de acesso e custos. Aqui está um resumo de cada uma:

**- Standard Storage**: É a opção recomendada para dados que são acessados frequentemente, seja diariamente ou semanalmente.

**- Nearline Storage**: É mais adequada para dados que são acessados com menos frequência, por exemplo, uma vez por mês.


**- Coldline Storage**: É recomendada para dados que são acessados raramente, como uma vez por trimestre.

**- Archive Storage**: É a melhor opção para dados que são acessados muito raramente, como uma vez por ano ou menos.

Em resumo, a escolha da classe de armazenamento depende da frequência com que os dados precisam ser acessados, com o Standard Storage sendo para acesso frequente e o Archive Storage sendo para dados que raramente precisam ser acessados.