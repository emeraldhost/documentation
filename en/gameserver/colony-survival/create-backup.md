---
description: Create a backup of a Colony Survival server
---

# How to Create a Backup of Your Colony Survival Server

Regular backups of your Colony Survival server protect you from data loss — whether due to a failed update, an incompatible mod or a corrupted world database.

## When should you create a backup?

- Before updating the server version
- Before adding, updating or removing mods
- Before uploading a different save
- Before major changes to the configuration
- At regular intervals so you always have a safe state to return to

## Create a backup

You can find the exact process for creating, managing and restoring a backup in the general guide: [Create Backup](../create-backup.md).

:::: warning Caution
Stop your server before creating or restoring a backup. Colony Survival stores the world in a SQLite database that is constantly written to while the server is running — a backup taken during operation can be incomplete.
::::

:::: tip Tip
Lock important backups (e.g. before major changes) so they cannot be overwritten by automatic backups. Also download especially important backups to your PC in case your backup limit is reached.
::::

## Create a backup while the server is running

Colony Survival ships its own backup command that you can run in the in-game chat. It works well as a quick intermediate save, but it does not replace a full backup.

1. <b>Open the chat</b><br>
   Press `T` in the game to open the chat.

2. <b>Create the backup</b><br>
   Run the following command:

   ```
   /backup
   ```

   :::: info Note
   `/backup` saves the world to disk first and then packs it into a ZIP archive. A separate `/save` is not needed for this.
   ::::

3. <b>Save the world in between</b><br>
   If you only want to persist the current state without creating an archive, this is enough:

   ```
   /save
   ```

4. <b>Download the backup</b><br>
   The server stores the ZIP archive in the savegame directory of your server:

   ```
   /gamedata/savegames/
   ```

   Download it to your PC via [SFTP](../establish-sftp-connection.md).

:::: info Note
You need admin rights on the server to use `/save` and `/backup`. To learn how to grant them, see [Add Admin](add-admin.md).
::::

:::: info Note
If you only want to save the world itself, you can also download the world folder directly: [Download savegame](download-savegame.md).
::::

:::: info Info
Automatic backups as well as restarts can be requested free of charge via a support ticket. The "Scheduled Tasks" feature is currently in development and will be released this year.
::::
