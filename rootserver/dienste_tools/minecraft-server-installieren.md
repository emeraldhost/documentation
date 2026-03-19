---
description: Minecraft Server auf einem Rootserver installieren (Ubuntu/Debian)
---

# Minecraft Server installieren

1. <b>System aktualisieren und notwendige Programme installieren</b><br>

    ```
    apt update && upgrade -y
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

2. <b>Subuser für den Server anlegen und anmelden</b><br>

    ```
    adduser minecraft --disabled-login
    ```

    ```
    su minecraft -l
    ```

3. <b>Versionsauswahl (beispielsweise mit Spigot 1.19.3)</b><br>

    - [Spigot Download](https://getbukkit.org/download/spigot)
    - [Craftbukkit Download](https://getbukkit.org/download/craftbukkit)

    ```
    wget https://download.getbukkit.org/spigot/spigot-1.19.3.jar
    ```

4. <b>Startdatei erstellen</b><br>

    Erstelle eine start.sh mit:

    ```
    nano start.sh
    ```

    Kopiere nun folgende Zeile und füge sie mit linksklick ein:

    ```
     screen -AmdS minecraft java -Xms1G -Xmx1G -jar spigot-1.19.3.jar
    ```

    :::: warning
    ändere bei -Xmx1G die 1 auf die anzahl deines Ram's z.B. 10 (Server mit 10 Gigabyte Ram)
    ::::

    :::: info
    Speichere nun die Eingabe mit **STRG + O** und schließe das Fenster mit **STRG + X**
    ::::

5. <b>Lizenzen akzeptieren und Dateirechte vergeben</b><br>

    ```
    echo "eula = true" > eula.txt
    ```

    ```
    chmod +x start.sh
    ```

6. <b>Server starten</b><br>

    ```
    ./start.sh
    ```

    :::: info
    Die Konsole kann mit "screen -r minecraft" geöffnet werden.
    ::::
