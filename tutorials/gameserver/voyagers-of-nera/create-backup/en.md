---
slug: "create-backup"
language: "en"
title: "How to Create a Backup of Your Voyagers of Nera Server"
description: "Create a backup of a Voyagers of Nera server"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["voyagers-of-nera"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Create Backup"
sort: 2
related: ["gameserver/voyagers-of-nera/add-savegame", "gameserver/voyagers-of-nera/download-savegame", "gameserver/voyagers-of-nera/join-server"]
---

Regular backups of your Voyagers of Nera server protect you from data loss – whether due to a failed update, an accidentally deleted savegame folder or a failed world transfer.

## When should you create a backup?

- Before updating the server version
- Before major changes to the configuration
- Before uploading a different savegame
- Before deleting or renaming folders inside `PersistedData`
- At regular intervals so you always have a safe state to return to

## Create a backup

You can find the exact process for creating, managing and restoring a backup in the general guide: [Create Backup](/tutorials/gameserver/create-backup).

> [!TIP]
> Lock important backups (e.g. before major changes) so they cannot be overwritten by automatic backups. Also download especially important backups to your PC in case your backup limit is reached.

> [!NOTE]
> If you only want to save the world itself, you can also download your world folder separately: [Download Savegame](/tutorials/gameserver/voyagers-of-nera/download-savegame).

> [!WARNING]
> **Caution**
>
> Stop your server before creating or restoring a backup. Voyagers of Nera saves automatically at regular intervals – a backup taken during operation can contain an incomplete savegame.

> [!NOTE]
> **What belongs to the savegame?**
>
> Both your world and your server settings are stored in `/BoatGame/Saved/PersistedData/`. A backup of that directory therefore contains both: your world folder and the `CustomConfig` folder.

> [!NOTE]
> Automatic backups as well as restarts can be requested free of charge via a support ticket. The "Scheduled Tasks" feature is currently in development and will be released this year.
