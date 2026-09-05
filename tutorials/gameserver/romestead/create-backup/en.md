---
slug: "create-backup"
language: "en"
title: "How to Create a Backup of Your Romestead Server"
description: "Create a backup of a Romestead server"
tags: []
date: "2026-07-31"
visibility: "public"
cta: "gameserver"
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Create Backup"
sort: 1
related: ["gameserver/romestead/download-savegame", "gameserver/romestead/join-server", "gameserver/romestead/kick-ban-players"]
---

Regular backups of your Romestead server protect you from data loss – whether due to a failed update, a corrupted world file or an accidentally regenerated world.

## When should you create a backup?

- Before updating the server version
- Before major changes to the configuration
- Before creating a new world
- Before cleaning up the world, for example demolishing large builds
- At regular intervals so you always have a safe state to return to

## Create a backup

You can find the exact process for creating, managing and restoring a backup in the general guide: [Create Backup](/tutorials/gameserver/create-backup).

> [!TIP]
> **Save first**
>
> Run the `save` command in your server's **console** before creating the backup. This makes the server write the current state to disk in full, so your backup really contains everything.
>
> ```text
> save
> ```
>
> The server is frozen briefly while this save runs. `quicksave` saves in the background and lets the server keep running instead – which is why `save` is the safe choice for a backup.

> [!WARNING]
> **Caution**
>
> Stop your server before creating or restoring a backup. Romestead saves automatically every six minutes – a backup taken during operation can land in the middle of a save and end up incomplete.

> [!NOTE]
> The server additionally keeps its own rolling backup of your world and restores it automatically if the latest save cannot be loaded. This does not replace your own backup: it sits on the same server and only covers the previous save state.

> [!NOTE]
> If you only want to save the world itself, you can also download the world folder separately: [Download savegame](/tutorials/gameserver/romestead/download-savegame).

> [!TIP]
> Lock important backups (e.g. before major changes) so they cannot be overwritten by automatic backups. Also download especially important backups to your PC in case your backup limit is reached.

> [!NOTE]
> Automatic backups as well as restarts can be requested free of charge via a support ticket. The "Scheduled Tasks" feature is currently in development and will be released this year.
