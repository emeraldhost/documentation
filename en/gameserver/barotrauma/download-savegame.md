---
description: Download the savegame from a Barotrauma server
---

# How to Download the Savegame of Your Barotrauma Server

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
   /config/Multiplayer/
   ```

4. <b>Download the files</b><br>
   Download the `.save` file you want to your PC. If you want to back up all campaigns, download the entire contents of the folder.

5. <b>Start the server</b><br>
   Start your server again.

:::: tip Tip
The file name of the `.save` file matches the campaign name you see when selecting the savegame in the game. If there are several `.save` files in the folder, this is how you find the right one.
::::

:::: tip Restoring the savegame
If you want to transfer the savegame back to a server later, follow the guide [Add savegame](add-savegame.md).
::::

:::: info Regular backups
For automatic or regular backups you can also use the backup function: [Create backup](create-backup.md).
::::
