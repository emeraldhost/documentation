---
slug: "create-backup"
language: "en"
title: "How to Create a Backup of Your Soldat Server"
description: "Create a backup of a Soldat server"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["soldat"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Create Backup"
sort: 3
related: ["gameserver/soldat/add-admin", "gameserver/soldat/add-mods", "gameserver/soldat/join-server", "gameserver/soldat/kick-ban-players"]
---

Regular backups of your Soldat server protect you from data loss – whether due to a failed update, a faulty configuration or a script that keeps the server from starting.

> [!NOTE]
> Soldat does not store any world progress – there is no savegame that could be transferred or restored. What gets backed up are your configuration files, your map rotation, your admin and ban lists, your custom maps and your scripts – exactly the files that take the most work to rebuild.

## When should you create a backup?

- Before updating the server version
- Before major changes to the configuration
- Before editing the map rotation or uploading custom maps
- Before installing or updating server scripts
- At regular intervals so you always have a safe state to return to

## Create a backup

You can find the exact process for creating, managing and restoring a backup in the general guide: [Create Backup](/tutorials/gameserver/create-backup).

> [!TIP]
> Lock important backups (e.g. before major changes) so they cannot be overwritten by automatic backups. Also download especially important backups to your PC in case your backup limit is reached.

## Which files are worth saving

If you only want to secure the most important files, download them via [SFTP](/tutorials/gameserver/establish-sftp-connection).

Classic Soldat server:

| File or folder | Contents |
|----------------|----------|
| `soldat.ini` | Main configuration of the server |
| `server.ini` | Advanced server settings |
| `mapslist.txt` | Map rotation |
| `banned.txt` | Banned IP addresses |
| `remote.txt` | Permanent admin list |
| Maps folder | Your custom `.pms` maps |
| `scripts/` | Your server scripts |
| `logs/` | Logs, among them `gamestat.txt` |

OpenSoldat:

| File or folder | Contents |
|----------------|----------|
| `configs/` | Server configuration including `server.cfg` |
| `maps/` | Your custom `.pms` maps |
| `mods/` | Your `.smod` mod packages |
| `scripts/` | Your server scripts |
| `logs/` | Logs |
| `demos/` | Recorded rounds, if you use recording |

> [!NOTE]
> You can tell which of the two variants you are running by whether the main directory holds a `soldat.ini` or a `configs` folder with a `server.cfg`.

> [!WARNING]
> Stop your server before creating or restoring a backup. That way no file is being written to while the backup runs – the server writes `banned.txt` and the log files during operation.

> [!NOTE]
> Automatic backups as well as restarts can be requested free of charge via a support ticket. The "Scheduled Tasks" feature is currently in development and will be released this year.
