# 1. Projetar Sistemas de Processamento de Dados

Aqui temos algumas da minhas anotações da trilha de formação de Engenheiro de Dados com a plataforma da Google Cloud referente ao primeiro módulo.

## Problema 01

Na organização ondeeu trabalho temos uma equipe de analistas de negócios que precisam corrigir e aprimorar um conjunto de grandes arquivos de dados de entrada. Por exemplo, duplicatas precisam ser removidas, linhas incorretas devem ser excluídas e dados ausentes devem ser adicionados. Essas etapas precisam ser executadas em todo o conjunto atual de arquivos e em todos os arquivos recebidos no futuro em um processo automatizado e repetível. Os analistas de negócios não são adeptos da programação. O que devo fazer?

> Resposta: Para que analistas de negócios que não são adeptos da programação possam corrigir e aprimorar grandes arquivos de dados de entrada, removendo duplicatas, excluindo linhas incorretas e adicionando dados ausentes de forma automatizada e repetível, **o recomendado é eles usarem o Dataprep**.

O Dataprep permite:

- Carregar os dados, analisá-los e editar as transformações necessárias.

- A equipe de analistas de negócios pode realizar as correções de dados necessárias sem a necessidade de programar.

- Essas etapas podem ser executadas por um processo automatizado e repetível em todo o conjunto atual de arquivos e nos arquivos recebidos no futuro.

Outras opções, como criar um job do Dataproc, criar um pipeline do Dataflow, ou carregar os dados nas Planilhas Google não são adequadas para analistas de negócios sem conhecimento em programação.

## Problema 02

Preciso migrar dados locais para um armazenamento de dados no Google Cloud. Esses dados serão disponibilizados para analistas de negócios. Os regulamentos locais exigem que as informações do cliente, incluindo números de cartão de crédito, números de telefone e IDs de e-mail, sejam capturadas, mas não usadas na análise. Preciso usar uma solução confiável e recomendada para redigir os dados confidenciais. O que devo fazer?

> Resposta: Para proteger dados confidenciais, como números de cartão de crédito, números de telefone e IDs de e-mail, durante a migração de dados locais para um data warehouse no Google Cloud, **a solução recomendada é usar a API Cloud Data Loss Prevention (DLP)**.

A API Cloud DLP pode ser usada para identificar e encobrir dados que correspondam a infoTypes específicos, como números de cartão de crédito, números de telefone e IDs de e-mail. Isso garante que os dados sejam capturados conforme exigido pelas regulamentações locais, mas que as informações confidenciais não sejam usadas diretamente na análise.

Outras abordagens, como excluir colunas com títulos semelhantes aos dados confidenciais ou criar expressões regulares para identificar e excluir padrões similares, não são as práticas recomendadas e podem não ser tão confiáveis. A API DLP é uma solução mais robusta para proteger os dados confidenciais ao migrar dados para o Google Cloud.

## Problema 03

Os analistas de negócios da organização onde trabalho precisam executar análises nos dados que foram carregados no BigQuery. Preciso seguir as práticas recomendadas e conceder permissões. Qual papel devo conceder aos analistas de negócios?

> Resposta: Para permitir que analistas de negócios realizem análises nos dados carregados no BigQuery, seguindo as práticas recomendadas, o papel a ser concedido é bigquery.dataViewer.

- O papel bigquery.dataViewer permite que os analistas consultem e visualizem os dados no BigQuery sem a capacidade de modificar ou excluir os dados.

Outros papéis, como bigquery.resourceViewer não são adequados para os analistas de negócio porque não lhes permite ver os dados, apenas os recursos. 

O papel bigquery.user também não é adequado, pois este papel permite que o usuário execute jobs no bigquery mas não tem acesso para ler dados. 

O papel bigquery.dataOwner dá permissões para gerir dados, o que não é adequado para analistas de negócios que só precisam analisar os dados.

## Problema 04

