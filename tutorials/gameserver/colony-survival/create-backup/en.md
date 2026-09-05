---
slug: "create-backup"
language: "en"
title: "How to Create a Backup of Your Colony Survival Server"
description: "Create a backup of a Colony Survival server"
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
short_title: "Create Backup"
sort: 4
related: ["gameserver/colony-survival/add-mods", "gameserver/colony-survival/add-savegame", "gameserver/colony-survival/download-savegame", "gameserver/colony-survival/join-server"]
---

Regular backups of your Colony Survival server protect you from data loss – whether due to a failed update, an incompatible mod or a corrupted world database.

## When should you create a backup?

- Before updating the server version
- Before adding, updating or removing mods
- Before uploading a different save
- Before major changes to the configuration
- At regular intervals so you always have a safe state to return to

## Create a backup

You can find the exact process for creating, managing and restoring a backup in the general guide: [Create Backup](/tutorials/gameserver/create-backup).

> [!WARNING]
> **Caution**
>
> Stop your server before creating or restoring a backup. Colony Survival stores the world in a SQLite database that is constantly written to while the server is running – a backup taken during operation can be incomplete.

> [!TIP]
> Lock important backups (e.g. before major changes) so they cannot be overwritten by automatic backups. Also download especially important backups to your PC in case your backup limit is reached.

## Create a backup while the server is running

Colony Survival ships its own backup command that you can run in the in-game chat. It works well as a quick intermediate save, but it does not replace a full backup.

1. **Open the chat**\
   Press `T` in the game to open the chat.

2. **Create the backup**\
   Run the following command:

   ```text
   /backup
   ```

   > [!NOTE]
   > `/backup` saves the world to disk first and then packs it into a ZIP archive. A separate `/save` is not needed for this.

3. **Save the world in between**\
   If you only want to persist the current state without creating an archive, this is enough:

   ```text
   /save
   ```

4. **Download the backup**\
   The server stores the ZIP archive in the savegame directory of your server:

   ```text
   /gamedata/savegames/
   ```

   Download it to your PC via [SFTP](/tutorials/gameserver/establish-sftp-connection).

> [!NOTE]
> You need admin rights on the server to use `/save` and `/backup`. To learn how to grant them, see [Add Admin](/tutorials/gameserver/colony-survival/add-admin).

> [!NOTE]
> If you only want to save the world itself, you can also download the world folder directly: [Download savegame](/tutorials/gameserver/colony-survival/download-savegame).

> [!NOTE]
> Automatic backups as well as restarts can be requested free of charge via a support ticket. The "Scheduled Tasks" feature is currently in development and will be released this year.
