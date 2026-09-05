---
slug: "download-savegame"
language: "en"
title: "How to Download the Savegame of Your Craftopia Server"
description: "Download a savegame from a Craftopia server"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["craftopia"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Download Savegame"
sort: 3
related: ["gameserver/craftopia/add-savegame", "gameserver/craftopia/create-backup", "gameserver/craftopia/join-server", "gameserver/craftopia/kick-ban-players"]
---

You can download your server's save to your PC at any time – for example as an additional backup or to transfer it to another server.

> [!WARNING]
> **Caution**
>
> Stop your server before downloading the files. Craftopia saves automatically while running – if you download during that time, the save can be incomplete or corrupted.

1. **Stop the server**\
   Stop your server via the dashboard.

2. **Connect via SFTP**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection).

3. **Open the directory**\
   Navigate to the main directory of your server. There you will find the folder:

   ```text
   /DedicatedServerSave/
   ```

4. **Download the folder**\
   Download the **complete folder** including all files and subfolders to your PC.

5. **Start the server**\
   Start your server again.

> [!WARNING]
> **Caution**
>
> The `DedicatedServerSave` folder contains all worlds of your server – the world files themselves are located in its subfolder `Worlds`. Always download the folder in full so nothing is missing.

> [!NOTE]
> **Different save location**
>
> By default the save is stored in `DedicatedServerSave/`. Which folder is actually used on your server is defined in the file `/ServerSetting.ini` in the `[Save]` section at the value `savePath`.

> [!TIP]
> **Back up the configuration as well**
>
> If you also want to save your server settings, download the following file in addition:
>
> ```text
> /ServerSetting.ini
> ```
>
> It contains the world name, difficulty, game mode and the autosave settings, among others. You will need the world name if you want to restore the save later on.

> [!TIP]
> **Restoring the savegame**
>
> If you want to transfer the save back to a server later, follow the guide [Add savegame](/tutorials/gameserver/craftopia/add-savegame).

> [!NOTE]
> **Regular backups**
>
> For automatic or regular backups you can also use the backup function: [Create backup](/tutorials/gameserver/craftopia/create-backup).
