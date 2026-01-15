---
description: MOTD auf einem Hytale Server ändern
---

# So änderst du die MOTD auf einem Hytale Server

Die MOTD (Message of the Day) ist eine kurze Nachricht, die Spielern beim Beitreten angezeigt wird.

:::: tip Hinweis
Stoppe deinen Server bevor du Änderungen an Konfigurationsdateien vornimmst, da diese sonst vom Server überschrieben werden.
::::

## So änderst du die MOTD

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

2. <b>Konfigurationsdatei öffnen</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server und öffne die Datei `config.json` im Hauptverzeichnis.

3. <b>MOTD festlegen</b><br>
   Suche nach der Einstellung `MOTD` und ändere den Wert:
   ```json
   "MOTD": "Willkommen auf meinem Server!"
   ```

4. <b>Server starten</b><br>
   Starte deinen Server, damit die Änderungen übernommen werden.

Die neue MOTD wird Spielern in der Serverliste und beim Beitreten angezeigt.
