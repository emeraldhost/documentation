---
slug: "spielzeit-pausieren"
language: "de"
title: "So pausierst Du die Spielzeit auf einem Hytale Server"
description: "Spielzeit auf einem Hytale Server pausieren"
tags: []
date: "2026-01-15"
visibility: "public"
updated: "2026-08-29"
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

> [!TIP]
> **Hinweis**
>
> Stoppe Deinen Server bevor Du Änderungen an Konfigurationsdateien vornimmst, da diese sonst vom Server überschrieben werden.

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
   Du kannst auch die aktuelle Zeit setzen, bevor Du pausierst:

   ```json
   "GameTime": 12.0
   ```

   (12.0 = Mittag)

   > [!TIP]
   > Prüfe die Datei nach dem Bearbeiten mit einem JSON-Formatter wie [JSONLint](https://jsonlint.com/) – ein fehlendes oder überzähliges Komma reicht, damit der Server die Welt-Konfiguration nicht mehr laden kann.

5. **Server starten**\
   Starte Deinen Server, damit die Änderungen übernommen werden.

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

Auch bei pausierter Zeit kannst Du die Uhrzeit per Befehl ändern:

```text
time noon
```

> [!TIP]
> **Hinweis**
>
> In der Konsole werden Befehle ohne `/` eingegeben. Im Spiel mit Admin-Rechten benötigst Du den `/` (z.B. `/time noon`).

Für weitere Zeit-Befehle siehe [Tageszeit ändern](/tutorials/gameserver/hytale/change-time).
