# 2. Ingestão e Processamento de Dados

Aqui temos algumas da minhas anotações da trilha de formação de Engenheiro de Dados com a plataforma da Google Cloud referente ao segundo módulo.

## Problema 01

Uma time de engenheiro de dados recebe dados no formato JSON de fontes externas no final de cada dia. Os mesmos precisam projetar um pipeline de dados para consumir estes dados. O que devemos fazer?

> Resposta: Para projetar um pipeline de dados para dados em formato JSON recebidos de fontes externas no final de cada dia, a melhor abordagem é armazenar os dados no **Cloud Storage** e criar um pipeline de extração, transformação e carregamento (ETL).

- Cloud Storage como armazenamento inicial: O Cloud Storage é um serviço de armazenamento de objetos escalável e durável, adequado para armazenar dados não estruturados ou semiestruturados, como arquivos JSON. Ele serve como a camada de armazenamento inicial para seus dados brutos antes de qualquer processamento.

- Pipeline ETL: Um pipeline ETL (Extrair, Transformar, Carregar) é uma abordagem comum para processamento de dados.
    
    - Extração: Os dados JSON são extraídos do Cloud Storage.
    
    - Transformação: Os dados são transformados e preparados para análise, como limpeza, formatação e enriquecimento dos dados.

    - Carregamento: Os dados transformados são carregados em um sistema de destino, como um data warehouse (BigQuery) ou um data lake.

Outras opções, como tornar o data warehouse do BigQuery público, criar uma API pública para inserção de dados, ou armazenar os dados em discos permanentes, não são as mais adequadas para este cenário. Tornar o BigQuery público pode expor os dados a riscos de segurança. A criação de uma API pública exige um esforço de desenvolvimento adicional e não é a forma mais direta de ingerir dados. Armazenar os dados em discos permanentes não é flexível e escalável como o Cloud Storage para um pipeline de dados.

Ao usar o Cloud Storage como camada de armazenamento inicial, você garante a flexibilidade e a escalabilidade necessárias para um pipeline de dados confiável. Um pipeline ETL bem projetado permite que você transforme os dados JSON e os carregue em um destino adequado para análise.

## Problema 02

Na organização onde trabalho temos vários analistas de dados, mas uma equipe limitada de engenharia de dados. Preciso escolher uma ferramenta em que os analistas possam criar pipelines de dados com uma interface gráfica do usuário. Qual o produto da Google Cloud mais adequado?

> Resposta: Para permitir que os analistas de dados criem pipelines de dados com uma interface gráfica do usuário, o produto mais adequado é o **Cloud Data Fusion**.

- O Cloud Data Fusion é uma ferramenta de integração de dados com uma interface gráfica que permite aos usuários criar pipelines de dados sem a necessidade de escrever código.

- Essa abordagem é ideal para equipes com um número limitado de engenheiros de dados, pois os analistas podem construir seus próprios pipelines de dados de forma autônoma.

- O Cloud Data Fusion oferece uma variedade de conectores e transformações pré-construídas que facilitam a criação de pipelines complexos sem a necessidade de programação manual.

- Ao invés de usar outras ferramentas como o Dataflow, Dataproc ou Cloud Composer, o Cloud Data Fusion é a opção que melhor se adapta às necessidades da sua equipe, pois foi concebido especificamente para situações onde uma interface gráfica é necessária.

Em resumo, o Cloud Data Fusion é a ferramenta mais adequada para permitir que seus analistas de dados, que podem não ter habilidades de programação, criem seus próprios pipelines de dados de maneira fácil e eficiente, com sua interface gráfica do usuário.

## Problema 03

Gerencio um pipeline de dados em lote do PySpark usando o Dataproc: quero usar uma abordagem prática para executar a carga de trabalho e não quero provisionar e gerenciar cluster próprio. O que devo fazer?

> Resposta: Para executar um pipeline de dados em lote do PySpark usando o Dataproc de forma prática, sem precisar provisionar e gerenciar seu próprio cluster, você deve configurar o job para execução no Dataproc sem servidor.

O Dataproc sem servidor é uma opção que permite executar jobs do Spark sem a necessidade de criar e gerenciar clusters do Dataproc. Essa abordagem é ideal para situações em que você deseja uma solução de processamento de dados prática, sem a complexidade de gerenciar a infraestrutura subjacente.
Ao usar o Dataproc sem servidor, você se beneficia das seguintes vantagens:

- Gerenciamento simplificado: Você não precisa se preocupar com o provisionamento, dimensionamento e gerenciamento de clusters. O Dataproc sem servidor lida com tudo isso automaticamente, permitindo que você se concentre em seus jobs de processamento de dados.

- Escalabilidade automática: O Dataproc sem servidor dimensiona automaticamente os recursos de computação de acordo com as necessidades do seu job, garantindo que ele seja executado de forma eficiente.

