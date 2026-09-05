---
slug: "create-backup"
language: "en"
title: "How to Create a Backup of Your Minecraft Endstone Edition Server"
description: "Create a backup of a Minecraft Endstone Edition server"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Create Backup"
sort: 4
related: ["gameserver/minecraft-endstone-edition/add-mods", "gameserver/minecraft-endstone-edition/add-savegame", "gameserver/minecraft-endstone-edition/download-savegame", "gameserver/minecraft-endstone-edition/join-server"]
---

Regular backups of your Minecraft Endstone Edition server protect you from data loss – whether due to a failed update, a broken plugin or an accidentally overwritten world.

## When should you create a backup?

- Before updating the server version
- Before installing or updating plugins
- Before major changes to `server.properties`
- Before uploading a different world
- At regular intervals so you always have a safe state to return to

## Create a backup

You can find the exact process for creating, managing and restoring a backup in the general guide: [Create Backup](/tutorials/gameserver/create-backup).

> [!TIP]
> Lock important backups (e.g. before major changes) so they cannot be overwritten by automatic backups. Also download especially important backups to your PC in case your backup limit is reached.

> [!NOTE]
> If you only want to save the world itself, you can also download the world folder separately: [Download savegame](/tutorials/gameserver/minecraft-endstone-edition/download-savegame).

> [!WARNING]
> **Caution**
>
> Stop your server before creating or restoring a backup. While running, the server constantly writes to the database of the loaded world – a backup taken during operation can be incomplete.

> [!NOTE]
> Besides the `worlds` folder, your backup should include the configuration and list files in the main folder of your server, in particular `server.properties`, `endstone.toml`, `permissions.json`, `allowlist.json`, `banned-players.json` and `banned-ips.json` as well as the `plugins` folder.

> [!NOTE]
> Automatic backups as well as restarts can be requested free of charge via a support ticket. The "Scheduled Tasks" feature is currently in development and will be released this year.
