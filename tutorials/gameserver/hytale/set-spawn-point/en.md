---
slug: "set-spawn-point"
language: "en"
title: "How to Set the Spawn Point on a Hytale Server"
description: "Set spawn point on a Hytale server"
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
short_title: "Set Spawn Point"
sort: 23
related: ["gameserver/hytale/pause-game-time", "gameserver/hytale/set-password", "gameserver/hytale/upload-world", "gameserver/hytale/change-world-seed"]
---

The spawn point determines where new players or players after death appear. Every world on your server has its own spawn point.

## Teleport to Spawn

In-game with admin rights, you teleport to the spawn point of the world you are currently in:

```text
/spawn
```

Via the console of your dashboard, you can teleport a player who is currently online to spawn:

```text
spawn <playername>
```

> [!NOTE]
> Console commands are entered without `/`. In-game with admin rights, you need the `/` (e.g., `/spawn`).

## How to Set the Spawn Point In-Game

1. **Take Your Position**\
   Stand in-game at the place where the spawn point should be and look in the direction players should face after spawning.

2. **Enter the Command**\
   With admin rights, enter the following command:

   ```text
   /spawn set
   ```

   The spawn point of the current world is set to your position. The message "Set spawn to: ..." appears as confirmation.

## How to Set the Spawn Point via the Console

In the console, you specify the world and the coordinates:

```text
spawn set --world <worldname> --position <x> <y> <z>
```

Example for the default world `default`:

```text
spawn set --world default --position 10 120 10
```

> [!TIP]
> The server saves the new spawn point to the world's `config.json` under `/universe/worlds/<worldname>/` right away. No restart is needed.

## How to Reset the Spawn Point

To restore the original spawn point the world had when it was created, enter in-game:

```text
/spawn set default
```

In the console, you also specify the world:

```text
spawn set default --world <worldname>
```

## Configure Respawn Behavior

You can adjust where players reappear after death in the world configuration:

1. **Stop the Server**\
   Stop your server via the dashboard.

2. **Open the World Configuration**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection) and open the file `/universe/worlds/<worldname>/config.json`.

3. **Add the Death Block**\
   By default, the file does not contain a `Death` block. Find the line `"GameplayConfig": "Default",` and add the `Death` block below it. Since more settings follow, there must be a comma after the last closing bracket `}` of the `Death` block:

   ```json
   "Death": {
     "RespawnController": {
       "Type": "WorldSpawnPoint"
     },
     "ItemsLossMode": "Configured",
     "ItemsAmountLossPercentage": 50.0,
     "ItemsDurabilityLossPercentage": 10.0
   }
   ```

4. **Start the Server**\
   Start your server.

**Available Respawn Types:**

- `HomeOrSpawnPoint` - Respawn at the player's own respawn point, otherwise at the world spawn point (default)
- `WorldSpawnPoint` - Always respawn at the world spawn point

> [!WARNING]
> A `Death` block in the world configuration replaces all death settings of this world. If it does not contain the item loss settings, players no longer lose any items on death. The values in the example match the Hytale default. Learn more in [Item Loss on Death](/tutorials/gameserver/hytale/item-loss-on-death).

> [!TIP]
> Check the file with a JSON formatter like [JSONLint](https://jsonlint.com/) after editing – a single missing or extra comma is enough to stop the server from loading the world configuration.

> [!NOTE]
> To learn how to create more worlds with their own spawn point, see [Create New World](/tutorials/gameserver/hytale/create-new-world).
