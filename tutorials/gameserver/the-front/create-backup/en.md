---
slug: "create-backup"
language: "en"
title: "How to Create a Backup of Your The Front Server"
description: "Create a backup of a The Front server"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["the-front"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Create Backup"
sort: 3
related: ["gameserver/the-front/add-admin", "gameserver/the-front/add-savegame", "gameserver/the-front/download-savegame", "gameserver/the-front/join-server"]
---

Regular backups of your The Front server protect you from data loss – whether due to a failed update, a corrupted save or a configuration change you want to revert.

## When should you create a backup?

- Before updating the server version
- Before major changes to the configuration
- Before uploading a different save
- Before a planned wipe of your server
- At regular intervals so you always have a safe state to return to

## Create a backup

You can find the exact process for creating, managing and restoring a backup in the general guide: [Create Backup](/tutorials/gameserver/create-backup).

> [!WARNING]
> **Caution**
>
> Stop your server before creating or restoring a backup. The Front saves regularly while running – a backup taken during operation can be incomplete.

> [!TIP]
> Lock important backups (e.g. before major changes) so they cannot be overwritten by automatic backups. Also download especially important backups to your PC in case your backup limit is reached.

> [!NOTE]
> If you only want to save the world itself, you can also download the `GameStates` folder separately: [Download savegame](/tutorials/gameserver/the-front/download-savegame).

> [!NOTE]
> Automatic backups as well as restarts can be requested free of charge via a support ticket. The "Scheduled Tasks" feature is currently in development and will be released this year.
