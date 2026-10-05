---
description: Download a savegame from a The Bus server
---

# How to Download the Savegame of Your The Bus Server

You can download your server's savegame to your PC at any time – e.g. as an additional backup, to archive a savegame, or to move it to another server.

:::: warning Warning
Stop your server before downloading the files. This ensures that no files are changed during the download and that your savegame is complete.
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

:::: info Note
Savegames are not necessarily compatible between major game versions – older savegames from Early Access, for example, may no longer work since the release of version 1.0. That's why you should download your savegame before major updates.
::::

:::: tip Tip
If you want to transfer the savegame back to a server later, follow the guide [Add savegame](add-savegame.md). For regular backups you can also use the backup function: [Create backup](create-backup.md).
::::
