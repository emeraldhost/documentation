---
slug: "spielzeit-pausieren"
language: "de"
title: "So pausierst Du die Spielzeit auf einem Hytale Server"
description: "Spielzeit auf einem Hytale Server pausieren"
tags: []
date: "2026-01-15"
visibility: "public"
updated: "2026-09-27"
cta: "gameserver"
product_keys: ["hytale"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Spielzeit pausieren"
sort: 19
related: ["gameserver/hytale/join-server", "gameserver/hytale/kick-ban-players", "gameserver/hytale/set-password", "gameserver/hytale/set-spawn-point"]
---

Du kannst die Spielzeit anhalten, damit sich die Tageszeit nicht mehr ändert. Das ist nützlich für Bau-Server, Events oder Screenshots bei perfektem Licht.

> [!NOTE]
> Stoppe Deinen Server, bevor Du Änderungen an Konfigurationsdateien vornimmst, da diese sonst vom Server überschrieben werden.

## So pausierst Du die Spielzeit per Konfiguration

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

2. **Welt-Konfiguration öffnen**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server und navigiere zu:

   ```text
   /universe/worlds/<weltname>/config.json
   ```

   Ersetze `<weltname>` durch den Namen Deiner Welt (z.B. `default`).

3. **Spielzeit pausieren**\
   Suche nach der Einstellung `IsGameTimePaused` und ändere den Wert:

   ```json
   "IsGameTimePaused": true
   ```

   - `true` - Spielzeit ist pausiert
   - `false` - Spielzeit läuft normal (Standard)

4. **Zeit festlegen (optional)**\
   Du kannst auch die aktuelle Zeit setzen, bevor Du pausierst. `GameTime` ist ein Zeitstempel, die Uhrzeit steht hinter dem `T`:

   ```json
   "GameTime": "0001-01-01T12:00:00Z"
   ```

   (`12:00:00` = Mittag)

   Das Datum vor dem `T` kann bei Dir anders lauten. Übernimm Dein vorhandenes Datum und ändere nur die Uhrzeit.

   > [!TIP]
   > Prüfe die Datei nach dem Bearbeiten mit einem JSON-Formatter wie [JSONLint](https://jsonlint.com/) – ein fehlendes oder überzähliges Komma reicht, damit der Server die Welt-Konfiguration nicht mehr laden kann.

5. **Server starten**\
   Starte Deinen Server, damit die Änderungen übernommen werden.

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

## So pausierst Du die Spielzeit per Befehl

Per Befehl pausierst Du die Zeit im laufenden Betrieb, ohne den Server zu stoppen. Gib dazu in der Konsole Deiner Verwaltung ein:

```text
time pause --world default
```

Ersetze `default` durch den Namen Deiner Welt. Der Server antwortet mit `Time cycle paused in "default" at ...`. Der Befehl schaltet um: Gibst Du ihn erneut ein, läuft die Zeit weiter (`Time cycle resumed ...`).

Wenn Du den Zustand fest setzen möchtest, statt umzuschalten, verwende:

```text
world settings timepaused set true --world default
```

Mit `false` statt `true` läuft die Zeit wieder weiter. Im Spiel verwendest Du als Admin `/time pause` ohne `--world`, dann gilt der Befehl für die Welt, in der Du Dich befindest.

> [!NOTE]
> Während die Spielzeit pausiert ist, können Spieler nicht schlafen. Das Spiel meldet dann `Sleeping is disabled because game time is paused in this world!`.

## Zeit per Befehl ändern

Auch bei pausierter Zeit kannst Du die Uhrzeit per Befehl ändern:

```text
time noon --world default
```

> [!NOTE]
> In der Konsole werden Befehle ohne `/` eingegeben und brauchen die Option `--world`, sonst antwortet der Server mit `Sender must be a player or provide the --world option!`. Im Spiel mit Admin-Rechten benötigst Du den `/` und kannst `--world` weglassen (z.B. `/time noon`).

Für weitere Zeit-Befehle siehe [Tageszeit ändern](/tutorials/gameserver/hytale/change-time).
