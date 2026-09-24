---
slug: "add-admin"
language: "en"
title: "How to Add an Admin on Your Valheim Server"
description: "Add an admin on a Valheim server"
tags: []
date: "2026-04-10"
visibility: "public"
updated: "2026-09-24"
cta: "gameserver"
product_keys: ["valheim"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Add Admin"
sort: 1
related: ["gameserver/valheim/download-savegame", "gameserver/valheim/install-bepinex", "gameserver/valheim/add-mods", "gameserver/valheim/add-savegame"]
---

You can add admins via the `adminlist.txt` file. Each admin is identified by their player ID.

## Find the Player ID

The player ID has the format `[Platform]_[ID]`, e.g. `V_76561198012345678`. For Steam players, the part after `V_` is the SteamID64. You can find the ID in two ways:

- In the in-game player list, which you open with `F2` while the player is on the server.
- In the server log, i.e. in the console of your dashboard, when the player connects. Without crossplay, the log shows only the SteamID64 without a prefix for Steam players.

This applies to all platforms, including crossplay players on Xbox, PlayStation 5 or Nintendo Switch 2.

## Add the Admin

1. **Stop the server**\
   Stop your server via the dashboard.

2. **Connect via SFTP**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection).

3. **Open adminlist.txt**\
   Open the file `adminlist.txt` in the following directory:

   ```text
   /.config/unity3d/IronGate/Valheim/adminlist.txt
   ```

   The server creates this file automatically on its first start.

4. **Add the player ID**\
   Enter the player ID of the player who should become admin. Add one ID per line and copy it exactly as it appears in the player list (`F2`) or in the server log, including the prefix and upper and lower case:

   ```text
   V_76561198012345678
   V_76561198087654321
   ```

5. **Start the server**\
   Save the file and start your server.

> [!NOTE]
> For Steam players, older entries still work, i.e. the form `Steam_76561198012345678` or the plain [SteamID64](/tutorials/gameserver/steamid64-find-out). Crossplay players do not have a SteamID64, so for them you always need the ID from the player list or the server log.

> [!NOTE]
> The safest way to apply changes to `adminlist.txt` is to restart your server.
