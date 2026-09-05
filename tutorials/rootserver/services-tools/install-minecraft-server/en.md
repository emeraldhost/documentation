---
slug: "install-minecraft-server"
language: "en"
title: "How to Install a Minecraft Server on Your Linux VPS"
description: "Install Minecraft server on a Linux VPS (Ubuntu/Debian)"
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
short_title: "Install Minecraft Server"
sort: 3
related: ["rootserver/services-tools/install-certbot", "rootserver/services-tools/install-docker", "rootserver/services-tools/use-screen", "rootserver/services-tools/install-phpmyadmin-apache2-und-mysql"]
---

1. **Update system**\
   Update your system and install the necessary programs.

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

    Accept the license conditions by clicking on "OK" with **TAB** and confirm with **ENTER**. In the following window click on "YES" and confirm again with **ENTER**.

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

    Accept the license conditions by clicking on "OK" with **TAB** and confirm with **ENTER**. In the following window click on "YES" and confirm again with **ENTER**.

    </details>

2. **Create subuser**\
   Create a subuser for the Minecraft server and log in with it.

    ```text
    adduser minecraft --disabled-login
    ```

    ```text
    su minecraft -l
    ```

3. **Select version**\
   Choose a server version to download (for example Spigot 1.19.3).

    - [Spigot Download](https://getbukkit.org/download/spigot)
    - [Craftbukkit Download](https://getbukkit.org/download/craftbukkit)

    ```text
    wget https://download.getbukkit.org/spigot/spigot-1.19.3.jar
    ```

4. **Create start file**\
   Create a start.sh file for launching the server.

    ```text
    nano start.sh
    ```

    Copy the following line and paste it with a left click:

    ```text
     screen -AmdS minecraft java -Xms1G -Xmx1G -jar spigot-1.19.3.jar
    ```

    > [!WARNING]
    > Change the 1 in -Xmx1G to the number of your RAM e.g. 10 (server with 10 gigabyte RAM).

    > [!NOTE]
    > Save the entry with **CTRL + O** and close the window with **CTRL + X**.

5. **Accept licenses**\
   Accept the EULA and assign the correct file rights.

    ```text
    echo "eula = true" > eula.txt
    ```

    ```text
    chmod +x start.sh
    ```

6. **Start server**\
   Run the start script to launch your Minecraft server.

    ```text
    ./start.sh
    ```

    > [!NOTE]
    > The console can be opened with "screen -r minecraft".
