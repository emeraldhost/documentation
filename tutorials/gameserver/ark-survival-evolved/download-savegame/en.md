---
slug: "download-savegame"
language: "en"
title: "How to Download the Savegame of Your ARK Survival Evolved Server"
description: "Download the savegame from an ARK Survival Evolved server"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["ark-survival-evolved"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Download Savegame"
sort: 5
related: ["gameserver/ark-survival-evolved/add-savegame", "gameserver/ark-survival-evolved/create-backup", "gameserver/ark-survival-evolved/join-server", "gameserver/ark-survival-evolved/kick-ban-players"]
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
   /ShooterGame/Saved/SavedArks/
   ```

4. **Download the files**\
   Download the savegame files from this directory to your PC. The safest approach is to transfer the entire contents of the folder so that the player and tribe data is saved alongside the world.

5. **Start the server**\
   Start your server again.

> [!TIP]
> **Restoring the savegame**
>
> If you want to transfer the savegame back to a server later, follow the guide [Add savegame](/tutorials/gameserver/ark-survival-evolved/add-savegame).

> [!NOTE]
> **Regular backups**
>
> For automatic or regular backups you can also use the backup function: [Create backup](/tutorials/gameserver/ark-survival-evolved/create-backup).
