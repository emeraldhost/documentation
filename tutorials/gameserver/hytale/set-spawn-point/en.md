---
slug: "set-spawn-point"
language: "en"
title: "How to Set the Spawn Point on a Hytale Server"
description: "Set spawn point on a Hytale server"
tags: []
date: "2026-01-15"
visibility: "public"
updated: "2026-08-29"
cta: "gameserver"
product_keys: ["hytale"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Set Spawn Point"
sort: 23
related: ["gameserver/hytale/pause-game-time", "gameserver/hytale/set-password", "gameserver/hytale/upload-world", "gameserver/hytale/change-world-seed"]
---

The spawn point determines where new players or players after death appear.

## Teleport to Spawn

To teleport to the current spawn point:

```text
spawn
```

> [!TIP]
> **Note**
>
> Console commands are entered without `/`. In-game with admin rights, you need the `/` (e.g., `/spawn`).

## Set Spawn Point

> [!WARNING]
> **Note**
>
> Hytale does not have a built-in `/setspawn` command. You can set the spawn point with the **HyCommands Mod**.

## How to Install the HyCommands Mod

The HyCommands Mod by NightBeamStudio is a comprehensive server utility for Hytale. It adds useful commands like `/setspawn`, `/sethome`, `/home`, and `/warp`.

### Download

The mod can be downloaded here: [HyCommands on CurseForge](https://www.curseforge.com/hytale/mods/hycommands)

### Installation

1. **Stop the Server**\
   Stop your server via the dashboard.

2. **Download the Mod**\
   Download the .jar file of the HyCommands Mod from CurseForge.

3. **Upload the Mod**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection) and upload the .jar file to the `mods/` folder.

4. **Start the Server**\
   Start your server.

### Set Spawn Point (with HyCommands)

With HyCommands, you can set the spawn as admin in-game:

```text
/setspawn
```

The spawn point will be set to your current position.

## Configure Respawn Behavior

You can adjust the respawn behavior after death in the world configuration:

1. Open `/universe/worlds/<worldname>/config.json`
2. In the `Death` block you'll find `RespawnController`:

```json
"Death": {
  "RespawnController": {
    "Type": "HomeOrSpawnPoint"
  }
}
```

**Available Respawn Types:**

- `HomeOrSpawnPoint` - Respawn at home or spawn point
- `SpawnPoint` - Only at spawn point

> [!TIP]
> Check the file with a JSON formatter like [JSONLint](https://jsonlint.com/) after editing – a single missing or extra comma is enough to stop the server from loading the world configuration.

> [!TIP]
> **Note**
>
> For more spawn options, see also [Create New World](/tutorials/gameserver/hytale/create-new-world) - new worlds have their own spawn point.