Os dados e aplicativos da organização organização onde trabalho residem em várias regiões geográficas no Google Cloud. Algumas leis regionais exigem que mantenhamo nossas próprias chaves fora do ambiente do provedor de nuvem, enquanto outras leis são menos restritivas e permitem o armazenamento de chaves com o mesmo provedor que armazena os dados. O gerenciamento dessas chaves aumentou em complexidade e precisamos de uma solução que possa gerenciar centralmente todas as suas chaves. O que devo fazer?

> Resposta: Para gerenciar as chaves de criptografia de dados em várias regiões geográficas no Google Cloud, onde algumas leis regionais exigem que as chaves sejam mantidas fora do ambiente do provedor de nuvem e outras leis permitem o armazenamento de chaves com o mesmo provedor, **a solução recomendada é usar o External Key Manager (EKM)**.

O Cloud EKM permite:

- Gerenciar centralmente todas as chaves, mesmo que elas estejam armazenadas fora do Google Cloud.

- Obter chaves quando necessário, independentemente de onde elas estejam armazenadas, seja em um sistema de parceiro de gerenciamento de chaves externo ou no Cloud HSM (Hardware Security Module).

- Atender aos requisitos de conformidade regional, permitindo que você mantenha suas próprias chaves fora do ambiente do provedor de nuvem, conforme exigido por algumas leis.

O Cloud EKM oferece flexibilidade e controle sobre suas chaves de criptografia, independentemente de onde seus dados e aplicativos residam, e permite que você atenda aos diferentes requisitos regulatórios de cada região.

Outras opções como armazenar as chaves no Cloud Key Management Service (KMS) e reduzir o número de dias para rotação automática de chaves, armazenar as chaves no Cloud Hardware Security Module (HSM), ou armazenar as chaves em um sistema de parceiro de gerenciamento de chaves externo sem usar o Cloud EKM não são tão adequadas para o gerenciamento centralizado de chaves, já que estas opções não abordam a complexidade de gerenciar chaves em várias regiões.

## Problema 05

Estou gerenciando dados de uma organização, que consiste em várias equipes, incluindo varejo, vendas, marketing e jurídico. Essas equipes estão consumindo dados de vários produtores, incluindo sistemas de ponto de venda, dados do setor, pedidos e muito mais. Atualmente, as equipes que consomem dados precisam pedir repetidamente às equipes que os produzem para verificar os dados mais atualizados e esclarecer outras questões sobre os dados, como origem e propriedade. Esse processo não é confiável e demorado e geralmente leva a escalonamentos repetidos. Preciso implementar uma solução centralizada que obtenha uma visão unificada dos dados da organização e melhore a capacidade de pesquisa. O que devo fazer?

> Resposta: Para implementar uma solução centralizada que forneça uma visão unificada dos dados da organização e melhore a capacidade de pesquisa, você deve implementar uma malha de dados com o Dataplex e fazer com que os produtores incluam tags nos dados quando eles forem criados.

O Dataplex oferece uma solução que permite:

- Centralizar o gerenciamento dos dados, oferecendo uma visão unificada dos dados de diferentes fontes.
- Melhorar o potencial de pesquisa dos dados, permitindo que as equipes encontrem e entendam os dados de que precisam.
- Fazer com que os produtores de dados incluam tags nos dados quando eles forem criados. Isso ajuda a melhorar o gerenciamento, a descoberta e a compreensão dos dados na organização.
- Resolver os problemas de comunicação entre as equipes que consomem dados e as equipes que os produzem, eliminando a necessidade de solicitar repetidamente informações sobre a origem e propriedade dos dados.

Outras abordagens, como implementar um data lake com o Cloud Storage, criar buckets para cada equipe ou implementar um data warehouse usando o BigQuery e criar conjuntos de dados para cada equipe, não resolvem o problema da falta de visibilidade unificada e a dificuldade de pesquisa dos dados de forma tão eficaz. 

Os painéis do Looker podem fornecer visualizações dos dados, mas não abordam o problema central de organizar e tornar os dados pesquisáveis.

## Problema 06

Recentemente adquirimos outra empresa na Europa. As permissões e políticas de acesso a dados nesta nova região diferem daquelas da nossa sede, que fica na América do Norte. Preciso definir um conjunto consistente de políticas para projetos em cada região que sigam as práticas recomendadas. O que devo fazer?

