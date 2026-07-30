---
description: Create a backup of a StarRupture server
---

# How to Create a Backup of Your StarRupture Server

Regular backups of your StarRupture server protect you from data loss — whether due to a failed update, an accidentally overwritten save or a wrong value in `DSSettings.txt`.

## When should you create a backup?

- Before updating the server version
- Before major changes to the configuration
- Before uploading a different save
- Before creating a new world or switching the session
- At regular intervals so you always have a safe state to return to

## Create a backup

You can find the exact process for creating, managing and restoring a backup in the general guide: [Create Backup](../create-backup.md).

:::: tip Tip
Lock important backups (e.g. before major changes) so they cannot be overwritten by automatic backups. Also download especially important backups to your PC in case your backup limit is reached.
::::

:::: info Note
If you only want to save the world itself, you can also download the files of the session separately: [Download savegame](download-savegame.md).
::::

:::: warning Caution
Stop your server before creating or restoring a backup. StarRupture saves automatically while running – every 300 seconds by default – so a backup taken during operation can contain an incomplete save.
::::

:::: danger Important
If the value `StartNewGame` in your `DSSettings.txt` is set to `"true"`, the server creates a new world on every start and overwrites the existing save. Check this value before starting a restored backup – see [Add savegame](add-savegame.md).
::::

:::: info Info
Automatic backups as well as restarts can be requested free of charge via a support ticket. The "Scheduled Tasks" feature is currently in development and will be released this year.
::::
