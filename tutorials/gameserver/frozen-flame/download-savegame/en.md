---
slug: "download-savegame"
language: "en"
title: "How to Download the Savegame of Your Frozen Flame Server"
description: "Download a savegame from a Frozen Flame server"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["frozen-flame"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Download Savegame"
sort: 4
related: ["gameserver/frozen-flame/add-savegame", "gameserver/frozen-flame/create-backup", "gameserver/frozen-flame/join-server", "gameserver/frozen-flame/kick-ban-players"]
---

You can download the save of your server to your PC at any time – for example as an additional backup or to transfer it to another server.

> [!WARNING]
> **Caution**
>
> Stop your server before downloading the files. As long as the server is running it keeps writing to the save – otherwise you would download an incomplete state.

1. **Save the world**\
   Run the following command via RCON so the current state is written to disk – see [Add Admin](/tutorials/gameserver/frozen-flame/add-admin):

   ```text
   Admin_SaveAll
   ```

2. **Stop the server**\
   Stop your server via the dashboard.

3. **Connect via SFTP**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection).

4. **Open the directory**\
   Navigate to the following directory:

   ```text
   /FrozenFlame/Saved/
   ```

5. **Download the folder**\
   Download the complete `SaveGames` folder to your PC:

   ```text
   /FrozenFlame/Saved/SaveGames/
   ```

6. **Start the server**\
   Start your server again.

> [!NOTE]
> Always back up the **complete** `SaveGames` folder. Which file inside it belongs to which part of the save is not documented – picking out individual files is therefore not a reliable backup.

> [!TIP]
> **Back up the configuration as well**
>
> If you also want to save your server settings, download the following folder in addition:
>
> ```text
> /FrozenFlame/Saved/Config/LinuxServer/
> ```
>
> It contains files such as the `Game.ini` and the `Engine.ini` of your server.

> [!TIP]
> **Restoring the savegame**
>
> If you want to transfer the save back to a server later, follow the guide [Add savegame](/tutorials/gameserver/frozen-flame/add-savegame).

> [!NOTE]
> **Regular backups**
>
> For automatic or regular backups you can also use the backup function: [Create backup](/tutorials/gameserver/frozen-flame/create-backup).
