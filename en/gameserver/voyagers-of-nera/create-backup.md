---
description: Create a backup of a Voyagers of Nera server
---

# How to Create a Backup of Your Voyagers of Nera Server

Regular backups of your Voyagers of Nera server protect you from data loss — whether due to a failed update, an accidentally deleted savegame folder or a failed world transfer.

## When should you create a backup?

- Before updating the server version
- Before major changes to the configuration
- Before uploading a different savegame
- Before deleting or renaming folders inside `PersistedData`
- At regular intervals so you always have a safe state to return to

## Create a backup

You can find the exact process for creating, managing and restoring a backup in the general guide: [Create Backup](../create-backup.md).

:::: tip Tip
Lock important backups (e.g. before major changes) so they cannot be overwritten by automatic backups. Also download especially important backups to your PC in case your backup limit is reached.
::::

:::: info Note
If you only want to save the world itself, you can also download your world folder separately: [Download Savegame](download-savegame.md).
::::

:::: warning Caution
Stop your server before creating or restoring a backup. Voyagers of Nera saves automatically at regular intervals — a backup taken during operation can contain an incomplete savegame.
::::

:::: info What belongs to the savegame?
Both your world and your server settings are stored in `/BoatGame/Saved/PersistedData/`. A backup of that directory therefore contains both: your world folder and the `CustomConfig` folder.
::::

:::: info Info
Automatic backups as well as restarts can be requested free of charge via a support ticket. The "Scheduled Tasks" feature is currently in development and will be released this year.
::::
