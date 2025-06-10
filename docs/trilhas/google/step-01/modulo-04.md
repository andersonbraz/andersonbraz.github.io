# 4. Preparando e Usando Dados Para Anáilse

Aqui temos algumas da minhas anotações da trilha de formação de Engenheiro de Dados com a plataforma da Google Cloud referente ao quarto módulo.

## Problema 01

Tenho dados de análise armazenados no BigQuery. Preciso de uma maneira eficiente de calcular valores em um grupo de linhas e retornar um único resultado para cada linha. O que devo fazer?

> Resposta: Para calcular valores em um grupo de linhas e retornar um único resultado para cada linha no BigQuery, você deve usar uma função de janela com uma cláusula OVER.

- Funções de Window: As funções de janela permitem realizar cálculos em um conjunto de linhas relacionadas à linha atual, retornando um único resultado para cada linha. Essas funções são muito úteis para análise de dados, pois permitem calcular totais móveis, médias e outras métricas dentro de um grupo de linhas sem a necessidade de agrupar os dados.

- Cláusula OVER: A cláusula OVER define o conjunto de linhas (a "janela") sobre o qual a função de janela opera. Você pode usar a cláusula OVER para especificar como os dados serão particionados e ordenados para realizar os cálculos.

- Implementação:

  1. Escolha da Função: Selecione a função de janela apropriada para o cálculo que você deseja realizar. 
    
    Exemplos incluem:

     - SUM() para calcular a soma de valores em um grupo.
     - AVG() para calcular a média de valores em um grupo.
     - RANK() para atribuir uma classificação com base em uma ordenação.
     - ROW_NUMBER() para atribuir números sequenciais a cada linha em um grupo.

  2. Definição da Janela: Use a cláusula OVER para definir a janela de cálculo. Você pode especificar:

     - PARTITION BY: Para dividir os dados em grupos sobre os quais a função deve operar.
     - ORDER BY: Para definir a ordem dos dados dentro de cada grupo.
     - ROWS ou RANGE: Para definir um tamanho de janela específico para cada linha.
  
  3. Escrita da Consulta: Combine a função de janela com a cláusula OVER em sua consulta SQL para calcular os valores desejados.
     - Exemplo:
       - Neste exemplo, a função SUM() calcula a soma cumulativa de value para cada grupo de column1, ordenado por column2, e cada linha retornará um valor calculado.
       Outras opções não são tão adequadas para esse cenário específico:
       - Funções Agregadas: Funções agregadas (como SUM, AVG, COUNT) retornam um único resultado para todo o conjunto de dados ou para cada grupo definido pela cláusula GROUP BY, não um resultado para cada linha individual.
       - UDFs (Funções Definidas pelo Usuário): UDFs podem ser usadas para cálculos complexos, mas para o cenário apresentado, as funções de janela com a cláusula OVER são mais eficientes, já que o BigQuery otimiza o uso de funções de janela.
       - BigQuery ML: BigQuery ML é usado para criar e treinar modelos de machine learning, e não é adequado para cálculos em grupos de linhas.
       - Visualizações Materializadas: Visualizações materializadas são usadas para otimizar consultas, armazenando resultados pré-calculados. Embora úteis, não abordam o problema de cálculos por linha em um grupo.
       Em resumo, usar uma função de janela com uma cláusula OVER é a maneira mais eficiente de calcular valores em um grupo de linhas e retornar um único resultado para cada linha no BigQuery. Isso permite que você realize análises avançadas sem a necessidade de operações mais complexas ou agrupamento excessivo de seus dados.

## Problema 02

Preciso otimizar o desempenho das consultas no BigQuery. Minhas tabelas não são particionadas ou agrupadas. Qual técnica de otimização devo usar?

> Resposta: Para otimizar o desempenho das consultas no BigQuery, quando suas tabelas não estão particionadas ou agrupadas, você pode usar a cláusula LIMIT para reduzir a leitura de dados.

- Cláusula LIMIT: A cláusula LIMIT restringe o número de linhas retornadas por uma consulta. Ao usar LIMIT, o BigQuery não precisa processar ou ler todo o conjunto de dados, o que resulta em um desempenho de consulta mais rápido, especialmente para tabelas grandes.

