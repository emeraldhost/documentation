---
description: Download a savegame from a Windrose server
---

# How to Download the Savegame of Your Windrose Server

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
   /R5/Saved/SaveProfiles/Default/RocksDB/<GameVersion>/Worlds/
   ```

   The placeholder `<GameVersion>` corresponds to the version the world was created with.

4. <b>Download the world folder</b><br>
   Download the entire `<WorldID>` folder including all files it contains to your PC. Individual files are not enough – the world consists of the complete folder.

5. <b>Start the server</b><br>
   Start your server again.

:::: tip Tip
The `<WorldID>` folder is named with an alphanumeric string. You can tell which folder is the right one from your server's [island ID](set-island-id.md) – it matches the folder name. Note down the `<GameVersion>` and the island ID as well, so you can restore the save correctly later.
::::

:::: tip Restoring the savegame
If you want to transfer the save back to a server later, follow the guide [Add savegame](add-savegame.md).
::::

:::: info Regular backups
For automatic or regular backups you can also use the backup function: [Create backup](create-backup.md).
::::
