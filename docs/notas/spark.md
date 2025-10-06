# Spark

## Comandos Úteis

Identificar diretório de instalação do Spark

```shell
echo 'sc.getConf("spark.home")' | spark-shell
```

## Configurações Úteis

### spark.driver.memory

Define a quantidade de memória que o driver (o processo principal do aplicativo Spark) pode usar. Aumentar essa configuração pode ajudar a melhorar o desempenho em casos de dados grandes ou operações complexas.

### spark.executor.memory

Define a quantidade de memória que cada executor pode usar. Isso pode afetar o número de tarefas que podem ser executadas simultaneamente. Aumentar essa configuração pode ajudar a melhorar o desempenho em casos de dados grandes ou operações complexas.

### spark.executor.instances

Define o número de executores que serão criados na inicialização da sessão. Aumentar esse número pode ajudar a aumentar o paralelismo e a velocidade de processamento do aplicativo.

### spark.executor.cores

Define o número de núcleos de CPU que cada executor pode usar. Aumentar esse número pode ajudar a melhorar o desempenho em casos de operações que usam muitos recursos de CPU.

### spark.task.cpus

Define o número de núcleos de CPU que cada tarefa pode usar. Aumentar esse número pode ajudar a melhorar o desempenho em casos de operações que usam muitos recursos de CPU.

### spark.sql.shuffle.partitions

Define o número de partições usadas para operações de shuffle, como groupByKey e reduceByKey. Aumentar esse número pode ajudar a melhorar o desempenho em casos de dados grandes ou operações complexas

### spark.default.parallelism

Define o número de partições usadas para operações como parallelize, union, intersection, cartesian e sortByKey. Aumentar esse número pode ajudar a melhorar o desempenho em casos de dados grandes ou operações complexas.

### spark.memory.fraction

Define a fração da memória total que é usada para a memória de execução. Aumentar esse número pode ajudar a melhorar o desempenho em casos de dados grandes ou operações complexas.

### spark.memory.storageFraction

Define a fração da memória total que é usada para a memória de armazenamento. Aumentar esse número pode ajudar a melhorar o desempenho em casos de dados grandes ou operações complexas.

### spark.network.timeout

Define o tempo limite de rede em segundos. Aumentar esse número pode ajudar a melhorar o desempenho em casos de operações que exigem mais tempo para serem concluídas.

### spark.speculation

Ativa ou desativa a especulação de tarefa. A especulação de tarefa é usada para executar novamente tarefas que podem estar atrasadas, aumentando assim a velocidade de processamento do aplicativo.

### spark.sql.adaptive.enabled

Ativa ou desativa o modo adaptativo do Spark SQL. O modo adaptativo pode ajudar a melhorar o desempenho do aplicativo ajustando dinamicamente o tamanho da memória e o número de partições usadas para operações de shuffle e join.

### spark.sql.adaptive.coalescePartitions.enabled

Ativa ou desativa a redução dinâmica do número de partições em operações de shuffle e join.
