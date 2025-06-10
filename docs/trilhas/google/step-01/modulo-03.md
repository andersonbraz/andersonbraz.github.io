# 3. Armazenamento de Dados

Aqui temos algumas da minhas anotações da trilha de formação de Engenheiro de Dados com a plataforma da Google Cloud referente ao terceiro módulo.

## Problema 01

A alta direção da organização onde trabalho expressa preocupação com o acesso não autorizado a objetos no bucket do Cloud Storage. Preciso avaliar todo o acesso em todos os objetos no bucket. O que devo fazer?

> Resposta: Para avaliar todos os acessos a todos os objetos em um bucket do Cloud Storage, você deve ativar e revisar os registros de auditoria de acesso aos dados.

- Registros de auditoria de acesso aos dados: Esses registros fornecem informações detalhadas sobre quem acessou quais dados e quando. Eles rastreiam operações de leitura, gravação e modificação de dados.
    
    - Ao ativar os registros de auditoria de acesso aos dados, você pode obter uma visão abrangente de todas as ações que ocorrem no seu bucket do Cloud Storage.
    
    - Você poderá identificar padrões de acesso, detectar atividades suspeitas e garantir a conformidade com as políticas de segurança.

- Análise dos registros: Após ativar os registros de auditoria de acesso aos dados, você pode analisá-los para entender como seus objetos estão sendo acessados. Você pode:
    
    - Visualizar os registros no console do Google Cloud: Para obter uma visão geral das atividades de acesso, você pode verificar os registros diretamente no console do Google Cloud.
    
    - Exportar os registros para o BigQuery: Para uma análise mais detalhada, você pode exportar os registros de auditoria de acesso aos dados para o BigQuery e usar consultas SQL para agregar, filtrar e analisar as informações.
    
    - Criar painéis: É possível criar painéis personalizados com base nos dados dos registros, permitindo monitorar continuamente os acessos e identificar tendências ou anomalias.

Outras opções como consultar os registros de auditoria de atividades administrativas, rotear os registros de atividades administrativas para um coletor do BigQuery ou alterar as permissões do bucket apenas para funcionários confiáveis, não são adequadas para avaliar todo o acesso a todos os objetos no bucket. Os registros de auditoria de atividades administrativas rastreiam operações de gerenciamento e configuração, mas não acessos a dados. Alterar as permissões do bucket apenas para funcionários confiáveis é uma boa prática de segurança, mas não permite avaliar os acessos que já ocorreram.

Em resumo, a ativação e revisão dos registros de auditoria de acesso aos dados é a melhor abordagem para avaliar o acesso não autorizado a objetos em um bucket do Cloud Storage, pois fornece uma visão completa e detalhada das atividades de acesso aos dados.

## Problema 02

Tenho dados armazenados em um bucket do Cloud Storage. Estou usando o Identity and Access Management (IAM) e as listas de controle de acesso (ACLs) para configurar o controle de acesso. Qual desses é determinante em dar ou negar acesso ao bucket?

> Resposta: Para determinar o acesso a objetos em um bucket do Cloud Storage quando você usa o Identity and Access Management (IAM) e as listas de controle de acesso (ACLs) para configurar o controle de acesso, o usuário só terá acesso se o IAM e as ACLs concederem a permissão.

- O IAM (Identity and Access Management) permite que você defina quem (identidade) tem qual acesso (funções) aos seus recursos no Google Cloud. O IAM é o método recomendado para gerenciar permissões no Google Cloud.

- As ACLs (listas de controle de acesso) são um mecanismo mais antigo para controle de acesso em buckets e objetos do Cloud Storage. Elas podem ser utilizadas para definir permissões de leitura e gravação para usuários e grupos específicos.
O acesso a um objeto no Cloud Storage é determinado pela combinação das permissões concedidas pelo IAM e pelas ACLs. Um usuário precisa ter permissão concedida por ambos os sistemas para acessar o objeto. Se o IAM ou as ACLs negarem a permissão, o usuário não terá acesso ao objeto.

Outras opções apresentadas não são adequadas:

- A afirmação de que o usuário não terá acesso se o IAM negar a permissão é incorreta, já que é necessário que as ACLs também concedam acesso.

- A afirmação de que o usuário terá acesso se o IAM ou as ACLs concederem a permissão é incorreta, já que é necessário que ambas concedam acesso.

