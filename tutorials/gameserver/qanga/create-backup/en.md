---
slug: "create-backup"
language: "en"
title: "How to Create a Backup of Your QANGA Server"
description: "Create a backup of a QANGA server"
tags: []
date: "2026-07-31"
visibility: "public"
cta: "gameserver"
product_keys: ["qanga"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Create Backup"
sort: 1
related: ["gameserver/qanga/join-server"]
---

Regular backups of your QANGA server protect you from data loss – whether due to a failed update, a corrupted save or a change to the world you want to undo.

This matters even more in QANGA: the progress of your shared world lives on the server. If the world data is lost, the progress stored inside it is gone with it.

## When should you create a backup?

- Before updating the server version
- Before major changes to the startup parameters in the dashboard
- Before cleaning up the world, for example removing bases or vehicles
- Before restoring an older state
- At regular intervals so you always have a safe state to return to

## Create a backup

You can find the exact process for creating, managing and restoring a backup in the general guide: [Create Backup](/tutorials/gameserver/create-backup).

> [!WARNING]
> **Caution**
>
> Stop your server before creating or restoring a backup. While running, the server writes to the world data regularly – a backup taken during operation can land in the middle of a save and contain an incomplete state.

> [!TIP]
> Lock important backups (e.g. before major changes) so they cannot be overwritten by automatic backups. Also download especially important backups to your PC in case your backup limit is reached.

> [!NOTE]
> QANGA does not use configuration files for the server – all server settings are set through the startup parameters in the **dashboard**. A backup therefore mainly secures the server files and the world data. Write down your settings from the dashboard separately, since they are stored there and not inside the server files.

> [!NOTE]
> Automatic backups as well as restarts can be requested free of charge via a support ticket. The "Scheduled Tasks" feature is currently in development and will be released this year.
