---
slug: "change-max-players"
language: "en"
title: "How to Change the Maximum Player Count on a Hytale Server"
description: "Change maximum player count on a Hytale server"
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
short_title: "Change Max Players"
sort: 3
related: ["gameserver/hytale/add-admin", "gameserver/hytale/change-gamemode", "gameserver/hytale/change-max-view-radius", "gameserver/hytale/change-motd"]
---

You can change the maximum player count with a command in the console or directly in the `config.json`. By default, `100` players are allowed.

## How to Change the Maximum Player Count via Command

1. **Open the dashboard**\
   Open the dashboard of your Hytale server.

2. **Enter the command**\
   Enter the following command in the console:

   ```text
   maxplayers --amount=20
   ```

The new player count takes effect immediately and is saved to the `config.json` automatically. A restart is not required. Run `maxplayers` without anything else to show the current value.

> [!NOTE]
> In the console, commands are entered without `/`. In-game with admin rights you need the `/` (e.g. `/maxplayers --amount=20`). The `--amount=` part is required, `maxplayers 20` does not work.

## How to Change the Maximum Player Count in the config.json

> [!NOTE]
> Stop your server before making changes to configuration files, otherwise they will be overwritten by the server.

1. **Stop the Server**\
   Stop your server via the dashboard.

2. **Open the Configuration File**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection) and open the `config.json` file in the root directory.

3. **Set Player Count**\
   Find the `MaxPlayers` setting and change the value:

   ```json
   "MaxPlayers": 20
   ```

   > [!TIP]
   > Check the file with a JSON formatter like [JSONLint](https://jsonlint.com/) after editing – a single missing or extra comma is enough to stop the server from loading the config.json.

4. **Start the Server**\
   Start your server for the changes to take effect.

> [!WARNING]
> A higher player count does not automatically mean the server can handle that many players. Available RAM is crucial for actual performance.
