---
slug: "add-savegame"
language: "en"
title: "How to Add a Savegame to Your RuneScape: Dragonwilds Server"
description: "Upload a savegame to a RuneScape Dragonwilds server"
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
short_title: "Add Savegame"
sort: 1
related: ["gameserver/runescape-dragonwilds/create-backup", "gameserver/runescape-dragonwilds/create-custom-world", "gameserver/runescape-dragonwilds/download-savegame", "gameserver/runescape-dragonwilds/set-admin-password"]
---

You can upload an existing singleplayer world to your server.

## Find savegame

Your local savegame can be found on your PC at:

```text
%LOCALAPPDATA%\RSDragonwilds\Saved\SaveGames
```

> [!TIP]
> Press `Windows + R` and enter `%LOCALAPPDATA%\RSDragonwilds\Saved\SaveGames` to open the folder directly.

The world file has the `.sav` extension.

## Upload savegame

1. **Stop the server**\
   Stop your server via the dashboard.

2. **Connect via SFTP**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection).

3. **Upload savegame**\
   Upload the `.sav` file to the following directory on the server:

   ```text
   /RSDragonwilds/Saved/SaveGames/
   ```

4. **Set world name**\
   Open the **Settings** in the dashboard and enter the filename of your savegame (without `.sav`) in the **SaveGame** field.

5. **Start the server**\
   Start your server.

> [!WARNING]
> Uploading will overwrite the existing save on the server.
