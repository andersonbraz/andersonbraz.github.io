# HandsOn Elastic Search e Kibana


## Elastic Search

## Criar e Acessar o diretório Apps

```shell
mkdir -p ~/Apps
cd ~/Apps
```
### Baixar pacote do Elastic Search

```shell
wget https://artifacts.elastic.co/downloads/elasticsearch/elasticsearch-7.16.2-darwin-x86_64.tar.gz
```

### Descompactar pacote do Elastic Search

```shell
tar -xvf elasticsearch-7.16.2-darwin-x86_64.tar.gz
```

### Definir variáveis de ambiente

```shell
# ELASTIC-SEARCH LOCAL-MACHINE
export ES_HOME=~/Apps/elasticsearch-7.16.2
export PATH=$PATH:$ES_HOME/bin
```

### Teste de funcionamento do serviço

Execute o seguinte comando:

```shell
curl http://127.0.0.1:9200
```

ou acesse a url:

[http://127.0.0.1:9200](http://127.0.0.1:9200)

## Kibana

### Baixar pacote do Kibana

```
wget https://artifacts.elastic.co/downloads/kibana/kibana-7.16.2-darwin-x86_64.tar.gz
```

### Descompactar pacote do Elastic Search

```shell
tar -xvf kibana-7.16.2-darwin-x86_64.tar.gz
```

### Renomear diretório (nome mais curto)

```shell
mv kibana-7.16.2-darwin-x86_64 kibana-7.16.2
```

### Definir variáveis de ambiente

```shell
# KIBANA-SEARCH LOCAL-MACHINE
export KIBANA_HOME=~/Apps/kibana-7.16.2
export PATH=$PATH:$KIBANA_HOME/bin
```


### Levantar o serviço Kibana

```shell
kibana
```

### Teste de funcionamento do serviço

Acesse a url:

[http://127.0.0.1:5601](http://127.0.0.1:5601)

