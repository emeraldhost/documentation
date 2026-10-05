---
slug: "add-savegame"
language: "en"
title: "How to Add a Savegame to Your The Bus Server"
description: "Upload a savegame to a The Bus server"
tags: []
date: "2026-04-11"
visibility: "public"
updated: "2026-10-05"
cta: "gameserver"
product_keys: ["the-bus"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Add Savegame"
sort: 15
related: ["gameserver/the-bus/enable-ai-buses", "gameserver/the-bus/add-mods", "gameserver/the-bus/join-server", "gameserver/the-bus/kick-ban-players"]
---

You can transfer a savegame to your server and continue playing there.

> [!WARNING]
> If a file with the same name already exists in the target folder, it will be overwritten during the upload. Create a [backup](/tutorials/gameserver/the-bus/create-backup) beforehand if you want to keep the existing savegame.

> [!NOTE]
> Savegames from older game versions (e.g. from Early Access) are not necessarily compatible with the current version. After starting, also check that the server is running the map you played the savegame on – you can find out how to switch the map under [Change Map](/tutorials/gameserver/the-bus/change-map).

1. **Stop the server**\
   Stop your server via the dashboard.

2. **Connect via SFTP**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection).

3. **Upload savegame**\
   Upload the complete contents of your saved `SaveGames` folder to the following directory on the server, e.g. from the guide [Download Savegame](/tutorials/gameserver/the-bus/download-savegame):

   ```text
   /TheBus/Saved/SaveGames/
   ```

4. **Start the server**\
   Start your server, join it and check whether your previous progress has been loaded.
