---
slug: "upload-world"
language: "en"
title: "How to Upload a Singleplayer World to Your Hytale Server"
description: "Upload singleplayer world to a Hytale server"
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
short_title: "Upload World"
sort: 24
related: ["gameserver/hytale/pause-game-time", "gameserver/hytale/set-password", "gameserver/hytale/set-spawn-point", "gameserver/hytale/change-world-seed"]
---

You can transfer your singleplayer world to your server and continue playing with friends.

## How to Find Your World Files

### Method 1: Via Hytale

1. **Open Hytale**\
   Open Hytale and go to "Worlds".

2. **Open Folder**\
   Right-click on your world and select "Open Folder".

3. **Copy World Folder**\
   Navigate to `universe/worlds/` - here you'll find your world folders. Copy the desired world folder.

### Method 2: Manually

You can find your Hytale saves here:

| Operating System | Path |
| ---------------- | ---- |
| Windows | `%appdata%\Hytale\UserData\Saves` |
| Linux | `$XDG_DATA_HOME/Hytale/UserData/Saves` |
| macOS | `~/Library/Application Support/Hytale/UserData/Saves` |

Every save has its own folder there. Navigate to `universe/worlds/` within your save to find the world folders.

> [!NOTE]
> If you play the pre-release version of Hytale, your saves are not stored under `UserData` but in the `data/pre-release/` folder inside the Hytale folder. Such a world may not open on a server on the `release` patchline. You set your server's patchline in the **dashboard** under **Settings** in the **Hytale Patchline** field.

## How to Upload the World

> [!NOTE]
> Stop your server before uploading files, otherwise they will be overwritten by the server.

1. **Stop the Server**\
   Stop your server via the dashboard.

2. **Connect via SFTP**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection).

3. **Upload World Folder**\
   Upload the copied world folder to the following directory:

   ```text
   /universe/worlds/
   ```

   The name of the folder becomes the name of the world.

4. **Start the Server**\
   Start your server. On startup, it automatically loads all worlds from `/universe/worlds/`, including your uploaded world.

> [!WARNING]
> If the server already has a folder with the same name (the server's default world is called `default`), rename your world folder before uploading. Otherwise you overwrite the files of the existing world.

## How to Set the World as Default

To make players end up in your uploaded world when joining, you need to set it as the default world.

### Via Console

1. **Check the World**\
   Enter the following command in the console to show all loaded worlds:

   ```text
   world list
   ```

   Your uploaded world should appear here with the name of its folder.

2. **Set as Default**\
   To make players automatically spawn in this world when joining:

   ```text
   world setdefault <worldname>
   ```

   Replace `<worldname>` with the name of the uploaded folder.

> [!NOTE]
> Console commands are entered without `/`. In-game with admin rights, you need the `/` (e.g., `/world setdefault <worldname>`).

### Via Configuration

You can also set the default world manually in the server configuration:

1. **Stop the Server**\
   Stop your server via the dashboard.

2. **Open config.json**\
   Open the `config.json` in the root directory of your server.

3. **Change Default World**\
   Find the `Defaults` block and change the `World` value. Leave the other entries in the block unchanged:

   ```json
   "Defaults": {
     "World": "myworld",
     "GameMode": "Adventure"
   }
   ```

   > [!TIP]
   > Check the file with a JSON formatter like [JSONLint](https://jsonlint.com/) after editing – a single missing or extra comma is enough to stop the server from loading the configuration.

4. **Start the Server**\
   Start your server.

> [!NOTE]
> Players who have been on the server before keep joining in the world they were last in. The default world applies to new players and to players whose last world is no longer loaded. With admin rights, you can switch to another world in-game with `/tp world <worldname>`.

## Transfer Player Data

If you also want to transfer your player progress (inventory, position, etc.):

1. Copy the contents of the `universe/players/` folder from your singleplayer save.
2. Upload it to the `/universe/players/` folder on the server while the server is stopped.

> [!WARNING]
> Only upload the world folders, not the entire `universe/` folder - otherwise existing server worlds will be overwritten.
