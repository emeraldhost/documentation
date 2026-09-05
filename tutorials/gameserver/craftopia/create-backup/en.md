---
slug: "create-backup"
language: "en"
title: "How to Create a Backup of Your Craftopia Server"
description: "Create a backup of a Craftopia server"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["craftopia"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Create Backup"
sort: 2
related: ["gameserver/craftopia/add-savegame", "gameserver/craftopia/download-savegame", "gameserver/craftopia/join-server", "gameserver/craftopia/kick-ban-players"]
---

Regular backups of your Craftopia server protect you from data loss – whether due to a failed update, a corrupted save or a world name that was entered incorrectly.

## When should you create a backup?

- Before updating the server version
- Before major changes to the `ServerSetting.ini`
- Before uploading a different save
- Before changing the world name or the game mode
- At regular intervals so you always have a safe state to return to

## Create a backup

You can find the exact process for creating, managing and restoring a backup in the general guide: [Create Backup](/tutorials/gameserver/create-backup).

> [!TIP]
> Lock important backups (e.g. before major changes) so they cannot be overwritten by automatic backups. Also download especially important backups to your PC in case your backup limit is reached.

> [!NOTE]
> If you only want to save the world itself, you can also download the `DedicatedServerSave` folder separately: [Download savegame](/tutorials/gameserver/craftopia/download-savegame).

> [!WARNING]
> **Caution**
>
> Stop your server before creating or restoring a backup. Craftopia saves automatically while running – a backup taken during operation can contain an incomplete save.

> [!NOTE]
> **Automatic saving**
>
> How often your server saves is controlled in the file `/ServerSetting.ini` in the `[Save]` section: `autoSaveSec` defines the interval in seconds (default `300`, meaning every five minutes) and `autoSavePerHour` additionally controls hourly saving. This automatic saving is no replacement for a backup though – it always overwrites the same save.

> [!NOTE]
> Automatic backups as well as restarts can be requested free of charge via a support ticket. The "Scheduled Tasks" feature is currently in development and will be released this year.
