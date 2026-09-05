---
slug: "add-savegame"
language: "en"
title: "How to Add a Savegame to Your SCUM Server"
description: "Add a savegame to a SCUM server"
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
short_title: "Add Savegame"
sort: 2
related: ["gameserver/scum/add-admin", "gameserver/scum/create-backup", "gameserver/scum/download-savegame", "gameserver/scum/join-server"]
---

The complete save of a SCUM server lives in a single SQLite database called `SCUM.db`. It contains the world, all bases, vehicles, characters and their progress.

> [!NOTE]
> The file name `SCUM.db` is fixed. You therefore do not have to enter a world or save name anywhere in the configuration – the server name has nothing to do with the savegame.

## Files of the savegame

A save consists of three files that always belong together:

| File | Content |
|------|---------|
| `SCUM.db` | The actual database with the world, bases, vehicles and characters |
| `SCUM.db-wal` | Write-ahead log of the database |
| `SCUM.db-shm` | Shared memory file of the write-ahead log |

## Upload the savegame

1. **Stop the server**\
   Stop your server via the dashboard. While the server is running it constantly writes to the database.

2. **Connect via SFTP**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection).

3. **Open the directory**\
   Navigate to the following directory:

   ```text
   /SCUM/Saved/SaveFiles/
   ```

4. **Remove the old files**\
   Delete the existing files `SCUM.db`, `SCUM.db-wal` and `SCUM.db-shm` there. If `SCUM.db-wal` or `SCUM.db-shm` are left behind, they will overwrite parts of your uploaded database on startup.

   > [!WARNING]
   > This removes the current save of your server. Create a [backup](/tutorials/gameserver/scum/create-backup) beforehand or download the existing save in case you want to switch back.

5. **Upload the new database**\
   Upload your own `SCUM.db` into the same directory. The file name has to be exactly `SCUM.db`.

6. **Start the server**\
   Start your server. The new save is now loaded.

## Find your local savegame

You can find your single player save on your PC under:

```text
C:\Users\<Username>\AppData\Local\SCUM\Saved\SaveFiles\
```

The database is called `SCUM.db` there as well.

> [!IMPORTANT]
> There is **no official procedure** for transferring a single player save to a dedicated server. Player and world data are stored in the same database and cannot be separated without editing the database directly. An attempted transfer can therefore fail or lead to unexpected behaviour – only work with copies and create a backup beforehand.

> [!TIP]
> Switching between two saves works most reliably when both of them come from a dedicated server – for example when moving to another server.
