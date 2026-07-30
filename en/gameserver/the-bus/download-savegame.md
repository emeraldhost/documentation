---
description: Download a savegame from a The Bus server
---

# How to Download the Savegame of Your The Bus Server

You can download your server's savegame to your PC at any time – for example as an additional backup, to archive a save, or to move it to another server.

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
   /TheBus/Saved/SaveGames/
   ```

4. <b>Download the files</b><br>
   Download all save files from this directory to your PC. The easiest way is to select the entire contents of the `SaveGames` folder and store them together in one folder on your PC.

5. <b>Start the server</b><br>
   Start your server again.

:::: tip Restoring the savegame
If you want to transfer the save back to a server later, follow the guide [Add savegame](add-savegame.md).
::::

:::: info Regular backups
For automatic or regular backups you can also use the backup function: [Create backup](create-backup.md).
::::