- A afirmação de que o usuário não terá acesso se o IAM ou as ACLs negarem a permissão também é incorreta, já que é necessário que ambas neguem acesso para que o usuário não acesse o bucket.
Em resumo, o acesso a objetos no Cloud Storage usando IAM e ACLs é cumulativo. É necessário que tanto o IAM quanto as ACLs concedam permissão para que um usuário possa acessar os objetos.

## Problema 03

Preciso armazenar dados a longo prazo e usá-los para criar relatórios trimestrais. Qual classe de armazenamento devo escolher?

> Resposta: Para armazenar dados a longo prazo e usá-los para criar relatórios trimestrais, a classe de armazenamento mais adequada é a Coldline Storage.

- A classe Coldline Storage é recomendada para dados que são acessados com pouca frequência, como uma vez por trimestre.

- Ela oferece um custo de armazenamento mais baixo em comparação com as classes Standard e Nearline, mas possui um custo de acesso um pouco mais alto.

- A Coldline Storage é ideal para cenários onde os dados precisam ser armazenados por longos períodos, mas são acessados apenas ocasionalmente para geração de relatórios ou auditorias.

Outras classes de armazenamento não são tão adequadas para este cenário específico:

- Standard Storage: É a opção recomendada quando os dados são acessados com frequência diária ou semanal. Não é a melhor opção para dados de longo prazo acessados trimestralmente, pois seria mais caro do que o necessário.

- Nearline Storage: É recomendada para dados que são acessados com menos frequência, como uma vez por mês. Também não é a melhor opção, pois seria mais cara do que a Coldline para dados acessados trimestralmente.

- Archive Storage: É recomendada para dados acessados raramente, como uma vez por ano ou menos. Embora seja uma opção mais econômica, não é a ideal, pois os dados serão acessados trimestralmente.
Portanto, a Coldline Storage é a classe de armazenamento mais adequada para seus dados de longo prazo que serão usados para relatórios trimestrais, pois oferece o melhor equilíbrio entre custo e acessibilidade para esse cenário específico.

## Problema 04

Tenho várias tabelas grandes em bancos de dados de transações. Preciso mover todos os dados para o BigQuery para que os analistas de negócios explorem e analisem os dados. Como você devo projetar o esquema no BigQuery?

> Resposta: Para projetar o esquema no BigQuery ao migrar dados de vários bancos de dados transacionais com tabelas grandes, você deve projetar o esquema novamente para desnormalizar os dados com dados aninhados e repetidos.

- Desnormalização: Em vez de manter os dados em um formato totalmente normalizado, como nos bancos de dados transacionais, você deve considerar desnormalizar os dados no BigQuery. A desnormalização no BigQuery envolve a combinação de dados relacionados em uma única tabela, usando campos aninhados e repetidos.

- Dados aninhados e repetidos:

    - Campos aninhados: Permitem agrupar dados relacionados dentro de um único registro. Isso reduz a necessidade de junções complexas.

    - Campos repetidos: Permitem armazenar listas de valores em uma única coluna. Isso é útil para dados que têm uma relação um-para-muitos com outros dados na tabela.

- Benefícios da desnormalização:
  
    - Melhor desempenho de consultas: A desnormalização reduz a necessidade de junções, o que resulta em consultas mais rápidas e eficientes. Isso é particularmente importante no BigQuery, onde as junções podem ser caras computacionalmente.

    - Simplificação da análise: Dados desnormalizados tornam a análise mais fácil, pois os dados relacionados estão reunidos em um só lugar, o que simplifica as consultas de agregação e filtragem.

- Outras abordagens não recomendadas:

    - Reter os dados no BigQuery com o mesmo esquema da origem: Manter o mesmo esquema normalizado dos bancos de dados transacionais pode levar a consultas complexas e lentas no BigQuery.

    - Usar junções externas para combinar todas as tabelas do banco de dados transacional em uma só: Embora seja possível usar junções externas para combinar dados, isso não é ideal para o BigQuery, pois pode resultar em consultas muito lentas e de alto custo.

    - Projetar o esquema novamente para normalizar os dados ao remover todas as redundâncias: Manter os dados normalizados é o oposto da abordagem que você deve tomar. O BigQuery funciona melhor com dados desnormalizados, com redução da necessidade de junções.

