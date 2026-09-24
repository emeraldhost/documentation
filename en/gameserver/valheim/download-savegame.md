---
description: Download a savegame from a Valheim server
---

# How to Download the Savegame of Your Valheim Server

You can download your server's savegame to your PC at any time – for example as an additional backup, to archive a world, or to move it to another server.

:::: warning Caution
Stop your server before downloading the files. While the server is running it saves regularly — otherwise you would download an incomplete or corrupted save.
::::

1. <b>Stop the server</b><br>
   Stop your server via the dashboard.

2. <b>Connect via SFTP</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md).

3. <b>Open the directory</b><br>
   Navigate to the following directory:

   ```
   /.config/unity3d/IronGate/Valheim/worlds_local/
   ```

4. <b>Download the world folder</b><br>
   Download the complete `<WorldName>` folder to your PC. Since Valheim 1.0, every world is a folder of its own whose files belong together as a set. Therefore always download the whole folder and not just individual files from it.

5. <b>Start the server</b><br>
   Start your server again.

:::: tip Tip
You can tell which folder belongs to your world from the **World Name** field in the **Settings** of the dashboard. If it contains `MyWorld`, for example, you need the folder `MyWorld`. Folders with `_backup_` in their name are backups, not the current state.
::::

:::: tip Restoring the savegame
If you want to transfer the save back to a server later, follow the guide [Add savegame](add-savegame.md).
::::

:::: info Regular backups
For automatic or regular backups you can also use the backup function: [Create backup](create-backup.md). To learn how to restore one of the automatic backups that Valheim itself creates on your server, see [Restore automatic backup](restore-automatic-backup.md).
::::