- Redução de custos: Você só paga pelos recursos de computação que usa, sem a necessidade de manter um cluster ocioso quando não há jobs em execução.

- Fácil de usar: O Dataproc sem servidor se integra bem com outras ferramentas do Google Cloud, o que facilita a criação e a execução de jobs do Spark.

Outras opções, como configurar o job para execução com VMs spot, reescrever o job no Spark SQL ou reescrever o job no Dataflow com SQL, não são as mais adequadas para este cenário. Configurar o job com VMs spot exige que você gerencie um cluster, o que não atende ao seu requisito de não ter que provisionar e gerenciar a infraestrutura. Reescrever o job em Spark SQL ou Dataflow com SQL pode exigir muito esforço e tempo.

## Problema 04

Preciso criar um pipeline de análise de dados de streaming no Google Cloud. Preciso escolher um produto que suporte streaming de dados. Qual produto mais adequado neste caso?

> Resposta: Para criar um pipeline de análise de dados de streaming no Google Cloud, você deve escolher produtos que suportem dados de streaming. A combinação mais adequada nesse caso é Pub/Sub, Dataflow e BigQuery.

- Pub/Sub: O Pub/Sub é um serviço de mensagens sem servidor que permite a ingestão de dados de streaming em tempo real. Ele atua como a fonte de dados para o seu pipeline, recebendo os dados de streaming e encaminhando-os para processamento.

- Dataflow: O Dataflow é um serviço de processamento de dados unificado e escalável que é ideal para pipelines de streaming. Ele permite processar dados em tempo real com baixa latência e oferece recursos avançados como janelas, marcas-d'água e gatilhos. O Dataflow pode ler dados do Pub/Sub, realizar transformações e análises e então carregar os resultados para o BigQuery.

- BigQuery: O BigQuery é um data warehouse totalmente gerenciado e escalável, ideal para análise de grandes conjuntos de dados. Ele pode receber dados de streaming do Dataflow e armazenar os resultados do processamento para posterior análise e consulta. Além disso, o BigQuery possui recursos de streaming de alta capacidade para processar grandes volumes de dados em tempo real.

Outras opções não são adequadas para este cenário de análise de dados de streaming:

- Dataprep não é projetado para dados de streaming, sendo mais adequado para limpeza e preparação de dados em lote.

- Cloud SQL e AlloyDB são bancos de dados relacionais e não são ideais para processamento de dados de streaming. Cloud SQL é mais adequado para dados transacionais.

- Cloud Storage serve como camada de armazenamento inicial, mas não é adequado para processamento de dados de streaming em tempo real.

Em resumo, para um pipeline de análise de dados de streaming no Google Cloud, a combinação de Pub/Sub para ingestão, Dataflow para processamento e BigQuery para armazenamento e análise é a mais adequada, pois essas ferramentas foram projetadas para trabalhar em conjunto e garantir um pipeline de dados eficiente e escalável.

## Problema 05

Preciso executar trabalhos em lote, usando o Google Cloud, o que pode levar muitos dias para ser concluído. Não desejo gerenciar o provisionamento de infraestrutura. O que devo fazer?

> Resposta: Para executar trabalhos em lote que podem levar vários dias para serem concluídos, sem gerenciar o provisionamento de infraestrutura, você deve usar o Batch do Google Cloud.

- O Batch é um serviço que permite executar jobs em lote sem a necessidade de provisionar e gerenciar a infraestrutura subjacente.

- Ele é ideal para cargas de trabalho de longa duração, como processamento de dados, análise científica e modelagem, onde a execução pode levar horas ou dias.

- Com o Batch, você pode se concentrar na lógica do seu job, enquanto o serviço cuida do provisionamento, escalonamento e gerenciamento da infraestrutura necessária para sua execução.

- Outras opções como o Cloud Scheduler, o Workflows e o Cloud Run não são as mais adequadas neste cenário. O Cloud Scheduler é usado para agendar tarefas recorrentes e não é ideal para jobs de longa duração. O Workflows é usado para orquestrar fluxos de trabalho e não é especificamente projetado para executar jobs em lote de longa duração. O Cloud Run é mais adequado para executar aplicativos conteinerizados e não para trabalhos em lote que duram dias.

Portanto, o Batch é a solução mais adequada para executar seus trabalhos em lote de longa duração no Google Cloud, pois oferece uma abordagem sem servidor que elimina a necessidade de gerenciar a infraestrutura, permitindo que você se concentre na execução dos seus trabalhos.

## Problema 06

Estou processando grandes quantidades de dados de entrada no BigQuery. Sendo necessário combinar esses dados com uma pequena quantidade de dados que mudam com frequência que estão disponíveis no Cloud SQL. O que devo fazer?

