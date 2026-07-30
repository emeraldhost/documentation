---
description: Create a backup of a The Forest server
---

# How to Create a Backup of Your The Forest Server

Regular backups of your The Forest server protect you from data loss — whether due to a failed update, an accidentally overwritten save slot or a wrongly set startup value.

## When should you create a backup?

- Before updating the server version
- Before major changes to the configuration
- Before uploading a different savegame
- Before changing the save slot or the Init Type
- At regular intervals so you always have a safe state to return to

## Create a backup

You can find the exact process for creating, managing and restoring a backup in the general guide: [Create Backup](../create-backup.md).

:::: tip Tip
Lock important backups (e.g. before major changes) so they cannot be overwritten by automatic backups. Also download especially important backups to your PC in case your backup limit is reached.
::::

:::: info Note
If you only want to save the world itself, you can also download the slot folder separately: [Download Savegame](download-savegame.md).
::::

:::: warning Caution
Stop your server before creating or restoring a backup. The Forest saves automatically at regular intervals — a backup taken during operation can contain an incomplete savegame.
::::

:::: danger Important
The chat command `/restart` is **not** a way to restart your server: according to the official command list it deletes the save data. Always use the **dashboard** to restart.
::::

:::: info Info
Automatic backups as well as restarts can be requested free of charge via a support ticket. The "Scheduled Tasks" feature is currently in development and will be released this year.
::::
