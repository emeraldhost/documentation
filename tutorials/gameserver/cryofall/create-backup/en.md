---
slug: "create-backup"
language: "en"
title: "How to Create a Backup of Your CryoFall Server"
description: "Create a backup of a CryoFall server"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["cryofall"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Create Backup"
sort: 4
related: ["gameserver/cryofall/add-mods", "gameserver/cryofall/add-savegame", "gameserver/cryofall/download-savegame", "gameserver/cryofall/join-server"]
---

Regular backups of your CryoFall server protect you from data loss – whether due to a failed update, a corrupted save or an accidentally deleted world.

## When should you create a backup?

- Before updating the server version
- Before major changes to the configuration
- Before installing, updating or removing mods
- Before uploading a different save
- Before resetting the world
- At regular intervals so you always have a safe state to return to

## Create a backup

You can find the exact process for creating, managing and restoring a backup in the general guide: [Create Backup](/tutorials/gameserver/create-backup).

> [!WARNING]
> **Caution**
>
> Stop your server before creating or restoring a backup. CryoFall saves the world automatically at regular intervals – a backup taken during operation can land right in the middle of such a save and end up incomplete.

> [!NOTE]
> Everything that belongs to your save sits in the `/Data/` folder: the world in the subfolder `/Data/Saves/`, plus the configuration files `SettingsServer.xml`, `ModsConfig.xml` and `ServerRates.config`. If you only want to save the world itself, you can also download it separately: [Download savegame](/tutorials/gameserver/cryofall/download-savegame).

## CryoFall's internal saves

CryoFall also keeps its own copies of the world. Two related settings are available in the **dashboard** of your server:

| Setting | Meaning |
|---------|---------|
| **Autosave Interval** | Interval in minutes at which the world is saved automatically |
| **Auto Backups Count** | Number of saved states the server keeps |

> [!IMPORTANT]
> These internal copies live on the same server as your world. They help you with a corrupted save, but they are no replacement for a real backup. Additionally download especially important states to your PC.

> [!TIP]
> Lock important backups (e.g. before major changes) so they cannot be overwritten by automatic backups. Also download especially important backups to your PC in case your backup limit is reached.

> [!NOTE]
> Automatic backups as well as restarts can be requested free of charge via a support ticket. The "Scheduled Tasks" feature is currently in development and will be released this year.
