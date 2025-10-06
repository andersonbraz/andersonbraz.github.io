# Git

## Comandos importantes


Configurar identificação de usuário git

```shell
git config --global user.name "Anderson Braz de Sousa"
git config --global user.mail "contato@andersonbraz.com"
git config --global push.defaul matching
```

Configurar o Visual Studio Code como editor padrão do git

```shell
git config --global core.editor 'code --wait'
```

Excluir arquivos referenciados no .gitignore

```sheel
git rm -r --cached .
git add .
git commit -m "Drop files from .gitignore"
git push
```

Ou você também pode executar esse comando:

```shell
git ls-files -i -c --exclude-from=.gitignore | xargs git rm --cached
```

Corrigir mensagem do último commit

```shell
git commit --amend
```

Criar uma branch completamente vazia num projeto existente

```shell
git checkout --orphan nova-branch
git rm -rf .
git commit --allow-empty -m "Mensagem da nova branch vazia"
git status
```

Submeter primeiro commit para uma nova branch

```shell
git add .
git commit -m "Mensagem do primeiro commit"
git push --set-upstream origin nova-branch
```

Fazer merge da minha branch develop para a master

```shell
git checkout master
git merge develop
git push origin master
```

Deletar uma branch local

```shell
git branch --delete [nome_da_branch]
```

Deletar uma branch remota

```shell
git push origin --delete [nome_da_branch]
```

Create .gitignore para projeto Python

```shell
curl -o .gitignore https://www.toptal.com/developers/gitignore/api/python,visualstudiocode,pycharm+all,jupyternotebooks
```
