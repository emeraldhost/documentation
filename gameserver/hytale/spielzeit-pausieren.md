---
description: Spielzeit auf einem Hytale Server pausieren
---

# So pausierst du die Spielzeit auf einem Hytale Server

Du kannst die Spielzeit anhalten, damit sich die Tageszeit nicht mehr ändert. Das ist nützlich für Bau-Server, Events oder Screenshots bei perfektem Licht.

:::: tip Hinweis
Stoppe deinen Server bevor du Änderungen an Konfigurationsdateien vornimmst, da diese sonst vom Server überschrieben werden.
::::

## So pausierst du die Spielzeit per Konfiguration

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

2. <b>Welt-Konfiguration öffnen</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server und navigiere zu:
   ```
   /universe/worlds/<weltname>/config.json
   ```
   Ersetze `<weltname>` durch den Namen deiner Welt (z.B. `default`).

3. <b>Spielzeit pausieren</b><br>
   Suche nach der Einstellung `IsGameTimePaused` und ändere den Wert:
   ```json
   "IsGameTimePaused": true
   ```
   - `true` - Spielzeit ist pausiert
   - `false` - Spielzeit läuft normal (Standard)

4. <b>Zeit festlegen (optional)</b><br>
   Du kannst auch die aktuelle Zeit setzen, bevor du pausierst:
   ```json
   "GameTime": 12.0
   ```
   (12.0 = Mittag)

5. <b>Server starten</b><br>
   Starte deinen Server, damit die Änderungen übernommen werden.

## Beispiel: Dauerhaft Mittag

```json
"IsGameTimePaused": true,
"GameTime": 12.0
```

## Beispiel: Dauerhaft Nacht

```json
"IsGameTimePaused": true,
"GameTime": 0.0
```

## Zeit per Befehl ändern

Auch bei pausierter Zeit kannst du die Uhrzeit per Befehl ändern:

```
time noon
```

:::: tip Hinweis
In der Konsole werden Befehle ohne `/` eingegeben. Im Spiel mit Admin-Rechten benötigst du den `/` (z.B. `/time noon`).
::::

Für weitere Zeit-Befehle siehe [Tageszeit ändern](tageszeit-aendern.md).