- Como usar a cláusula LIMIT:

  - Inclua a cláusula LIMIT no final de sua consulta SQL, especificando o número de linhas que você deseja retornar.
  - Por exemplo, se você quiser apenas as primeiras 100 linhas de uma tabela, use SELECT * FROM your_table LIMIT 100.

- Casos de uso: A cláusula LIMIT é útil em diversos cenários:

  - Testes e exploração: Quando você precisa visualizar uma amostra dos seus dados sem processar todo o conjunto de dados.
  - Consultas de amostra: Para obter uma visão geral dos seus dados ou para fins de depuração.
  - Subqueries: Para restringir o tamanho dos conjuntos de resultados intermediários, melhorando o desempenho da consulta.

- Outras técnicas de otimização: Embora a cláusula LIMIT possa melhorar o desempenho das consultas, especialmente quando as tabelas não são particionadas ou agrupadas, outras técnicas podem ser mais adequadas para a otimização a longo prazo, como particionamento e agrupamento:
  
  - Particionamento: Dividir as tabelas em partições menores, com base em uma coluna, como data ou hora. Isso permite que o BigQuery processe apenas as partições relevantes para a consulta, reduzindo o tempo de processamento.
  - Agrupamento: Organizar os dados em blocos, com base em uma ou mais colunas, para otimizar a leitura e o processamento.

- Próximos Passos:

  - Análise das Consultas: Use a ferramenta de explicação do BigQuery para entender como suas consultas estão sendo processadas e identificar possíveis gargalos.
  - Implementação: Comece com a cláusula LIMIT para melhorar imediatamente o desempenho das consultas, e em seguida avalie o particionamento e agrupamento de suas tabelas.

Em resumo, usar a cláusula LIMIT pode melhorar o desempenho das consultas, pois permite que o BigQuery não necessite processar ou ler todos os dados, o que é importante quando suas tabelas não são particionadas ou agrupadas. Para uma otimização mais eficaz e a longo prazo, considere também o particionamento e agrupamento das suas tabelas.

## Problema 03

Criei modelos de aprendizado de máquina (ML) com base em seus próprios dados. Na produção, os modelos de ML não estão dando resultados satisfatórios. Quando examino os dados, parece que os dados existentes não representam suficientemente as metas de negócios. Preciso criar um modelo de aprendizado de máquina mais preciso. O que devo fazer?

> Resposta: Para criar um modelo de machine learning (ML) mais preciso quando os modelos atuais não estão entregando resultados satisfatórios na produção e os dados não parecem representar adequadamente as metas de negócios, você deve realizar a engenharia de atributos e usar o conhecimento do domínio para aprimorar os dados da coluna.

- Engenharia de Atributos: A engenharia de atributos envolve a criação de novos atributos ou modificação dos existentes para melhorar o desempenho do modelo de ML. Isso pode incluir:
  
  - Transformação de atributos existentes: Aplicar funções matemáticas ou lógicas para transformar os dados, como normalização, escala ou criação de dados categóricos a partir de dados numéricos.
  - Criação de novos atributos: Derivar atributos adicionais a partir de dados existentes usando conhecimento do domínio, como criar um atributo de "taxa de conversão" a partir dos atributos "número de visualizações" e "número de vendas".
  - Seleção de atributos: Escolher os atributos mais relevantes para o modelo, removendo aqueles que não contribuem para a precisão do modelo ou que introduzem ruído.

- Conhecimento do Domínio: É crucial usar o conhecimento do domínio para aprimorar os dados, pois isso pode ajudar a:
  - Identificar atributos relevantes: O conhecimento do domínio pode guiar na identificação de quais atributos são mais relevantes para o problema de negócio em questão, ajudando a criar atributos mais significativos.
  - Criar atributos significativos: O conhecimento do domínio pode ser usado para criar atributos que melhor representem o problema, o que pode levar a um modelo mais preciso e relevante.
  - Corrigir problemas de dados: O conhecimento do domínio pode ajudar a identificar problemas nos dados que podem estar impactando o desempenho do modelo, como dados incorretos, valores faltantes ou vieses.

