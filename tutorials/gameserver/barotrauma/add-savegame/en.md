---
slug: "add-savegame"
language: "en"
title: "How to Upload a Savegame to Your Barotrauma Server"
description: "Upload a savegame to a Barotrauma server"
tags: []
date: "2026-04-10"
visibility: "public"
cta: "gameserver"
product_keys: ["barotrauma"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Add Savegame"
sort: 5
related: ["gameserver/barotrauma/add-custom-ranks", "gameserver/barotrauma/add-mods", "gameserver/barotrauma/change-game-mode", "gameserver/barotrauma/change-max-players"]
---

You can transfer your local savegame to your server and continue playing there.

## How to find your savegame

You can find your Barotrauma savegames on your PC at:

```text
%LOCALAPPDATA%\Daedalic Entertainment GmbH\Barotrauma\Multiplayer\
```

The savegames are `.save` files in this folder.

## How to upload the savegame

> [!WARNING]
> Stop your server before uploading files, otherwise they will be overwritten by the server.

1. **Stop the server**\
   Stop your server via the dashboard.

2. **Connect via SFTP**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection).

3. **Upload savegame**\
   Upload your `.save` file to the following directory on the server:

   ```text
   /config/Multiplayer/
   ```

4. **Start the server**\
   Start your server and select the uploaded savegame.
