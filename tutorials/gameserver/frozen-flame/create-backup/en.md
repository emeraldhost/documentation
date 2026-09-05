---
slug: "create-backup"
language: "en"
title: "How to Create a Backup of Your Frozen Flame Server"
description: "Create a backup of a Frozen Flame server"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["frozen-flame"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Create Backup"
sort: 3
related: ["gameserver/frozen-flame/add-admin", "gameserver/frozen-flame/add-savegame", "gameserver/frozen-flame/download-savegame", "gameserver/frozen-flame/join-server"]
---

Regular backups of your Frozen Flame server protect you from data loss – whether due to a failed update, an accidentally overwritten save or removed player progress.

## When should you create a backup?

- Before updating the server version
- Before major changes to the configuration
- Before uploading a different save
- Before switching the game mode between Cataclysm and Campaign
- Before removing player profiles with `Admin_RemoveProfile`
- At regular intervals so you always have a safe state to return to

## Create a backup

You can find the exact process for creating, managing and restoring a backup in the general guide: [Create Backup](/tutorials/gameserver/create-backup).

> [!TIP]
> Lock important backups (e.g. before major changes) so they cannot be overwritten by automatic backups. Also download especially important backups to your PC in case your backup limit is reached.

> [!NOTE]
> If you only want to save the world itself, you can also download the `SaveGames` folder separately: [Download savegame](/tutorials/gameserver/frozen-flame/download-savegame).

> [!WARNING]
> **Caution**
>
> Stop your server before creating or restoring a backup. Frozen Flame writes to the save while running – a backup taken during operation can be incomplete. Run the command `Admin_SaveAll` via RCON beforehand so the current state is written to disk: [Add Admin](/tutorials/gameserver/frozen-flame/add-admin).

> [!NOTE]
> Automatic backups as well as restarts can be requested free of charge via a support ticket. The "Scheduled Tasks" feature is currently in development and will be released this year.