Como Implementar:

  1. Análise de Dados: Comece analisando seus dados e o desempenho do modelo atual. Identifique quaisquer problemas que possam estar afetando o desempenho.
  2. Conhecimento do Domínio: Use o conhecimento do domínio e suas metas de negócios para identificar atributos adicionais que podem ser úteis.
  3. Engenharia de Atributos: Aplique técnicas de engenharia de atributos para criar novos atributos ou modificar os existentes. Você pode fazer isso usando SQL com a cláusula TRANSFORM no BigQuery.
  4. Treinamento do Modelo: Treine um novo modelo usando os dados aprimorados.
  5. Avaliação do Modelo: Avalie o desempenho do novo modelo em dados de produção para confirmar se ele atende aos requisitos de precisão.

Outras abordagens não são tão adequadas para esse cenário específico:

- Treinar o modelo com mais dados do mesmo tipo: Se os dados existentes não representam as metas de negócio, adicionar mais dados do mesmo tipo não resolverá o problema subjacente.

- Realizar a regularização L2: A regularização L2 é uma técnica para evitar o sobreajuste (overfitting) do modelo e não resolverá o problema de dados que não representam o cenário de negócios adequadamente.

- Treinar o modelo com os mesmos dados, mas com mais épocas: Treinar o modelo com mais épocas (iterações de treinamento) não resolverá o problema se os dados de entrada forem inadequados.

Em resumo, realizar a engenharia de atributos com base no seu conhecimento do domínio é a abordagem mais adequada para criar modelos de machine learning mais precisos. Isso garante que seus modelos usem dados que representem melhor seus objetivos de negócios, melhorando assim o desempenho do seu modelo em produção.

## Problema 04

Tenho um conjunto complexo de dados que vem de várias fontes. Os analistas da minha equipe precisam analisar os dados, visualizá-los e publicar relatórios para as partes interessadas internas e externas. Preciso tornar as coisas mais fáceis para os analistas trabalharem com os dados, abstraindo as várias fontes de dados. Qual ferramenta é recomendada neste caso?

> Resposta: Para facilitar o trabalho dos analistas com um conjunto complexo de dados provenientes de diversas fontes, permitindo que analisem, visualizem e publiquem relatórios para partes interessadas internas e externas, a ferramenta recomendada é o Looker.

- Looker: O Looker é uma plataforma de business intelligence (BI) e análise incorporada que abstrai diversas fontes de dados, permitindo que os analistas trabalhem com informações complexas de forma mais simples.
Funcionalidades e Vantagens do Looker:

- Abstração de Fontes de Dados: O Looker permite conectar-se a várias fontes de dados diferentes e unificá-las em uma única plataforma. Isso simplifica o trabalho dos analistas, que não precisam se preocupar com a complexidade de diferentes formatos e sistemas de armazenamento.

- Modelagem de Dados: Com o Looker, você pode criar modelos de dados que representam o seu negócio. Esses modelos são definidos usando a linguagem LookML, que permite descrever as relações entre os dados e criar métricas reutilizáveis. Os modelos de dados oferecem uma camada de abstração sobre os dados subjacentes, o que facilita a análise e a geração de relatórios.

- Visualização e Relatórios: O Looker oferece diversas opções de visualização de dados, como gráficos, tabelas e dashboards, facilitando a análise e a interpretação das informações. Os analistas podem criar seus próprios relatórios e dashboards sem a necessidade de conhecimento técnico profundo em programação ou manipulação de dados.

- Publicação de Relatórios: O Looker permite compartilhar relatórios e dashboards com as partes interessadas, tanto internas quanto externas. Isso garante que todos tenham acesso às informações mais atualizadas e possam tomar decisões baseadas em dados.

- Flexibilidade: O Looker pode ser usado tanto para análises exploratórias quanto para a criação de relatórios mais estruturados e personalizados. Com isso, ele atende às necessidades de diferentes tipos de usuários e casos de uso.

- Colaboração: O Looker facilita a colaboração entre os analistas. Vários analistas podem trabalhar nos mesmos modelos e painéis e compartilhar suas descobertas.
Comparação com outras opções:

