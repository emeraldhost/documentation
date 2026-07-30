---
description: Create a backup of a Smalland Survive the Wilds server
---

# How to Create a Backup of Your Smalland Survive the Wilds Server

Regular backups of your Smalland Survive the Wilds server protect you from data loss — whether due to a failed update, a corrupted world file or an accidentally overwritten savegame.

## When should you create a backup?

- Before updating the server version
- Before major changes to the configuration
- Before uploading a different savegame
- Before changing the world name
- Before cleaning up the world, for example demolishing large bases
- At regular intervals so you always have a safe state to return to

## Create a backup

You can find the exact process for creating, managing and restoring a backup in the general guide: [Create Backup](../create-backup.md).

:::: tip Tip
Lock important backups (e.g. before major changes) so they cannot be overwritten by automatic backups. Also download especially important backups to your PC in case your backup limit is reached.
::::

:::: info Note
If you only want to save the world itself, you can also download the folder containing the world files separately: [Download savegame](download-savegame.md).
::::

:::: warning Caution
Stop your server before creating or restoring a backup. The server writes to the world file while it is running — a backup taken during operation can be incomplete.
::::

:::: danger Characters are not included
A server backup only saves the world data. Characters are stored locally on each player's PC and can neither be backed up nor restored through the server.
::::

:::: info Info
Automatic backups as well as restarts can be requested free of charge via a support ticket. The "Scheduled Tasks" feature is currently in development and will be released this year.
::::
