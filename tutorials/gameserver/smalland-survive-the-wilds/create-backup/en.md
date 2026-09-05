---
slug: "create-backup"
language: "en"
title: "How to Create a Backup of Your Smalland Survive the Wilds Server"
description: "Create a backup of a Smalland Survive the Wilds server"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["smalland-survive-the-wilds"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Create Backup"
sort: 2
related: ["gameserver/smalland-survive-the-wilds/add-savegame", "gameserver/smalland-survive-the-wilds/download-savegame", "gameserver/smalland-survive-the-wilds/join-server"]
---

Regular backups of your Smalland Survive the Wilds server protect you from data loss – whether due to a failed update, a corrupted world file or an accidentally overwritten savegame.

## When should you create a backup?

- Before updating the server version
- Before major changes to the configuration
- Before uploading a different savegame
- Before changing the world name
- Before cleaning up the world, for example demolishing large bases
- At regular intervals so you always have a safe state to return to

## Create a backup

You can find the exact process for creating, managing and restoring a backup in the general guide: [Create Backup](/tutorials/gameserver/create-backup).

> [!TIP]
> Lock important backups (e.g. before major changes) so they cannot be overwritten by automatic backups. Also download especially important backups to your PC in case your backup limit is reached.

> [!NOTE]
> If you only want to save the world itself, you can also download the folder containing the world files separately: [Download savegame](/tutorials/gameserver/smalland-survive-the-wilds/download-savegame).

> [!WARNING]
> **Caution**
>
> Stop your server before creating or restoring a backup. The server writes to the world file while it is running – a backup taken during operation can be incomplete.

> [!CAUTION]
> **Characters are not included**
>
> A server backup only saves the world data. Characters are stored locally on each player's PC and can neither be backed up nor restored through the server.

> [!NOTE]
> Automatic backups as well as restarts can be requested free of charge via a support ticket. The "Scheduled Tasks" feature is currently in development and will be released this year.
