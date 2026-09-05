---
slug: "create-custom-world"
language: "en"
title: "How to Create a Custom World on Your RuneScape: Dragonwilds Server"
description: "Create a custom world on a RuneScape Dragonwilds server"
tags: []
date: "2026-04-01"
visibility: "public"
cta: "gameserver"
product_keys: ["runescape-dragonwilds"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Create Custom World"
sort: 3
related: ["gameserver/runescape-dragonwilds/add-savegame", "gameserver/runescape-dragonwilds/create-backup", "gameserver/runescape-dragonwilds/download-savegame", "gameserver/runescape-dragonwilds/set-admin-password"]
---

By default, the server automatically creates a world with standard settings. You can instead create a world with your own settings and upload it to the server.

## Create custom world

1. **Launch the game**\
   Start RuneScape: Dragonwilds locally on your PC.

2. **Create new world**\
   Create a new world and select the **Custom** option. In the **Advanced** tab you can adjust all settings to your liking.

3. **Enter the world**\
   Enter the world briefly so the save file is generated. Then exit the world again.

4. **Find savegame**\
   The created `.sav` file can be found at:

   ```text
   %LOCALAPPDATA%\RSDragonwilds\Saved\SaveGames
   ```

## Upload world to the server

1. **Stop the server**\
   Stop your server via the dashboard.

2. **Connect via SFTP**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection).

3. **Upload savegame**\
   Upload the `.sav` file to the following directory:

   ```text
   /RSDragonwilds/Saved/SaveGames/
   ```

4. **Set world name**\
   Open the **Settings** in the dashboard and enter the filename of your savegame (without `.sav`) in the **SaveGame** field.

5. **Start the server**\
   Start your server. The custom world will now be loaded.

> [!NOTE]
> The server automatically loads the most recent `.sav` file in the SaveGames folder. If a world already exists, it will be replaced by the uploaded file.
