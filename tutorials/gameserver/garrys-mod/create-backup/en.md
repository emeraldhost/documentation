---
slug: "create-backup"
language: "en"
title: "How to Create a Backup of Your Garry's Mod Server"
description: "Create a backup of a Garry's Mod server"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["garrys-mod"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Create Backup"
sort: 3
related: ["gameserver/garrys-mod/add-admin", "gameserver/garrys-mod/add-mods", "gameserver/garrys-mod/join-server", "gameserver/garrys-mod/kick-ban-players"]
---

Regular backups of your Garry's Mod server protect you from data loss – whether due to a failed update, a faulty configuration or an addon that keeps the server from starting.

## When should you create a backup?

- Before updating the server version
- Before installing or removing addons, gamemodes or Workshop collections
- Before major changes to the configuration, e.g. to `server.cfg` or `users.txt`
- At regular intervals so you always have a safe state to return to

## Create a backup

You can find the exact process for creating, managing and restoring a backup in the general guide: [Create Backup](/tutorials/gameserver/create-backup).

> [!TIP]
> Lock important backups (e.g. before major changes) so they cannot be overwritten by automatic backups. Also download especially important backups to your PC in case your backup limit is reached.

> [!NOTE]
> Addons and configurations usually store their data in the `/garrysmod/data/` folder. This folder survives map changes and restarts and should be included in a backup.

> [!NOTE]
> Automatic backups as well as restarts can be requested free of charge via a support ticket. The "Scheduled Tasks" feature is currently in development and will be released this year.