- Looker Studio: Embora o Looker Studio também seja uma ferramenta de visualização de dados, ele não oferece a mesma capacidade de modelagem e abstração de dados que o Looker. O Looker Studio é mais adequado para análises rápidas e visuais, enquanto o Looker oferece uma solução mais robusta para análise e relatórios complexos.

- Páginas Conectadas: As páginas conectadas do Google Workspace são úteis para análise e colaboração, mas não oferecem a mesma capacidade de visualização e relatórios avançados que o Looker.

- Biblioteca D3.js: D3.js é uma biblioteca de visualização de dados muito poderosa, mas exige conhecimento técnico em programação para sua utilização. O Looker é uma solução mais amigável para analistas que não possuem habilidades de programação.
Em resumo: O Looker é a ferramenta mais recomendada para o seu cenário por causa de suas capacidades de abstração, modelagem de dados, visualização e geração de relatórios, que são ideais para lidar com dados complexos de diversas fontes e atender às necessidades de seus analistas e partes interessadas.

## Problema 05

Meus dados no BigQuery têm algumas colunas extremamente confidenciais. Preciso habilitar apenas alguns usuários para ver determinadas colunas. O que devo fazer?

> Resposta: ara restringir o acesso a colunas extremamente confidenciais no BigQuery, permitindo que apenas alguns usuários específicos visualizem determinadas colunas, você deve usar tags de política.

- Tags de Política: As tags de política permitem que você crie um controle de acesso granular no nível da coluna, atribuindo tags a colunas específicas e, em seguida, definindo permissões de acesso com base nessas tags. Essa abordagem garante que apenas os usuários com as permissões apropriadas possam visualizar dados confidenciais.

- Como Implementar:

  1. Criação de Tags: Crie tags de política que correspondam à classificação de segurança de dados nas colunas. Por exemplo, você pode criar uma tag para "Dados Pessoais" ou "Dados Financeiros".
  2. Atribuição de Tags: Atribua as tags de política apropriadas a cada coluna no BigQuery.
  3. Configuração de Permissões: Defina permissões de acesso baseadas em tags, especificando quais usuários ou grupos têm permissão para acessar dados associados a cada tag.
  4. Monitoramento: Monitore e revise regularmente as tags de política e permissões para garantir que o controle de acesso esteja sendo aplicado corretamente e que as políticas de segurança sejam cumpridas.

Comparação com outras opções:

- Conjunto de dados separado ou tabela: Criar um conjunto de dados ou tabela separado para colunas confidenciais pode ajudar a restringir o acesso, mas não é tão eficiente e granular quanto as tags de política. Essa abordagem cria complexidade administrativa e não aproveita os mecanismos de controle de acesso do BigQuery.

- Permissões do Identity and Access Management (IAM): As permissões do IAM são úteis para conceder acesso a conjuntos de dados ou tabelas inteiras, mas não permitem o controle de acesso no nível da coluna, portanto, não atendem aos seus requisitos. As permissões do IAM são mais adequadas para controlar o acesso a recursos, não a elementos de dados específicos.

- Funções definidas pelo usuário (UDFs): Embora as UDFs possam ser usadas para mascarar dados, elas não são a solução recomendada para o controle de acesso no nível da coluna. As UDFs são mais apropriadas para transformação de dados e não para controlar quem pode visualizar os dados.

Em resumo: O uso de tags de política é a abordagem mais adequada para restringir o acesso a colunas confidenciais no BigQuery, pois oferece um controle granular e eficiente sobre quem pode visualizar dados específicos, cumprindo as políticas de segurança de dados. As outras abordagens não fornecem o mesmo nível de granularidade ou não são recomendadas para essa finalidade.

## Problema 06

Tenho dados no PostgreSQL que foram projetados para reduzir a redundância. Estou transferindo esses dados para o BigQuery para análise. Os dados de origem são hierárquicos e frequentemente consultados juntos. Preciso criar um esquema do BigQuery que tenha desempenho. O que devo fazer?

> Resposta: Para criar um esquema eficiente no BigQuery, ao transferir dados hierárquicos do PostgreSQL, que foram projetados para reduzir a redundância e são frequentemente consultados em conjunto, você deve usar campos aninhados e repetidos.

