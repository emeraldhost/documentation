---
slug: "create-backup"
language: "en"
title: "How to Create a Backup of Your Necesse Server"
description: "Create a backup of a Necesse server"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["necesse"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Create Backup"
sort: 4
related: ["gameserver/necesse/add-mods", "gameserver/necesse/add-savegame", "gameserver/necesse/download-savegame", "gameserver/necesse/join-server"]
---

Regular backups of your Necesse server protect you from data loss – whether due to a failed update, an incompatible mod or an accidentally overwritten world.

## When should you create a backup?

- Before updating the server version
- Before major changes to the configuration
- Before uploading a different world
- Before adding, updating or removing mods
- At regular intervals so you always have a safe state to return to

## Create a backup

You can find the exact process for creating, managing and restoring a backup in the general guide: [Create Backup](/tutorials/gameserver/create-backup).

> [!TIP]
> Lock important backups (e.g. before major changes) so they cannot be overwritten by automatic backups. Also download especially important backups to your PC in case your backup limit is reached.

> [!NOTE]
> If you only want to save the world itself, you can also download the world file separately: [Download savegame](/tutorials/gameserver/necesse/download-savegame).

> [!WARNING]
> **Caution**
>
> Stop your server before creating or restoring a backup. Necesse rewrites the world regularly while running – a backup taken during operation can contain an incomplete world file.

> [!TIP]
> **Shut down cleanly**
>
> Always stop your server via the **dashboard** or with the `/stop` command in the console. That way Necesse writes the world to disk completely beforehand.

> [!NOTE]
> Automatic backups as well as restarts can be requested free of charge via a support ticket. The "Scheduled Tasks" feature is currently in development and will be released this year.
