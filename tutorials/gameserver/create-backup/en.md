---
slug: "create-backup"
language: "en"
title: "How to Create a Backup of Your Game Server"
description: "Create and restore a backup on a game server"
tags: []
date: "2026-04-14"
visibility: "public"
cta: "gameserver"
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Create Backup"
sort: 3
related: ["gameserver/establish-sftp-connection", "gameserver/create-database", "gameserver/epicgamesid-find-out", "gameserver/steamid64-find-out"]
---

You can create a backup of your server at any time to safeguard your world, configurations and data, and restore them when needed.

> [!NOTE]
> Automatic backups as well as restarts can be requested free of charge via a support ticket. The "Scheduled Tasks" feature is currently in development and will be released this year.

## Create a backup

1. **Open dashboard**\
   Open the dashboard of your server.

2. **Open backups**\
   In the left sidebar, click on **Backups**.

3. **Create new backup**\
   Click the **plus icon** in the top right to create a new backup.

4. **Name the backup**\
   Enter a name for your backup. Optionally, in the **Ignored Files and Directories** field, you can specify paths that should be excluded from the backup.

5. **Create backup**\
   Click **Create Backup**. The process runs in the background and may take a few minutes depending on the size of your server.

## Manage backups

Using the **three-dot icon** to the right of a backup, the following options are available:

| Action | Description |
|--------|-------------|
| **Download** | Downloads the backup as a compressed file. |
| **Restore** | Resets your server to the state of the backup. |
| **Lock** | Protects the backup from accidental deletion or being overwritten. |
| **Delete** | Permanently removes the backup. |

### Lock a backup

A locked backup cannot be deleted and cannot be overwritten by automatic backups. Click **Lock** again to remove the lock.

### Restore a backup

1. **Start restore**\
   In the three-dot menu, select the **Restore** option.

2. **Optional: delete files**\
   Enable the checkbox **Delete all files and folders before restoring this backup** if you want to fully replace the current server state with the backup.

3. **Confirm**\
   Click **Restore Backup**. The server will be stopped automatically and the restoration will begin.

> [!WARNING]
> During the restoration, you cannot control the server, access the file browser or create further backups until the process is complete.
