---
slug: "create-backup"
language: "en"
title: "How to Create a Backup of Your Nightingale Server"
description: "Create a backup of a Nightingale server"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["nightingale"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Create Backup"
sort: 3
related: ["gameserver/nightingale/add-admin", "gameserver/nightingale/add-savegame", "gameserver/nightingale/download-savegame", "gameserver/nightingale/join-server"]
---

Regular backups of your Nightingale server protect you from data loss – whether due to a failed update, an accidentally reset server state or a botched character import.

## When should you create a backup?

- Before updating the server version
- Before major changes to the configuration
- Before a new character connects for the first time, because character and realm data can be transferred to the server in the process
- Before uploading a different save
- Before resetting the server state
- At regular intervals so you always have a safe state to return to

## Create a backup

You can find the exact process for creating, managing and restoring a backup in the general guide: [Create Backup](/tutorials/gameserver/create-backup).

> [!TIP]
> Lock important backups (e.g. before major changes) so they cannot be overwritten by automatic backups. Also download especially important backups to your PC in case your backup limit is reached.

> [!NOTE]
> If you only want to save the world itself, you can also download the save folders separately: [Download Savegame](/tutorials/gameserver/nightingale/download-savegame).

> [!WARNING]
> **Caution**
>
> Stop your server before creating or restoring a backup. Nightingale constantly writes to the world data while it is running – a backup taken during operation can contain an incomplete save.

## The server's own automatic copy

> [!NOTE]
> Nightingale also creates a simple copy on its own: on the first server start on a new day of the week, the server copies the entire `Offline` folder to `OfflineBackup`.
>
> ```text
> /NWX/Saved/Offline
> /NWX/Saved/OfflineBackup
> ```
>
> This copy sits on the same server and is overwritten regularly. It is therefore **no** replacement for a proper backup, but it is a useful lifeline as long as it is still recent.

> [!NOTE]
> Automatic backups as well as restarts can be requested free of charge via a support ticket. The "Scheduled Tasks" feature is currently in development and will be released this year.
