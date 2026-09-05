---
slug: "create-backup"
language: "en"
title: "How to Create a Backup of Your The Lord of the Rings Return to Moria Server"
description: "Create a backup of a The Lord of the Rings Return to Moria server"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["the-lord-of-the-rings-return-to-moria"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Create Backup"
sort: 2
related: ["gameserver/the-lord-of-the-rings-return-to-moria/add-savegame", "gameserver/the-lord-of-the-rings-return-to-moria/download-savegame", "gameserver/the-lord-of-the-rings-return-to-moria/join-server", "gameserver/the-lord-of-the-rings-return-to-moria/kick-ban-players"]
---

Regular backups of your Return to Moria server protect you from data loss – whether due to a failed update, an accidentally overwritten world file or a wrong world name in the configuration.

## When should you create a backup?

- Before updating the server version
- Before major changes to `MoriaServerConfig.ini`
- Before uploading a different world
- Before changing the world name or the loaded world file
- At regular intervals so you always have a safe state to return to

## Create a backup

You can find the exact process for creating, managing and restoring a backup in the general guide: [Create Backup](/tutorials/gameserver/create-backup).

> [!TIP]
> Lock important backups (e.g. before major changes) so they cannot be overwritten by automatic backups. Also download especially important backups to your PC in case your backup limit is reached.

> [!NOTE]
> If you only want to save the world itself, you can also download the world file separately: [Download Savegame](/tutorials/gameserver/the-lord-of-the-rings-return-to-moria/download-savegame).

> [!WARNING]
> **Caution**
>
> Stop your server before creating or restoring a backup. Return to Moria saves while running – a backup taken during operation can contain an incomplete world.

> [!IMPORTANT]
> Always stop your server through the **dashboard**. Only then does the server save the current state and shut down cleanly. A forced shutdown can cost progress and make the next start take several minutes because the old online session is still hanging.

> [!NOTE]
> Automatic backups as well as restarts can be requested free of charge via a support ticket. The "Scheduled Tasks" feature is currently in development and will be released this year.
