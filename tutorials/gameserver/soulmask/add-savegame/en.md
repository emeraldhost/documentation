---
slug: "add-savegame"
language: "en"
title: "How to Upload a Savegame to Your Soulmask Server"
description: "Upload a savegame to a Soulmask server"
tags: []
date: "2026-04-10"
visibility: "public"
cta: "gameserver"
product_keys: ["soulmask"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Add Savegame"
sort: 3
related: ["gameserver/soulmask/add-admin", "gameserver/soulmask/add-mods", "gameserver/soulmask/change-map", "gameserver/soulmask/change-max-players"]
---

You can transfer your local savegame to your server and continue playing there.

## Find your savegame

You can find your Soulmask savegames on your PC at:

```text
%LocalAppData%\WS\<SteamID>\2646460\AutoGames\<InviteCode>\
```

Replace `<SteamID>` with your Steam ID and `<InviteCode>` with the invite code of your world.

## Upload the savegame

> [!WARNING]
> Stop your server before uploading files, otherwise they will be overwritten by the server.

1. **Stop the server**\
   Stop your server via the dashboard.

2. **Connect via SFTP**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection).

3. **Upload world data**\
   Upload the `world.db` file to the following directory on the server:

   ```text
   /WS/Saved/Worlds/Dedicated/Level01_Main/
   ```

4. **Upload settings (optional)**\
   If you want to transfer your gameplay settings as well, upload the `GameXishu.json` file to:

   ```text
   /WS/Saved/GameplaySettings/
   ```

5. **Start the server**\
   Start your server. Your savegame will now be loaded.

> [!WARNING]
> Uploading files will overwrite any existing savegame on the server.

> [!TIP]
> If your local settings file is named `GameXishu_2.json`, rename it to `GameXishu.json` before uploading.
