---
slug: "spawn-punkt-setzen"
language: "de"
title: "So setzt Du den Spawn-Punkt auf einem Hytale Server"
description: "Spawn-Punkt auf einem Hytale Server setzen"
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
short_title: "Spawn-Punkt setzen"
sort: 17
related: ["gameserver/hytale/pause-game-time", "gameserver/hytale/set-password", "gameserver/hytale/upload-world", "gameserver/hytale/change-world-seed"]
---

Der Spawn-Punkt bestimmt, wo neue Spieler oder Spieler nach dem Tod erscheinen.

## Zum Spawn teleportieren

Um zum aktuellen Spawn-Punkt zu teleportieren:

```text
spawn
```

> [!TIP]
> **Hinweis**
>
> In der Konsole werden Befehle ohne `/` eingegeben. Im Spiel mit Admin-Rechten benötigst Du den `/` (z.B. `/spawn`).

## Spawn-Punkt setzen

> [!WARNING]
> **Hinweis**
>
> Hytale hat standardmäßig keinen `/setspawn` Befehl. Du kannst den Spawn-Punkt mit dem **HyCommands Mod** setzen.

## So installierst Du den HyCommands Mod

Der HyCommands Mod von NightBeamStudio ist ein umfangreiches Server-Utility für Hytale. Er fügt nützliche Befehle wie `/setspawn`, `/sethome`, `/home` und `/warp` hinzu.

### Download

Der Mod kann hier heruntergeladen werden: [HyCommands auf CurseForge](https://www.curseforge.com/hytale/mods/hycommands)

### Installation

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

2. **Mod herunterladen**\
   Lade die .jar Datei des HyCommands Mods von CurseForge herunter.

3. **Mod hochladen**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server und lade die .jar Datei in den `mods/` Ordner hoch.

4. **Server starten**\
   Starte Deinen Server.

### Spawn-Punkt setzen (mit HyCommands)

Mit HyCommands kannst Du im Spiel als Admin:

```text
/setspawn
```

Der Spawn-Punkt wird auf Deine aktuelle Position gesetzt.

## Respawn-Verhalten konfigurieren

Du kannst das Respawn-Verhalten nach dem Tod in der Welt-Konfiguration anpassen:

1. Öffne `/universe/worlds/<weltname>/config.json`
2. Im `Death` Block findest Du `RespawnController`:

```json
"Death": {
  "RespawnController": {
    "Type": "HomeOrSpawnPoint"
  }
}
```

**Verfügbare Respawn-Typen:**

- `HomeOrSpawnPoint` - Respawn am Home oder Spawn-Punkt
- `SpawnPoint` - Nur am Spawn-Punkt

> [!TIP]
> Prüfe die Datei nach dem Bearbeiten mit einem JSON-Formatter wie [JSONLint](https://jsonlint.com/) – ein fehlendes oder überzähliges Komma reicht, damit der Server die Welt-Konfiguration nicht mehr laden kann.

> [!TIP]
> **Hinweis**
>
> Für weitere Spawn-Optionen siehe auch [Neue Welt erstellen](/tutorials/gameserver/hytale/create-new-world) - neue Welten haben ihren eigenen Spawn-Punkt.