- Campos Aninhados e Repetidos: Em vez de manter os dados no formato normalizado do PostgreSQL, o BigQuery se beneficia de esquemas desnormalizados com campos aninhados e repetidos. Essa abordagem permite que dados hierárquicos sejam representados de maneira mais compacta e eficiente para consultas analíticas.
Vantagens de usar campos aninhados e repetidos:

- Desempenho de Consultas: Ao desnormalizar os dados, você reduz a necessidade de junções complexas (joins) durante as consultas, melhorando significativamente o desempenho. As junções podem ser muito caras em termos de tempo de processamento e consumo de recursos, especialmente ao trabalhar com grandes volumes de dados.

- Compactação de Dados: Campos aninhados e repetidos podem armazenar informações hierárquicas de forma mais compacta do que tabelas separadas, reduzindo o uso de armazenamento e os custos associados.

- Facilidade de Uso: Analistas de dados podem trabalhar com dados relacionados de forma mais intuitiva, pois os dados hierárquicos estão agrupados em uma única estrutura.

- Melhoria na Eficiência: Ao minimizar a necessidade de junções, os campos aninhados e repetidos permitem que o BigQuery processe consultas mais rapidamente, já que o otimizador de consultas do BigQuery pode explorar essa estrutura para melhor desempenho.

**Como implementar:**

  1. Análise dos Dados: Analise a estrutura hierárquica dos seus dados no PostgreSQL e identifique quais tabelas e campos são frequentemente consultados em conjunto.
  2. Desnormalização: Em vez de manter a normalização, desnormalize seus dados criando campos aninhados e repetidos dentro de uma única tabela no BigQuery. Por exemplo, se você tem uma tabela de clientes e outra de pedidos, pode criar uma tabela de clientes no BigQuery com um campo repetido para os pedidos desse cliente.
  3. Definição do Esquema: Ao criar a tabela no BigQuery, defina os campos que correspondem às tabelas e colunas do PostgreSQL e use tipos de dados adequados, aninhando campos repetidos para representar a hierarquia.
  4. Migração dos Dados: Transfira os dados do PostgreSQL para o BigQuery, inserindo-os na nova estrutura desnormalizada.

**Comparação com outras abordagens:**

- Manter os dados sempre no formato normalizado: Manter os dados no formato normalizado do PostgreSQL no BigQuery pode levar a junções complexas (joins), o que pode reduzir o desempenho das consultas. Isso porque o BigQuery é mais eficiente quando os dados são desnormalizados e otimizados para análises.

- Copiar as tabelas primárias e usar consultas federadas para tabelas secundárias: Consultas federadas podem ser úteis, mas em geral não oferecem o mesmo desempenho que um esquema desnormalizado diretamente no BigQuery, além de adicionar complexidade ao sistema. As consultas federadas introduzem latência adicional, já que os dados precisam ser consultados em tempo real de outros sistemas.

- Copiar os dados normalizados em partições: Particionar tabelas é uma boa prática para melhorar o desempenho de consultas em grandes tabelas, mas não resolve o problema da necessidade de junções. As partições são otimizações para gerenciar dados no BigQuery, mas o problema é a necessidade de junções, não as partições.

Em resumo, para migrar dados hierárquicos do PostgreSQL para o BigQuery com melhor desempenho, você deve desnormalizar os dados e usar campos aninhados e repetidos. Essa abordagem reduz a necessidade de junções complexas (joins) e melhora o desempenho das consultas analíticas no BigQuery.

## Problema 07

Na organização onde trabalho usamos o Dataplex para criar lagos e zonas para seus dados de negócios. No entanto, alguns arquivos não estão sendo descobertos. Qual pode ser o problema?

> Resposta: O problema de alguns arquivos não serem descobertos no Dataplex, quando você já criou data lakes e zonas, pode ser devido a formatos de arquivo incompatíveis com o Dataplex. Especificamente, o Dataplex pode ter dificuldades em descobrir arquivos que não estejam nos formatos ORC ou Parquet.

