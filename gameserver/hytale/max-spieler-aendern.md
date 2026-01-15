---
description: Maximale Spieleranzahl auf einem Hytale Server ändern
---

# So änderst du die maximale Spieleranzahl auf einem Hytale Server

:::: tip Hinweis
Stoppe deinen Server bevor du Änderungen an Konfigurationsdateien vornimmst, da diese sonst vom Server überschrieben werden.
::::

## So änderst du die maximale Spieleranzahl

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

2. <b>Konfigurationsdatei öffnen</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server und öffne die Datei `config.json` im Hauptverzeichnis.

3. <b>Spieleranzahl festlegen</b><br>
   Suche nach der Einstellung `MaxPlayers` und ändere den Wert:
   ```json
   "MaxPlayers": 20
   ```

4. <b>Server starten</b><br>
   Starte deinen Server, damit die Änderungen übernommen werden.

:::: warning Achtung
Eine höhere Spieleranzahl bedeutet nicht automatisch, dass der Server so viele Spieler verarbeiten kann. Der verfügbare RAM ist entscheidend für die tatsächliche Performance.
::::
