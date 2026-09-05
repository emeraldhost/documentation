---
slug: "create-backup"
language: "en"
title: "How to Create a Backup of Your Echoes of Elysium Server"
description: "Create a backup of an Echoes of Elysium server"
tags: []
date: "2026-07-31"
visibility: "public"
cta: "gameserver"
product_keys: ["echoes-of-elysium"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Create Backup"
sort: 2
related: ["gameserver/echoes-of-elysium/add-savegame", "gameserver/echoes-of-elysium/download-savegame", "gameserver/echoes-of-elysium/join-server"]
---

Regular backups of your Echoes of Elysium server protect you from data loss – whether due to a failed update, a broken configuration or an accidentally overwritten save.

## When should you create a backup?

- Before updating the server version
- Before major changes to the configuration
- Before uploading a different save
- Before moving to another server
- At regular intervals so you always have a safe state to return to

## Create a backup

You can find the exact process for creating, managing and restoring a backup in the general guide: [Create Backup](/tutorials/gameserver/create-backup).

> [!WARNING]
> **Caution**
>
> Stop your server before creating or restoring a backup. While running, the server regularly writes to the world data – a backup taken during operation can be incomplete.

> [!TIP]
> Lock important backups (e.g. before major changes) so they cannot be overwritten by automatic backups. Also download especially important backups to your PC in case your backup limit is reached.

> [!NOTE]
> If you only want to save the world itself, you can also download it separately: [Download savegame](/tutorials/gameserver/echoes-of-elysium/download-savegame). The complete save lives in the `world` directory.

## Server-side backups

Echoes of Elysium also comes with its own backup feature. In the **dashboard** under **Settings** you will find the following fields for it:

| Field | Meaning |
|-------|---------|
| **Enable Auto Server Backup** | Defines whether the server creates its own backups (`true` or `false`). |
| **Backup Interval** | Time between two backups in minutes. |
| **Max Backups** | Number of backups the server keeps. |
| **Save Interval** | Interval in minutes at which the server saves the running world. |

After changing a value, restart your server so the new values are applied.

> [!IMPORTANT]
> These server-side backups are stored on the same server as your world. They are no replacement for a full backup created via the dashboard – for important states always use the backup function in addition and download it to your PC.

> [!NOTE]
> **Enable Auto Server Backup** is disabled by default. If you want to use the server-side backups, you first have to set the field to `true`.

> [!NOTE]
> Automatic backups as well as restarts can be requested free of charge via a support ticket. The "Scheduled Tasks" feature is currently in development and will be released this year.
