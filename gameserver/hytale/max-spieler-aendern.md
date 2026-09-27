---
description: Maximale Spieleranzahl auf einem Hytale Server ändern
---

# So änderst du die maximale Spieleranzahl auf einem Hytale Server

Die maximale Spieleranzahl kannst du per Befehl in der Konsole oder direkt in der `config.json` ändern. Standardmäßig sind `100` Spieler erlaubt.

## So änderst du die maximale Spieleranzahl per Befehl

1. <b>Verwaltung öffnen</b><br>
   Öffne die Verwaltung deines Hytale-Servers.

2. <b>Befehl eingeben</b><br>
   Gib folgenden Befehl in die Konsole ein:
   ```
   maxplayers --amount=20
   ```

Die neue Spieleranzahl gilt sofort und wird automatisch in der `config.json` gespeichert. Ein Neustart ist nicht nötig. Mit `maxplayers` ohne Zusatz zeigst du den aktuellen Wert an.

:::: info Hinweis
In der Konsole werden Befehle ohne `/` eingegeben. Im Spiel mit Admin-Rechten benötigst du den `/` (z.B. `/maxplayers --amount=20`). Die Angabe `--amount=` ist Pflicht, `maxplayers 20` funktioniert nicht.
::::

## So änderst du die maximale Spieleranzahl in der config.json

:::: info Hinweis
Stoppe deinen Server, bevor du Änderungen an Konfigurationsdateien vornimmst, da diese sonst vom Server überschrieben werden.
::::

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

2. <b>Konfigurationsdatei öffnen</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server und öffne die Datei `config.json` im Hauptverzeichnis.

3. <b>Spieleranzahl festlegen</b><br>
   Suche nach der Einstellung `MaxPlayers` und ändere den Wert:
   ```json
   "MaxPlayers": 20
   ```

   :::: tip Tipp
   Prüfe die Datei nach dem Bearbeiten mit einem JSON-Formatter wie [JSONLint](https://jsonlint.com/) — ein fehlendes oder überzähliges Komma reicht, damit der Server die config.json nicht mehr laden kann.
   ::::

4. <b>Server starten</b><br>
   Starte deinen Server, damit die Änderungen übernommen werden.

:::: warning Achtung
Eine höhere Spieleranzahl bedeutet nicht automatisch, dass der Server so viele Spieler verarbeiten kann. Der verfügbare RAM ist entscheidend für die tatsächliche Performance.
::::
