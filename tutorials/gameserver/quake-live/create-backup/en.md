---
slug: "create-backup"
language: "en"
title: "How to Create a Backup of Your Quake Live Server"
description: "Create a backup of a Quake Live server"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["quake-live"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Create Backup"
sort: 3
related: ["gameserver/quake-live/add-admin", "gameserver/quake-live/add-mods", "gameserver/quake-live/join-server", "gameserver/quake-live/kick-ban-players"]
---

Quake Live does not store a game world or any progress – every round starts fresh. What matters on your server are therefore the configuration files: your server settings, the admin list, the map pool, the Workshop content and your own factories. Those are exactly the files a backup preserves.

## When should you create a backup?

- Before changing `server.cfg`
- Before changing the admin list or the map pool
- Before adjusting or replacing your own factories
- Before updating the server version
- At regular intervals so you always have a safe state to return to

## Create a backup

You can find the exact process for creating, managing and restoring a backup in the general guide: [Create Backup](/tutorials/gameserver/create-backup).

## Files worth backing up

```text
/baseq3/server.cfg                <- server configuration
/baseq3/access.txt                <- admins, moderators and bans
/baseq3/mappool.txt               <- maps and factories of the map pool
/baseq3/workshop.txt              <- item IDs from the Steam Workshop
/baseq3/scripts/                  <- custom factories (.factories)
```

> [!NOTE]
> The `baseq3` directory sits in the main directory of your server, so the full path is `/home/container/baseq3/`. You can also download individual files to your PC at any time via [SFTP](/tutorials/gameserver/establish-sftp-connection).

> [!WARNING]
> **Caution**
>
> Stop your server before creating or restoring a backup. `access.txt` is rewritten by the server before every map load – a backup taken during operation can therefore contain an outdated state, and a restored file would be overwritten on the next map change.

> [!TIP]
> Lock important backups (e.g. before major changes) so they cannot be overwritten by automatic backups. Also download especially important backups to your PC in case your backup limit is reached.

> [!NOTE]
> Automatic backups as well as restarts can be requested free of charge via a support ticket. The "Scheduled Tasks" feature is currently in development and will be released this year.
