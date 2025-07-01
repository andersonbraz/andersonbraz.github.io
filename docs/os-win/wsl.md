# WSL

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
wsl --install -d Debian <Nome-Computador>
```

**Exemplo:**

```shell
wsl --install -d Debian my-debian
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

COMPUTER_NAME="my-debian"

if [ "$color_prompt" = yes ]; then
    # PS1='${debian_chroot:+($debian_chroot)}\[\033[01;32m\]\u@\h\[\033[00m\]:\[\033[01;34m\]\w\[\033[00m\]\$ '
    PS1='${debian_chroot:+($debian_chroot)}\[\033[01;32m\]\u@$COMPUTER_NAME\[\033[00m\]:\[\033[01;34m\]\w\[\033[00m\]\$ '
else
    # PS1='${debian_chroot:+($debian_chroot)}\u@\h:\w\$ '
    PS1='${debian_chroot:+($debian_chroot)}\u@$COMPUTER_NAME:\w\$ '
fi
```