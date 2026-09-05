---
slug: "create-backup"
language: "en"
title: "How to Create a Backup of Your Eco Server"
description: "Create a backup of an Eco server"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["eco"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Create Backup"
sort: 4
related: ["gameserver/eco/add-mods", "gameserver/eco/add-savegame", "gameserver/eco/download-savegame", "gameserver/eco/join-server"]
---

Regular backups of your Eco server protect you from data loss – whether due to a failed update, a broken mod or an accidentally reset world.

## When should you create a backup?

- Before updating the server version
- Before adding or removing [mods](/tutorials/gameserver/eco/add-mods)
- Before major changes to the configuration files
- Before uploading a different save
- At regular intervals so you always have a safe state to return to

## Create a backup

You can find the exact process for creating, managing and restoring a backup in the general guide: [Create Backup](/tutorials/gameserver/create-backup).

> [!WARNING]
> **Caution**
>
> Stop your server before creating or restoring a backup. Eco writes the save to disk regularly – the interval is controlled by the value `SaveFrequency` in `/Configs/Storage.eco`. A backup taken during operation can therefore be incomplete.

> [!TIP]
> Lock important backups (e.g. before major changes) so they cannot be overwritten by automatic backups. Also download especially important backups to your PC in case your backup limit is reached.

> [!NOTE]
> If you only want to save the world itself, you can also download the two save files separately: [Download savegame](/tutorials/gameserver/eco/download-savegame).

> [!NOTE]
> **The server's own snapshots**
>
> Eco additionally creates its own snapshots in the folder `/Storage/Backup/`. These are overwritten on a rolling basis and are no replacement for your own backup – do not rely on them alone for important states.

> [!NOTE]
> Automatic backups as well as restarts can be requested free of charge via a support ticket. The "Scheduled Tasks" feature is currently in development and will be released this year.
