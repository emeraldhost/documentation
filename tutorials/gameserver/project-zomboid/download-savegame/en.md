---
slug: "download-savegame"
language: "en"
title: "How to Download the Savegame of Your Project Zomboid Server"
description: "Download a savegame from a Project Zomboid server"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["project-zomboid"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Download Savegame"
sort: 8
related: ["gameserver/project-zomboid/change-server-name", "gameserver/project-zomboid/create-backup", "gameserver/project-zomboid/enable-server-list", "gameserver/project-zomboid/join-server"]
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

3. **Open the directory**\
   Go to the following directory:

   ```text
   /Zomboid/Saves/Multiplayer/
   ```

4. **Download the files**\
   Download the complete savegame folder from this directory to your PC. The folder contains the entire savegame of your server – always download it in full, not just individual files from it.

5. **Start the server**\
   Start your server again.

> [!TIP]
> **Find the right folder**
>
> The `Multiplayer/` directory contains one folder per savegame. If there are several folders, you can identify the currently used savegame by the most recent modification date.

> [!TIP]
> **Restore the savegame**
>
> If you want to transfer the savegame back to a server later, follow the guide [Add savegame](/tutorials/gameserver/project-zomboid/add-savegame).

> [!NOTE]
> **Regular backups**
>
> For automatic or regular backups you can also use the backup function: [Create backup](/tutorials/gameserver/project-zomboid/create-backup).