- Formatos de Arquivo: O Dataplex pode não conseguir descobrir arquivos se eles não estiverem nos formatos ORC ou Parquet. Esses formatos são projetados para um melhor desempenho em consultas e são bem suportados pelo Dataplex.

**Possíveis causas do problema:**

1. Formato de Arquivo Incorreto:

    - Se os arquivos que não estão sendo descobertos estiverem em outros formatos (como CSV, JSON ou texto), o Dataplex pode não conseguir identificá-los e catalogá-los automaticamente.

2. Padrão de Exclusão:

    - Certifique-se de que não há nenhum padrão de exclusão que corresponda aos arquivos que você espera descobrir.

3. Agendamento de Descoberta:

    - Verifique se a descoberta de dados está agendada para ser executada na frequência correta.

**Como Resolver o Problema:**

1. Verificar os Formatos de Arquivo:
   - Certifique-se de que os arquivos estejam nos formatos ORC ou Parquet. Se não estiverem, converta-os para um desses formatos.

2. Revisar Padrões de Exclusão:
   - Verifique as configurações do Dataplex para garantir que não há padrões de exclusão que impeçam a descoberta dos arquivos desejados.

3. Verificar Agendamento da Descoberta:
    - Verifique se a descoberta de dados está agendada para ser executada na frequência correta. Uma configuração de descoberta por hora pode ser muito lenta para seus requisitos.

4. Usar Tags do Data Catalog:
    - Se você tem um grande volume de dados e analistas e líderes têm dificuldade de entender o significado de colunas ou quem é o proprietário dos dados, use as tags do Data Catalog para melhorar a capacidade de descoberta dos dados.

5. Criar Tags para as Entradas de Dados no Cloud Catalog:
    - Você pode criar tags para as entradas de dados no Cloud Catalog para facilitar a descoberta de dados.

**Considerações Adicionais:**

- Data Catalog: Use o Data Catalog para entender o significado dos seus dados e sua propriedade. O Data Catalog é um serviço para descoberta de dados. O Dataplex usa o Data Catalog para catalogar automaticamente metadados técnicos.

- Dataplex: O Dataplex possibilita a criação de um data mesh, permitindo a descoberta e o uso mais fácil dos dados. O Dataplex é um serviço de gerenciamento de dados inteligente.
Em resumo, a razão mais provável para arquivos não serem descobertos no Dataplex é que eles podem não estar nos formatos ORC ou Parquet. É fundamental verificar os formatos de arquivo, padrões de exclusão e agendamento da descoberta para garantir que todos os dados sejam descobertos corretamente.

## Problema 08

Executo repetidamente as mesmas consultas associando várias tabelas. As tabelas originais mudam cerca de dez vezes por dia. Desejo uma abordagem de consulta otimizada. Qual recurso você devo usar?

> Resposta: Para otimizar as consultas que você executa repetidamente, associando várias tabelas que mudam cerca de dez vezes por dia, você deve usar visualizações materializadas.

- Visualizações Materializadas: Visualizações materializadas são tabelas pré-computadas que armazenam os resultados de uma consulta. Ao usar visualizações materializadas, o BigQuery pode ler os resultados pré-computados em vez de executar a consulta original repetidamente, o que melhora o desempenho e reduz os custos.
Vantagens das Visualizações Materializadas:

- Otimização de Consultas: As visualizações materializadas otimizam as consultas, pré-calculando e armazenando os resultados das consultas. Isso é especialmente útil quando as mesmas consultas complexas são executadas repetidamente.

- Desempenho: Ao armazenar os dados já processados, as visualizações materializadas reduzem o tempo de processamento, pois o BigQuery não precisa acessar as tabelas de origem e executar junções e cálculos a cada consulta.

- Redução de Custos: Como a consulta é executada apenas quando a visualização materializada é criada ou atualizada, há uma redução nos custos de processamento, principalmente para consultas complexas que são executadas com frequência.

- Atualizações Automáticas: O BigQuery pode atualizar automaticamente as visualizações materializadas quando as tabelas de origem mudam, garantindo que os dados estejam sempre atualizados.

**Como Implementar:**

