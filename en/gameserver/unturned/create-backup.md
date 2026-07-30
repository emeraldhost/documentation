---
description: Create a backup of an Unturned server
---

# How to Create a Backup of Your Unturned Server

Regular backups of your Unturned server protect you from data loss — whether due to a failed update, a broken mod or an accidentally overwritten save.

## When should you create a backup?

- Before updating the server version
- Before major changes to the configuration
- Before adding or removing mods and Workshop maps
- Before switching the map
- Before uploading a different save
- At regular intervals so you always have a safe state to return to

:::: danger Unturned does not save automatically
Unturned has **no built-in autosave feature**. Everything that happened since the last save is lost if the server is stopped abruptly. Always save first before creating a backup.
::::

## Save before the backup

1. <b>Open the console</b><br>
   Open the **dashboard** of your server and switch to the **console**.

2. <b>Trigger a save</b><br>
   Enter the following command:

   ```
   save
   ```

3. <b>Stop the server</b><br>
   Afterwards stop your server via the dashboard.

   :::: tip Tip
   Alternatively you can use the `shutdown` command in the console – it saves the world and then shuts the server down cleanly.
   ::::

## Create a backup

You can find the exact process for creating, managing and restoring a backup in the general guide: [Create Backup](../create-backup.md).

:::: tip Tip
Lock important backups (e.g. before major changes) so they cannot be overwritten by automatic backups. Also download especially important backups to your PC in case your backup limit is reached.
::::

:::: info Note
If you only want to save the world itself, you can also download the server folder separately: [Download savegame](download-savegame.md).
::::

:::: warning Caution
Stop your server before creating or restoring a backup. If the server keeps running in the meantime, the backup can contain an incomplete save.
::::

:::: info Info
Automatic backups as well as restarts can be requested free of charge via a support ticket. The "Scheduled Tasks" feature is currently in development and will be released this year.
::::
