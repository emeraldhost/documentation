---
slug: "create-backup"
language: "en"
title: "How to Create a Backup of Your Solace Crafting Server"
description: "Create a backup of a Solace Crafting server"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["solace-crafting"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Create Backup"
sort: 2
related: ["gameserver/solace-crafting/add-savegame", "gameserver/solace-crafting/download-savegame", "gameserver/solace-crafting/join-server"]
---

Regular backups of your Solace Crafting server protect you from data loss – whether due to a failed update, an accidentally overwritten world folder or a wrongly entered world name.

## When should you create a backup?

- Before updating the server version
- Before major changes to the `servercfg.dat`
- Before uploading a different world
- Before switching the world via the `worldSaveToUse` value
- At regular intervals so you always have a safe state to return to

## Create a backup

You can find the exact process for creating, managing and restoring a backup in the general guide: [Create Backup](/tutorials/gameserver/create-backup).

> [!TIP]
> Lock important backups (e.g. before major changes) so they cannot be overwritten by automatic backups. Also download especially important backups to your PC in case your backup limit is reached.

> [!NOTE]
> If you only want to save the world itself, you can also download the world folder separately: [Download savegame](/tutorials/gameserver/solace-crafting/download-savegame).

> [!WARNING]
> **Caution**
>
> Stop your server before creating or restoring a backup. Solace Crafting saves automatically while running – a backup taken during operation can contain an incomplete save.

> [!IMPORTANT]
> If you set `worldSaveToUse` to a name for which no world folder exists, the server creates a new world on startup. Your previous progress is not deleted, but it is no longer loaded. A recent backup is the quickest way back in such a case.

> [!NOTE]
> Automatic backups as well as restarts can be requested free of charge via a support ticket. The "Scheduled Tasks" feature is currently in development and will be released this year.
