---
slug: "teamspeak-3-server-installieren"
language: "de"
title: "So installierst Du einen TeamSpeak 3 Server auf Deinem Linux Rootserver / vServer"
description: "TeamSpeak 3 Server auf einem Linux Rootserver / vServer installieren (Ubuntu/Debian)"
tags: []
date: "2023-10-15"
visibility: "public"
updated: "2026-03-19"
cta: "rootserver"
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "TeamSpeak 3 Server installieren"
sort: 6
related: ["rootserver/services-tools/install-minecraft-server", "rootserver/services-tools/use-screen", "rootserver/services-tools/install-phpmyadmin-apache2-und-mysql", "rootserver/services-tools/install-webserver"]
---

Anleitung zur Installation eines TeamSpeak 3 Servers auf einem Linux Rootserver / vServer.

Wir empfehlen für SSH-Verbindungen mit Servern das Programm [PuTTY](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html).

1. **System aktualisieren**\
   Aktualisiere Dein System und installiere notwendige Programme:

   ```bash
   apt update && apt upgrade -y
   ```

   ```bash
   apt install sudo bzip2
   ```

2. **Benutzer erstellen**\
   Lege einen Subuser für den Server an und melde Dich an:

   ```bash
   adduser teamspeak --disabled-login
   ```

   ```bash
   su teamspeak -l
   ```

3. **Server herunterladen**\
   Kopiere den Link für die neueste 64-Bit Linux Serverversion [auf der TeamSpeak Downloads Seite](https://www.teamspeak.com/en/downloads/#server).

4. **Datei entpacken**\
   Datei herunterladen, entpacken und ins Verzeichnis navigieren, beispielsweise mit v3.13.7:

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

5. **Server starten**\
   Lizenzen akzeptieren und Server starten:

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
> `./ts3server_startscript.sh` geht ebenfalls mit `stop`, `restart` oder `status`.