Em resumo, ao mover dados de vários bancos de dados transacionais para o BigQuery, projetar o esquema novamente para desnormalizar os dados com campos aninhados e repetidos é a abordagem recomendada. Isso irá melhorar o desempenho das consultas e simplificar a análise de dados.

## Problema 05

A organização onde trabalho acumulou uma grande quantidade de dados. Analistas e liderança estão achando difícil entender o significado dos dados, como as colunas do BigQuery. Os usuários dos dados não sabem quem é dono do quê. Preciso melhorar a capacidade de pesquisa dos dados. O que devo fazer?

> Resposta: Para melhorar a capacidade de pesquisa dos dados e facilitar o entendimento do significado das colunas do BigQuery, você deve criar tags para entradas de dados no Cloud Catalog.

- Cloud Catalog: O Cloud Catalog é um serviço do Google Cloud que permite catalogar e gerenciar metadados de seus dados. Ele fornece um local centralizado para armazenar informações sobre seus dados, incluindo o significado, o proprietário e as políticas de acesso.

- Tags para entradas de dados:

    - Ao criar tags no Cloud Catalog para as colunas do BigQuery, você pode adicionar informações descritivas que ajudam os analistas e a liderança a entender o significado dos dados.

    - Você pode criar tags com informações como o nome da coluna, uma descrição detalhada, o proprietário dos dados, a qualidade dos dados e outras informações relevantes.

    - Essas tags podem ser pesquisadas no Cloud Catalog, permitindo que os usuários encontrem rapidamente os dados que precisam e entendam como usá-los.

- Benefícios de usar o Cloud Catalog:

    - Melhora a capacidade de descoberta: O Cloud Catalog facilita a descoberta dos dados, pois permite pesquisar dados com base em tags, nomes e outras informações.

    - Melhora a compreensão dos dados: As tags fornecem informações descritivas sobre os dados, o que ajuda os analistas e a liderança a entender o significado e o contexto dos dados.

    - Centraliza as informações: O Cloud Catalog centraliza as informações sobre os dados, evitando que os usuários precisem buscar informações em diferentes fontes.

    - Facilita a governança de dados: O Cloud Catalog pode ser usado para aplicar políticas de governança de dados, garantindo que os dados sejam acessados e usados de forma adequada.

Outras opções como renomear colunas do BigQuery com nomes mais descritivos, exportar os dados para o Cloud Storage com nomes de arquivo descritivos ou adicionar uma coluna de descrição correspondente a cada coluna de dados, não são tão eficazes para melhorar a capacidade de pesquisa dos dados. Renomear colunas pode ajudar, mas não oferece o mesmo nível de flexibilidade e centralização que o Cloud Catalog. Exportar dados com nomes descritivos ajuda apenas na localização dos arquivos, não nos dados propriamente ditos. Adicionar uma coluna de descrição pode ser útil, mas é mais difícil de manter e não é tão pesquisável quanto as tags do Cloud Catalog.

Em resumo, criar tags para entradas de dados no Cloud Catalog é a melhor abordagem para melhorar a capacidade de pesquisa dos dados, pois ele centraliza as informações, facilita a descoberta e melhora a compreensão dos dados.

## Problema 06

Estou ingerindo dados espalhados por uma ampla variedade de datas no BigQuery em um ritmo rápido. Preciso particionar a tabela para tornar as consultas performáticas. O que devo fazer?

> Resposta: Para melhorar o desempenho das consultas ao ingerir dados distribuídos por um amplo intervalo de datas no BigQuery em um ritmo rápido, você deve criar uma tabela particionada por tempo de processamento com tipo de particionamento diário.

- Particionamento por tempo de processamento: Ao particionar uma tabela por tempo de processamento, o BigQuery divide automaticamente os dados em partições com base na data em que os dados são ingeridos. Isso permite que as consultas sejam direcionadas apenas às partições relevantes, melhorando o desempenho e reduzindo os custos.

- Particionamento diário: Ao escolher o particionamento diário, o BigQuery cria partições separadas para cada dia de dados. Essa abordagem é adequada para dados que são ingeridos em um ritmo rápido e distribuídos por um amplo intervalo de datas, pois garante que cada dia de dados seja armazenado em sua própria partição.

