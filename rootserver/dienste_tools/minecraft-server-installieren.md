---
description: Minecraft Server auf einem Linux Rootserver / vServer installieren (Ubuntu/Debian)
---

# Minecraft Server installieren

Anleitung zur Installation eines Minecraft Servers auf einem Linux Rootserver / vServer.

1. <b>System aktualisieren</b><br>
   Aktualisiere zunächst das System und installiere die notwendigen Programme:

    ```
    apt update && apt upgrade -y
    ```

    <details>

    <summary>Debian 10</summary>

    ```
    apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv-keys 73C3DB2A
    ```

    ```
    echo "deb http://ppa.launchpad.net/linuxuprising/java/ubuntu focal main" | tee /etc/apt/sources.list.d/java.list
    ```

    ```
    apt update
    ```

    ```
    apt install screen gnupg oracle-java17-installer -y
    ```

    Akzeptiere die Lizenz Bedingungen indem Du mit **TAB** auf "OK" gehst und mit **ENTER** bestätigst. Im folgendem Fenster gehst du auf "JA" und bestätigst wieder mit **ENTER**.

    </details>

    <details>

    <summary>Debian 11</summary>

    ```
    apt install screen openjdk-17-jre-headless -y
    ```

    </details>

    <details>

    <summary>Ubuntu</summary>

    ```
    sudo apt install screen gnupg software-properties-common -y
    ```

    ```
    sudo add-apt-repository ppa:linuxuprising/java
    ```

    ```
    sudo apt update
    ```

    ```
    sudo apt install oracle-java17-installer -y
    ```

    Akzeptiere die Lizenz Bedingungen indem du mit **TAB** auf "OK" gehst und mit **ENTER** bestätigst. Im folgendem Fenster gehst du auf "JA" und bestätigst wieder mit **ENTER**.

    </details>

2. <b>Benutzer anlegen</b><br>
   Erstelle einen eigenen Benutzer für den Minecraft Server und melde dich an:

    ```
    adduser minecraft --disabled-login
    ```

    ```
    su minecraft -l
    ```

3. <b>Version herunterladen</b><br>
   Wähle deine gewünschte Server-Version (beispielsweise Spigot 1.19.3):

    - [Spigot Download](https://getbukkit.org/download/spigot)
    - [Craftbukkit Download](https://getbukkit.org/download/craftbukkit)

    ```
    wget https://download.getbukkit.org/spigot/spigot-1.19.3.jar
    ```

4. <b>Startdatei erstellen</b><br>
   Erstelle eine start.sh mit folgendem Befehl:

    ```
    nano start.sh
    ```

    Kopiere nun folgende Zeile und füge sie mit Linksklick ein:

    ```
     screen -AmdS minecraft java -Xms1G -Xmx1G -jar spigot-1.19.3.jar
    ```

    :::: warning Hinweis
    Ändere bei -Xmx1G die 1 auf die Anzahl deines RAMs, z.B. 10 (Server mit 10 Gigabyte RAM).
    ::::

    :::: info Info
    Speichere nun die Eingabe mit **STRG + O** und schließe das Fenster mit **STRG + X**.
    ::::

5. <b>Lizenz akzeptieren</b><br>
   Akzeptiere die EULA und vergib die nötigen Dateirechte:

    ```
    echo "eula = true" > eula.txt
    ```

    ```
    chmod +x start.sh
    ```

6. <b>Server starten</b><br>
   Starte den Minecraft Server:

    ```
    ./start.sh
    ```

    :::: info Info
    Die Konsole kann mit "screen -r minecraft" geöffnet werden.
    ::::
