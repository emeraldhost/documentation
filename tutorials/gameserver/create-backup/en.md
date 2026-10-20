---
slug: "create-backup"
language: "en"
title: "How to Create a Backup of Your Game Server"
description: "Create, download, lock and restore a backup on a game server"
tags: []
date: "2026-04-14"
visibility: "public"
updated: "2026-10-20"
cta: "gameserver"
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Create Backup"
sort: 3
related: ["gameserver/set-up-scheduled-tasks", "gameserver/establish-sftp-connection", "gameserver/create-database", "gameserver/change-resources"]
---

With a backup, you save your entire server with one click – world, configurations and all other data. You can restore earlier states at any time, download backups as a ZIP and lock important backups to protect them from accidental deletion.

## Create a backup

1. **Open dashboard**\
   Open the dashboard of your server.

2. **Open backups**\
   In the left sidebar, click on **Backups**.

3. **Create new backup**\
   Click **Create Backup**. The **Create Backup** dialog opens.

4. **Name the backup**\
   Enter a name in the **Backup Name** field that helps you recognize the backup later, e.g. "Before mod update".

5. **Start the backup**\
   Click **Create**. As soon as the backup has been created, you receive a notification that a new backup was created for your server.

6. **Check the backup**\
   The backup appears in the table with **Name**, **Size** (e.g. 210.7 MB) and under **Created** how long ago it was created. The backup's sha256 checksum is also shown below its name.

> [!TIP]
> Always create a backup before major changes such as a version change, new mods or a reinstall. That way, you can go back to the previous state at any time.

## Backup slots

At the top of the **Backups** page, you can see how many backups you can still create, e.g. "5 of 5 backups left". If the slots are not enough, you can book more via **Add backup slots**. This opens the **Change Resources** dialog, where you set the number of backup slots. Learn more in [Change Resources](/tutorials/gameserver/change-resources).

If you have many backups, the search field above the table helps you find a specific one quickly.

## Manage backups

Each row in the table has a menu (**…**) on the right. It offers the following actions:

| Action | Description |
|--------|-------------|
| **Download** | Downloads the backup to your PC as a ZIP file. |
| **Restore** | Resets your server to the state of the backup. |
| **Lock** | Protects an important backup from accidental deletion. |
| **Delete** | Removes the backup permanently. |

## Restore a backup

1. **Open the menu**\
   In the row of the backup you want, click the menu (**…**).

2. **Choose restore**\
   Click **Restore**. The **Restore Backup** dialog opens and shows you once more which backup you are restoring your server from.

3. **Check the existing-files option**\
   The option **Delete existing files before restoring** is enabled by default. It removes all existing server files before the backup is applied, so no old files are left behind.

4. **Start the restore**\
   Click **Restore** to start, or **Cancel** to leave everything as it is.

> [!WARNING]
> The dialog points out that the current server state will be completely overwritten and cannot be recovered. Any changes you made after the backup was created will be lost. If needed, create a new backup of the current state first.

## Delete a backup

1. **Open the menu**\
   In the row of the backup, click the menu (**…**) and choose **Delete**.

2. **Confirm deletion**\
   A dialog asks whether you really want to delete the backup. Click **Delete** to remove it, or **Cancel**.

> [!IMPORTANT]
> This action cannot be undone. Lock important backups via **Lock** so they cannot be deleted by accident.

## Automatic backups

You don't always have to create backups by hand. Under **Schedules**, you can have your server create a backup automatically on a regular basis, e.g. every night. Learn how in [Set Up Scheduled Tasks](/tutorials/gameserver/set-up-scheduled-tasks).
