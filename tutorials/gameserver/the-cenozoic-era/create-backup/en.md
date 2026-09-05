---
slug: "create-backup"
language: "en"
title: "How to Create a Backup of Your The Cenozoic Era Server"
description: "Create a backup of a The Cenozoic Era server"
tags: []
date: "2026-07-31"
visibility: "public"
cta: "gameserver"
product_keys: ["the-cenozoic-era"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Create Backup"
sort: 2
related: ["gameserver/the-cenozoic-era/add-admin", "gameserver/the-cenozoic-era/join-server", "gameserver/the-cenozoic-era/kick-ban-players"]
---

Regular backups of your The Cenozoic Era server protect you from data loss – whether due to a failed update, a broken configuration file or a change you want to undo.

## When should you create a backup?

- Before updating the server version
- Before major changes to the configuration, for example to growth, breeding or the game mode
- Before you exchange files via SFTP
- At regular intervals so you always have a safe state to return to

## Create a backup

You can find the exact process for creating, managing and restoring a backup in the general guide: [Create Backup](/tutorials/gameserver/create-backup).

> [!WARNING]
> **Caution**
>
> Stop your server before creating or restoring a backup. If the server keeps running, files that are currently being written may end up in the backup – which can leave it incomplete.

> [!TIP]
> Lock important backups (e.g. before major changes) so they cannot be overwritten by automatic backups. Also download especially important backups to your PC in case your backup limit is reached.

## What the backup contains

The backup saves the complete server directory. This also includes the configuration of your server, which is located in the following directory, accessible via [SFTP](/tutorials/gameserver/establish-sftp-connection):

```text
/TheCenozoicEra/Saved/Config/WindowsServer/
```

Among other things, this is where the `Game.ini` with your server settings is stored. The folder `/TheCenozoicEra/Saved/Logs/` additionally contains the server logs.

> [!NOTE]
> The configuration folder is called `WindowsServer` on your Linux server as well. The Cenozoic Era only ships a Windows server binary, which runs on Linux servers through a compatibility layer. So do not look for a folder named `LinuxServer` – it does not exist.

> [!TIP]
> Additionally save your `Game.ini` manually to your PC before making major changes to it. That way you can revert a single setting without having to restore a complete backup.

> [!NOTE]
> Automatic backups as well as restarts can be requested free of charge via a support ticket. The "Scheduled Tasks" feature is currently in development and will be released this year.
