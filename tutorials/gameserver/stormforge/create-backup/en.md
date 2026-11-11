---
slug: "create-backup"
language: "en"
title: "How to Create a Backup of Your Stormforge Server"
description: "Create a backup of your Stormforge server so your world and settings are protected from data loss."
tags: []
date: "2026-11-11"
visibility: "public"
cta: "gameserver"
product_keys: ["stormforge"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Create Backup"
sort: 7
related: ["gameserver/stormforge/download-savegame", "gameserver/stormforge/add-savegame", "gameserver/stormforge/reset-world"]
---

Regular backups of your Stormforge server protect you from data loss, for example due to a broken configuration, an accidentally deleted world or an overwritten save.

## When should you create a backup?

- Before major changes to `settings.json`
- Before uploading a different save
- Before resetting the world
- Before moving to another server
- At regular intervals so you always have a safe state to return to

## Create a backup

You can find the exact process for creating, managing and restoring a backup in the general guide: [Create Backup](/tutorials/gameserver/create-backup).

> [!WARNING]
> Stop your server before creating or restoring a backup. A backup taken while the server is running can be incomplete.

> [!TIP]
> Lock important backups (e.g. before major changes) so they cannot be overwritten by automatic backups. Also download especially important backups to your PC in case your backup limit is reached.

> [!NOTE]
> **Backing up the world only**\
> If you only want to save the world itself, you can also download it separately: [Download savegame](/tutorials/gameserver/stormforge/download-savegame). The world lives in the folder `/saves/Worlds/<World-ID>/`. Your world settings, however, are stored in the file `/settings.json`. A complete backup therefore includes this file as well.

> [!NOTE]
> **Automatic backups**\
> You can set up automatic backups and restarts yourself in the dashboard under **Schedules**, see [Set Up Scheduled Tasks](/tutorials/gameserver/set-up-scheduled-tasks).
