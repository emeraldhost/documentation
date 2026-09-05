---
slug: "create-backup"
language: "en"
title: "How to Create a Backup of Your Ground Branch Server"
description: "Create a backup of a Ground Branch server"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["ground-branch"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Create Backup"
sort: 3
related: ["gameserver/ground-branch/add-admin", "gameserver/ground-branch/add-mods", "gameserver/ground-branch/join-server", "gameserver/ground-branch/kick-ban-players"]
---

A Ground Branch server does **not store a game world**. Everything that defines your server lives in its configuration: admins, bans, map list, voting rules and the mod list. Those are exactly the files a backup preserves.

> [!NOTE]
> **No world save**
>
> Ground Branch is mission based – every round starts the map fresh. There is therefore no save game you could download or move to another server. Player progress, operators and loadouts are stored on the players' own PCs, not on the server.

## When should you create a backup?

- Before updating the server version
- Before major changes to the configuration
- Before adding or removing mods
- Before changing admin, ban or voting settings
- At regular intervals so you always have a safe state to return to

## Create a backup

You can find the exact process for creating, managing and restoring a backup in the general guide: [Create Backup](/tutorials/gameserver/create-backup).

> [!WARNING]
> **Caution**
>
> Stop your server before creating or restoring a backup. A running server keeps writing to its files and may overwrite your changes when it shuts down.

## Back up the configuration separately

If you only want to save the server settings, download the configuration folder via SFTP.

1. **Stop the server**\
   Stop your server via the dashboard.

2. **Connect via SFTP**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection).

3. **Download the folder**\
   Download the following folder completely to your PC:

   ```text
   /GroundBranch/ServerConfig/
   ```

4. **Start the server**\
   Start your server again.

## What is inside the configuration folder?

| File | Contents |
|------|----------|
| `Server.ini` | General server settings |
| `Admin.ini` | Admins and admin groups – see [Add Admin](/tutorials/gameserver/ground-branch/add-admin) |
| `Ban.ini` | Default ban duration – see [Kick & Ban Players](/tutorials/gameserver/ground-branch/kick-ban-players) |
| `TeamKill.ini` | Automatic bans for team kills |
| `Vote.ini` | Rules for player votes |
| `MapList.ini` | Map list of the server |
| `mods.txt` | Mod list – see [Add Mods](/tutorials/gameserver/ground-branch/add-mods) |
| `AdminSetupPassword.txt` | One-time password for the first admin |

> [!NOTE]
> The `ServerConfig` folder and the files inside it are only created on the **first server start**. If you cannot find it, start your server once.

> [!TIP]
> Lock important backups (e.g. before major changes) so they cannot be overwritten by automatic backups. Also download especially important backups to your PC in case your backup limit is reached.

> [!NOTE]
> Automatic backups as well as restarts can be requested free of charge via a support ticket. The "Scheduled Tasks" feature is currently in development and will be released this year.
