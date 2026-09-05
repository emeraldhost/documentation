---
slug: "create-backup"
language: "en"
title: "How to Create a Backup of Your Mordhau Server"
description: "Create a backup of a Mordhau server"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["mordhau"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Create Backup"
sort: 3
related: ["gameserver/mordhau/add-admin", "gameserver/mordhau/add-mods", "gameserver/mordhau/join-server", "gameserver/mordhau/kick-ban-players"]
---

Mordhau does not store a game world or player progress on your server – the players' characters belong to their accounts. What is worth saving is therefore mainly your **configuration**: the `Game.ini` holds your admins, your bans, your mod list and your map rotation, among other things. If that file is lost, you have to set up your server from scratch.

## When should you create a backup?

- Before updating the server version
- Before major changes to the configuration
- Before adding or removing mods
- After you have finished setting up your map rotation, your admins and your rules
- At regular intervals so you always have a safe state to return to

## Create a backup

You can find the exact process for creating, managing and restoring a backup in the general guide: [Create Backup](/tutorials/gameserver/create-backup).

## Back up the configuration separately

If you only want to save your settings, download the following folder to your PC via [SFTP](/tutorials/gameserver/establish-sftp-connection):

```text
/Mordhau/Saved/Config/LinuxServer/
```

It contains the `Game.ini` with your server settings and the `Engine.ini`.

> [!WARNING]
> **Caution**
>
> Stop your server before backing up or restoring the configuration. Mordhau completely rewrites the `Game.ini` on shutdown – a file saved or uploaded while the server is running will otherwise not match the state you expect.

> [!TIP]
> Lock important backups (e.g. before major changes) so they cannot be overwritten by automatic backups. Also download especially important backups to your PC in case your backup limit is reached.

> [!NOTE]
> In addition to the configuration, your server stores its log files under `/Mordhau/Saved/Logs/`. They are not required for a backup but help with troubleshooting.

> [!NOTE]
> Automatic backups as well as restarts can be requested free of charge via a support ticket. The "Scheduled Tasks" feature is currently in development and will be released this year.
