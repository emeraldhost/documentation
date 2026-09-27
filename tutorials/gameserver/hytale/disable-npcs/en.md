---
slug: "disable-npcs"
language: "en"
title: "How to Disable NPCs on a Hytale Server"
description: "Disable NPCs on a Hytale server"
tags: []
date: "2026-01-15"
visibility: "public"
updated: "2026-09-27"
cta: "gameserver"
product_keys: ["hytale"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Disable NPCs"
sort: 11
related: ["gameserver/hytale/create-backup", "gameserver/hytale/create-new-world", "gameserver/hytale/download-world", "gameserver/hytale/enable-fall-damage"]
---

You can disable NPC spawning (creatures, monsters, animals) per world. This is useful for pure building servers or PvP arenas.

> [!NOTE]
> Stop your server before making changes to configuration files, otherwise they will be overwritten by the server.

## How to Disable NPCs via Configuration

1. **Stop the Server**\
   Stop your server via the dashboard.

2. **Open the World Configuration**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection) and navigate to:

   ```text
   /universe/worlds/<worldname>/config.json
   ```

   Replace `<worldname>` with the name of your world (e.g., `default`).

3. **Change NPC Spawning**\
   Find the `IsSpawningNPC` setting and change the value:

   ```json
   "IsSpawningNPC": false
   ```

   - `true` - NPCs spawn (default)
   - `false` - No NPCs spawn

   > [!TIP]
   > Check the file with a JSON formatter like [JSONLint](https://jsonlint.com/) after editing – a single missing or extra comma is enough to stop the server from loading the world configuration.

4. **Start the Server**\
   Start your server for the changes to take effect.

## How to Disable NPCs via Command

With a command, you can toggle NPC spawning while the server is running. The change is saved directly in the world configuration.

1. **Open the Dashboard**\
   Open the dashboard of your Hytale server.

2. **Enter the Command**\
   Enter the following command in the console:

   ```text
   spawning disable --world default
   ```

   Replace `default` with the name of your world. The server confirms with `Spawning disabled for world "default"`. To enable spawning again, use:

   ```text
   spawning enable --world default
   ```

Admins can also control NPC spawning in-game. Without `--world`, the command applies to the world you are currently in:

```text
/spawning disable
```

Alternatively, `world settings spawningnpc set false --world default` also works. Use `spawning --help` to show all subcommands.

> [!NOTE]
> Console commands are entered without `/` and need the `--world` option, otherwise the server replies with `Sender must be a player or provide the --world option!`. In-game with admin rights, you need the `/`.

## Remove Already Spawned NPCs

Disabling only affects future spawning. Already existing NPCs will remain. To remove the NPCs of a world, enter in the console:

```text
npc clean --world default --confirm
```

The `--confirm` flag is required, without it the server does not run the command. In-game, the command is `/npc clean --confirm`.

> [!WARNING]
> `npc clean` removes all NPCs that are currently loaded in the world, including peaceful animals. NPCs in areas that are not currently loaded are not affected. This step cannot be undone.

> [!TIP]
> If you want to keep the NPCs but make them stand still, freeze them instead: `world settings freezeallnpcs set true --world default`. Use `false` to undo this. The setting is saved in the world configuration as `IsAllNPCFrozen`.
