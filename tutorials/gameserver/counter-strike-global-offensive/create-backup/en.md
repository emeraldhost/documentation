---
slug: "create-backup"
language: "en"
title: "How to Create a Backup of Your Counter-Strike Global Offensive Server"
description: "Create a backup of a Counter-Strike Global Offensive server"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["counter-strike-global-offensive"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Create Backup"
sort: 3
related: ["gameserver/counter-strike-global-offensive/add-admin", "gameserver/counter-strike-global-offensive/add-mods", "gameserver/counter-strike-global-offensive/join-server", "gameserver/counter-strike-global-offensive/kick-ban-players"]
---

Regular backups of your Counter-Strike Global Offensive server protect you from data loss – whether due to a faulty configuration or a plugin that keeps the server from starting.

> [!NOTE]
> Counter-Strike Global Offensive does not store any game progress or world state. What gets backed up are your configuration files, your plugins, your admin lists and your maps – exactly the files that take the most work to rebuild.

## When should you create a backup?

- Before installing or removing Metamod:Source, SourceMod or individual plugins
- Before major changes to the `server.cfg` or to the admin lists
- After adding custom maps
- Before editing the ban lists
- At regular intervals so you always have a safe state to return to

## Create a backup

You can find the exact process for creating, managing and restoring a backup in the general guide: [Create Backup](/tutorials/gameserver/create-backup).

> [!TIP]
> Lock important backups (e.g. before major changes) so they cannot be overwritten by automatic backups. Also download especially important backups to your PC in case your backup limit is reached.

> [!TIP]
> **Back up the configuration**
>
> If you only want to secure the most important files, download the folders `/csgo/cfg/`, `/csgo/addons/` and `/csgo/maps/` via [SFTP](/tutorials/gameserver/establish-sftp-connection).

> [!NOTE]
> Automatic backups as well as restarts can be requested free of charge via a support ticket. The "Scheduled Tasks" feature is currently in development and will be released this year.
