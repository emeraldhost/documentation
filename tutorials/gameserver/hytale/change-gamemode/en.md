---
slug: "change-gamemode"
language: "en"
title: "How to Change the Gamemode on a Hytale Server"
description: "Change gamemode on a Hytale server"
tags: []
date: "2026-01-15"
visibility: "public"
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

2. **Open Server Management**\
   Open the dashboard of your Hytale server.

3. **Enter the Command**\
   Enter the following command in the console:

   ```text
   gamemode <adventure/creative> <playername>
   ```

> [!TIP]
> **Note**
>
> The player must be online on the server.

4. **In-Game**\
   The command can also be used by admins directly in-game:

   ```text
   /gamemode <adventure/creative> <playername>
   ```

## How to Change the Default Gamemode

> [!TIP]
> **Note**
>
> This method only changes the gamemode for new players. Existing players need to be changed via command.

1. **Stop the Server**\
   Stop your server via the dashboard.

2. **Open the Configuration File**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection) and open the `config.json` file in the root directory.

3. **Change the Gamemode**\
   Find `GameMode` and change the value to `Creative` or `Adventure`.

4. **Start the Server**\
   Start your server.

## How to Change the Default Gamemode for Uploaded Worlds

> [!TIP]
> **Note**
>
> This method only changes the gamemode for new players. Existing players need to be changed via command.

1. **Stop the Server**\
   Stop your server via the dashboard.

2. **Open the World Configuration**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection) and navigate to:

   ```text
   /universe/worlds/default/
   ```

3. **Open config.json**\
   Open the `config.json` file in this folder.

4. **Change the Gamemode**\
   Find `GameMode` and change the value to `Creative` or `Adventure`.

5. **Start the Server**\
   Start your server.