- Benefícios do particionamento:

    - Melhora o desempenho das consultas: As consultas que filtram dados com base em datas podem ser executadas de forma mais rápida e eficiente, pois o BigQuery só precisa verificar as partições relevantes.

    - Reduz os custos: Ao consultar apenas as partições relevantes, o BigQuery processa menos dados, o que resulta em custos mais baixos.

    - Facilita o gerenciamento de dados: O particionamento torna o gerenciamento de grandes conjuntos de dados mais fácil, pois permite realizar operações como exclusão ou atualização de dados em partições específicas.

Outras opções apresentadas não são adequadas para esse cenário específico:

- Criar uma tabela particionada por tempo de processamento com tipo de particionamento anual: O particionamento anual não é a melhor opção quando os dados são ingeridos em um ritmo rápido e distribuídos por um amplo intervalo de datas. Isso resultaria em partições muito grandes, o que impactaria negativamente o desempenho da consulta.

- Criar uma tabela particionada por intervalo de números inteiros: O particionamento por intervalo de números inteiros é adequado quando os dados são particionados com base em um valor inteiro, como um ID. Não é apropriado para dados que são particionados por tempo de processamento.

- Criar uma tabela particionada por coluna de unidade de tempo com tipo de particionamento anual: Embora o particionamento por coluna de unidade de tempo seja válido, o particionamento anual não seria ideal para este cenário. O particionamento diário é a melhor opção para dados distribuídos por um amplo intervalo de datas.

Em resumo, para ingerir dados distribuídos por um amplo intervalo de datas no BigQuery, criar uma tabela particionada por tempo de processamento com tipo de particionamento diário é a melhor abordagem para garantir um bom desempenho nas consultas.

## Problema 07

Tenho dados que são ingeridos diariamente e analisados com frequência no primeiro mês. Depois disso, os dados são retidos apenas para auditorias, que acontecem ocasionalmente a cada poucos anos. Preciso configurar o armazenamento econômico. O que devo fazer?

> Resposta: Para configurar um armazenamento econômico para dados que são analisados frequentemente no primeiro mês e depois retidos para auditorias ocasionais, você deve configurar uma política de ciclo de vida no Cloud Storage.

- Política de ciclo de vida do Cloud Storage: Uma política de ciclo de vida permite que você defina regras para gerenciar automaticamente o ciclo de vida dos seus objetos no Cloud Storage. Você pode definir regras para mover objetos entre classes de armazenamento ou para excluir objetos com base em critérios como tempo de criação, idade ou tipo de arquivo.

- Como configurar a política de ciclo de vida:

    - Classe de armazenamento inicial: Inicialmente, armazene seus dados na classe de armazenamento Standard ou Nearline, que são adequadas para o primeiro mês, quando os dados são acessados com frequência.

    - Transição para Coldline: Após o primeiro mês, você pode criar uma regra na política de ciclo de vida para mover automaticamente os dados para a classe de armazenamento Coldline. A Coldline Storage é adequada para dados que são acessados com pouca frequência, como trimestralmente, o que corresponde à sua necessidade de auditorias ocasionais.
    
    - Transição para Archive: Se os dados forem necessários apenas para auditorias que acontecem raramente a cada poucos anos, você pode criar uma regra adicional para mover os dados para a classe Archive Storage, após um período especificado na classe Coldline.

- Benefícios da política de ciclo de vida:

    - Otimização de custos: A política de ciclo de vida garante que você armazene seus dados na classe de armazenamento mais econômica para cada fase do seu ciclo de vida, reduzindo os custos gerais de armazenamento.

    - Automatização do gerenciamento: A política de ciclo de vida automatiza o processo de movimentação de dados entre classes de armazenamento ou exclusão de dados, o que reduz a carga administrativa e evita erros.

    - Flexibilidade: Você pode criar regras personalizadas com base em suas necessidades específicas, com configurações flexíveis para o tempo de retenção e transição para diferentes classes de armazenamento.

Outras opções, como criar um bucket no Cloud Storage com o controle de versões de objetos configurado, ou criar um bucket no Cloud Storage com a classe automática configurada não são tão eficazes para gerenciar o ciclo de vida dos dados e otimizar custos nesse caso. O controle de versões de objetos é útil para recuperação de dados, mas não reduz os custos de armazenamento a longo prazo. A classe automática do Cloud Storage, move os dados entre classes de armazenamento de acordo com padrões de acesso, mas você não teria o controle específico que você precisa para gerenciar dados para o cenário em questão.

