---
slug: "create-backup"
language: "en"
title: "How to Create a Backup of Your Longvinter Server"
description: "Create a backup of a Longvinter server"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["longvinter"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Create Backup"
sort: 3
related: ["gameserver/longvinter/add-admin", "gameserver/longvinter/add-savegame", "gameserver/longvinter/download-savegame", "gameserver/longvinter/join-server"]
---

Regular backups of your Longvinter server protect you from data loss – whether due to a failed update, an accidentally overwritten save or a broken configuration.

## When should you create a backup?

- Before updating the server version
- Before major changes to the configuration
- Before uploading a different save
- Before cleaning up the world, for example removing tents
- At regular intervals so you always have a safe state to return to

## Create a backup

You can find the exact process for creating, managing and restoring a backup in the general guide: [Create Backup](/tutorials/gameserver/create-backup).

> [!TIP]
> Lock important backups (e.g. before major changes) so they cannot be overwritten by automatic backups. Also download especially important backups to your PC in case your backup limit is reached.

> [!NOTE]
> If you only want to save the world itself, you can also download the `SaveGames` folder separately: [Download savegame](/tutorials/gameserver/longvinter/download-savegame).

> [!WARNING]
> **Caution**
>
> Stop your server before creating or restoring a backup. Longvinter saves roughly every ten minutes while running – a backup taken during operation can contain an incomplete save. For the same reason the server overwrites any changes you make to `Game.ini` while it is running.

> [!TIP]
> **Enable server-side saves**
>
> Longvinter can additionally create its own backup of the save once per day. To enable it, add the following value to `/Longvinter/Saved/Config/LinuxServer/Game.ini` while the server is stopped:
>
> ```ini
> [/Game/Blueprints/Server/GM_Longvinter.GM_Longvinter_C]
> SaveBackups=true
> ```
>
> These copies are stored on your server and are no replacement for a real backup – they are lost together with the save folder if it gets damaged.

> [!NOTE]
> Automatic backups as well as restarts can be requested free of charge via a support ticket. The "Scheduled Tasks" feature is currently in development and will be released this year.
