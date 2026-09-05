---
slug: "download-savegame"
language: "en"
title: "How to Download the Savegame of Your StarRupture Server"
description: "Download a savegame from a StarRupture server"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["starrupture"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Download Savegame"
sort: 3
related: ["gameserver/starrupture/add-savegame", "gameserver/starrupture/create-backup", "gameserver/starrupture/join-server"]
---

You can download your server's save to your PC at any time – for example as an additional backup or to transfer it to another server.

> [!WARNING]
> **Caution**
>
> Stop your server before downloading the files. StarRupture saves automatically at regular intervals while running – otherwise you would download an incomplete save.

1. **Stop the server**\
   Stop your server via the dashboard.

2. **Connect via SFTP**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection).

3. **Open the directory**\
   Navigate to the following directory:

   ```text
   /StarRupture/Saved/SaveGames/
   ```

   Open the folder named after your session there. Which session your server uses is defined by the `SessionName` value in the file `/DSSettings.txt`.

4. **Download the files**\
   Download both files of the save to your PC:

   ```text
   AutoSave0.sav
   AutoSave0.met
   ```

5. **Start the server**\
   Start your server again.

> [!NOTE]
> The two files belong together: the `.sav` holds the actual save with world, base and progress, the `.met` contains the matching metadata. Always back them up together – without the `.met` the save cannot be loaded later.

> [!TIP]
> **Back up the configuration as well**
>
> If you also want to save your server settings, download the following file from the main directory in addition:
>
> ```text
> /DSSettings.txt
> ```
>
> It contains values such as `SessionName`, `SaveGameName` and the save interval.

> [!TIP]
> **Restoring the savegame**
>
> If you want to transfer the save back to a server later, follow the guide [Add savegame](/tutorials/gameserver/starrupture/add-savegame).

> [!NOTE]
> **Regular backups**
>
> For automatic or regular backups you can also use the backup function: [Create backup](/tutorials/gameserver/starrupture/create-backup).
