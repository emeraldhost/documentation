---
slug: "kick-ban-players"
language: "en"
title: "How to Kick and Ban Players on Your Don’t Starve Together Server"
description: "Kick and ban players on a Don’t Starve Together server"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["dont-starve-together"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Kick & Ban Players"
sort: 7
related: ["gameserver/dont-starve-together/add-savegame", "gameserver/dont-starve-together/create-backup", "gameserver/dont-starve-together/download-savegame", "gameserver/dont-starve-together/join-server"]
---

Don’t Starve Together comes with built-in kick and ban functions. You can use them conveniently through the in-game player list, run them as console commands or edit the ban list directly on the server.

> [!NOTE]
> You need admin rights to kick or ban players. See [Add Admin](/tutorials/gameserver/dont-starve-together/add-admin).

## Via the in-game player list

1. **Join the server**\
   Join your server as an admin.

2. **Open the player list**\
   Hold down the `TAB` key to show the player list.

3. **Kick a player**\
   Click the shoe icon next to the player to remove them from the server.

4. **Ban a player**\
   Click the hammer icon next to the player to ban them permanently.

## Via the console

1. **Open the console**\
   Press `~` in game to open the console.

2. **List the players**\
   Show all players together with their Klei user ID:

   ```text
   c_listallplayers()
   ```

3. **Kick a player**\
   The player is removed from the server but can rejoin:

   ```text
   TheNet:Kick("KU_xxxxxxxx")
   ```

4. **Ban a player**\
   The player is permanently banned:

   ```text
   TheNet:Ban("KU_xxxxxxxx")
   ```

5. **Ban for a limited time**\
   The second value is the duration in seconds – `120` therefore equals two minutes:

   ```text
   TheNet:BanForTime("KU_xxxxxxxx", 120)
   ```

## Edit the ban list

All bans are stored in the `blocklist.txt` file in the cluster folder. If you ban a player in game, their Klei user ID is added there automatically. You can also edit the file yourself.

1. **Stop the server**\
   Stop your server via the dashboard.

2. **Connect via SFTP**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection) or use the file browser in the dashboard.

3. **Open blocklist.txt**\
   Navigate to the folder that contains the `cluster.ini` file and open this file:

   ```text
   <cluster folder>/blocklist.txt
   ```

4. **Adjust the entries**\
   Add exactly one Klei user ID per line – without commas and without quotation marks. To unban someone, remove the corresponding line:

   ```text
   KU_xxxxxxxx
   KU_yyyyyyyy
   ```

5. **Start the server**\
   Save the file and start your server. The server only reloads the `blocklist.txt` on startup.

> [!WARNING]
> Only edit the `blocklist.txt` while the server is stopped. If the server is running it can overwrite the file and your changes will be lost.

> [!TIP]
> **Find the Klei user ID**
>
> The guide [Add Admin](/tutorials/gameserver/dont-starve-together/add-admin) explains how to find the `KU_` ID of a player.

## All commands

| Command | Description |
|---------|-------------|
| `c_listallplayers()` | List all players with their user ID |
| `TheNet:Kick("KU_xxxxxxxx")` | Kick a player |
| `TheNet:Ban("KU_xxxxxxxx")` | Permanently ban a player |
| `TheNet:BanForTime("KU_xxxxxxxx", 120)` | Ban a player for 120 seconds |
| `c_announce("text")` | Send a message to all players |
| `c_save()` | Save the world immediately |
