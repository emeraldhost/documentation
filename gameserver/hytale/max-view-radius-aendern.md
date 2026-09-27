---
description: Max View Radius auf einem Hytale Server ändern
---

# So änderst du den Max View Radius auf einem Hytale Server

Der Max View Radius bestimmt, wie viele Chunks um einen Spieler herum maximal geladen werden. Ein höherer Wert bedeutet eine größere Sichtweite, aber auch eine höhere Serverbelastung.

## So änderst du den Max View Radius per Befehl

1. <b>Verwaltung öffnen</b><br>
   Öffne die Verwaltung deines Hytale-Servers.

2. <b>Befehl eingeben</b><br>
   Gib folgenden Befehl in die Konsole ein:
   ```
   maxviewradius 16
   ```
   Der Server übernimmt den neuen Wert sofort und speichert ihn in der `config.json`. Ein Neustart ist nicht nötig.

:::: info Hinweis
In der Konsole werden Befehle ohne `/` eingegeben. Im Spiel mit Admin-Rechten benötigst du den `/` (z.B. `/maxviewradius 16`).
::::

| Befehl | Beschreibung |
| ------ | ------------ |
| `maxviewradius` | Aktuellen Wert anzeigen |
| `maxviewradius <chunks>` | Neuen Wert setzen (1 bis 32) |
| `maxviewradius reset` | Auf den Standardwert 32 zurücksetzen |

## So änderst du den Max View Radius per Konfiguration

:::: info Hinweis
Stoppe deinen Server bevor du Änderungen an Konfigurationsdateien vornimmst, da diese sonst vom Server überschrieben werden.
::::

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

2. <b>Konfigurationsdatei öffnen</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server und öffne die Datei `config.json` im Hauptverzeichnis.

3. <b>MaxViewRadius anpassen</b><br>
   Suche nach der Einstellung `MaxViewRadius` und ändere den Wert:
   ```json
   "MaxViewRadius": 16
   ```

   :::: tip Tipp
   Prüfe die Datei nach dem Bearbeiten mit einem JSON-Formatter wie [JSONLint](https://jsonlint.com/) — ein fehlendes oder überzähliges Komma reicht, damit der Server die config.json nicht mehr laden kann.
   ::::

4. <b>Server starten</b><br>
   Starte deinen Server, damit die Änderungen übernommen werden.

## Empfohlene Werte

| Wert | Beschreibung |
| ---- | ------------ |
| 32 | Standard und Maximum - hohe Serverbelastung |
| 16 | Gute Balance zwischen Sichtweite und Performance |
| 12 | Empfehlung von Hytale für Performance und Gameplay (384 Blöcke) |
| 10 | Niedrig - für Server mit vielen Spielern oder wenig RAM |

:::: info Hinweis
Der Wert muss zwischen 1 und 32 liegen. Der Befehl lehnt höhere Werte ab, und Werte außerhalb dieses Bereichs in der `config.json` setzt der Server beim Start automatisch auf die nächste Grenze (z.B. 64 auf 32).
::::

:::: warning Achtung
Ein zu niedriger View-Radius kann das Spielerlebnis beeinträchtigen, da Spieler ihre Umgebung erst spät sehen. Ein Wert unter 10 wird nicht empfohlen.
::::
