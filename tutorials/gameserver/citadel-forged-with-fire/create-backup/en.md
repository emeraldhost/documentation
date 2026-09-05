---
slug: "create-backup"
language: "en"
title: "How to Create a Backup of Your Citadel Forged with Fire Server"
description: "Create a backup of a Citadel Forged with Fire server"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["citadel-forged-with-fire"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Create Backup"
sort: 3
related: ["gameserver/citadel-forged-with-fire/add-admin", "gameserver/citadel-forged-with-fire/add-savegame", "gameserver/citadel-forged-with-fire/download-savegame", "gameserver/citadel-forged-with-fire/join-server"]
---

Regular backups of your Citadel Forged with Fire server protect you from data loss – whether due to a failed update, an accidentally overwritten save or a broken configuration.

## When should you create a backup?

- Before updating the server version
- Before major changes to the configuration
- Before uploading a different save
- Before cleaning up the world, for example deleting characters or buildings
- At regular intervals so you always have a safe state to return to

## Create a backup

You can find the exact process for creating, managing and restoring a backup in the general guide: [Create Backup](/tutorials/gameserver/create-backup).

> [!TIP]
> Lock important backups (e.g. before major changes) so they cannot be overwritten by automatic backups. Also download especially important backups to your PC in case your backup limit is reached.

> [!NOTE]
> If you only want to save the world itself, you can also download the savegame folder separately: [Download savegame](/tutorials/gameserver/citadel-forged-with-fire/download-savegame).

> [!WARNING]
> **Caution**
>
> Stop your server before creating or restoring a backup. Your server saves automatically while running – a backup taken during operation can contain an incomplete save.

> [!TIP]
> **Force a save first**
>
> If you do not want to wait for the next automatic save, you can run the chat command `/admin_autosave` as a logged-in admin. The server then immediately writes the character data of all currently connected players. Stop your server afterwards anyway before you create the backup. See [Add Admin](/tutorials/gameserver/citadel-forged-with-fire/add-admin) for how to get admin rights.

> [!NOTE]
> Automatic backups as well as restarts can be requested free of charge via a support ticket. The "Scheduled Tasks" feature is currently in development and will be released this year.
