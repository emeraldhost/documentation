---
slug: "create-backup"
language: "en"
title: "How to Create a Backup of Your No Love Lost Server"
description: "Create a backup of a No Love Lost server"
tags: []
date: "2026-07-31"
visibility: "public"
cta: "gameserver"
product_keys: ["no-love-lost"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Create Backup"
sort: 1
related: ["gameserver/no-love-lost/join-server"]
---

A backup of your No Love Lost server secures the server files and the installation. That way you can quickly get back to a working state after a failed update or corrupted server files.

## When should you create a backup?

- Before updating the server version
- Before changing the startup parameters of your server
- Before reinstalling the server files
- At regular intervals so you always have a safe state to return to

## Create a backup

You can find the exact process for creating, managing and restoring a backup in the general guide: [Create Backup](/tutorials/gameserver/create-backup).

> [!WARNING]
> **Caution**
>
> Stop your server before creating or restoring a backup. This makes sure no files are written in the meantime and the backup is complete.

> [!NOTE]
> No Love Lost does not create a configuration file on the server – the server is controlled exclusively through its startup parameters. A backup therefore mainly secures the server installation and the game files.

> [!TIP]
> Lock important backups (e.g. before major changes) so they cannot be overwritten by automatic backups. Also download especially important backups to your PC in case your backup limit is reached.

> [!NOTE]
> Automatic backups as well as restarts can be requested free of charge via a support ticket. The "Scheduled Tasks" feature is currently in development and will be released this year.
