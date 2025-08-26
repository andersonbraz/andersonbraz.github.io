# N8N com WSL

## Verificar distribuições disponíveis

```shell
wsl --list --online 
```

## Instalar distribuição Debian

```shell
wsl --install Debian --name Debian-N8N
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

## Instalar do N8N no Debian

Pré-requisitos:

```shell
sudo apt update
sudo apt install -y nodejs npm
sudo npm install -g n8n
```

Teste local:

```shell
n8n
```

Ele inicia em [http://localhost:5678](http://localhost:5678)

## Customizando meu terminal

```shell
# CUSTOM WSL PS1

COMPUTER_NAME="debian-n8n"

if [ "$color_prompt" = yes ]; then
    # PS1='${debian_chroot:+($debian_chroot)}\[\033[01;32m\]\u@\h\[\033[00m\]:\[\033[01;34m\]\w\[\033[00m\]\$ '
    PS1='${debian_chroot:+($debian_chroot)}\[\033[01;32m\]\u@$COMPUTER_NAME\[\033[00m\]:\[\033[01;34m\]\w\[\033[00m\]\$ '
else
    # PS1='${debian_chroot:+($debian_chroot)}\u@\h:\w\$ '
    PS1='${debian_chroot:+($debian_chroot)}\u@$COMPUTER_NAME:\w\$ '
fi
```