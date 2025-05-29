---
description: Install TeamSpeak 3 server on a root server (Ubuntu/Debian)
---

# Install TeamSpeak 3 Server

We recommend the program "[PuTTY](https://www.chiark.greenend.org.uk/\~sgtatham/putty/latest.html)" for SSH connections with servers.

1. update your system and install the necessary programs

```
apt update && apt upgrade -y
```

```
apt install sudo bzip2
```

2. create a subuser for the server and log in

```
adduser teamspeak --disabled-login
```

```
su teamspeak -l
```

3. copy the link for the latest 64 bit Linux server version [on the TeamSpeak downloads page](https://www.teamspeak.com/en/downloads/#server)
4. download the file, unzip it and navigate to the directory, for example with v3.13.7

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

5. accept licenses and start server

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
./ts3server\_startscript.sh also works with stop, restart or status.
:::
