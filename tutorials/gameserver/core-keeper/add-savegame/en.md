---
slug: "add-savegame"
language: "en"
title: "How to Add a Savegame to Your Core Keeper Server"
description: "Upload a savegame to a Core Keeper server"
tags: []
date: "2026-03-22"
visibility: "public"
cta: "gameserver"
product_keys: ["core-keeper"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Add Savegame"
sort: 3
related: ["gameserver/core-keeper/add-admin", "gameserver/core-keeper/add-mods", "gameserver/core-keeper/ban-players", "gameserver/core-keeper/change-content-bundle"]
---

You can upload an existing singleplayer world to your server.

## Find savegame

Your local savegame can be found on your PC at:

```text
%USERPROFILE%\AppData\LocalLow\Pugstorm\Core Keeper\Steam\<SteamID>\worlds
```

> [!TIP]
> Press `Windows + R`, enter `%USERPROFILE%\AppData\LocalLow\Pugstorm\Core Keeper\Steam\` and navigate to the folder with your SteamID, then to `worlds`.

The world file is named e.g. `0.world.gzip`. The number before `.world.gzip` is the **World Index**.

## Upload savegame

1. **Stop the server**\
   Stop your server via the dashboard.

2. **Connect via SFTP**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection).

3. **Upload world**\
   Upload the `.world.gzip` file to the following directory:

   ```text
   /.config/unity3d/Pugstorm/CoreKeeper/DedicatedServer/worlds/
   ```

4. **Set World Index**\
   Make sure the **World Index** in the server settings matches the number of your world file.

   > [!TIP]
   > **Example**
   >
   > If your file is named `0.world.gzip`, the World Index must be `0`. For `3.world.gzip` it must be `3`.

5. **Start the server**\
   Start your server.

> [!WARNING]
> Uploading will overwrite the existing save on the server.
