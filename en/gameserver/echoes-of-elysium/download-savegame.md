---
description: Download a savegame from an Echoes of Elysium server
---

# How to Download the Savegame of Your Echoes of Elysium Server

You can download your server's save to your PC at any time — for example as an additional backup, for archiving or to transfer it to another server.

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
   /world/
   ```

   :::: info Note
   The `world` directory is located in the main directory of your server, so the full path is `/home/container/world/`.
   ::::

4. <b>Download the files</b><br>
   Download the complete contents of this directory to your PC. Always transfer all files and subfolders so no part of the save is missing.

5. <b>Start the server</b><br>
   Start your server again.

:::: info Note
`world` contains the entire save of your world. There is no additional world name and no separate save file — this directory is your savegame.
::::

:::: tip Restoring the savegame
If you want to transfer the save back to a server later, follow the guide [Add savegame](add-savegame.md).
::::

:::: info Regular backups
For automatic or regular backups you can also use the backup function: [Create backup](create-backup.md).
::::
