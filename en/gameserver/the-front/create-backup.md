---
description: Create a backup of a The Front server
---

# How to Create a Backup of Your The Front Server

Regular backups of your The Front server protect you from data loss — whether due to a failed update, a corrupted save or a configuration change you want to revert.

## When should you create a backup?

- Before updating the server version
- Before major changes to the configuration
- Before uploading a different save
- Before a planned wipe of your server
- At regular intervals so you always have a safe state to return to

## Create a backup

You can find the exact process for creating, managing and restoring a backup in the general guide: [Create Backup](../create-backup.md).

:::: warning Caution
Stop your server before creating or restoring a backup. The Front saves regularly while running — a backup taken during operation can be incomplete.
::::

:::: tip Tip
Lock important backups (e.g. before major changes) so they cannot be overwritten by automatic backups. Also download especially important backups to your PC in case your backup limit is reached.
::::

:::: info Note
If you only want to save the world itself, you can also download the `GameStates` folder separately: [Download savegame](download-savegame.md).
::::

:::: info Info
Automatic backups as well as restarts can be requested free of charge via a support ticket. The "Scheduled Tasks" feature is currently in development and will be released this year.
::::
