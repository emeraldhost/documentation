---
description: Server-Name auf einem Hytale Server ändern
---

# So änderst du den Server-Namen auf einem Hytale Server

:::: info Hinweis
Stoppe deinen Server, bevor du Änderungen an Konfigurationsdateien vornimmst, da diese sonst vom Server überschrieben werden.
::::

## So änderst du den Server-Namen

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

2. <b>Konfigurationsdatei öffnen</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server und öffne die Datei `config.json` im Hauptverzeichnis.

3. <b>Name ändern</b><br>
   Suche nach der Einstellung `ServerName` und ändere den Wert. Standardmäßig steht dort `Hytale Server`:
   ```json
   "ServerName": "Mein Hytale Server"
   ```

   :::: tip Tipp
   Prüfe die Datei nach dem Bearbeiten mit einem JSON-Formatter wie [JSONLint](https://jsonlint.com/) — ein fehlendes oder überzähliges Komma reicht, damit der Server die Konfiguration nicht mehr laden kann.
   ::::

4. <b>Server starten</b><br>
   Starte deinen Server, damit die Änderungen übernommen werden.

Dein Server übermittelt den neuen Namen an Spieler, die ihm beitreten.

:::: info Hinweis
In der gespeicherten Server-Liste steht der Name, den jeder Spieler beim Hinzufügen des Servers selbst vergibt (siehe [Server beitreten](server-beitreten.md)). In der **Server Discovery** zeigt Hytale den Namen aus deinem Server-Profil im Hytale-Account an.
::::
