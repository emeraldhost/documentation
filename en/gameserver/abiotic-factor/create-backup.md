---
description: Create a backup of an Abiotic Factor server
---

# How to Create a Backup of Your Abiotic Factor Server

Regular backups of your Abiotic Factor server protect you from data loss — whether due to a failed update, an accidentally overwritten world folder or a wrongly set world name.

## When should you create a backup?

- Before updating the server version
- Before major changes to the configuration
- Before uploading a different savegame
- Before changing the world name
- At regular intervals so you always have a safe state to return to

## Create a backup

You can find the exact process for creating, managing and restoring a backup in the general guide: [Create Backup](../create-backup.md).

:::: info Note
If you only want to save the world itself, you can also download the world folder separately: [Download Savegame](download-savegame.md).
::::

:::: warning Caution
Stop your server before creating or restoring a backup. The server writes to the world files while it is running — a backup taken during operation can contain an incomplete savegame.
::::

:::: tip Tip
Lock important backups (e.g. before major changes) so they cannot be overwritten by automatic backups. Also download especially important backups to your PC in case your backup limit is reached.
::::

:::: info What belongs to the savegame?
The savegame itself lives in the world folder under `/AbioticFactor/Saved/SaveGames/Server/Worlds/`. The sandbox settings (`SandboxSettings.ini`) of your world are stored there as well. Your admin list (`Admin.ini`) sits one level above it under `/AbioticFactor/Saved/SaveGames/Server/` – a backup created through the dashboard saves all of these files together.
::::

:::: info Info
Automatic backups as well as restarts can be requested free of charge via a support ticket. The "Scheduled Tasks" feature is currently in development and will be released this year.
::::
