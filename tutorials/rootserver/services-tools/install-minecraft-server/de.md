---
slug: "minecraft-server-installieren"
language: "de"
title: "So installierst Du einen Minecraft Server auf Deinem Linux Rootserver / vServer"
description: "Minecraft Server auf einem Linux Rootserver / vServer installieren (Ubuntu/Debian)"
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
short_title: "Minecraft Server installieren"
sort: 3
related: ["rootserver/services-tools/install-certbot", "rootserver/services-tools/install-docker", "rootserver/services-tools/use-screen", "rootserver/services-tools/install-phpmyadmin-apache2-und-mysql"]
---

Anleitung zur Installation eines Minecraft Servers auf einem Linux Rootserver / vServer.

1. **System aktualisieren**\
   Aktualisiere zunächst das System und installiere die notwendigen Programme:

    ```text
    apt update && apt upgrade -y
    ```

    <details>

    <summary>Debian 10</summary>

    ```text
    apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv-keys 73C3DB2A
    ```

    ```text
    echo "deb http://ppa.launchpad.net/linuxuprising/java/ubuntu focal main" | tee /etc/apt/sources.list.d/java.list
    ```

    ```text
    apt update
    ```

    ```text
    apt install screen gnupg oracle-java17-installer -y
    ```

    Akzeptiere die Lizenz Bedingungen indem Du mit **TAB** auf „OK“ gehst und mit **ENTER** bestätigst. Im folgendem Fenster gehst Du auf „JA“ und bestätigst wieder mit **ENTER**.

    </details>

    <details>

    <summary>Debian 11</summary>

    ```text
    apt install screen openjdk-17-jre-headless -y
    ```

    </details>

    <details>

    <summary>Ubuntu</summary>

    ```text
    sudo apt install screen gnupg software-properties-common -y
    ```

    ```text
    sudo add-apt-repository ppa:linuxuprising/java
    ```

    ```text
    sudo apt update
    ```

    ```text
    sudo apt install oracle-java17-installer -y
    ```

    Akzeptiere die Lizenz Bedingungen indem Du mit **TAB** auf „OK“ gehst und mit **ENTER** bestätigst. Im folgendem Fenster gehst Du auf „JA“ und bestätigst wieder mit **ENTER**.

    </details>

2. **Benutzer anlegen**\
   Erstelle einen eigenen Benutzer für den Minecraft Server und melde Dich an:

    ```text
    adduser minecraft --disabled-login
    ```

    ```text
    su minecraft -l
    ```

3. **Version herunterladen**\
   Wähle Deine gewünschte Server-Version (beispielsweise Spigot 1.19.3):

    - [Spigot Download](https://getbukkit.org/download/spigot)
    - [Craftbukkit Download](https://getbukkit.org/download/craftbukkit)

    ```text
    wget https://download.getbukkit.org/spigot/spigot-1.19.3.jar
    ```

4. **Startdatei erstellen**\
   Erstelle eine start.sh mit folgendem Befehl:

    ```text
    nano start.sh
    ```

    Kopiere nun folgende Zeile und füge sie mit Linksklick ein:

    ```text
     screen -AmdS minecraft java -Xms1G -Xmx1G -jar spigot-1.19.3.jar
    ```

    > [!WARNING]
    > **Hinweis**
    >
    > Ändere bei -Xmx1G die 1 auf die Anzahl Deines RAMs, z.B. 10 (Server mit 10 Gigabyte RAM).

    > [!NOTE]
    > Speichere nun die Eingabe mit **STRG + O** und schließe das Fenster mit **STRG + X**.

5. **Lizenz akzeptieren**\
   Akzeptiere die EULA und vergib die nötigen Dateirechte:

    ```text
    echo "eula = true" > eula.txt
    ```

    ```text
    chmod +x start.sh
    ```

6. **Server starten**\
   Starte den Minecraft Server:

    ```text
    ./start.sh
    ```

    > [!NOTE]
    > Die Konsole kann mit „screen -r minecraft“ geöffnet werden.
