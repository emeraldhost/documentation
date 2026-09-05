---
slug: "download-savegame"
language: "en"
title: "How to Download the Savegame of Your Core Keeper Server"
description: "Download a savegame from a Core Keeper server"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["core-keeper"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Download Savegame"
sort: 12
related: ["gameserver/core-keeper/change-world-seed", "gameserver/core-keeper/create-backup", "gameserver/core-keeper/join-server", "gameserver/core-keeper/enable-seasonal-events"]
---

You can download your server's world to your PC at any time – for example as an extra backup, to archive it, or to move it to another server.

> [!WARNING]
> **Caution**
>
> Stop your server before downloading the files. While the server is running it saves regularly, so you would end up downloading an incomplete or corrupted save.

1. **Stop the server**\
   Stop your server via the dashboard.

2. **Connect via SFTP**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection).

3. **Open the directory**\
   Navigate to the following directory:

   ```text
   /.config/unity3d/Pugstorm/CoreKeeper/DedicatedServer/worlds/
   ```

4. **Download the world file**\
   Download your world's `.world.gzip` file to your PC, for example `0.world.gzip`. If several worlds are stored in the directory, simply download all files to be on the safe side.

5. **Start the server**\
   Start your server again.

> [!TIP]
> **Finding the right world file**
>
> The number before `.world.gzip` is the **World Index**. You can tell which world your server currently loads from the World Index in the server settings: if it is set to `0`, then `0.world.gzip` is the active world; for `3` it is `3.world.gzip`.

> [!TIP]
> If you want to continue playing the downloaded world locally in singleplayer, place the `.world.gzip` file on your PC in the following folder:
>
> ```text
> %USERPROFILE%\AppData\LocalLow\Pugstorm\Core Keeper\Steam\<SteamID>\worlds
> ```

> [!TIP]
> **Restoring the save later**
>
> If you want to transfer the save back to a server later on, follow the guide [Add savegame](/tutorials/gameserver/core-keeper/add-savegame).

> [!NOTE]
> **Regular backups**
>
> For automatic or regular backups you can also use the backup function: [Create backup](/tutorials/gameserver/core-keeper/create-backup).
