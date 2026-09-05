---
slug: "kick-ban-players"
language: "en"
title: "How to Kick and Ban Players on Your VEIN Server"
description: "Kick and ban players on a VEIN server"
tags: []
date: "2026-04-11"
visibility: "public"
cta: "gameserver"
product_keys: ["vein"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Kick & Ban Players"
sort: 7
related: ["gameserver/vein/create-backup", "gameserver/vein/download-savegame", "gameserver/vein/enable-whitelist", "gameserver/vein/join-server"]
---

You can permanently ban players from your server using the `Game.ini`.

## Ban a player

1. **Stop the server**\
   Stop your server via the dashboard.

2. **Connect via SFTP**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection).

3. **Open Game.ini**\
   Open the file `Game.ini` and find the section:

   ```text
   [/Script/Vein.VeinGameStateBase]
   ```

4. **Add BannedPlayers**\
   Add a new line for each banned player:

   ```text
   BannedPlayers=<SteamID64>
   ```

   Example:

   ```text
   [/Script/Vein.VeinGameStateBase]
   BannedPlayers=76561198000000001
   BannedPlayers=76561198000000002
   ```

5. **Start the server**\
   Start your server.

> [!TIP]
> Here you can find a guide on how to find your [SteamID64](/tutorials/gameserver/steamid64-find-out).

## Unban a player

Remove the corresponding `BannedPlayers=<SteamID64>` line from the `Game.ini` and restart the server.
