---
slug: "create-backup"
language: "en"
title: "How to Create a Backup of Your Myth of Empires Server"
description: "Create a backup of a Myth of Empires server"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["myth-of-empires"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Create Backup"
sort: 3
related: ["gameserver/myth-of-empires/add-admin", "gameserver/myth-of-empires/add-savegame", "gameserver/myth-of-empires/download-savegame", "gameserver/myth-of-empires/join-server"]
---

Regular backups of your Myth of Empires server protect you from data loss – whether due to a failed update, a corrupted save or a configuration change you want to revert.

## When should you create a backup?

- Before updating the server version
- Before major changes to the configuration
- Before uploading a different save
- Before a planned wipe of your server
- At regular intervals so you always have a safe state to return to

## Create a backup

You can find the exact process for creating, managing and restoring a backup in the general guide: [Create Backup](/tutorials/gameserver/create-backup).

> [!CAUTION]
> **Save before stopping**
>
> Save the world before you stop the server. To do so, run the command `cheat SaveWorld` in the game as an admin and then wait about 30 to 45 seconds until the save has finished. If the server is shut down while it is still writing, the save can be corrupted.

> [!WARNING]
> **Caution**
>
> Stop your server before creating or restoring a backup. Myth of Empires saves at regular intervals while running – a backup taken during operation can be incomplete.

> [!TIP]
> Lock important backups (e.g. before major changes) so they cannot be overwritten by automatic backups. Also download especially important backups to your PC in case your backup limit is reached.

> [!NOTE]
> If you only want to save the world itself, you can also download the `Saved` folder separately: [Download savegame](/tutorials/gameserver/myth-of-empires/download-savegame).

> [!NOTE]
> Automatic backups as well as restarts can be requested free of charge via a support ticket. The "Scheduled Tasks" feature is currently in development and will be released this year.
