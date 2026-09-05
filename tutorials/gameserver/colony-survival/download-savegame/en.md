---
slug: "download-savegame"
language: "en"
title: "How to Download the Savegame of Your Colony Survival Server"
description: "Download a savegame from a Colony Survival server"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["colony-survival"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Download Savegame"
sort: 5
related: ["gameserver/colony-survival/add-savegame", "gameserver/colony-survival/create-backup", "gameserver/colony-survival/join-server", "gameserver/colony-survival/kick-ban-players"]
---

You can download the world of your server to your PC at any time – for example as an additional backup or to move it to another server.

> [!WARNING]
> **Caution**
>
> Stop your server before downloading the files. Colony Survival constantly writes to the world database while it is running – otherwise you would download an incomplete or corrupted save.

1. **Stop the server**\
   Stop your server via the dashboard.

2. **Connect via SFTP**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection).

3. **Open the directory**\
   Navigate to the following directory:

   ```text
   /gamedata/savegames/
   ```

4. **Download the world folder**\
   Download the complete folder of your world including all files. You can see its name in the **World Name** field in the **dashboard**.

   | File | Content |
   |------|---------|
   | `world.sqlite3` | The actual world as a SQLite database |
   | `world.sqlite3-wal` | Write-ahead log of the database (not always present) |
   | `world.sqlite3-shm` | Shared memory file of the write-ahead log (not always present) |
   | `worldconfig.json` | Display name, world type and enabled mods |
   | `permissionusers.json` | Player permissions (if created) |
   | `permissiongroups.json` | Custom permission groups (if created) |

5. **Start the server**\
   Start your server again.

> [!NOTE]
> Always download the **complete folder**. The files belong together: without `worldconfig.json` the save is missing the world type and the list of enabled mods, and without the `-wal` file the most recent changes to the world can be missing.

> [!TIP]
> **Back up your mods as well**
>
> If your world uses mods, also save the mod directory so the world can be loaded again later:
>
> ```text
> /gamedata/mods/
> ```

> [!TIP]
> **Restore the savegame**
>
> If you want to move the save back onto a server later, follow the guide [Add Savegame](/tutorials/gameserver/colony-survival/add-savegame).

> [!NOTE]
> **Regular backups**
>
> For automatic or regular backups you can also use the backup feature: [Create Backup](/tutorials/gameserver/colony-survival/create-backup).
