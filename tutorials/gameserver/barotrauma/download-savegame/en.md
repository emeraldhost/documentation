---
slug: "download-savegame"
language: "en"
title: "How to Download the Savegame of Your Barotrauma Server"
description: "Download the savegame from a Barotrauma server"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["barotrauma"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Download Savegame"
sort: 11
related: ["gameserver/barotrauma/change-server-name", "gameserver/barotrauma/create-backup", "gameserver/barotrauma/enable-server-list", "gameserver/barotrauma/join-server"]
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
   Navigate to the following directory:

   ```text
   /config/Multiplayer/
   ```

4. **Download the files**\
   Download the `.save` file you want to your PC. If you want to back up all campaigns, download the entire contents of the folder.

5. **Start the server**\
   Start your server again.

> [!TIP]
> The file name of the `.save` file matches the campaign name you see when selecting the savegame in the game. If there are several `.save` files in the folder, this is how you find the right one.

> [!TIP]
> **Restoring the savegame**
>
> If you want to transfer the savegame back to a server later, follow the guide [Add savegame](/tutorials/gameserver/barotrauma/add-savegame).

> [!NOTE]
> **Regular backups**
>
> For automatic or regular backups you can also use the backup function: [Create backup](/tutorials/gameserver/barotrauma/create-backup).
