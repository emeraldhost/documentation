---
slug: "download-savegame"
language: "en"
title: "How to Download the Savegame of Your No One Survived Server"
description: "Download the savegame from a No One Survived server"
tags: []
date: "2026-07-31"
visibility: "public"
cta: "gameserver"
product_keys: ["no-one-survived"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Download Savegame"
sort: 6
related: ["gameserver/no-one-survived/change-map", "gameserver/no-one-survived/create-backup", "gameserver/no-one-survived/join-server", "gameserver/no-one-survived/kick-ban-players"]
---

You can download your server's savegame to your PC at any time – for example as an additional backup, for archiving, or to transfer it to another server.

> [!WARNING]
> Stop your server before you download the files. While the server is running it saves regularly – otherwise you would download an incomplete or corrupted savegame.

1. **Stop the server**\
   Stop your server via the dashboard.

2. **Connect via SFTP**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection).

3. **Open the directory**\
   Change into the following directory:

   ```text
   /WRSH/Saved/SaveGames/WorldSaves/
   ```

4. **Download the savegame**\
   Download all `.sav` files that belong to your savegame. These are all files that start with your save name followed by an underscore – for example all files starting with `MyWorld_`.

   > [!NOTE]
   > **Which savegame is the active one?**
   >
   > Which savegame is currently loaded is shown by the save name in the **dashboard**. The server uses the files whose name before the first underscore matches that entry exactly.

5. **Download the automatic saves (optional)**\
   If you also want to secure the server's intermediate saves, change into the following directory and download the files there as well:

   ```text
   /WRSH/Saved/SaveGames/AutoSave/
   ```

6. **Back up the configuration (optional)**\
   If you also want to secure your server settings, download the following file in addition:

   ```text
   /WRSH/Saved/Config/WindowsServer/Game.ini
   ```

7. **Start the server**\
   Start your server again.

> [!TIP]
> **Load the savegame back in**
>
> If you want to transfer the savegame back onto a server later, follow the guide [Add Savegame](/tutorials/gameserver/no-one-survived/add-savegame).

> [!NOTE]
> **Regular backups**
>
> For automatic or regular backups you can also use the backup function: [Create Backup](/tutorials/gameserver/no-one-survived/create-backup).
