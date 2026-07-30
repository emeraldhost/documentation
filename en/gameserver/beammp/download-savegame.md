---
description: Download a savegame from a BeamMP server
---

# How to Download the Savegame of Your BeamMP Server

BeamMP is based on the BeamNG.drive sandbox and does not use persistent world savegames. What you can download instead are the server-side map and resource files — for example as an extra backup, to archive them, or to move them to another server.

:::: warning Caution
Stop your server before downloading the files. While the server is running it accesses these files, so you would end up with an incomplete or corrupted copy.
::::

1. <b>Stop the server</b><br>
   Stop your server via the dashboard.

2. <b>Connect via SFTP</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md).

3. <b>Open the directory</b><br>
   Navigate to the following directory:

   ```
   /Resources/Client/
   ```

4. <b>Download the files</b><br>
   Download the entire contents of the directory to your PC. This is where your custom map files are stored, which the server delivers to the players.

5. <b>Start the server</b><br>
   Start your server again.

:::: tip Tip
Since BeamMP is based on the BeamNG.drive sandbox, there are no persistent world savegames. Game progress is not saved on the server side — apart from the files in `/Resources/Client/`, there is no save data to back up.
::::

:::: tip Restoring the save later
If you want to transfer the files back to a server later on, follow the guide [Add savegame](add-savegame.md).
::::

:::: info Regular backups
For automatic or regular backups you can also use the backup function: [Create backup](create-backup.md).
::::
