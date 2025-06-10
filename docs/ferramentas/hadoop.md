# Hadoop

Hadoop é uma plataforma de software em Java de computação distribuída voltada para clusters e processamento de grandes volumes de dados, com atenção a tolerância a falhas. Foi inspirada no MapReduce e no GoogleFS

O Hadoop possui dois componentes principais que implementam o armazenamento e processamento distribuído.

- **HDFS** — Gerencia os dados no cluster

- **YARN** — Gerencia os recursos computacionais



## O que é Hadoop?

O Apache Hadoop é uma estrutura de software livre usada para armazenar e processar com eficiência grandes conjuntos de dados que variam em tamanho de gigabytes a petabytes de dados. Em vez de usar um grande computador para armazenar e processar os dados, o Hadoop permite agrupar vários computadores para analisar conjuntos de dados massivos em paralelo com mais rapidez.

O Hadoop consiste em quatro módulos principais:

**Hadoop Distributed File System (HDFS)** – Um sistema de arquivos distribuído que é executado em hardware padrão ou de baixo custo. O HDFS fornece melhor taxa de transferência de dados do que os sistemas de arquivos tradicionais, além de alta tolerância a falhas e suporte nativo de grandes conjuntos de dados.

**Yet Another Resource Negotiator (YARN)** – Gerencia e monitora os nós do cluster e o uso de recursos. Ele agenda trabalhos e tarefas.

**MapReduce** – Uma estrutura que ajuda os programas a fazer a computação paralela nos dados. A tarefa map pega os dados de entrada e os converte em um conjunto de dados que pode ser computado em pares chave-valor. A saída da tarefa map é consumida por tarefas de redução para agregar a saída e fornecer o resultado desejado. Numa definição mais resumida pelo Copilot também temos; **MapReduce** é um modelo de programação para processamento paralelo de dados. Ele divide tarefas em etapas de mapeamento e redução, permitindo a análise de grandes conjuntos de dados.

**Hadoop Common** – Fornece bibliotecas Java comuns que podem ser usadas em todos os módulos.

## Agrupamento do Hadoop

###Como funciona o Hadoop

O Hadoop facilita o uso de toda a capacidade de armazenamento e processamento em servidores de cluster e a execução de processos distribuídos em grandes quantidades de dados. O Hadoop fornece os blocos de construção nos quais outros serviços e aplicativos podem ser construídos.

Aplicativos que coletam dados em vários formatos podem colocar dados no cluster Hadoop usando uma operação de API para conectar-se ao NameNode. O NameNode rastreia a estrutura do diretório do arquivo e a colocação de “pedaços” para cada arquivo, replicados nos DataNodes. Para executar um trabalho para consultar os dados, forneça um trabalho MapReduce composto de muitas tarefas de mapa e redução que são executadas nos dados no HDFS espalhados pelos DataNodes. As tarefas de mapa são executadas em cada nó em relação aos arquivos de entrada fornecidos e os redutores são executados para agregar e organizar a saída final.

O ecossistema Hadoop cresceu significativamente ao longo dos anos devido à sua extensibilidade. Hoje, o ecossistema Hadoop inclui muitas ferramentas e aplicativos para ajudar a coletar, armazenar, processar, analisar e gerenciar big data. Algumas das aplicações mais populares são:

**Spark** – Um sistema de processamento distribuído de código aberto comumente usado para cargas de trabalho de big data. O Apache Spark usa cache na memória e execução otimizada para desempenho rápido e oferece suporte a processamento geral em lote, análise de streaming, aprendizado de máquina, bancos de dados de gráficos e consultas ad hoc.

**Presto** – Um mecanismo de consulta SQL distribuído de código aberto otimizado para análise de dados ad hoc de baixa latência. Ele oferece suporte ao padrão ANSI SQL, incluindo consultas complexas, agregações, junções e funções de janela. Presto pode processar dados de várias fontes de dados, incluindo Hadoop Distributed File System (HDFS) e Amazon S3.

**Hive** – permite que os usuários aproveitem o Hadoop MapReduce usando uma interface SQL, permitindo análises em grande escala, além de armazenamento de dados distribuído e tolerante a falhas.

**HBase** – Um banco de dados de código aberto, não relacional e com versão que é executado sobre o Amazon S3 (usando EMRFS) ou o Hadoop Distributed File System (HDFS). O HBase é um armazenamento de big data distribuído massivamente escalável criado para acesso aleatório, estritamente consistente e em tempo real a tabelas com bilhões de linhas e milhões de colunas.

**Zeppelin** – Um notebook interativo que permite a exploração interativa de dados.
