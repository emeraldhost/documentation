---
slug: "download-savegame"
language: "en"
title: "How to Download the Savegame of Your V Rising Server"
description: "Download a savegame from a V Rising server"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["v-rising"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Download Savegame"
sort: 3
related: ["gameserver/v-rising/add-admin", "gameserver/v-rising/add-mods", "gameserver/v-rising/install-bepinex", "gameserver/v-rising/add-savegame"]
---

You can download your server's savegame to your PC at any time – for example as an additional backup, to archive a save, or to move it to another server.

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
   Saves/v1
   ```

4. **Download the savegame folder**\
   Open the folder for your save game and download all files it contains to your PC. The easiest way is to download the entire savegame folder with its contents so that nothing is missing.

5. **Start the server**\
   Start your server again.

> [!TIP]
> The `Saves/v1` directory contains one folder per world. Usually you will find only one folder there – if there are several, you can identify the active save by the most recent modification date.

> [!TIP]
> **Restoring the savegame**
>
> If you want to transfer the save back to a server later, follow the guide [Add savegame](/tutorials/gameserver/v-rising/add-savegame).

> [!NOTE]
> **Regular backups**
>
> For automatic or regular backups you can also use the backup function: [Create backup](/tutorials/gameserver/v-rising/create-backup).