1. Identifique as Consultas: Identifique as consultas que você executa repetidamente e que envolvem a junção de várias tabelas.
2. Crie a Visualização Materializada: Use a instrução CREATE MATERIALIZED VIEW no BigQuery para criar uma visualização materializada com base na consulta que você identificou.

3. Agende Atualizações: Configure o BigQuery para atualizar automaticamente a visualização materializada quando as tabelas de origem forem alteradas. O BigQuery oferece a opção de atualização automática, o que é fundamental em cenários onde os dados mudam frequentemente.

4. Consulte a Visualização Materializada: Em vez de executar a consulta original, direcione suas consultas à visualização materializada.
Comparação com Outras Abordagens:

- Visualizações: As visualizações são úteis, mas não armazenam os resultados da consulta. As visualizações são essencialmente consultas salvas, que são executadas a cada vez que a visualização é acessada. Ao contrário das visualizações materializadas, as visualizações não oferecem a mesma vantagem de desempenho.

- Consultas Federadas: Consultas federadas são úteis para acessar dados em outras fontes de dados, mas não são apropriadas para otimizar consultas que acessam tabelas dentro do BigQuery. As consultas federadas também podem não oferecer o melhor desempenho para dados que são consultados com frequência, já que os dados precisam ser consultados em tempo real de outros sistemas.

- Partições: Particionar tabelas pode melhorar o desempenho de consultas que acessam grandes conjuntos de dados, mas não resolve o problema de consultas repetitivas que envolvem junções. As partições são uma otimização no armazenamento de dados, não no cálculo da consulta.

Em resumo, para otimizar consultas repetitivas que associam várias tabelas no BigQuery, você deve usar visualizações materializadas. As visualizações materializadas armazenam os resultados das consultas, reduzindo o tempo de processamento e os custos, além de garantirem que os dados estejam sempre atualizados com as mudanças nas tabelas de origem.

## Problema 09

Nossa organização coletou dados relevantes para o setor ao longo de muitos anos. Os dados processados são úteis para nossos parceiros e eles estão dispostos a pagar por seu uso. Preciso garantir o controle de acesso adequado sobre os dados. O que devo fazer?

> Resposta: Para garantir o controle de acesso adequado aos dados processados que você deseja compartilhar com seus parceiros, e pelos quais eles estão dispostos a pagar, você deve hospedar os dados no Analytics Hub.
Analytics Hub

- O Analytics Hub é uma plataforma que permite o compartilhamento seguro de dados. Ele oferece controle de acesso e permite que você compartilhe dados com parceiros de maneira segura e controlada..

- O Analytics Hub possibilita a troca e o compartilhamento de dados.

- Você pode usar o Analytics Hub para hospedar e compartilhar dados processados com parceiros, mantendo o controle de acesso.

**Como usar o Analytics Hub:**

1. Hospede os dados: Carregue os dados que você deseja compartilhar no Analytics Hub.
2. Defina permissões: Configure o controle de acesso para que apenas parceiros autorizados possam acessar os dados.
3. Compartilhe com parceiros: Permita que seus parceiros acessem os dados de forma segura através do Analytics Hub.
4. Monitore o acesso: Monitore o uso dos dados por seus parceiros para garantir o cumprimento das políticas de acesso.

**Comparação com outras abordagens:**

- Exportar para arquivos ZIP e compartilhar pelo Cloud Storage: Esta abordagem pode ser menos segura e difícil de controlar o acesso, principalmente se os dados forem compartilhados com muitos parceiros. Além disso, o compartilhamento via Cloud Storage não oferece a mesma capacidade de gerenciamento de acesso que o Analytics Hub.

- Exportar para discos permanentes e compartilhar por FTP: Essa abordagem é menos segura e mais complexa de gerenciar. Além disso, ela não oferece o mesmo nível de controle de acesso e monitoramento que o Analytics Hub.

- Hospedar os dados no Cloud SQL: O Cloud SQL é mais adequado para dados transacionais e não é a melhor opção para compartilhar dados com parceiros externos, pois é mais difícil de gerenciar o acesso e a segurança.
Recursos Adicionais:

- O Analytics Hub é integrado ao BigQuery e pode facilitar o compartilhamento de dados.

