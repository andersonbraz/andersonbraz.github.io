# WSL

## WSL + Git + Python

### Verificar distribuições disponíveis

```shell
wsl --list --online 
```

### Instalar distribuição Debian

```shell
wsl --install -d Debian <Nome-Computador>
```

### Habilitar o alcance de redes

```shell
sudo rm /etc/resolv.conf
sudo bash -c 'echo "nameserver 8.8.8.8" > /etc/resolv.conf'
sudo bash -c 'echo "[network]" > /etc/wsl.conf'
sudo bash -c 'echo "generateResolvConf = false" >> /etc/wsl.conf'
sudo chattr +i /etc/resolv.conf
```

### Atualizar pacotes instalados no sistema

```shell
sudo apt update && sudo apt full-upgrade
```

### Instalar o Python

```shell
sudo apt-get install python3.10
```

ou

```shell
sudo apt-get install python-is-python3
```

### Instalar instalador de pacotes Python

```shell
sudo apt install python3-pip
```

### Instalar um gerador de ambiente Python

```shell
sudo apt install python3.11-venv
```

### Criar diretório para um projeto Python

```shell
mkdir sample-project && cd sample-project
```

### Iniciar um ambiente de projeto Python

```shell
python -m venv .venv && . .venv/bin/activate && python -m pip install --upgrade pip
```

### Instalar o Git Client

```shell
sudo apt-get install git
```

### Configurar o Git Client

```shell
git config --global user.name "Seu Nome"
git config --global user.email "seu@email.com"
```

### Verificar configuração do Git Client

```shell
git config --list --global
```
