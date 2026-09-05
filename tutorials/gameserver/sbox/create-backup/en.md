---
slug: "create-backup"
language: "en"
title: "How to Create a Backup of Your s&box Server"
description: "Create a backup of an s&box server"
tags: []
date: "2026-07-31"
visibility: "public"
cta: "gameserver"
product_keys: ["sbox"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Create Backup"
sort: 4
related: ["gameserver/sbox/change-gamemode", "gameserver/sbox/change-map", "gameserver/sbox/join-server", "gameserver/sbox/kick-ban-players"]
---

Regular backups of your s&box server protect you from data loss – whether due to a failed update, a faulty configuration or a gamemode switch after which the server no longer starts.

## When should you create a backup?

- Before updating the server version
- Before switching the gamemode or the map
- Before changing `users.json` or the startup parameters
- At regular intervals so you always have a safe state to return to

## Create a backup

You can find the exact process for creating, managing and restoring a backup in the general guide: [Create Backup](/tutorials/gameserver/create-backup).

> [!TIP]
> Lock important backups (e.g. before major changes) so they cannot be overwritten by automatic backups. Also download especially important backups to your PC in case your backup limit is reached.

## Which data matters?

| Folder | Content |
|--------|---------|
| `/config/` | Server configuration, including `users.json` with your admins |
| `/data/` | All persistent data written by gamemodes, organised as `/data/<organisation>/<package>/` |
| `/download/` | Cache of the packages downloaded from the cloud |

> [!NOTE]
> The `/download/` folder does not need to be backed up. Your server downloads missing packages from the cloud again automatically on the next start.

> [!WARNING]
> Stop your server before creating or restoring a backup. The `/data/` folder is written to while the server is running – a backup taken during operation can be incomplete.

> [!IMPORTANT]
> s&box has no server-side savegame concept. Whether anything is stored permanently on your server, and what, is decided solely by the gamemode. If your server runs a gamemode without its own save feature, a backup only contains your configuration.

> [!NOTE]
> Automatic backups as well as restarts can be requested free of charge via a support ticket. The "Scheduled Tasks" feature is currently in development and will be released this year.
