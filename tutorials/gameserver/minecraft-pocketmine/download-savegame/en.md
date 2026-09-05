---
slug: "download-savegame"
language: "en"
title: "How to Download the Savegame of Your Minecraft PocketMine Edition Server"
description: "Download a savegame from a Minecraft PocketMine Edition server"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["minecraft-pocketmine"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Download Savegame"
sort: 5
related: ["gameserver/minecraft-pocketmine/add-savegame", "gameserver/minecraft-pocketmine/create-backup", "gameserver/minecraft-pocketmine/join-server", "gameserver/minecraft-pocketmine/kick-ban-players"]
---

You can download your server's world to your PC at any time – for example as an additional backup, for archiving or to transfer it to another server.

> [!WARNING]
> **Caution**
>
> Stop your server before downloading the files. While running, the server constantly writes to the world database – otherwise you would download an incomplete or corrupted save.

1. **Find the active world**\
   Open the `server.properties` file in the main folder of your server. The `level-name` entry shows the folder name of the currently loaded world:

   ```text
   level-name=my_world
   ```

2. **Stop the server**\
   Stop your server via the dashboard.

3. **Connect via SFTP**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection) or use the file browser in the dashboard.

4. **Open the directory**\
   In the main folder of your server, navigate to the following folder:

   ```text
   worlds
   ```

5. **Download the world folder**\
   Every world is stored here as its own folder. Download the folder of your world **completely** – including the `db` subfolder as well as the files `level.dat` and `levelname.txt`.

6. **Start the server**\
   Start your server again.

> [!IMPORTANT]
> The `db` subfolder contains the actual LevelDB database with all chunks. Without it the downloaded save is worthless.

> [!TIP]
> **Back up the configuration as well**
>
> If you also want to save your server settings, download these additional files and folders from the main folder of your server:
>
> ```text
> server.properties
> pocketmine.yml
> ops.txt
> white-list.txt
> banned-players.txt
> banned-ips.txt
> plugins
> plugin_data
> resource_packs
> ```
>
> The `plugin_data` folder holds the configurations of your plugins, and the `resource_packs` folder contains the packs themselves as well as the `resource_packs.yml` file.

> [!TIP]
> **Restoring the savegame**
>
> If you want to transfer the world back to a server later, follow the guide [Add savegame](/tutorials/gameserver/minecraft-pocketmine/add-savegame).

> [!NOTE]
> **Regular backups**
>
> For automatic or regular backups you can also use the backup function: [Create backup](/tutorials/gameserver/minecraft-pocketmine/create-backup).
