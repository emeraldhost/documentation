---
slug: "change-gamemode"
language: "en"
title: "How to Change the Gamemode on a Hytale Server"
description: "Change gamemode on a Hytale server"
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
short_title: "Change Gamemode"
sort: 2
related: ["gameserver/hytale/add-admin", "gameserver/hytale/change-max-players", "gameserver/hytale/change-max-view-radius", "gameserver/hytale/change-motd"]
---

## Available Gamemodes

| Gamemode | Description |
| -------- | ----------- |
| Adventure | Survive in the wild, gather resources and face enemies |
| Creative | Build without limits with unlimited resources and no damage |

## How to Change a Player's Gamemode

1. **Start the Server**\
   Make sure your server is running.

2. **Open dashboard**\
   Open the dashboard of your Hytale server.

3. **Enter the Command**\
   Enter the following command in the console:

   ```text
   gamemode <adventure/creative> <playername>
   ```

> [!NOTE]
> The player must be online on the server. Instead of `adventure` and `creative` you can also use the short forms `a` and `c`, and `gm` instead of `gamemode` (e.g., `gm c playername`).

4. **In-Game**\
   The command can also be used by admins directly in-game:

   ```text
   /gamemode <adventure/creative> <playername>
   ```

   If you leave out the player name, you change your own gamemode (e.g., `/gamemode creative`).

## How to Change the Default Gamemode

> [!NOTE]
> This method only changes the gamemode for new players. Existing players need to be changed via command.

1. **Stop the Server**\
   Stop your server via the dashboard.

2. **Open the Configuration File**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection) and open the `config.json` file in the root directory.

3. **Change the Gamemode**\
   Find `GameMode` in the `Defaults` section and change the value to `Creative` or `Adventure`:

   ```json
   "GameMode": "Creative",
   ```

4. **Start the Server**\
   Start your server.

## How to Change the Default Gamemode for Uploaded Worlds

> [!NOTE]
> This method only changes the gamemode for new players. Existing players need to be changed via command. If a gamemode is set in the world, it takes precedence over the default gamemode from the `config.json` in the root directory.

1. **Stop the Server**\
   Stop your server via the dashboard.

2. **Open the World Configuration**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection) and navigate to:

   ```text
   /universe/worlds/default/
   ```

   Replace `default` with the name of your world if it is named differently.

3. **Open config.json**\
   Open the `config.json` file in this folder.

4. **Change the Gamemode**\
   Find `GameMode` and change the value to `Creative` or `Adventure`. New worlds do not contain this entry by default. In that case, add it on a new line, e.g., directly above `"IsSpawningNPC"`:

   ```json
   "GameMode": "Creative",
   ```

   > [!TIP]
   > Check the file with a JSON formatter like [JSONLint](https://jsonlint.com/) after editing – a single missing or extra comma is enough to stop the server from loading the world configuration.

5. **Start the Server**\
   Start your server.

> [!TIP]
> Alternatively, you can set a world's gamemode via the console while the server is running, e.g., `world settings gamemode set creative --world default`. Use `world settings gamemode reset --world default` to reset it.
