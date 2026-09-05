---
slug: "download-savegame"
language: "en"
title: "How to Download the Savegame of Your SCUM Server"
description: "Download a savegame from a SCUM server"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["scum"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Download Savegame"
sort: 4
related: ["gameserver/scum/add-savegame", "gameserver/scum/create-backup", "gameserver/scum/join-server", "gameserver/scum/kick-ban-players"]
---

You can download your server's save to your PC at any time – for example as an additional backup or to transfer it to another server.

> [!WARNING]
> **Caution**
>
> Stop your server before downloading the files. SCUM constantly writes to the database while running – otherwise you would download an incomplete or corrupted save.

1. **Stop the server**\
   Stop your server via the dashboard.

2. **Connect via SFTP**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection).

3. **Open the directory**\
   Navigate to the following directory:

   ```text
   /SCUM/Saved/SaveFiles/
   ```

4. **Download the files**\
   Download all three files to your PC:

   ```text
   SCUM.db
   SCUM.db-wal
   SCUM.db-shm
   ```

5. **Start the server**\
   Start your server again.

> [!NOTE]
> The three files belong together: `SCUM.db` is the actual database containing the world, bases, vehicles and characters, `SCUM.db-wal` is the write-ahead log and `SCUM.db-shm` the matching shared memory file. Always back them up together.

> [!TIP]
> **Back up the configuration as well**
>
> If you also want to save your server settings, download the following folder in addition:
>
> ```text
> /SCUM/Saved/Config/WindowsServer/
> ```
>
> It contains files such as `ServerSettings.ini`, `AdminUsers.ini` and `BannedUsers.ini`.

> [!TIP]
> **Restoring the savegame**
>
> If you want to transfer the save back to a server later, follow the guide [Add savegame](/tutorials/gameserver/scum/add-savegame).

> [!NOTE]
> **Regular backups**
>
> For automatic or regular backups you can also use the backup function: [Create backup](/tutorials/gameserver/scum/create-backup).
