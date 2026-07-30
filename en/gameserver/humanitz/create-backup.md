---
description: Create a backup of a HumanitZ server
---

# How to Create a Backup of Your HumanitZ Server

Regular backups of your HumanitZ server protect you from data loss — whether due to a failed update, a corrupted savegame file or a wrongly set `SaveName`.

## When should you create a backup?

- Before updating the server version
- Before major changes to `GameServerSettings.ini`
- Before uploading a different savegame
- Before changing the `SaveName`
- At regular intervals so you always have a safe state to return to

## Create a backup

You can find the exact process for creating, managing and restoring a backup in the general guide: [Create Backup](../create-backup.md).

:::: tip Tip
Lock important backups (e.g. before major changes) so they cannot be overwritten by automatic backups. Also download especially important backups to your PC in case your backup limit is reached.
::::

:::: info Note
If you only want to save the world itself, you can also download the savegame folder separately: [Download Savegame](download-savegame.md).
::::

:::: warning Caution
Stop your server before creating or restoring a backup. HumanitZ saves automatically while running — a backup taken during operation can contain an incomplete savegame.
::::

:::: danger Important
A backup is no substitute for care: only change the `SaveName` value in `GameServerSettings.ini` if you know which file should be loaded. If the name does not match any existing `.sav` file, your server starts with a new, empty world.
::::

:::: info Info
Automatic backups as well as restarts can be requested free of charge via a support ticket. The "Scheduled Tasks" feature is currently in development and will be released this year.
::::
