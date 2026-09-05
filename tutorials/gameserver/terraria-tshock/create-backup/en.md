---
slug: "create-backup"
language: "en"
title: "How to Create a Backup of Your Terraria tShock Server"
description: "Create a backup of a Terraria tShock server"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["terraria-tshock"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Create Backup"
sort: 4
related: ["gameserver/terraria-tshock/add-mods", "gameserver/terraria-tshock/add-savegame", "gameserver/terraria-tshock/download-savegame", "gameserver/terraria-tshock/join-server"]
---

Regular backups of your Terraria tShock server protect you from data loss – whether due to a failed update, a new plugin, a world change or an accidentally overwritten world.

## When should you create a backup?

- Before updating the server version
- Before installing or updating plugins
- Before major changes to the configuration
- Before uploading a different world
- Before taking your world into hardmode
- At regular intervals so you always have a safe state to return to

## Create a backup

You can find the exact process for creating, managing and restoring a backup in the general guide: [Create Backup](/tutorials/gameserver/create-backup).

> [!TIP]
> Lock important backups (e.g. before major changes) so they cannot be overwritten by automatic backups. Also download especially important backups to your PC in case your backup limit is reached.

> [!WARNING]
> **Caution**
>
> Stop your server before creating or restoring a backup. When stopping, tShock saves the world cleanly – that way the current state ends up in the backup in full.

## Use the tShock world backups

tShock additionally creates its own world backups at fixed intervals. They are stored in the folder `/tshock/backups/` and follow the pattern `<world>.wld.<timestamp>.bak`, for example:

```text
MyWorld.wld.2026-07-30T12.00.00Z.bak
```

These backups are complete world files – you turn one back into a world by renaming it.

1. **Stop the server**\
   Stop your server via the dashboard.

2. **Connect via SFTP**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection).

3. **Secure the current world**\
   Download the existing `.wld` file from the main directory or rename it, in case you want to return to the current state.

4. **Restore the backup**\
   Copy the desired file from `/tshock/backups/` into the main directory of your server and name it exactly like the **World Name** field in the settings – for example `MyWorld.wld`. Remove the timestamp and the `.bak` extension in the process.

5. **Start the server**\
   Start your server. The restored state is now loaded.

> [!NOTE]
> How often tShock creates backups and how long they are kept is controlled by the values `BackupInterval` and `BackupKeepFor` in the file `/tshock/config.json`. Both values are given in minutes. Setting `BackupInterval` to `0` disables the tShock world backups.

> [!IMPORTANT]
> The tShock backups only contain the **world**. Accounts, groups, bans and – with Server Side Characters enabled – the character data of your players are stored in `/tshock/tshock.sqlite` and are not included. For a complete backup use the backup function of the dashboard.

> [!NOTE]
> If you only want to save the world itself, you can also download the `.wld` file separately: [Download savegame](/tutorials/gameserver/terraria-tshock/download-savegame).

> [!NOTE]
> Automatic backups as well as restarts can be requested free of charge via a support ticket. The "Scheduled Tasks" feature is currently in development and will be released this year.