> Resposta: Para combinar grandes quantidades de dados de entrada no BigQuery com uma pequena quantidade de dados que mudam frequentemente no Cloud SQL, você deve usar uma consulta federada para receber dados do Cloud SQL.

- **Consultas Federadas**: As consultas federadas permitem que você consulte dados que residem em fontes de dados externas, como o Cloud SQL, diretamente do BigQuery. Em vez de copiar os dados do Cloud SQL para o BigQuery, as consultas federadas acessam os dados do Cloud SQL em tempo real, garantindo que você esteja usando as informações mais atualizadas.

- **Dados em Tempo Real**: Essa abordagem é ideal para situações em que os dados do Cloud SQL são frequentemente alterados, pois você sempre terá acesso aos dados mais recentes sem a necessidade de criar pipelines de cópia de dados.

- **Eficiência**: As consultas federadas evitam a necessidade de manter cópias redundantes de dados, economizando tempo e custos de armazenamento.

Outras opções como copiar os dados do Cloud SQL para uma nova tabela do BigQuery a cada hora ou criar uma tabela combinada e normalizada a cada hora, podem gerar dados desatualizados e requerem mais esforço. A criação de um pipeline do Dataflow para combinar os dados do BigQuery e do Cloud SQL quando os dados do Cloud SQL mudarem, pode ser uma solução mais complexa do que as consultas federadas.

Ao utilizar consultas federadas, você poderá acessar dados do Cloud SQL em tempo real, combinando-os com dados do BigQuery de maneira eficiente e sem a necessidade de criar pipelines de cópia de dados ou manter cópias redundantes.

## Problema 07

Estou executando jobs do Dataflow para processamento de dados. Quando os desenvolvedores atualizam o código no Cloud Source Repositories, preciso testar e implantar o código atualizado com o mínimo de esforço. O que posso usar para criar meu pipeline de integração e entrega contínua (CI/CD) para processamento de dados?

> Resposta: Para criar um pipeline de integração e entrega contínua (CI/CD) para processamento de dados, onde você executa jobs do Dataflow e precisa testar e implantar o código atualizado do Cloud Source Repositories com o mínimo de esforço, você deve usar o Cloud Build.

- O Cloud Build é um serviço de CI/CD totalmente gerenciado que permite automatizar as etapas de compilação, teste e implantação do seu código.

- Ao usar o Cloud Build, você pode configurar um pipeline que será acionado automaticamente quando os desenvolvedores atualizarem o código no Cloud Source Repositories.

- O Cloud Build pode ser configurado para executar os testes necessários e, em seguida, implantar o código atualizado no seu ambiente de processamento de dados do Dataflow, com mínimo de esforço.

Outras opções como o Terraform, Compute Engine e Cloud Code não são as mais adequadas para este cenário. O Terraform é usado para infraestrutura como código e não é especificamente projetado para pipelines CI/CD. O Compute Engine é usado para máquinas virtuais e não para automação de CI/CD. O Cloud Code é uma extensão para ambientes de desenvolvimento e não para automação de pipelines CI/CD.

O Cloud Build é ideal para automatizar todo o processo de CI/CD para seus jobs do Dataflow, desde a detecção de alterações no código até a implantação das atualizações, com o mínimo de esforço necessário.

## Problema 08

Estou criando um pipeline de dados para transmitir dados no Dataflow para os dados de um ponto de venda da organização onde trabalho. Desejo calcular o total de vendas por hora continuamente. Qual opção window mais adequada?

> Resposta: Para calcular o total de vendas por hora de forma contínua em um pipeline de dados de streaming no Dataflow para dados de ponto de venda, você deve usar janelas de salto (sliding windows).

- Janelas de salto (sliding windows): As janelas de salto, também conhecidas como janelas deslizantes, são ideais para cenários onde você precisa calcular agregações (como somas, médias ou contagens) em intervalos de tempo sobrepostos.

    - Elas dividem os dados de streaming em segmentos temporais que se sobrepõem, permitindo que você obtenha uma visão contínua e atualizada das agregações.
    
    - Com janelas de salto, você pode definir o tamanho da janela (por exemplo, 1 hora) e o período de salto (por exemplo, 1 minuto), permitindo calcular o total de vendas por hora e obter uma atualização a cada minuto.
    - Isso garante que você obtenha uma visão contínua e gradual das vendas ao longo do tempo.

- As janelas de sessão são mais adequadas para dados que chegam em sessões com períodos de inatividade entre elas, e não para dados contínuos como os dados de ponto de venda.

- A janela global agrupa todos os dados em uma única janela, não permitindo o cálculo do total de vendas por hora.

- As janelas em cascata (fixed windows) dividem os dados em intervalos de tempo não sobrepostos e não são as mais adequadas para calcular agregações contínuas.

Portanto, as janelas de salto (sliding windows) são a melhor opção para calcular continuamente o total de vendas por hora em seu pipeline de dados de streaming no Dataflow, pois permitem agregar dados em intervalos de tempo sobrepostos, fornecendo uma visão contínua e atualizada das vendas.

