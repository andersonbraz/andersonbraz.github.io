# Jupyter Notebook

## Melhorar visualização de dataframe em formato tabular

```python

from IPython.display import display, HTML
display(HTML("<style>.container { width:100% !important; }</style>"))
```

## Erros

### Problema - IOPub data rate exceeded

```text
IOPub data rate exceeded.
The Jupyter server will temporarily stop sending output
to the client in order to avoid crashing it.
To change this limit, set the config variable
`--ServerApp.iopub_data_rate_limit`.

Current values:
ServerApp.iopub_data_rate_limit=1000000.0 (bytes/sec)
ServerApp.rate_limit_window=3.0 (secs)
```

### Solução

Editar:

```shell
vim /home/nanny/.jupyter/jupyter_notebook_config.py
```

Incluir:

```shell
c.NotebookApp.iopub_data_rate_limit=1.0e10
```
