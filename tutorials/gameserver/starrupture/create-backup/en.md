---
slug: "create-backup"
language: "en"
title: "How to Create a Backup of Your StarRupture Server"
description: "Create a backup of a StarRupture server"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["starrupture"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Create Backup"
sort: 2
related: ["gameserver/starrupture/add-savegame", "gameserver/starrupture/download-savegame", "gameserver/starrupture/join-server"]
---

Regular backups of your StarRupture server protect you from data loss – whether due to a failed update, an accidentally overwritten save or a wrong value in `DSSettings.txt`.

## When should you create a backup?

- Before updating the server version
- Before major changes to the configuration
- Before uploading a different save
- Before creating a new world or switching the session
- At regular intervals so you always have a safe state to return to

## Create a backup

You can find the exact process for creating, managing and restoring a backup in the general guide: [Create Backup](/tutorials/gameserver/create-backup).

> [!TIP]
> Lock important backups (e.g. before major changes) so they cannot be overwritten by automatic backups. Also download especially important backups to your PC in case your backup limit is reached.

> [!NOTE]
> If you only want to save the world itself, you can also download the files of the session separately: [Download savegame](/tutorials/gameserver/starrupture/download-savegame).

> [!WARNING]
> **Caution**
>
> Stop your server before creating or restoring a backup. StarRupture saves automatically while running – every 300 seconds by default – so a backup taken during operation can contain an incomplete save.

> [!IMPORTANT]
> If the value `StartNewGame` in your `DSSettings.txt` is set to `"true"`, the server creates a new world on every start and overwrites the existing save. Check this value before starting a restored backup – see [Add savegame](/tutorials/gameserver/starrupture/add-savegame).

> [!NOTE]
> Automatic backups as well as restarts can be requested free of charge via a support ticket. The "Scheduled Tasks" feature is currently in development and will be released this year.
