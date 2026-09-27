---
description: Spielzeit auf einem Hytale Server pausieren
---

# So pausierst du die Spielzeit auf einem Hytale Server

Du kannst die Spielzeit anhalten, damit sich die Tageszeit nicht mehr ändert. Das ist nützlich für Bau-Server, Events oder Screenshots bei perfektem Licht.

:::: info Hinweis
Stoppe deinen Server, bevor du Änderungen an Konfigurationsdateien vornimmst, da diese sonst vom Server überschrieben werden.
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
   Du kannst auch die aktuelle Zeit setzen, bevor du pausierst. `GameTime` ist ein Zeitstempel, die Uhrzeit steht hinter dem `T`:
   ```json
   "GameTime": "0001-01-01T12:00:00Z"
   ```
   (`12:00:00` = Mittag)

   Das Datum vor dem `T` kann bei dir anders lauten. Übernimm dein vorhandenes Datum und ändere nur die Uhrzeit.

   :::: tip Tipp
   Prüfe die Datei nach dem Bearbeiten mit einem JSON-Formatter wie [JSONLint](https://jsonlint.com/) — ein fehlendes oder überzähliges Komma reicht, damit der Server die Welt-Konfiguration nicht mehr laden kann.
   ::::

5. <b>Server starten</b><br>
   Starte deinen Server, damit die Änderungen übernommen werden.

## Beispiel: Dauerhaft Mittag

```json
"IsGameTimePaused": true,
"GameTime": "0001-01-01T12:00:00Z"
```

## Beispiel: Dauerhaft Nacht

```json
"IsGameTimePaused": true,
"GameTime": "0001-01-01T00:00:00Z"
```

## So pausierst du die Spielzeit per Befehl

Per Befehl pausierst du die Zeit im laufenden Betrieb, ohne den Server zu stoppen. Gib dazu in der Konsole deiner Verwaltung ein:

```
time pause --world default
```

Ersetze `default` durch den Namen deiner Welt. Der Server antwortet mit `Time cycle paused in "default" at ...`. Der Befehl schaltet um: Gibst du ihn erneut ein, läuft die Zeit weiter (`Time cycle resumed ...`).

Wenn du den Zustand fest setzen möchtest, statt umzuschalten, verwende:

```
world settings timepaused set true --world default
```

Mit `false` statt `true` läuft die Zeit wieder weiter. Im Spiel verwendest du als Admin `/time pause` ohne `--world`, dann gilt der Befehl für die Welt, in der du dich befindest.

:::: info Hinweis
Während die Spielzeit pausiert ist, können Spieler nicht schlafen. Das Spiel meldet dann `Sleeping is disabled because game time is paused in this world!`.
::::

## Zeit per Befehl ändern

Auch bei pausierter Zeit kannst du die Uhrzeit per Befehl ändern:

```
time noon --world default
```

:::: info Hinweis
In der Konsole werden Befehle ohne `/` eingegeben und brauchen die Option `--world`, sonst antwortet der Server mit `Sender must be a player or provide the --world option!`. Im Spiel mit Admin-Rechten benötigst du den `/` und kannst `--world` weglassen (z.B. `/time noon`).
::::

Für weitere Zeit-Befehle siehe [Tageszeit ändern](tageszeit-aendern.md).
