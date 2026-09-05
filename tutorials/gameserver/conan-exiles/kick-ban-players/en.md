---
slug: "kick-ban-players"
language: "en"
title: "How to Kick and Ban Players on Your Conan Exiles Server"
description: "Kick and ban players on a Conan Exiles server"
tags: []
date: "2026-04-11"
visibility: "public"
cta: "gameserver"
product_keys: ["conan-exiles"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Kick & Ban Players"
sort: 15
related: ["gameserver/conan-exiles/enable-battleye", "gameserver/conan-exiles/enable-pvp", "gameserver/conan-exiles/enable-vac", "gameserver/conan-exiles/join-server"]
---

You can kick and ban players using the in-game admin panel.

> [!WARNING]
> **Requirement**
>
> You must be an admin on your server. Here you can find a guide on how to [add an admin](/tutorials/gameserver/conan-exiles/add-admin).

## Kick or ban players via the admin panel

1. **Join the server**\
   Join your Conan Exiles server and log in as admin.

2. **Open the admin panel**\
   Open the admin panel in the game.

3. **Open the player list**\
   Navigate to the **Players** tab to see the list of all connected players.

4. **Select a player**\
   Select the player you want to kick or ban.

5. **Kick or ban the player**\
   Click **Kick** or **Ban** to remove the player.

> [!NOTE]
> A kicked player can rejoin the server immediately. A banned player is permanently excluded from the server.

## Unban a player

To unban a player, you need to manually edit the blacklist file:

1. **Stop the server**\
   Stop your server via the dashboard.

2. **Connect via SFTP**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection).

3. **Edit blacklist.txt**\
   Open the file `blacklist.txt` at:

   ```text
   /ConanSandbox/Saved/blacklist.txt
   ```

4. **Remove the player**\
   Remove the line with the ID of the player you want to unban.

5. **Start the server**\
   Save the file and start your server.
