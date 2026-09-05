---
slug: "create-backup"
language: "en"
title: "How to Create a Backup of Your Avorion Server"
description: "Create a backup of an Avorion server"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["avorion"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Create Backup"
sort: 4
related: ["gameserver/avorion/add-mods", "gameserver/avorion/add-savegame", "gameserver/avorion/download-savegame", "gameserver/avorion/join-server"]
---

Regular backups of your Avorion server protect you from data loss – whether due to a failed update, a broken mod or an accidentally overwritten galaxy.

## When should you create a backup?

- Before updating the server version
- Before major changes to the configuration
- Before adding or removing mods
- Before uploading a different galaxy
- At regular intervals so you always have a safe state to return to

## Create a backup

You can find the exact process for creating, managing and restoring a backup in the general guide: [Create Backup](/tutorials/gameserver/create-backup).

> [!WARNING]
> **Caution**
>
> Stop your server before creating or restoring a backup. Avorion saves automatically while running – a backup taken during operation can contain an incomplete galaxy.

> [!TIP]
> **Save first**
>
> If your server is still running, you can write the current state manually beforehand: enter `/save` in the console of the dashboard, wait until the process has finished, and then stop the server via the dashboard.

> [!NOTE]
> If you only want to save the game state itself, you can also download the galaxy folder separately: [Download savegame](/tutorials/gameserver/avorion/download-savegame).

> [!TIP]
> Lock important backups (e.g. before major changes) so they cannot be overwritten by automatic backups. Also download especially important backups to your PC in case your backup limit is reached.

> [!NOTE]
> Automatic backups as well as restarts can be requested free of charge via a support ticket. The "Scheduled Tasks" feature is currently in development and will be released this year.
