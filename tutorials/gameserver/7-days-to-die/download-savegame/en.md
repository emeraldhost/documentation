---
slug: "download-savegame"
language: "en"
title: "How to Download the Savegame of Your 7 Days to Die Server"
description: "Download the savegame from a 7 Days to Die server"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["7-days-to-die"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Download Savegame"
sort: 7
related: ["gameserver/7-days-to-die/change-map", "gameserver/7-days-to-die/create-backup", "gameserver/7-days-to-die/enable-cheat-mode", "gameserver/7-days-to-die/enable-whitelist"]
---

You can download your server's savegame to your PC at any time – for example as an additional backup, to archive it, or to move it to another server.

> [!WARNING]
> **Caution**
>
> Stop your server before downloading the files. While the server is running it saves regularly – otherwise you would download an incomplete or corrupted savegame.

1. **Stop the server**\
   Stop your server via the dashboard.

2. **Connect via SFTP**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection).

3. **Download the world data**\
   Navigate to the following directory:

   ```text
   /.local/share/7DaysToDie/GeneratedWorlds/
   ```

   Download the complete folder of your world (terrain, buildings) to your PC.

4. **Download the save data**\
   Then navigate to the following directory:

   ```text
   /Saves/
   ```

   Download the complete folder of your save (player progress, placements) to your PC.

5. **Start the server**\
   Start your server again.

> [!TIP]
> The file `serverconfig.xml` tells you which folders are the right ones: the value of `GameWorld` is the name of your world folder in `GeneratedWorlds/`, the value of `GameName` is the name of your save folder in `/Saves/`.

> [!WARNING]
> **Caution**
>
> Always download both folders. Without the matching world data, the save cannot be restored later.

> [!TIP]
> **Restoring the savegame**
>
> If you want to transfer the savegame back to a server later, follow the guide [Add savegame](/tutorials/gameserver/7-days-to-die/add-savegame).

> [!NOTE]
> **Regular backups**
>
> For automatic or regular backups you can also use the backup function: [Create backup](/tutorials/gameserver/7-days-to-die/create-backup).
