---
slug: "create-backup"
language: "en"
title: "How to Create a Backup of Your Operation Harsh Doorstop Server"
description: "Create a backup of an Operation Harsh Doorstop server"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["operation-harsh-doorstop"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Create Backup"
sort: 3
related: ["gameserver/operation-harsh-doorstop/add-admin", "gameserver/operation-harsh-doorstop/add-mods", "gameserver/operation-harsh-doorstop/join-server", "gameserver/operation-harsh-doorstop/kick-ban-players"]
---

Regular backups of your Operation Harsh Doorstop server protect you from data loss – whether due to a failed update, a broken configuration or an accidentally deleted admin list.

> [!NOTE]
> **No savegame, but still worth backing up**
>
> Operation Harsh Doorstop does not store a world state: every round starts from scratch and there is no savegame. What is worth backing up are your configuration files under `/HarshDoorstop/Saved/Config/LinuxServer/` (for example `Admins.cfg`, `Bans.cfg`, `MapCycle.cfg` and `Game.ini`) as well as uploaded mods under `/HarshDoorstop/Mods`.

## When should you create a backup?

- Before updating the server version
- Before major changes to the configuration
- Before adding or removing mods
- Before changing the admin and ban files
- At regular intervals so you always have a safe state to return to

## Create a backup

You can find the exact process for creating, managing and restoring a backup in the general guide: [Create Backup](/tutorials/gameserver/create-backup).

> [!TIP]
> Lock important backups (e.g. before major changes) so they cannot be overwritten by automatic backups. Also download especially important backups to your PC in case your backup limit is reached.

> [!WARNING]
> **Caution**
>
> Stop your server before creating or restoring a backup. The server writes its configuration files on shutdown – a backup taken during operation can contain an outdated state.

> [!TIP]
> **Back up individual files**
>
> You can also simply download your configuration files to your PC via [SFTP](/tutorials/gameserver/establish-sftp-connection). For a handful of small `.cfg` files that is the quickest way.

> [!NOTE]
> Automatic backups as well as restarts can be requested free of charge via a support ticket. The "Scheduled Tasks" feature is currently in development and will be released this year.