- O Analytics Hub oferece recursos de compartilhamento de dados e troca de dados com segurança.
Em resumo, hospedar os dados no Analytics Hub é a melhor abordagem para garantir o controle de acesso adequado sobre seus dados e compartilhá-los com seus parceiros de maneira segura e eficiente. O Analytics Hub oferece recursos específicos para compartilhamento seguro de dados, garantindo que você tenha controle sobre quem acessa seus dados e como eles são utilizados..

## Problema 10

A organização onde trabalho usa o Google Workspace e sua equipe de liderança está familiarizada com os apps de negócios e as ferramentas de colaboração. Queremos no momento uma solução econômica que use o conhecimento existente para avaliar, analisar, filtrar e visualizar os dados armazenados no BigQuery. O que devo fazer para criar uma solução para a equipe de liderança?

> Resposta: Para criar uma solução econômica para a equipe de liderança da sua organização, que já está familiarizada com o Google Workspace, e que permita avaliar, analisar, filtrar e visualizar dados armazenados no BigQuery, você deve configurar o Looker Studio.

**Looker Studio**

- O Looker Studio é uma ferramenta de business intelligence (BI) que permite criar painéis e relatórios interativos com base em dados armazenados no BigQuery e em outras fontes.

- É uma solução econômica porque já está incluída no ecossistema do Google Workspace, o que significa que a equipe de liderança já tem familiaridade com a ferramenta e não há necessidade de adquirir soluções de terceiros.

- O Looker Studio permite que usuários sem conhecimento técnico criem visualizações de dados e compartilhem seus insights.
Vantagens de usar o Looker Studio:

- Integração com o Google Workspace: O Looker Studio se integra perfeitamente com os aplicativos do Google Workspace, permitindo que a equipe de liderança use os dados do BigQuery em um ambiente que já conhecem.

- Facilidade de Uso: A interface intuitiva do Looker Studio permite que os usuários criem painéis e relatórios sem precisar de habilidades técnicas avançadas. Isso é especialmente útil para equipes de liderança que não são especialistas em análise de dados.

- Visualização de Dados: O Looker Studio oferece diversas opções de visualização, como gráficos de barras, linhas, pizza e tabelas, que facilitam a análise e a compreensão dos dados.

- Compartilhamento: Os painéis e relatórios criados no Looker Studio podem ser facilmente compartilhados com outras pessoas, permitindo que a equipe de liderança colabore e tome decisões baseadas em dados.

- Conexão com o BigQuery: O Looker Studio se conecta diretamente ao BigQuery, permitindo o acesso a dados em tempo real e garantindo que as análises sejam feitas com informações atualizadas.
Comparação com outras abordagens:

- Looker: O Looker é uma ferramenta de BI mais completa e robusta do que o Looker Studio, adequada para empresas maiores e com necessidades mais complexas de análise de dados. O Looker é uma solução paga, o que o torna menos econômico para o caso de uso apresentado.

- Páginas Conectadas: As páginas conectadas do Google Sheets podem ser usadas para analisar dados do BigQuery, mas são menos adequadas para criar visualizações e painéis interativos.

- Tableau: O Tableau é uma ferramenta de BI popular, mas é mais cara do que o Looker Studio e pode não se integrar tão bem com o Google Workspace.

**Passos para implementar a solução:**

  1. Conecte o Looker Studio ao BigQuery: Configure uma conexão entre o Looker Studio e o BigQuery para acessar os dados.
  2. Crie os painéis e relatórios: Desenvolva painéis e relatórios que atendam às necessidades de análise e visualização da equipe de liderança.
  3. Compartilhe os painéis e relatórios: Compartilhe os painéis e relatórios com a equipe de liderança e forneça treinamento sobre como usá-los.

Em resumo, para criar uma solução econômica e adequada para a equipe de liderança da sua organização, que já está familiarizada com o Google Workspace, configure o Looker Studio para que possam avaliar, analisar, filtrar e visualizar os dados do BigQuery de maneira eficiente e com pouca necessidade de treinamento. O Looker Studio oferece a integração, facilidade de uso e recursos de visualização e compartilhamento necessários para atender a essas necessidades.