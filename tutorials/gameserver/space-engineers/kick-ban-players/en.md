---
slug: "kick-ban-players"
language: "en"
title: "How to Kick and Ban Players on Your Space Engineers Server"
description: "Kick and ban players on a Space Engineers server"
tags: []
date: "2026-07-08"
visibility: "public"
cta: "gameserver"
product_keys: ["space-engineers"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Kick & Ban Players"
sort: 13
related: ["gameserver/space-engineers/enable-remote-api", "gameserver/space-engineers/join-server", "gameserver/space-engineers/set-server-password", "gameserver/space-engineers/upload-world"]
---

You can kick and ban players directly in-game, or ban them permanently via the server config.

> [!NOTE]
> To kick and ban in-game you need admin rights. See [Add Admins](/tutorials/gameserver/space-engineers/add-admins).

## Method 1: Directly in-game

1. **Join the server**\
   Join your server as an admin.

2. **Open the admin menu**\
   Open the player list with `F3` or the admin screen with `Alt` + `F10`.

3. **Kick or ban the player**\
   Select the player and click **Kick** (temporary removal) or **Ban** (permanent block).

## Method 2: Via the server config

You can also ban players permanently via the ban list.

> [!WARNING]
> **Caution**
>
> Stop your server before editing the config file.

1. **Stop the server**\
   Stop your server via the dashboard.

2. **Connect via SFTP**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection), or use the file browser.

3. **Open the config**\
   Open the file `SpaceEngineers-Dedicated.cfg`.

4. **Ban the player**\
   Find the `<Banned>` section and add one line per player with the SteamID64:

   ```xml
   <Banned>
     <unsignedLong>76561198000000000</unsignedLong>
   </Banned>
   ```

   To unban, remove the corresponding line again.

5. **Start the server**\
   Save the file and start your server.

> [!NOTE]
> Space Engineers has **no** built-in console commands for kicking or banning. Commands like `/kick` or `/ban` come from mods (e.g. Torch) and are not part of the standard server.

> [!TIP]
> You can find a player's [SteamID64](/tutorials/gameserver/steamid64-find-out) via the linked guide.
