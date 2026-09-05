---
slug: "download-savegame"
language: "en"
title: "How to Download the Savegame of Your Arma Reforger Server"
description: "Download the savegame from an Arma Reforger server"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["arma-reforger"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Download Savegame"
sort: 5
related: ["gameserver/arma-reforger/add-savegame", "gameserver/arma-reforger/become-admin", "gameserver/arma-reforger/kick-ban-players", "gameserver/arma-reforger/change-scenario"]
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
   /config/profile/save/
   ```

4. **Download the files**\
   Download the complete save folder including all files it contains to your PC.

5. **Start the server**\
   Start your server again.

> [!TIP]
> **Restoring the savegame**
>
> If you want to transfer the savegame back to a server later, follow the guide [Add savegame](/tutorials/gameserver/arma-reforger/add-savegame).

> [!NOTE]
> **Regular backups**
>
> For automatic or regular backups you can also use the backup function: [Create backup](/tutorials/gameserver/arma-reforger/create-backup).
