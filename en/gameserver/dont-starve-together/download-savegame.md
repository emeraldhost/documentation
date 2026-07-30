---
description: Download a savegame from a Don’t Starve Together server
---

# How to Download the Savegame of Your Don’t Starve Together Server

You can download your server's save to your PC at any time – for example as an additional backup, to archive a world, or to move it to another server.

:::: warning Caution
Stop your server before downloading the files. While the server is running it saves regularly — otherwise you would download an incomplete or corrupted save.
::::

1. <b>Stop the server</b><br>
   Stop your server via the dashboard.

2. <b>Connect via SFTP</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md) or use the file browser in the dashboard.

3. <b>Open the cluster folder</b><br>
   Navigate to the folder that contains the `cluster.ini` file. That is your cluster folder. Inside you will find the shard folders `Master` (overworld) and, if the caves are enabled, `Caves`.

4. <b>Download the save</b><br>
   Download the complete `save` folder:

   ```
   <cluster folder>/Master/save/
   ```

5. <b>Download the caves</b><br>
   If the caves are enabled on your server, also download this folder:

   ```
   <cluster folder>/Caves/save/
   ```

6. <b>Start the server</b><br>
   Start your server again.

:::: info Note
The save is a folder, not a single file. Always download it completely, including the `saveindex` file and the `session` subfolder. Individual files taken out of it cannot be used on their own.
::::

:::: warning Overworld and caves belong together
If your server uses the caves, always back up both `save` folders together. If you later restore only one of them, the overworld and the caves will no longer match.
::::

:::: tip Restoring the savegame
If you want to transfer the save back to a server later, follow the guide [Add Savegame](add-savegame.md).
::::

:::: info Regular backups
For automatic or regular backups you can also use the backup function: [Create Backup](create-backup.md).
::::
