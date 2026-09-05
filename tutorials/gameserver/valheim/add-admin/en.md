---
slug: "add-admin"
language: "en"
title: "How to Add an Admin on Your Valheim Server"
description: "Add an admin on a Valheim server"
tags: []
date: "2026-04-10"
visibility: "public"
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

You can add admins via the `adminlist.txt` file. Each admin is identified by their SteamID64.

> [!TIP]
> Here you can find a guide on how to find your [SteamID64](/tutorials/gameserver/steamid64-find-out).

1. **Stop the server**\
   Stop your server via the dashboard.

2. **Connect via SFTP**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection).

3. **Open adminlist.txt**\
   Open the file `adminlist.txt` in the following directory:

   ```text
   /config/adminlist.txt
   ```

   If the file is not located there, check alternatively:

   ```text
   /.config/unity3d/IronGate/Valheim/adminlist.txt
   ```

4. **Add SteamID64**\
   Enter the SteamID64 of the player who should become admin. Add one SteamID64 per line:

   ```text
   76561198012345678
   76561198087654321
   ```

5. **Start the server**\
   Save the file and start your server.

> [!NOTE]
> Changes to `adminlist.txt` only take effect after a server restart.
