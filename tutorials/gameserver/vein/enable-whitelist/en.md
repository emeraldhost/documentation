---
slug: "enable-whitelist"
language: "en"
title: "How to Enable the Whitelist on Your VEIN Server"
description: "Enable whitelist on a VEIN server"
tags: []
date: "2026-03-23"
visibility: "public"
cta: "gameserver"
product_keys: ["vein"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Enable Whitelist"
sort: 5
related: ["gameserver/vein/create-backup", "gameserver/vein/download-savegame", "gameserver/vein/join-server", "gameserver/vein/kick-ban-players"]
---

With the whitelist you can restrict access to your server to specific players.

> [!TIP]
> Here you can find a guide on how to find your [SteamID64](/tutorials/gameserver/steamid64-find-out).

1. **Stop the server**\
   Stop your server via the dashboard.

2. **Connect via SFTP**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection).

3. **Open Game.ini**\
   Open the file `Game.ini` at:

   ```text
   /Vein/Saved/Config/LinuxServer/Game.ini
   ```

4. **Add players to whitelist**\
   Add the section `[/Script/Vein.VeinGameStateBase]` (if not already present) and enter the SteamID64 of each player:

   ```ini
   [/Script/Vein.VeinGameStateBase]
   WhitelistedPlayers=76561198012345678
   WhitelistedPlayers=76561198087654321
   ```

5. **Start the server**\
   Save the file and start your server.

> [!IMPORTANT]
> As soon as you add a player to the whitelist, **only listed players** can join the server. Make sure to add your own SteamID64 as well!

## Disable whitelist

To disable the whitelist, remove all `WhitelistedPlayers` entries from the `Game.ini`. Once no entries are present, any player can join the server again.
