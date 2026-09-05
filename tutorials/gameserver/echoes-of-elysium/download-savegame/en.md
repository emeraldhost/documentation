---
slug: "download-savegame"
language: "en"
title: "How to Download the Savegame of Your Echoes of Elysium Server"
description: "Download a savegame from an Echoes of Elysium server"
tags: []
date: "2026-07-31"
visibility: "public"
cta: "gameserver"
product_keys: ["echoes-of-elysium"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Download Savegame"
sort: 3
related: ["gameserver/echoes-of-elysium/add-savegame", "gameserver/echoes-of-elysium/create-backup", "gameserver/echoes-of-elysium/join-server"]
---

You can download your server's save to your PC at any time – for example as an additional backup, for archiving or to transfer it to another server.

> [!WARNING]
> **Caution**
>
> Stop your server before downloading the files. While the server is running it saves regularly – otherwise you would download an incomplete or corrupted save.

1. **Stop the server**\
   Stop your server via the dashboard.

2. **Connect via SFTP**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection).

3. **Open the directory**\
   Navigate to the following directory:

   ```text
   /world/
   ```

   > [!NOTE]
   > The `world` directory is located in the main directory of your server, so the full path is `/home/container/world/`.

4. **Download the files**\
   Download the complete contents of this directory to your PC. Always transfer all files and subfolders so no part of the save is missing.

5. **Start the server**\
   Start your server again.

> [!NOTE]
> `world` contains the entire save of your world. There is no additional world name and no separate save file – this directory is your savegame.

> [!TIP]
> **Restoring the savegame**
>
> If you want to transfer the save back to a server later, follow the guide [Add savegame](/tutorials/gameserver/echoes-of-elysium/add-savegame).

> [!NOTE]
> **Regular backups**
>
> For automatic or regular backups you can also use the backup function: [Create backup](/tutorials/gameserver/echoes-of-elysium/create-backup).
