---
slug: "enable-whitelist"
language: "en"
title: "How to Enable the Whitelist on Your Valheim Server"
description: "Enable the whitelist on a Valheim server"
tags: []
date: "2026-09-24"
visibility: "public"
cta: "gameserver"
product_keys: ["valheim"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Enable Whitelist"
sort: 17
related: ["gameserver/valheim/add-admin", "gameserver/valheim/kick-ban-players", "gameserver/valheim/join-server", "gameserver/valheim/enable-crossplay"]
---
With the whitelist you can restrict access to your server to specific players. Valheim uses the file `permittedlist.txt` for this.

> [!TIP]
> Here you can find a guide on how to find your [SteamID64](/tutorials/gameserver/steamid64-find-out).

## Set up the whitelist

> [!WARNING]
> As soon as even **one player** is listed in `permittedlist.txt`, only listed players can join your server. This also applies to admins – add yourself and all admins as well. A file without entries does not restrict anyone.

1. **Connect via SFTP**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection).

2. **Open permittedlist.txt**\
   Open the file `permittedlist.txt` in the following directory:

   ```text
   /.config/unity3d/IronGate/Valheim/permittedlist.txt
   ```

   It is located in the same folder as `adminlist.txt` and `bannedlist.txt`, one level above the `worlds_local` folder. The server creates the file automatically on its first start.

3. **Add players**\
   Enter one player ID per line. Copy it exactly as it appears in the player list (`F2`) or in the server log, including the prefix and upper and lower case (see [Find the player ID](#find-the-player-id)):

   ```text
   // List permitted players ID ONE per line
   V_76561198012345678
   V_76561198087654321
   ```

   For Steam players, the older form `Steam_76561198012345678` and the plain SteamID64 also work. Lines starting with `//` are comments and are ignored. Player names do not work in this file, only IDs. Make sure there are no spaces before or after an ID.

4. **Save the file**\
   Save the file.

> [!NOTE]
> The server automatically reloads the file within a few seconds after a change and removes connected players who are not listed. A restart is not required for this, but it does no harm either.

## Find the player ID

The player ID has the format `[Platform]_[ID]`, e.g. `V_76561198012345678`. For Steam players, the part after `V_` is the SteamID64. You can find the ID in two ways:

- In the in-game player list, which you open with `F2` while the player is on the server.
- In the server log, i.e. in the console of your dashboard, when the player connects. This also works when the whitelist rejects them. Without crossplay, the log shows only the SteamID64 without a prefix for Steam players.

Crossplay players (e.g. on Xbox, PlayStation 5 or Nintendo Switch 2) do not have a SteamID64. For them you always need the ID from the player list or the server log.

> [!NOTE]
> Whether your server allows crossplay players at all is set in the guide [Enable Crossplay](/tutorials/gameserver/valheim/enable-crossplay).

## Disable the whitelist

Delete all player IDs from `permittedlist.txt` and save the file. Comment lines starting with `//` can stay. After that, all players who are not banned can join again.
