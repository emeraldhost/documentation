---
slug: "download-savegame"
language: "en"
title: "How to Download the Savegame of Your Smalland Survive the Wilds Server"
description: "Download a savegame from a Smalland Survive the Wilds server"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["smalland-survive-the-wilds"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Download Savegame"
sort: 3
related: ["gameserver/smalland-survive-the-wilds/add-savegame", "gameserver/smalland-survive-the-wilds/create-backup", "gameserver/smalland-survive-the-wilds/join-server"]
---

You can download your server's savegame to your PC at any time – for example as an additional backup or to transfer it to another server.

> [!WARNING]
> **Caution**
>
> Stop your server before downloading the files. The server writes to the world file while it is running – otherwise you would download an incomplete savegame.

1. **Stop the server**\
   Stop your server via the dashboard.

2. **Connect via SFTP**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection).

3. **Open the directory**\
   Change to the following directory:

   ```text
   /SMALLAND/Saved/SaveGames/Worlds/
   ```

4. **Download the files**\
   Download the **complete** `Worlds` folder to your PC. It contains one `<worldname>.wld` file per world.

5. **Start the server**\
   Start your server again.

> [!NOTE]
> **Which file is the right one?**
>
> Which world your server loads is controlled by the **world name** in the **dashboard**. If it says `MyWorld`, then `MyWorld.wld` is your current savegame. When in doubt, simply download the entire folder.

> [!NOTE]
> Characters are **not** stored on the server, they are saved locally on each player's PC. Through the server you only back up the world data such as terrain, structures and tamed creatures. Every player backs up their own character by copying the following folder on their PC:
>
> ```text
> %LOCALAPPDATA%\SMALLAND\Saved\SaveGames\
> ```

> [!NOTE]
> **Settings**
>
> You do not need to back up a configuration file. Smalland Survive the Wilds does not have one – all server settings are set in the **dashboard** and passed to the server on startup.

> [!TIP]
> **Restoring the savegame**
>
> If you want to transfer the savegame back to a server later, follow the guide [Add savegame](/tutorials/gameserver/smalland-survive-the-wilds/add-savegame).

> [!NOTE]
> **Regular backups**
>
> For automatic or regular backups you can also use the backup function: [Create backup](/tutorials/gameserver/smalland-survive-the-wilds/create-backup).
