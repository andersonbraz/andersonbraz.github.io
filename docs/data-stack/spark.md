# Spark

## Você sabe como o Spark funciona internamente?

Ele foi projetado para trabalhar com big data e permite o processamento paralelo e distribuído de dados em várias máquinas.

O processo básico do funcionamento interno do Spark é o seguinte:

- Os dados são carregados no cluster Spark, seja de um sistema de arquivos (por exemplo, HDFS, S3) ou de fontes de dados externas (por exemplo, Kafka, flume).

- Spark cria um plano de execução lógico para as tarefas de processamento de dados, usando um gráfico acíclico direcionado (DAG) para representar as etapas do trabalho.

- O plano lógico é então dividido em uma série de tarefas menores que podem ser executadas em paralelo no cluster.

- O Spark então agenda as tarefas a serem executadas no cluster, levando em conta fatores como a localidade dos dados e os recursos disponíveis em cada nó.

- Conforme as tarefas são executadas, o Spark gerencia o fluxo de dados entre elas e acompanha seu status.

- Depois de concluídas todas as tarefas, o Spark retorna os resultados para o usuário.
