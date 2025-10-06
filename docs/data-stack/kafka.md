# Kafka

## O que é Apache Kafka?

Apache Kafka é uma plataforma popular de streaming de eventos usada para coletar, processar e armazenar dados de eventos de streaming ou dados que não têm início ou fim distintos. O Kafka torna possível uma nova geração de aplicativos distribuídos com capacidade de escalonamento para lidar com bilhões de eventos transmitidos por minuto.

## Visão geral do Apache Kafka

O Kafka coleta dados de streaming e registra exatamente o que aconteceu e quando. Esse registro é chamado de registro de confirmação imutável. É imutável porque pode ser anexado, mas não alterado. A partir daí, é possível se inscrever no registro (acessar os dados) e também publicar nele (adicionar mais dados) a partir de qualquer número de aplicativos de streaming em tempo real, bem como de outros sistemas.

> Apache Kafka é uma plataforma de streaming de eventos usada para coletar, armazenar e processar fluxos de dados em tempo real, em escala. __Tim Berglund__

## Principais benefícios de uso do Kafka

**O Kafka tem código aberto** - Isso significa que o código-fonte dele está disponível gratuitamente para qualquer pessoa pegar, modificar e distribuir como sua própria versão, com qualquer propósito. Não há taxas de licenciamento ou outras restrições. O Kafka também se beneficia por ter uma comunidade global de desenvolvedores trabalhando e contribuindo com ele. Como resultado, o Kafka oferece uma ampla gama de conectores, plug-ins, ferramentas de monitoramento e ferramentas de configuração como parte de um ecossistema em crescimento.

**Escalonamento e velocidade** - O Kafka não apenas escalona com volumes cada vez maiores de dados, mas também fornece esses dados para toda a empresa em tempo real. Ser uma plataforma distribuída também é um grande benefício do Kafka. Isso significa que o processamento é dividido entre várias máquinas, físicas ou virtuais. Isso tem duas vantagens: com algum trabalho, ele consegue escalonar horizontalmente, para adicionar máquinas quando precisar de mais capacidade de processamento ou armazenamento, e é confiável, porque a plataforma ainda funciona mesmo se as máquinas individuais falharem. No entanto, esse recurso do Kafka pode ser muito difícil de gerenciar em grande escala.

## O que é Data streaming

- Um fluxo de dados constante e sem controle é chamada de data streaming.
- Sua principal característica é que os dados não tem limites definidos, assim, não é possível dizer quando começa ou acaba o fluxo (stream).
- Os dados são processados à medida em que chegam no destino. Alguns autores chamam de processamento em tempo real, ou on-line.
- Uma abordagem diferente é o processamento em bloco, batch, ou off-line, na qual blocos de dados são processados em janelas de tempo de horas ou dias.
- Muitas vezes o batch é um processo que roda a noite, consolidando os dados daquele dia. Há casos de janelas de tempo de uma semana ou mesmo de um mês, gerando relatórios desatualizados.

## Arquitetura do Kafka

A arquitetura do Apache Kafka tem como principais características:

- **Escalabilidade:** o cluster pode ser facilmente redimensionado para atender ao aumento ou diminuição das cargas de trabalho;
- **Distribuído:** o cluster Kafka opera com vários nós, dividindo o processamento;
- **Replicado, particionado e ordenado:** as mensagens são replicadas em partições nos nós do cluster na ordem em que chegam para garantir segurança e velocidade de entrega;
- **Alta disponibilidade:** o cluster tem diversos nós (brokers) e várias cópias dos dados, assim, .

O Kafka é adequado para soluções com grande volume de dados (big data) porque uma das suas características é a alta taxa de transferência e baixa latência.

O Apache Kafka tem 3 funcionalidades:

- Sistema de mensagem do tipo publish/subscribe;
- Sistema de armazenamento: as mensagens ficam armazenadas por um período de tempo pré-definido. Por padrão, as mensagens duram 7 dias, mas podem até mesmo ficar indefinidamente;
- Processamento de stream: é possível transformar a mensagem imediatamente após o seu recebimento.

Um uso mais recente do Kafka é o processo de ETL (Extract, Transform and Load), que copia os registros de um banco de dados para outro, geralmente de uma base transacional (OLTP) para uma base analítica (OLAP).

O ponto central do sistema de mensagem é, naturalmente, a mensagem, que pode ser chamada também de registro ou evento, e é composta por:

- Nome do tópico: fila na qual a mensagem será gravada. Pode ser comparado a uma tabela do banco de dados;
- Partição: subdivisão do tópico, a partição é um recurso para ajudar a balancear a carga;
- Timestamp: os registros são ordenados pela hora de gravação;
- Chave: opcional, pode ser usada em cenários avançados;
- Valor: a informação que se pretende transferir. O ideal é que os dados usem um formato conhecido, como JSON ou XML.

## Ferramentas Similares ao Kafka

- Google Cloud Pub/Sub.
- MuleSoft Anypoint Platform.
- Confluent.
- IBM MQ.
- RabbitMQ.
- Amazon Kinesis Data Streams.
- Amazon MQ.
- Azure Event Hubs.

## Referências e Fontes

[Google Cloud](https://cloud.google.com/learn/what-is-apache-kafka?hl=pt-br)

[Projects Kafka Python](https://github.com/topics/kafka-python?o=desc&s=updated)


# HandsOn Confluent

## Criar um diretório especial de apps

Execute o comando:

```shell
mkdir -p ~/Apps/
cd ~/Apps/
```

## Baixar o pacote do Confluent 7.0.0

Execute o comando:

```shell
wget https://packages.confluent.io/archive/7.0/confluent-7.0.0.tar.gz
```

## Descompactar o pacote

Execute o comando:

```shell
tar -xvf confluent-7.0.0.tar.gz
```

## Incluir variáveis de ambiente em .zshrc (ou .bashrc)

Execute o comando:

```shell
code ~/.zshrc
```

ou 

```shell
code ~/.bashrc
```

Adicionar o seguinte conteúdo:

```shell
# CONFLUENT LOCAL-MACHINE
export CONFLUENT_HOME=~/Apps/confluent-7.0.0
export PATH=$PATH:$CONFLUENT_HOME/bin
```

## Recarregar variáveis de ambiente

Execute o comando:

```shell
source ~/.zshrc
```

## Teste Confluent Local

Execute o comando:

```shell
confluent --help
```


## Iniciar Confluent Local

Execute o comando:

```shell
confluent local services start
```

## Parar Confluent Local

Execute o comando:

```shell
confluent local services stop
```

## Analisar Log Confluent Local

Execute o comando:

```shell
confluent local services connect log
```

## Desmontar Confluent Local

Execute o comando:

```shell
confluent local destroy
```

## Acessar Control Center do Confluent Local

[http://127.0.0.1:9021/](http://127.0.0.1:9021/)