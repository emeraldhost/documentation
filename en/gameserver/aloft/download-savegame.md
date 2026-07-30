---
description: Download the savegame from an Aloft server
---

# How to Download the Savegame of Your Aloft Server

You can download your server's savegame to your PC at any time — for example as an additional backup, to archive it, or to move it to another server.

:::: warning Caution
Stop your server before downloading the files. While the server is running it saves regularly — otherwise you would download an incomplete or corrupted savegame.
::::

1. <b>Stop the server</b><br>
   Stop your server via the dashboard.

2. <b>Connect via SFTP</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md).

3. <b>Open the directory</b><br>
   Navigate to the following directory:

   ```
   /Aloft/Saved/SaveGames/
   ```

4. <b>Download the files</b><br>
   Download the savegame files from this directory to your PC. The safest approach is to transfer the entire contents of the folder so that no part of the savegame is missing.

5. <b>Start the server</b><br>
   Start your server again.

:::: tip Restoring the savegame
If you want to transfer the savegame back to a server later, follow the guide [Add savegame](add-savegame.md).
::::

:::: info Regular backups
For automatic or regular backups you can also use the backup function: [Create backup](create-backup.md).
::::
