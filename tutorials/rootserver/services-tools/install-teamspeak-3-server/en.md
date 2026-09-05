---
slug: "install-teamspeak-3-server"
language: "en"
title: "How to install a TeamSpeak 3 server on your Linux VPS"
description: "Install a TeamSpeak 3 server on a Linux VPS (Ubuntu/Debian)"
tags: []
date: "2023-10-15"
visibility: "public"
updated: "2026-03-19"
cta: "rootserver"
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Install TeamSpeak 3 Server"
sort: 6
related: ["rootserver/services-tools/install-minecraft-server", "rootserver/services-tools/use-screen", "rootserver/services-tools/install-phpmyadmin-apache2-und-mysql", "rootserver/services-tools/install-webserver"]
---

Instructions for installing a TeamSpeak 3 server on a Linux VPS.

We recommend the program [PuTTY](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html) for SSH connections with servers.

1. **Update system**\
   Update your system and install the necessary programs:

   ```bash
   apt update && apt upgrade -y
   ```

   ```bash
   apt install sudo bzip2
   ```

2. **Create user**\
   Create a subuser for the server and log in:

   ```bash
   adduser teamspeak --disabled-login
   ```

   ```bash
   su teamspeak -l
   ```

3. **Download server**\
   Copy the link for the latest 64-bit Linux server version [on the TeamSpeak downloads page](https://www.teamspeak.com/en/downloads/#server).

4. **Extract files**\
   Download the file, extract it and navigate to the directory, for example with v3.13.7:

   ```bash
   wget https://files.teamspeak-services.com/releases/server/3.13.7/teamspeak3-server_linux_amd64-3.13.7.tar.bz2
   ```

   ```bash
   tar xvfj teamspeak3-server_linux_amd64-3.13.7.tar.bz2
   ```

   ```bash
   rm teamspeak3-server_linux_amd64-3.13.7.tar.bz2
   ```

   ```bash
   cd teamspeak3-server_linux_amd64
   ```

5. **Start server**\
   Accept the licenses and start the server:

   ```bash
   touch .ts3server_license_accepted
   ```

   ```bash
   chmod +x ts3server_startscript.sh
   ```

   ```bash
   ./ts3server_startscript.sh start
   ```

> [!NOTE]
> `./ts3server_startscript.sh` also works with `stop`, `restart` or `status`.