> Resposta: Para definir um conjunto consistente de políticas que sigam as práticas recomendadas para projetos em cada região, considerando que as permissões e políticas de acesso a dados da nova região na Europa diferem daquelas da sede na América do Norte, você deve criar pastas de nível superior para cada região e atribuir políticas no nível da pasta.

Essa abordagem permite:

- Organizar os projetos de acordo com as regiões geográficas, facilitando a aplicação de políticas específicas para cada local.

- Atribuir políticas no nível da pasta, garantindo que todos os projetos dentro dessa pasta herdem as políticas correspondentes. Isso garante que as permissões e políticas de acesso a dados da nova região na Europa sejam diferentes daquelas da sede na América do Norte.

- Manter a consistência das políticas em cada região, seguindo as práticas recomendadas.

Criar uma nova organização para todos os projetos da Europa ou implementar políticas no nível dos recursos não são as melhores práticas, pois essas abordagens não facilitam a organização e o gerenciamento das políticas por região, como faz a abordagem de criar pastas de nível superior para cada região.

Implementar uma hierarquia simples e atribuir políticas a cada projeto de acordo com a região respectiva também é menos eficiente do que usar pastas, pois seria mais difícil manter a consistência e o controle das políticas.

## Problema 07

Estou usando o Dataproc para processar um grande número de arquivos CSV. A opção de armazenamento escolhida precisa ser flexível para atender a muitos nós de trabalho em vários clusters. Esses nós de trabalho lerão os dados e também gravarão neles para armazenamento intermediário entre os trabalhos de processamento. Qual a opção de armazenamento recomendada no Google Cloud?

> Resposta: Para processar vários arquivos CSV usando o Dataproc, onde a opção de armazenamento precisa ser flexível para atender a vários nós de trabalho em vários clusters, e onde esses nós precisam ler e gravar dados para armazenamento intermediário, a opção de armazenamento recomendada no Google Cloud é o Cloud Storage.

O Cloud Storage oferece as seguintes vantagens nesse cenário:

- **Flexibilidade**: O Cloud Storage é capaz de atender a vários nós de trabalho de diversos clusters. Isso é fundamental quando se trabalha com o Dataproc, onde os clusters podem ser dinamicamente dimensionados e alterados.

- **Escalabilidade**: O Cloud Storage pode lidar com grandes volumes de dados e é projetado para processar arquivos grandes, como os arquivos CSV que você está utilizando.

- **Armazenamento intermediário**: O Cloud Storage pode ser utilizado para armazenar dados intermediários entre os jobs de processamento, facilitando a troca de informações entre os diferentes nós de trabalho do Dataproc.

- **Acessibilidade**: Os dados no Cloud Storage podem ser acessados por diferentes nós de trabalho em vários clusters, o que é importante para um processamento distribuído.
  
Outras opções de armazenamento como Cloud SQL, discos permanentes por zona ou SSD local não são as opções recomendadas neste caso:

- O Cloud SQL é um serviço de banco de dados relacional, o que não é adequado para o armazenamento intermediário de arquivos CSV.

- Discos permanentes por zona são anexados a máquinas virtuais específicas dentro de uma zona, o que não é flexível para atender a vários nós de trabalho em diferentes clusters.

- SSD local é um armazenamento temporário em máquinas virtuais específicas, que não é adequado para o armazenamento intermediário de dados entre diferentes trabalhos de processamento.

## Problema 08

As leis da região onde a minha organização opera exigem que os arquivos relacionados a todos os pedidos feitos todos os dias sejam armazenados de forma imutável por 365 dias. Neste caso, qual solucão de menor custo pode ser recomendada?

> Resposta: Para cumprir a exigência de armazenar arquivos relacionados a todos os pedidos feitos diariamente de forma imutável por 365 dias, e ao mesmo tempo buscar uma solução econômica, a melhor abordagem é armazenar os dados em um bucket do Cloud Storage e definir uma política de ciclo de vida para excluir o arquivo após 365 dias.

