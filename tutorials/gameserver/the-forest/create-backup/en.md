---
slug: "create-backup"
language: "en"
title: "How to Create a Backup of Your The Forest Server"
description: "Create a backup of a The Forest server"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["the-forest"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Create Backup"
sort: 3
related: ["gameserver/the-forest/add-admin", "gameserver/the-forest/add-savegame", "gameserver/the-forest/download-savegame", "gameserver/the-forest/join-server"]
---

Regular backups of your The Forest server protect you from data loss – whether due to a failed update, an accidentally overwritten save slot or a wrongly set startup value.

## When should you create a backup?

- Before updating the server version
- Before major changes to the configuration
- Before uploading a different savegame
- Before changing the save slot or the Init Type
- At regular intervals so you always have a safe state to return to

## Create a backup

You can find the exact process for creating, managing and restoring a backup in the general guide: [Create Backup](/tutorials/gameserver/create-backup).

> [!TIP]
> Lock important backups (e.g. before major changes) so they cannot be overwritten by automatic backups. Also download especially important backups to your PC in case your backup limit is reached.

> [!NOTE]
> If you only want to save the world itself, you can also download the slot folder separately: [Download Savegame](/tutorials/gameserver/the-forest/download-savegame).

> [!WARNING]
> **Caution**
>
> Stop your server before creating or restoring a backup. The Forest saves automatically at regular intervals – a backup taken during operation can contain an incomplete savegame.

> [!IMPORTANT]
> The chat command `/restart` is **not** a way to restart your server: according to the official command list it deletes the save data. Always use the **dashboard** to restart.

> [!NOTE]
> Automatic backups as well as restarts can be requested free of charge via a support ticket. The "Scheduled Tasks" feature is currently in development and will be released this year.