Em resumo, configurar uma política de ciclo de vida no Cloud Storage é a melhor abordagem para garantir que seus dados sejam armazenados de forma econômica, movendo os dados para as classes de armazenamento adequadas, com base na sua frequência de acesso e tempo de retenção.

## Problema 08

Os analistas de dados da organização onde trabalho executam repetidamente as mesmas consultas complexas que combinam e filtram muitos dados no BigQuery. Os dados mudam com frequência. Preciso reduzir o esforço dos analistas. O que devo fazer?

> Resposta: Para reduzir o esforço dos analistas que executam repetidamente as mesmas consultas complexas que combinam e filtram muitos dados no BigQuery, e considerando que os dados mudam com frequência, você deve criar views materializadas.

- Views materializadas: As visualizações materializadas são tabelas pré-computadas que armazenam os resultados de uma consulta, ou seja, são consultas com resultados armazenados. Quando uma consulta é feita a uma visualização materializada, o BigQuery retorna os resultados armazenados em vez de executar a consulta original. Isso pode melhorar muito o desempenho e reduzir o esforço dos analistas, pois eles não precisam executar as mesmas consultas complexas repetidamente.

    - Quando os dados nas tabelas de base mudam, o BigQuery atualiza automaticamente os dados na visualização materializada, o que garante que os resultados sejam sempre precisos.

- Como usar visualizações materializadas:

    - Crie uma visualização materializada que corresponda à consulta complexa que os analistas executam repetidamente.

    - Os analistas podem então consultar a visualização materializada em vez da consulta complexa original.

-   Benefícios das visualizações materializadas:

- Melhora o desempenho das consultas: Como os resultados já estão pré-computados, as consultas são executadas muito mais rapidamente do que as consultas diretas nas tabelas base.

- Reduz o esforço dos analistas: Os analistas não precisam mais criar e executar as mesmas consultas complexas repetidamente.

- Garante dados atualizados: O BigQuery atualiza automaticamente as visualizações materializadas quando os dados nas tabelas base são alterados, garantindo que os resultados sejam sempre precisos e atualizados.

- Reduz custos: Ao consultar dados pré-calculados em vez de fazer uma varredura nas tabelas base, o BigQuery processa menos dados, o que pode levar a uma redução de custos.

Outras opções como **visualizações regulares**, consultas federadas e partições não são tão eficazes para reduzir o esforço dos analistas neste cenário específico.

- Visualizações regulares são consultas nomeadas que não armazenam os resultados. Elas não melhoram o desempenho como as materializadas.

- Consultas federadas são úteis para consultar dados que residem fora do BigQuery, mas não são adequadas quando o objetivo é otimizar consultas que são executadas repetidamente.

- Partições melhoram o desempenho de consultas em grandes tabelas, mas não evitam que os analistas executem consultas complexas repetidamente, que é o foco principal da sua necessidade.

Em resumo, criar visualizações materializadas é a melhor abordagem para reduzir o esforço dos analistas, pois permite que eles consultem dados já processados e atualizados automaticamente, ao mesmo tempo que melhora o desempenho das consultas.

## Problema 09

Preciso escolher uma solução de armazenamento de dados para dar suporte a um sistema transacional. Meus clientes estão baseados principalmente em uma região. Desejo reduzir suas tarefas de administração e concentrar o esforço de engenharia na criação de seu aplicativo de negócios. O que devo fazer?

> Resposta: Para dar suporte a um sistema transacional com clientes baseados principalmente em uma região, e para reduzir as tarefas administrativas, você deve usar o Cloud SQL.

- O Cloud SQL é um serviço de banco de dados totalmente gerenciado que oferece suporte a MySQL, PostgreSQL e SQL Server.

    - Ao escolher o Cloud SQL, você delega grande parte da administração do banco de dados ao Google Cloud, permitindo que sua equipe se concentre no desenvolvimento do aplicativo.

- O Cloud SQL é ideal para sistemas transacionais devido à sua capacidade de fornecer suporte a transações ACID, que garantem a consistência e a confiabilidade dos dados.

- Como seus clientes estão principalmente em uma única região, você pode usar o Cloud SQL para criar uma instância de banco de dados nessa região, reduzindo a latência e melhorando o desempenho.

- O Cloud SQL também oferece alta disponibilidade, backups automatizados e outras funcionalidades que ajudam a garantir a continuidade dos negócios.

