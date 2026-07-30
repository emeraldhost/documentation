---
description: Create a backup of an Avorion server
---

# How to Create a Backup of Your Avorion Server

Regular backups of your Avorion server protect you from data loss — whether due to a failed update, a broken mod or an accidentally overwritten galaxy.

## When should you create a backup?

- Before updating the server version
- Before major changes to the configuration
- Before adding or removing mods
- Before uploading a different galaxy
- At regular intervals so you always have a safe state to return to

## Create a backup

You can find the exact process for creating, managing and restoring a backup in the general guide: [Create Backup](../create-backup.md).

:::: warning Caution
Stop your server before creating or restoring a backup. Avorion saves automatically while running — a backup taken during operation can contain an incomplete galaxy.
::::

:::: tip Save first
If your server is still running, you can write the current state manually beforehand: enter `/save` in the console of the dashboard, wait until the process has finished, and then stop the server via the dashboard.
::::

:::: info Note
If you only want to save the game state itself, you can also download the galaxy folder separately: [Download savegame](download-savegame.md).
::::

:::: tip Tip
Lock important backups (e.g. before major changes) so they cannot be overwritten by automatic backups. Also download especially important backups to your PC in case your backup limit is reached.
::::

:::: info Info
Automatic backups as well as restarts can be requested free of charge via a support ticket. The "Scheduled Tasks" feature is currently in development and will be released this year.
::::
