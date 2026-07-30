---
description: Create a backup of a Citadel Forged with Fire server
---

# How to Create a Backup of Your Citadel Forged with Fire Server

Regular backups of your Citadel Forged with Fire server protect you from data loss — whether due to a failed update, an accidentally overwritten save or a broken configuration.

## When should you create a backup?

- Before updating the server version
- Before major changes to the configuration
- Before uploading a different save
- Before cleaning up the world, for example deleting characters or buildings
- At regular intervals so you always have a safe state to return to

## Create a backup

You can find the exact process for creating, managing and restoring a backup in the general guide: [Create Backup](../create-backup.md).

:::: tip Tip
Lock important backups (e.g. before major changes) so they cannot be overwritten by automatic backups. Also download especially important backups to your PC in case your backup limit is reached.
::::

:::: info Note
If you only want to save the world itself, you can also download the savegame folder separately: [Download savegame](download-savegame.md).
::::

:::: warning Caution
Stop your server before creating or restoring a backup. Your server saves automatically while running — a backup taken during operation can contain an incomplete save.
::::

:::: tip Force a save first
If you do not want to wait for the next automatic save, you can run the chat command `/admin_autosave` as a logged-in admin. The server then immediately writes the character data of all currently connected players. Stop your server afterwards anyway before you create the backup. See [Add Admin](add-admin.md) for how to get admin rights.
::::

:::: info Info
Automatic backups as well as restarts can be requested free of charge via a support ticket. The "Scheduled Tasks" feature is currently in development and will be released this year.
::::