- Ao usar o Cloud SQL, você pode reduzir as tarefas administrativas, pois não precisa se preocupar com provisionamento, instalação de patches, backups e outros aspectos da administração do banco de dados.

- O Cloud SQL oferece várias opções de armazenamento, incluindo SSD, que são adequadas para aplicações transacionais de alto desempenho.
Outras opções apresentadas não são recomendadas para o cenário em questão:

- O Cloud Spanner é um banco de dados globalmente distribuído que é adequado para aplicativos que exigem alta escalabilidade e disponibilidade em várias regiões. Como seus clientes estão principalmente em uma região, o Cloud Spanner não é a opção mais econômica nem a mais adequada para esse cenário.

- Instalar um banco de dados de sua preferência em uma VM do Compute Engine exige que você gerencie toda a infraestrutura e administração do banco de dados, o que aumenta as tarefas administrativas e não é o ideal para quem quer reduzir o esforço da equipe.

- Criar um bucket do Cloud Storage com um bucket regional é adequado para armazenar arquivos e objetos, não para suportar um sistema transacional, que requer uma base de dados relacional.

Em resumo, usar o Cloud SQL é a melhor opção para um sistema transacional com clientes em uma região, pois oferece alta disponibilidade e reduz a sobrecarga administrativa, permitindo que você foque no desenvolvimento do aplicativo de negócios.

## Problema 10

Tenho grandes quantidades de dados armazenados no Cloud Storage e no BigQuery. Parte disso é processado, mas parte ainda não foi processado. Também tenho uma malha de dados criada no Dataplex. Preciso tornar conveniente para os usuários internos dos dados descobrir e usar os dados. O que devo fazer?

> Resposta: Para facilitar o processo de descoberta e uso de dados armazenados no Cloud Storage e no BigQuery, tanto os dados já processados quanto os não processados, dentro de uma malha de dados criada no Dataplex, você deve criar uma zona bruta para dados não processados e uma zona selecionada para dados processados.

- Zonas no Dataplex: No Dataplex, as zonas são usadas para organizar os dados e controlar como os dados são acessados e gerenciados. As zonas podem ser divididas em zonas brutas (raw) para dados não processados e zonas selecionadas (curated) para dados processados.

- Zona Bruta: A zona bruta deve conter os dados em seu formato original, sem nenhuma transformação ou limpeza. Isso garante que você mantenha uma cópia dos dados brutos para fins de auditoria e recuperação.

- Zona Selecionada: A zona selecionada deve conter os dados que já foram processados, limpos e transformados para consumo. Isso facilita que os usuários internos encontrem e usem os dados que já foram preparados para análise.

- Implementação:

    - Dados não processados: Os dados não processados armazenados no Cloud Storage e no BigQuery devem ser colocados na zona bruta do Dataplex.
    - Dados processados: Os dados processados armazenados no Cloud Storage e no BigQuery devem ser movidos ou referenciados na zona selecionada do Dataplex.
    - Metadados: Certifique-se de que os metadados dos dados (como descrição, proprietário, etc.) estejam corretamente catalogados no Dataplex. Isso ajudará na descoberta e compreensão dos dados.

- Benefícios de usar zonas no Dataplex:

    - Organização dos dados: Facilita a localização e o uso dos dados, separando os dados brutos dos dados processados.
    - Descoberta de dados: Torna mais fácil para os usuários internos encontrar os dados de que precisam, melhorando o potencial de pesquisa.
    - Gerenciamento de dados: Oferece uma maneira centralizada de gerenciar os dados, incluindo governança e controle de acesso.

Outras opções como criar um data lake para dados do Cloud Storage e uma zona para dados do BigQuery ou criar um data lake para dados do BigQuery e uma zona para dados do Cloud Storage ou criar um data lake para dados não processados e recursos para dados processados não são tão eficazes quanto usar zonas para separar dados não processados e processados, e gerenciar esses dados de forma unificada. Ao criar um data lake para dados específicos, você ainda precisará organizar os dados dentro do data lake para facilitar o processo de descoberta de dados.

Em resumo, criar uma zona bruta para dados não processados e uma zona selecionada para dados processados dentro da malha de dados do Dataplex é a abordagem mais adequada para organizar seus dados, melhorar o potencial de pesquisa e facilitar o acesso para os usuários internos.