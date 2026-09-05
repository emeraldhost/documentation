---
slug: "create-backup"
language: "en"
title: "How to Create a Backup of Your SCUM Server"
description: "Create a backup of a SCUM server"
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
short_title: "Create Backup"
sort: 3
related: ["gameserver/scum/add-admin", "gameserver/scum/add-savegame", "gameserver/scum/download-savegame", "gameserver/scum/join-server"]
---

Regular backups of your SCUM server protect you from data loss – whether due to a failed update, a corrupted database or an accidentally overwritten save.

## When should you create a backup?

- Before updating the server version
- Before major changes to the configuration
- Before uploading a different save
- Before cleaning up the world, for example removing bases or vehicles
- At regular intervals so you always have a safe state to return to

## Create a backup

You can find the exact process for creating, managing and restoring a backup in the general guide: [Create Backup](/tutorials/gameserver/create-backup).

> [!TIP]
> Lock important backups (e.g. before major changes) so they cannot be overwritten by automatic backups. Also download especially important backups to your PC in case your backup limit is reached.

> [!NOTE]
> If you only want to save the world itself, you can also download the database separately: [Download savegame](/tutorials/gameserver/scum/download-savegame).

> [!WARNING]
> **Caution**
>
> Stop your server before creating or restoring a backup. SCUM stores the entire world in a SQLite database that is written to while the server is running – a backup taken during operation can be incomplete.

> [!NOTE]
> Automatic backups as well as restarts can be requested free of charge via a support ticket. The "Scheduled Tasks" feature is currently in development and will be released this year.
