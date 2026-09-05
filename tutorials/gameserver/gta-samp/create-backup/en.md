---
slug: "create-backup"
language: "en"
title: "How to Create a Backup of Your GTA San Andreas Server"
description: "Create a backup of a GTA San Andreas server"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["gta-samp"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Create Backup"
sort: 3
related: ["gameserver/gta-samp/add-admin", "gameserver/gta-samp/add-mods", "gameserver/gta-samp/join-server", "gameserver/gta-samp/kick-ban-players"]
---

Regular backups of your GTA San Andreas server protect you from data loss – whether due to a failed update, a broken script or an accidentally overwritten configuration.

## When should you create a backup?

- Before switching between SA-MP and open.mp
- Before installing a new gamemode or a new script version
- Before installing or updating plugins
- Before major changes to `server.cfg` or `config.json`
- At regular intervals so you always have a safe state to return to

## Create a backup

You can find the exact process for creating, managing and restoring a backup in the general guide: [Create Backup](/tutorials/gameserver/create-backup).

## What should be backed up

SA-MP and open.mp have **no world save**. There is no stored world and no savegame file – everything persistent is created by your gamemode alone. A meaningful backup therefore covers these folders and files:

| Path | Content |
|------|---------|
| `/gamemodes/` | Your gamemodes as `.amx` files |
| `/filterscripts/` | Additional scripts |
| `/plugins/` | Server plugins (`.so`) |
| `/scriptfiles/` | All data your scripts store themselves |
| `/models/` | Custom models and textures |
| `config.json` or `server.cfg` | The server configuration |
| `bans.json` or `samp.ban` | Your ban list |

> [!IMPORTANT]
> If your gamemode stores player data in a **MySQL database**, that data is **not** part of the server files. Back the database up separately as well – a backup of the server files alone is not enough in that case.

> [!WARNING]
> **Caution**
>
> Stop your server before creating or restoring a backup. Running scripts write to `scriptfiles` while the server is up – a backup taken during operation can be incomplete.

> [!TIP]
> Lock important backups (e.g. before major changes) so they cannot be overwritten by automatic backups. Also download especially important backups to your PC in case your backup limit is reached.

> [!NOTE]
> Automatic backups as well as restarts can be requested free of charge via a support ticket. The "Scheduled Tasks" feature is currently in development and will be released this year.
