---
slug: "add-savegame"
language: "en"
title: "How to Add a Savegame to Your DayZ Server"
description: "Upload a savegame to a DayZ server"
tags: []
date: "2026-04-11"
visibility: "public"
cta: "gameserver"
product_keys: ["dayz"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Add Savegame"
sort: 3
related: ["gameserver/dayz/add-admin", "gameserver/dayz/add-mods", "gameserver/dayz/adjust-loot", "gameserver/dayz/change-map"]
---

You can transfer a savegame from another DayZ server to your server. The savegame is located in the `storage_1` folder.

> [!NOTE]
> DayZ saves are stored server-side only. This guide describes transferring savegames between DayZ servers, not from a singleplayer game.

> [!WARNING]
> Uploading will overwrite the existing savegame on the server. Create a backup beforehand if you want to keep the current savegame.

1. **Stop the server**\
   Stop your server via the dashboard.

2. **Connect via SFTP**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection).

3. **Upload savegame**\
   Upload your `storage_1` folder to the following directory on the server:

   ```text
   /mpmissions/dayzOffline.chernarusplus/storage_1/
   ```

   > [!TIP]
   > If you are using the Livonia map, the path is:
   >
   > ```text
   > /mpmissions/dayzOffline.enoch/storage_1/
   > ```

4. **Start the server**\
   Start your server. Your savegame will now be loaded.

> [!TIP]
> To obtain the savegame from another server, download the `storage_1` folder via SFTP from the source server.
