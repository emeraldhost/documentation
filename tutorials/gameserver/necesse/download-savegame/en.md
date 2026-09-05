---
slug: "download-savegame"
language: "en"
title: "How to Download the Savegame of Your Necesse Server"
description: "Download a savegame from a Necesse server"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["necesse"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Download Savegame"
sort: 5
related: ["gameserver/necesse/add-savegame", "gameserver/necesse/create-backup", "gameserver/necesse/join-server", "gameserver/necesse/kick-ban-players"]
---

You can download the world of your server to your PC at any time – for example as an additional backup, to continue playing it in single player or to transfer it to another server.

> [!WARNING]
> **Caution**
>
> Stop your server before downloading the world. Necesse rewrites the world file regularly while running – downloading during operation can result in an incomplete file.

1. **Stop the server**\
   Stop your server via the dashboard.

2. **Connect via SFTP**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection).

3. **Open the directory**\
   Change into the following directory:

   ```text
   /saves/worlds/
   ```

   > [!NOTE]
   > If the worlds of your server are located directly in `/saves/`, use that folder.

4. **Download the world file**\
   Download the `.zip` file of your world to your PC.

5. **Start the server**\
   Start your server again.

> [!NOTE]
> **Which file is the right one?**
>
> The world your server loads is shown in the dashboard under **settings** in the **Save Name** field. If it says `My_World`, for example, then `My_World.zip` is your current world.

> [!WARNING]
> **Caution**
>
> Do not extract the `.zip` file. Both the server and the game expect the world as a packed archive.

> [!TIP]
> **Continue the world in single player**
>
> Place the downloaded `.zip` file into the following directory to open the world locally:
>
> ```text
> %appdata%\Necesse\saves\worlds
> ```

> [!TIP]
> **Back up the configuration as well**
>
> If you also want to save your server settings, download the following file in addition:
>
> ```text
> /cfg/server.cfg
> ```

> [!NOTE]
> **Regular backups**
>
> For automatic or regular backups you can also use the backup feature: [Create Backup](/tutorials/gameserver/necesse/create-backup).
