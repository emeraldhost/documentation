---
slug: "download-savegame"
language: "en"
title: "How to Download the Savegame of Your Eco Server"
description: "Download a savegame from an Eco server"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["eco"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Download Savegame"
sort: 5
related: ["gameserver/eco/add-savegame", "gameserver/eco/create-backup", "gameserver/eco/join-server", "gameserver/eco/kick-ban-players"]
---

You can download your server's save to your PC at any time – for example as an additional backup or to transfer it to another server.

> [!WARNING]
> **Caution**
>
> Stop your server before downloading the files. Eco writes to the save regularly while running – otherwise you would download an incomplete state.

1. **Stop the server**\
   Stop your server via the dashboard.

2. **Connect via SFTP**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection).

3. **Open the directory**\
   Navigate to the following directory:

   ```text
   /Storage/
   ```

4. **Download the files**\
   Download both files to your PC:

   ```text
   Game.db
   Game.eco
   ```

5. **Start the server**\
   Start your server again.

> [!IMPORTANT]
> `Game.db` and `Game.eco` belong together and reference each other. Always back them up together – a single file cannot be loaded.

## What else is in the storage folder?

| File or folder | Content |
|----------------|---------|
| `Game.db` | Database containing the world and all objects |
| `Game.eco` | State of the world, including players, economy and laws |
| `Backup/` | Automatic snapshots the server creates itself and overwrites on a rolling basis |

> [!TIP]
> **Back up the configuration as well**
>
> If you also want to save your server settings, download the following folder in addition:
>
> ```text
> /Configs/
> ```
>
> It contains files such as `Network.eco`, `Users.eco` and `Storage.eco`.

> [!TIP]
> **Restoring the savegame**
>
> If you want to transfer the save back to a server later, follow the guide [Add savegame](/tutorials/gameserver/eco/add-savegame).

> [!NOTE]
> **Regular backups**
>
> For automatic or regular backups you can also use the backup function: [Create backup](/tutorials/gameserver/eco/create-backup).
