---
description: Max View Radius auf einem Hytale Server ändern
---

# So änderst du den Max View Radius auf einem Hytale Server

Der View-Radius bestimmt, wie viele Chunks um einen Spieler herum geladen werden. Ein höherer Wert bedeutet eine größere Sichtweite, aber auch eine höhere Serverbelastung.

:::: tip Hinweis
Stoppe deinen Server bevor du Änderungen an Konfigurationsdateien vornimmst, da diese sonst vom Server überschrieben werden.
::::

## So änderst du den Max View Radius

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

2. <b>Konfigurationsdatei öffnen</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server und öffne die Datei `config.json` im Hauptverzeichnis.

3. <b>MaxViewRadius anpassen</b><br>
   Suche nach der Einstellung `MaxViewRadius` und ändere den Wert:
   ```json
   "MaxViewRadius": 16
   ```

4. <b>Server starten</b><br>
   Starte deinen Server, damit die Änderungen übernommen werden.

## Empfohlene Werte

| Wert | Beschreibung |
| ---- | ------------ |
| 32 | Standard - hohe Serverbelastung |
| 16 | Empfohlen - gute Balance zwischen Sichtweite und Performance |
| 10 | Niedrig - für Server mit vielen Spielern oder wenig RAM |

:::: warning Achtung
Ein zu niedriger View-Radius kann das Spielerlebnis beeinträchtigen, da Spieler ihre Umgebung erst spät sehen. Ein Wert unter 10 wird nicht empfohlen.
::::
