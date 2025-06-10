# Google Cloud

## gcloud CLI

### Ativar recursos de acessibilidade

```shell
gcloud config set accessibility/screen_reader true
```

- **Rastreadores de status em vez de ícone de carregamento Unicode:** a frase "working" será exibida em stderr enquanto a gcloud estiver executando tarefas.

- **Porcentagem das barras de progresso:** o progresso é exibido como uma porcentagem, gerado por stderr.

- **Tabelas niveladas:** são tabelas resultantes de muitos comandos de lista. Em vez dos recursos consultados que são exibidos em tabelas desenhadas em Unicode, os resultados são renderizados como uma lista simplificada de itens. Além disso, use a sinalização --format para definir seu próprio formato.

### Verificar conta de autenticação utilizada

```shell
gcloud info --format='value(config.account)'
```
OU
```shell
gcloud auth list
```

### Verificar projeto principal utilizado

```shell
gcloud projects list --format="value(projectId)"
```
OU
```shell
gcloud config list project
```

### Verificar componentes instalados

```shell
gcloud components list
```

### Desativar prompts

```shell
gcloud debug targets list --quiet
```

### Listar projetos com data e hora de criação

```shell
gcloud projects list \
  --format="table(name, project_id, createTime.date(tz=LOCAL))"
```

### Listar storage buckets

```shell
gcloud storage buckets list
```