## Problema 09

O primeiro estágio do pipeline de dados processa dezenas de terabytes de dados financeiros e cria um conjunto de dados esparso de séries temporais como um par de chave-valor. Qual o coletor adequado para o primeiro estágio da pipeline?

> Resposta: Para o primeiro estágio de um pipeline de dados que processa dezenas de terabytes de dados financeiros e cria um conjunto de dados esparso de séries temporais como um par de chave-valor, o coletor adequado é o Bigtable.

- O Bigtable é um serviço de banco de dados NoSQL totalmente gerenciado e escalável, ideal para dados de séries temporais esparsos. Ele foi projetado para lidar com grandes volumes de dados com baixa latência e alta escalabilidade.

  - Estrutura de Dados: A estrutura de chave-valor do Bigtable é perfeita para dados de séries temporais esparsos, onde a chave pode ser usada para identificar a série temporal e o valor para armazenar os dados correspondentes.

  - Desempenho: O Bigtable oferece alto desempenho para leituras e gravações, o que é essencial para um pipeline de processamento de dados que opera com grandes volumes de dados.

Outras opções não são adequadas para esta situação:

- Cloud Storage é um serviço de armazenamento de objetos, adequado para dados não estruturados ou arquivos, mas não é otimizado para dados de séries temporais esparsos.

- Cloud SQL é um banco de dados relacional, ideal para dados estruturados com relacionamentos definidos, mas não é a melhor opção para dados de séries temporais esparsos.

- AlloyDB também é um banco de dados relacional compatível com PostgreSQL, adequado para dados transacionais, mas não é otimizado para dados de séries temporais esparsos.

Em resumo, o Bigtable é a melhor opção como coletor para a primeira etapa do seu pipeline de dados, pois sua estrutura de dados e características de desempenho se adequam perfeitamente aos requisitos de dados de séries temporais esparsos gerados pelo seu processamento de dados financeiros.

## Problema 10

Tenho um pipeline de dados que exige que eu monitore um bucket do Cloud Storage em busca de um arquivo, inicie um job do Dataflow para processar dados no arquivo, execute um script de shell para validar os dados processados no BigQuery e exclua o arquivo original. Preciso orquestrar esse pipeline usando as ferramentas recomendadas. Qual produto mais adequado neste caso?

> Resposta: Para orquestrar um pipeline de dados que monitora um bucket do Cloud Storage em busca de um arquivo, inicia um job do Dataflow para processar os dados nesse arquivo, executa um script de shell para validar os dados processados no BigQuery e exclui o arquivo original, você deve usar o Cloud Composer.

- O Cloud Composer é um serviço de orquestração de fluxo de trabalho totalmente gerenciado que permite criar, agendar, monitorar e gerenciar pipelines de dados complexos.

- Ele é baseado no Apache Airflow e oferece uma interface gráfica de usuário (GUI) para criar fluxos de trabalho complexos, além de suporte para Python e outros idiomas.
O Cloud Composer é ideal para este cenário porque permite:

- Monitorar o Cloud Storage: Você pode usar os sensores do Cloud Composer para monitorar um bucket do Cloud Storage em busca de novos arquivos.

- Iniciar jobs do Dataflow: O Cloud Composer pode iniciar automaticamente um job do Dataflow quando um novo arquivo for detectado no bucket do Cloud Storage.

- Executar scripts de shell: O Cloud Composer permite executar scripts de shell para validar os dados processados no BigQuery.

- Excluir arquivos: O Cloud Composer permite excluir o arquivo original do Cloud Storage após a conclusão bem-sucedida do processamento.

- Orquestração Complexa: O Cloud Composer oferece recursos avançados de orquestração, permitindo que você defina dependências entre tarefas e gerencie o fluxo de dados de forma eficiente.

- Visualização e monitoramento: O Cloud Composer oferece uma interface gráfica intuitiva para visualizar o fluxo de trabalho e monitorar o progresso das tarefas.
Outras opções, como Cloud Tasks, Cloud Scheduler e Cloud Run, não são adequadas para este cenário.

- O Cloud Tasks é usado para enfileirar tarefas para execução assíncrona e não para orquestrar pipelines completos.

- O Cloud Scheduler é usado para agendar tarefas recorrentes e não para orquestração de pipelines com diversas etapas.

- O Cloud Run é usado para executar aplicativos conteinerizados e não para a orquestração de pipelines de dados.

Portanto, o Cloud Composer é a melhor opção para orquestrar seu pipeline de dados complexo, pois oferece a flexibilidade e os recursos necessários para monitorar o Cloud Storage, executar jobs do Dataflow, validar dados no BigQuery e gerenciar o fluxo de trabalho de forma eficiente.