---
description: TeamSpeak 3 Server auf einem Rootserver installieren (Ubuntu/Debian)
---

# TeamSpeak 3 Server installieren

Wir empfehlen für SSH-Verbindungen mit Servern das Programm "[PuTTY](https://www.chiark.greenend.org.uk/\~sgtatham/putty/latest.html)".

1. Aktualisiere dein System und installiere notwendige Programme

```
apt update &&  apt upgrade -y
```

```
apt install sudo bzip2
```

2. Lege einen Subuser für den Server an und melde Dich an

```
adduser teamspeak --disabled-login
```

```
su teamspeak -l
```

3. Kopiere den Link für die neuste 64 Bit Linux Serverversion [auf der TeamSpeak Downloads Seite](https://www.teamspeak.com/en/downloads/#server)
4. Datei herunterladen entpacken und ins Verzeichnis navigieren, beispielsweise mit v3.13.7

```
wget https://files.teamspeak-services.com/releases/server/3.13.7/teamspeak3-server_linux_amd64-3.13.7.tar.bz2
```

```
tar xvfj teamspeak3-server_linux_amd64-3.13.7.tar.bz2
```

```
rm teamspeak3-server_linux_amd64-3.13.7.tar.bz2
```

```
cd teamspeak3-server_linux_amd64
```

5. Lizenzen akzeptieren und Server starten

```
touch .ts3server_license_accepted
```

```
chmod +x ts3server_startscript.sh
```

```
./ts3server_startscript.sh start
```

:::info
./ts3server\_startscript.sh geht ebenfalls mit stop, restart oder status.
:::
