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
related: ["gameserver/set-up-scheduled-tasks", "gameserver/establish-sftp-connection", "gameserver/create-database", "gameserver/steamid64-find-out"]
---

With a backup, you save your entire server with one click – world, configurations and all other data. You can restore earlier states at any time, download backups as a ZIP and lock important backups against accidental deletion.

## Create a backup

1. **Open dashboard**\
   Open the dashboard of your server.

2. **Open backups**\
   In the left sidebar, click on **Backups**.

3. **Create new backup**\
   Click **Backup erstellen** (Create backup). The **Backup erstellen** dialog opens.

4. **Name the backup**\
   Enter a name in the **Backup-Name** (Backup name) field that helps you recognize the backup later, e.g. "Before mod update".

5. **Start the backup**\
   Click **Erstellen** (Create). The backup then appears in the table with **Name**, **Größe** (Size) and the time under **Erstellt** (Created).

> [!TIP]
> Always create a backup before major changes such as a version change, new mods or a reinstall. That way, you can go back to the previous state at any time.

## Backup slots

At the top of the **Backups** page, you can see how many backups you can still create, e.g. "noch 5 von 5 Backups möglich" (5 of 5 backups still available). If the slots are not enough, you can book more via **Backup-Plätze erweitern** (Expand backup slots).

If you have many backups, the search field **Backups durchsuchen…** (Search backups…) helps you find a specific one quickly.

## Manage backups

According to the **Backups** page, you can use your backups in the following ways:

| Option | Description |
|--------|-------------|
| Restore | Resets your server to the state of the backup. |
| Download | Downloads the backup to your PC as a ZIP file. |
| Lock | Protects an important backup from accidental deletion. |
| Delete | Removes the backup. |

> [!WARNING]
> Restoring replaces the current state of your server with the state of the backup. Any changes you made after the backup was created will be lost. If needed, create a new backup of the current state first.

## Automatic backups

You don't always have to create backups by hand. Under **Geplante Aufgaben** (Scheduled Tasks), you can have your server create a backup automatically on a regular basis, e.g. every night. Learn how in [Set Up Scheduled Tasks](/tutorials/gameserver/set-up-scheduled-tasks).
