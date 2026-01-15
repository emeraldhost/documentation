---
description: Server-Name auf einem Hytale Server ändern
---

# So änderst du den Server-Namen auf einem Hytale Server

:::: tip Hinweis
Stoppe deinen Server bevor du Änderungen an Konfigurationsdateien vornimmst, da diese sonst vom Server überschrieben werden.
::::

## So änderst du den Server-Namen

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

2. <b>Konfigurationsdatei öffnen</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server und öffne die Datei `config.json` im Hauptverzeichnis.

3. <b>Name ändern</b><br>
   Suche nach der Einstellung `Name` und ändere den Wert:
   ```json
   "Name": "Mein Hytale Server"
   ```

4. <b>Server starten</b><br>
   Starte deinen Server, damit die Änderungen übernommen werden.

Der neue Server-Name wird in der Serverliste angezeigt.
