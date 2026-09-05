---
slug: "create-backup"
language: "en"
title: "How to Create a Backup of Your No One Survived Server"
description: "Create a backup of a No One Survived server"
tags: []
date: "2026-07-31"
visibility: "public"
cta: "gameserver"
product_keys: ["no-one-survived"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Create Backup"
sort: 5
related: ["gameserver/no-one-survived/change-game-settings", "gameserver/no-one-survived/change-map", "gameserver/no-one-survived/download-savegame", "gameserver/no-one-survived/join-server"]
---

A regular backup of your No One Survived server protects you from data loss – whether caused by a failed update, an accidentally overwritten savegame file or a wrongly set save name.

## When should you create a backup?

- Before updates of the server version
- Before larger changes to the configuration
- Before uploading a different savegame
- Before changing the save name or the map
- At regular intervals, so you always have a safe state to fall back on

## Create a backup

You can find the exact steps for creating, managing and restoring a backup in the general guide: [Create Backup](/tutorials/gameserver/create-backup).

> [!NOTE]
> If you only want to secure the savegame, you can also download the savegame files individually: [Download Savegame](/tutorials/gameserver/no-one-survived/download-savegame).

> [!WARNING]
> Stop your server before you create or restore a backup. The server writes to the savegame files while running – a backup taken during operation can contain an incomplete savegame.

> [!TIP]
> Lock important backups (e.g. before big changes) so they do not get overwritten by automatic backups. Additionally download particularly important backups to your PC in case your backup limit is reached.

> [!NOTE]
> **What belongs to the savegame?**
>
> The actual savegames are stored as `.sav` files under `/WRSH/Saved/SaveGames/WorldSaves/`, the server's intermediate saves under `/WRSH/Saved/SaveGames/AutoSave/`. Your server settings are stored in the file `/WRSH/Saved/Config/WindowsServer/Game.ini` – a backup via the dashboard secures all of these files together.

> [!NOTE]
> Automatic backups as well as restarts can be requested free of charge via a support ticket. The "Scheduled Tasks" feature is currently in development and will be released this year.