- Essa opção atende à exigência de imutabilidade por um período de 365 dias, pois uma vez que um objeto é gravado no Cloud Storage, ele não pode ser alterado.

- A política de ciclo de vida garante que os arquivos sejam excluídos automaticamente após 365 dias, otimizando o uso do armazenamento e reduzindo custos. Essa política permite gerenciar automaticamente o ciclo de vida dos objetos no Cloud Storage.

Outras opções como ativar o controle de versões de objetos e excluir versões com mais de 365 dias não são as mais adequadas, pois o controle de versões não garante a imutabilidade dos arquivos durante o período de retenção. Especificar um período de armazenamento também não é uma solução adequada, já que esta opção não garante que o arquivo seja excluído automaticamente após o período especificado.

## Problema 09

Tenho um pipeline do Dataflow que executa jobs de processamento de dados. Preciso identificar as partes do código do pipeline que consomem mais recursos. O que devo fazer?

> Resposta: Para identificar as partes do código do seu pipeline do Dataflow que consomem mais recursos, você deve usar o Cloud Profiler.

O Cloud Profiler é uma ferramenta de análise de desempenho que permite monitorar o uso de recursos em seu pipeline do Dataflow e identificar gargalos ou áreas de ineficiência.

Ao usar o Cloud Profiler, você poderá:

- Visualizar quais partes do código estão consumindo mais CPU ou memória.

- Identificar as funções ou operações que são mais lentas e que podem estar causando problemas de desempenho.

- Otimizar seu pipeline ajustando as partes do código que estão consumindo mais recursos.

O Cloud Profiler fornece informações detalhadas sobre o desempenho do seu pipeline, permitindo que você faça os ajustes necessários para otimizar o uso de recursos.

Outras opções como usar o Cloud Monitoring ou o Cloud Logging não são adequadas para essa finalidade. O Cloud Monitoring é mais adequado para monitorar métricas de nível geral, como uso de CPU, memória ou latência, mas não fornece detalhes sobre o consumo de recursos de partes específicas do seu código.

O Cloud Logging é usado para coletar e analisar logs, o que é útil para depurar erros, mas não para analisar o uso de recursos do código do seu pipeline. Os Registros de auditoria do Cloud rastreiam ações administrativas e não são relevantes para essa necessidade de analisar o desempenho do código.

## Problema 10

A organização onde trabalho está migrando seus data centers privados para o Google Cloud. Ao longo de muitos anos, centenas de terabytes de dados foram acumulados. No momento, temos uma linha de 100 Mbps e precisamos transferir esses dados de forma confiável antes de iniciar as operações no Google Cloud em 45 dias. O que devo fazer?

> Resposta: Para transferir centenas de terabytes de dados de seus data centers privados para o Google Cloud de forma confiável, com uma transmissão de 100 Mbps, e dentro de um prazo de 45 dias, você deve usar um **Transfer Appliance**, exportar os dados para ele e enviá-lo para o Google.

**O Transfer Appliance é um dispositivo de armazenamento de alta capacidade fornecido pelo Google** que permite transferir grandes volumes de dados de forma rápida e segura para o Google Cloud. Essa solução é adequada para cenários como o seu, nos quais a transferência pela internet através de uma transmissão de 100 Mbps levaria muito tempo para ser concluída.

O uso do Transfer Appliance envolve as seguintes etapas:

- O Google envia um dispositivo de armazenamento físico para seu data center.

- Você exporta os dados para o Transfer Appliance.

- Você envia o Transfer Appliance de volta para o Google, que importa os dados para o seu ambiente do Google Cloud.

Essa abordagem garante uma transferência de dados mais rápida e confiável do que fazer o upload dos dados pela internet, o que pode ser demorado com uma conexão de 100 Mbps. Outras opções como armazenar os dados em um endpoint HTTPS e configurar o serviço de transferência do Cloud Storage, fazer o upload dos dados para o Cloud Storage usando gsutil ou compactar e fazer o upload dos dados para buckets do Cloud Storage usando o console do Google Cloud não seriam adequadas para transferir grandes volumes de dados em um curto período de tempo com uma conexão de 100 Mbps.