---
description: Create a backup of a SCUM server
---

# How to Create a Backup of Your SCUM Server

Regular backups of your SCUM server protect you from data loss — whether due to a failed update, a corrupted database or an accidentally overwritten save.

## When should you create a backup?

- Before updating the server version
- Before major changes to the configuration
- Before uploading a different save
- Before cleaning up the world, for example removing bases or vehicles
- At regular intervals so you always have a safe state to return to

## Create a backup

You can find the exact process for creating, managing and restoring a backup in the general guide: [Create Backup](../create-backup.md).

:::: tip Tip
Lock important backups (e.g. before major changes) so they cannot be overwritten by automatic backups. Also download especially important backups to your PC in case your backup limit is reached.
::::

:::: info Note
If you only want to save the world itself, you can also download the database separately: [Download savegame](download-savegame.md).
::::

:::: warning Caution
Stop your server before creating or restoring a backup. SCUM stores the entire world in a SQLite database that is written to while the server is running — a backup taken during operation can be incomplete.
::::

:::: info Info
Automatic backups as well as restarts can be requested free of charge via a support ticket. The "Scheduled Tasks" feature is currently in development and will be released this year.
::::
