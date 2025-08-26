# WSL

Este tutorial mostra um passo a passo para montarmos um ambiente [MDS -Modern Data Stack](https://kondado.com.br/blog/blog/2023/05/09/o-que-e-modern-data-stack-mds/){target=_blank} para nossa jornada de estudos.

## Habilitar o WSL

<p align="center">
  <img src="/assets/images/habilitar_wsl.png" alt="habilitar-wsl">
</p>

## Instalar o WSL

```shell
wsl --install
```

## Verificar distribuições disponíveis

```shell
wsl --list --online 
```

## Instalar distribuição Debian

```shell
wsl --install Debian --name <Nome-Computador>
```

**Exemplo:**

```shell
wsl --install Debian --name Debian-MDS
```

## Habilitar o alcance de redes

```shell
sudo rm /etc/resolv.conf
sudo bash -c 'echo "nameserver 8.8.8.8" > /etc/resolv.conf'
sudo bash -c 'echo "[network]" > /etc/wsl.conf'
sudo bash -c 'echo "generateResolvConf = false" >> /etc/wsl.conf'
sudo chattr +i /etc/resolv.conf
```

## Atualizar pacotes instalados no sistema

```shell
sudo apt update && sudo apt full-upgrade
```

## Customizando meu terminal

```shell
# CUSTOM WSL PS1

COMPUTER_NAME="debian-mds"

if [ "$color_prompt" = yes ]; then
    # PS1='${debian_chroot:+($debian_chroot)}\[\033[01;32m\]\u@\h\[\033[00m\]:\[\033[01;34m\]\w\[\033[00m\]\$ '
    PS1='${debian_chroot:+($debian_chroot)}\[\033[01;32m\]\u@$COMPUTER_NAME\[\033[00m\]:\[\033[01;34m\]\w\[\033[00m\]\$ '
else
    # PS1='${debian_chroot:+($debian_chroot)}\u@\h:\w\$ '
    PS1='${debian_chroot:+($debian_chroot)}\u@$COMPUTER_NAME:\w\$ '
fi
```

## Instalar o Python 3

```shell
sudo apt-get install python-is-python3 
```

## Verificar a instalação do Python 3

```shell
python --version
```

## Instalar o PIP

```shell
sudo apt install python3-pip
python -m pip install --upgrade pip
```

## Verificar a instalação do PIP

```shell
pip --version
```

## Instalar o VENV para o Python

```shell
sudo apt install python3.13-venv
```

## Instalar ferramentas necessárias

```shell
sudo apt install wget curl git unzip
```
