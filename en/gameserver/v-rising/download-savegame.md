---
description: Download a savegame from a V Rising server
---

# How to Download the Savegame of Your V Rising Server

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
   Saves/v1
   ```

4. <b>Download the savegame folder</b><br>
   Open the folder for your save game and download all files it contains to your PC. The easiest way is to download the entire savegame folder with its contents so that nothing is missing.

5. <b>Start the server</b><br>
   Start your server again.

:::: tip Tip
The `Saves/v1` directory contains one folder per world. Usually you will find only one folder there — if there are several, you can identify the active save by the most recent modification date.
::::

:::: tip Restoring the savegame
If you want to transfer the save back to a server later, follow the guide [Add savegame](add-savegame.md).
::::

:::: info Regular backups
For automatic or regular backups you can also use the backup function: [Create backup](create-backup.md).
::::
