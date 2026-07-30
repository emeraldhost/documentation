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

4. <b>Download the files</b><br>
   Download both files `<WorldName>.fwl` (world metadata) and `<WorldName>.db` (world data) to your PC. The two files belong together and must always be saved as a pair.

5. <b>Start the server</b><br>
   Start your server again.

:::: tip Tip
You can tell which files belong to your world from the **World Name** field in the **Settings** of the dashboard. If it contains `MyWorld`, for example, you need the files `MyWorld.fwl` and `MyWorld.db`.
::::

:::: tip Restoring the savegame
If you want to transfer the save back to a server later, follow the guide [Add savegame](add-savegame.md).
::::

:::: info Regular backups
For automatic or regular backups you can also use the backup function: [Create backup](create-backup.md).
::::
