---
slug: "create-backup"
language: "en"
title: "How to Create a Backup of Your Kerbal Space Program Server"
description: "Create a backup of a Kerbal Space Program server"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["kerbal-space-program"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Create Backup"
sort: 4
related: ["gameserver/kerbal-space-program/add-mods", "gameserver/kerbal-space-program/add-savegame", "gameserver/kerbal-space-program/download-savegame", "gameserver/kerbal-space-program/join-server"]
---

Regular backups of your Kerbal Space Program server protect you from data loss – whether due to a failed update, a changed mod list or an accidentally overwritten savegame.

## When should you create a backup?

- Before updating DarkMultiPlayer or the game
- Before major changes to the configuration
- Before uploading a different savegame
- Before changing the mod list (`mod-control.txt`)
- At regular intervals so you always have a safe state to return to

## Create a backup

You can find the exact process for creating, managing and restoring a backup in the general guide: [Create Backup](/tutorials/gameserver/create-backup).

> [!TIP]
> Lock important backups (e.g. before major changes) so they cannot be overwritten by automatic backups. Also download especially important backups to your PC in case your backup limit is reached.

> [!NOTE]
> If you only want to save the world itself, you can also download the `Universe` folder separately: [Download Savegame](/tutorials/gameserver/kerbal-space-program/download-savegame).

> [!WARNING]
> **Caution**
>
> Stop your server before creating or restoring a backup. DarkMultiPlayer constantly writes vessel and player data into the `Universe` folder while running – a backup taken during operation can contain an incomplete savegame.

> [!TIP]
> **Back up the configuration as well**
>
> Besides the `Universe` folder, the `Config` folder is worth saving: it contains `Settings.txt`, `admins.txt`, the ban lists and your `mod-control.txt`.

> [!NOTE]
> Automatic backups as well as restarts can be requested free of charge via a support ticket. The "Scheduled Tasks" feature is currently in development and will be released this year.
