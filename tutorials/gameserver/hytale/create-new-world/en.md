---
slug: "create-new-world"
language: "en"
title: "How to Create a New World on a Hytale Server"
description: "Create a new world on a Hytale server"
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
short_title: "Create New World"
sort: 10
related: ["gameserver/hytale/change-weather", "gameserver/hytale/create-backup", "gameserver/hytale/disable-npcs", "gameserver/hytale/download-world"]
---

Your Hytale server can run several worlds at the same time. Each world is stored as its own folder under `/universe/worlds/` with its own `config.json`, so it also has its own settings such as PvP, seed or spawn point. The world the server creates on its first start is called `default`.

## Available World Generators

When creating a world, you choose with `--gen` how the new world is generated:

| Generator | Description |
| --------- | ----------- |
| `Hytale` | Standard world generator with natural terrain. It is used when you leave out `--gen`. |
| `Flat` | Flat world made of a single layer of grass soil |
| `Void` | Empty world without blocks |

> [!NOTE]
> There is also the generator `HytaleGenerator` (World Gen V2). It is meant to replace the current generator in the future but is still in development. For a normal game world, use the standard generator.

## How to Create a New World via Command

1. **Open dashboard**\
   Open the dashboard of your Hytale server.

2. **Enter the Command**\
   Enter the following command in the console:

   ```text
   world add <name> --gen <Generator>
   ```

   Replace `<name>` with the name of the new world and `<Generator>` with a generator from the table above. If you leave out `--gen <Generator>`, the server creates a normal world with the standard generator.

3. **Check the Response**\
   If everything worked, the console shows a message like this:

   ```text
   Created world "arena" with generator type "Flat" and storage type "default"!
   ```

   If a world or folder with this name already exists, the command stops with an error message.

**Examples:**

```text
world add arena --gen Flat
world add lobby --gen Void
world add survival
```

> [!NOTE]
> Console commands are entered without `/`. In-game with admin rights, you need the `/` (e.g., `/world add arena --gen Flat`).

> [!TIP]
> The new world gets its own folder under `/universe/worlds/<name>/`. On startup, the server automatically loads all worlds from this directory, so the new world is kept after a restart.

## How to Switch to the New World

In-game with admin rights, you switch to another world with this command:

```text
/tp world <name>
```

> [!NOTE]
> This command only works in-game, not in the console.

## How to Set the New World as Default

The default world is where players end up when they join your server for the first time. To set the new world as default, enter in the console:

```text
world setdefault <name>
```

The console confirms this with "Set default world to ...". The server saves the change to the `config.json` automatically.

Alternatively, you can set the default world in the `config.json` in the root directory while the server is stopped. Find the `Defaults` block and change the `World` value, leaving the other entries unchanged:

```json
"Defaults": {
  "World": "arena",
  "GameMode": "Adventure"
}
```

> [!TIP]
> Check the file with a JSON formatter like [JSONLint](https://jsonlint.com/) after editing – a single missing or extra comma is enough to stop the server from loading the config.json.

> [!NOTE]
> Players who have been on the server before keep joining in the world they were last in. The default world applies to new players and to players whose last world is no longer loaded.

## How to Delete a World

`world remove <name>` only unloads a world. Its folder is kept and the server loads it again on the next start. To delete a world permanently, follow these steps:

1. **Set Another Default World**\
   If the world you want to delete is currently the default world, first set another world as default, for example with `world setdefault arena`. Otherwise the server creates a newly generated world with the old name on the next start.

2. **Stop the Server**\
   Stop your server via the dashboard.

3. **Delete the World Folder**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection) and delete the world's folder under `/universe/worlds/<name>/`.

4. **Start the Server**\
   Start your server again.

> [!WARNING]
> Deleting the folder removes the world including all builds permanently. Create a [backup](/tutorials/gameserver/hytale/create-backup) first!

## All World Commands

| Command | Description |
| ------- | ----------- |
| `world list` | Show all loaded worlds |
| `world add <name> [--gen <Generator>]` | Create a new world |
| `world load <name>` | Load an existing world folder from `/universe/worlds/` |
| `world remove <name>` | Unload a world (the folder is kept) |
| `world setdefault <name>` | Set world as default |
| `world prune --confirm` | Permanently delete all worlds except the default world that currently have no players in them |
| `/tp world <name>` | Switch to another world in-game |

> [!IMPORTANT]
> `world prune --confirm` permanently deletes the affected worlds including their folders. Create a [backup](/tutorials/gameserver/hytale/create-backup) first!

> [!TIP]
> You change the settings of a single world in its `config.json` under `/universe/worlds/<name>/` or in the console with `world settings` or `world config` plus `--world <name>`, for example `world config pvp true --world arena`.
