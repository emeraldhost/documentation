---
slug: "add-savegame"
language: "en"
title: "How to Add a Savegame to Your Windrose Server"
description: "Add a savegame to a Windrose server"
tags: []
date: "2026-04-14"
visibility: "public"
cta: "gameserver"
product_keys: ["windrose"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Add Savegame"
sort: 1
related: ["gameserver/windrose/change-max-players", "gameserver/windrose/change-server-name", "gameserver/windrose/change-world-settings", "gameserver/windrose/create-backup"]
---

You can transfer a local save to your server to continue playing with an existing world.

## Find the local savegame

1. **Open savegame folder**\
   Press `Windows Key + R`, enter the following path and confirm with Enter:

   ```text
   %LOCALAPPDATA%\R5\Saved\SaveProfiles
   ```

2. **Navigate to the world folder**\
   Open your SteamID folder and navigate to:

   ```text
   RocksDB\<GameVersion>\Worlds\
   ```

3. **Identify the world folder**\
   Inside you will find a folder named with an alphanumeric string – the `<WorldID>`. This corresponds to the island ID of your world.

## Upload and apply the savegame

1. **Stop the server**\
   Stop your server via the dashboard.

2. **Connect via SFTP**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection).

3. **Upload world folder**\
   Upload the entire `<WorldID>` folder to the following directory:

   ```text
   /R5/Saved/SaveProfiles/Default/RocksDB/<GameVersion>/Worlds/
   ```

   The placeholder `<GameVersion>` must match the server's version folder name.

4. **Set island ID**\
   For the server to load the uploaded world, set the [island ID](/tutorials/gameserver/windrose/set-island-id) to the name of the `<WorldID>` folder.

5. **Start the server**\
   Start your server.

> [!WARNING]
> Make sure the `<GameVersion>` of your savegame matches the server version. Saves from older versions may be incompatible.

> [!TIP]
> Create a backup of your existing server savegame before uploading, in case you want to switch back later.
