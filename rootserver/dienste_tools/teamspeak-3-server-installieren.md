---
description: TeamSpeak 3 Server auf einem Linux Rootserver / vServer installieren (Ubuntu/Debian)
---

# So installierst du einen TeamSpeak 3 Server auf deinem Linux Rootserver / vServer

Anleitung zur Installation eines TeamSpeak 3 Servers auf einem Linux Rootserver / vServer.

Wir empfehlen für SSH-Verbindungen mit Servern das Programm [PuTTY](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html).

1. <b>System aktualisieren</b><br>
   Aktualisiere dein System und installiere notwendige Programme:

   ```bash
   apt update && apt upgrade -y
   ```

   ```bash
   apt install sudo bzip2
   ```

2. <b>Benutzer erstellen</b><br>
   Lege einen Subuser für den Server an und melde dich an:

   ```bash
   adduser teamspeak --disabled-login
   ```

   ```bash
   su teamspeak -l
   ```

3. <b>Server herunterladen</b><br>
   Kopiere den Link für die neueste 64-Bit Linux Serverversion [auf der TeamSpeak Downloads Seite](https://www.teamspeak.com/en/downloads/#server).

4. <b>Datei entpacken</b><br>
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

5. <b>Server starten</b><br>
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

:::: info
`./ts3server_startscript.sh` geht ebenfalls mit `stop`, `restart` oder `status`.
::::
