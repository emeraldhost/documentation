---
slug: "create-backup"
language: "en"
title: "How to Create a Backup of Your Space Station 14 Server"
description: "Create a backup of a Space Station 14 server"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["space-station-14"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Create Backup"
sort: 2
related: ["gameserver/space-station-14/add-admin", "gameserver/space-station-14/join-server", "gameserver/space-station-14/kick-ban-players"]
---

Regular backups of your Space Station 14 server protect you from data loss – whether due to a failed update, a corrupted database or an accidentally overwritten configuration.

## When should you create a backup?

- Before updating the server version
- Before major changes to the `server_config.toml`
- Before switching the database, for example from SQLite to PostgreSQL
- Before larger clean-ups of admins, bans or notes
- At regular intervals so you always have a safe state to return to

## What gets backed up?

Space Station 14 is round-based and has **no savegame and no world folder**. When a round ends, the station is generated from scratch. Only these two things are stored permanently:

| Location | Content |
|----------|---------|
| `data` folder | The database of your server (`data/preferences.db` by default) containing characters, playtimes, admins, bans and notes |
| `server_config.toml` | The complete server configuration |

Both are located in the main directory of your server, next to the server application `Robust.Server`.

> [!NOTE]
> If you want to move the data of your server manually, copy exactly these two items: the `data` folder and the `server_config.toml` file.

## Create a backup

You can find the exact process for creating, managing and restoring a backup in the general guide: [Create Backup](/tutorials/gameserver/create-backup).

> [!TIP]
> Lock important backups (e.g. before major changes) so they cannot be overwritten by automatic backups. Also download especially important backups to your PC in case your backup limit is reached.

> [!WARNING]
> **Caution**
>
> Stop your server before creating or restoring a backup. The database is written to while the server is running – a backup taken during operation can be incomplete.

> [!NOTE]
> If you run your server with a PostgreSQL database instead of SQLite, characters, admins and bans are not stored in the `data` folder but inside that database. In that case back it up separately.

> [!NOTE]
> Automatic backups as well as restarts can be requested free of charge via a support ticket. The "Scheduled Tasks" feature is currently in development and will be released this year.
