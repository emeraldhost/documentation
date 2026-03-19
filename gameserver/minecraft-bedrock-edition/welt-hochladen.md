---
title: Welt in Minecraft Bedrock Edition Hochladen
description: Schritt-für-Schritt-Anleitung, wie du in Minecraft Bedrock Edition deine eigene Welt hochlädst und den Server korrekt konfigurierst.
---

# Welt in Minecraft Bedrock Edition Hochladen: Datei-Browser & SFTP

:::: danger Achtung
Die Welt-Dateien dürfen kein Archiv wie z. B. `.zip` oder `.mcworld` sein. Entpacke die Welt vorher. Achte darauf, dass der Ordnername unverändert bleibt.
::::

1. <b>Server stoppen</b><br>
   Stoppe Deinen Minecraft Bedrock Edition Server.

2. <b>Datei-Browser öffnen</b><br>
   Öffne Dein Dashboard, wähle Deinen Server aus und gehe zum Datei-Browser **oder** verbinde Dich per SFTP mit Deinem Server. Eine Anleitung hierzu findest du hier: [SFTP-Verbindung herstellen](../sftp-verbindung-herstellen.md).

3. <b>Welt hochladen</b><br>
   Lade Deine neue Welt in den Ordner `worlds` hoch.

4. <b>Datei öffnen</b><br>
   Öffne die Datei `server.properties` im Hauptordner Deines Servers.

5. <b>Eintrag suchen</b><br>
   Suche den folgenden Eintrag:

    ```
    level-name=Bedrock level
    ```

6. <b>Wert ändern</b><br>
   Ändere den Wert auf den Namen Deiner hochgeladenen Welt (z. B. `level-name=Neue Welt`).

7. <b>Server neustarten</b><br>
   Speichere die Datei und starte Deinen Server neu.
