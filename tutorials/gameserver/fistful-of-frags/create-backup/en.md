---
slug: "create-backup"
language: "en"
title: "How to Create a Backup of Your Fistful of Frags Server"
description: "Create a backup of a Fistful of Frags server"
tags: []
date: "2026-07-30"
visibility: "public"
updated: "2026-10-20"
cta: "gameserver"
product_keys: ["fistful-of-frags"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Create Backup"
sort: 3
related: ["gameserver/fistful-of-frags/add-admin", "gameserver/fistful-of-frags/add-mods", "gameserver/fistful-of-frags/join-server", "gameserver/fistful-of-frags/kick-ban-players"]
---

Regular backups of your Fistful of Frags server protect you from data loss – whether due to a failed update, a faulty configuration or a plugin that keeps the server from starting.

> [!NOTE]
> Fistful of Frags does not store any world progress on the server – there is no savegame that could be transferred or restored. What gets backed up are your configuration files, your map rotation, your plugins, your admin lists, your ban lists and your custom maps – exactly the files that take the most work to rebuild.

## When should you create a backup?

- Before updating the server version
- Before installing or removing Metamod:Source, SourceMod or individual plugins
- Before major changes to the `server.cfg`, to the mapcycle files or to the admin lists
- Before uploading custom maps
- At regular intervals so you always have a safe state to return to

## Create a backup

You can find the exact process for creating, managing and restoring a backup in the general guide: [Create Backup](/tutorials/gameserver/create-backup).

> [!TIP]
> Lock important backups (e.g. before major changes) so they cannot be overwritten by automatic backups. Also download especially important backups to your PC in case your backup limit is reached.

> [!TIP]
> **Back up the configuration**
>
> If you only want to secure the most important files, download the folders `/fof/cfg/`, `/fof/addons/` and `/fof/maps/` as well as the files `/fof/mapcycle*.txt` via [SFTP](/tutorials/gameserver/establish-sftp-connection).

> [!WARNING]
> Stop your server before creating or restoring a backup. That way no file is being written to while the backup runs. Also remember to write current bans to the ban files with `writeid` and `writeip` beforehand – otherwise they only live in memory and will not end up in the backup.

> [!NOTE]
> Since EmeraldHost 2.0, you can set up automatic backups and restarts yourself in the dashboard under **Schedules**, see [Set Up Scheduled Tasks](/tutorials/gameserver/set-up-scheduled-tasks).
