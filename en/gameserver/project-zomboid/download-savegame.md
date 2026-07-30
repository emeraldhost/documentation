---
description: Download a savegame from a Project Zomboid server
---

# How to Download the Savegame of Your Project Zomboid Server

You can download your server's savegame to your PC at any time — for example as an additional backup, to archive it, or to move it to another server.

:::: warning Caution
Stop your server before downloading the files. While the server is running it saves regularly — otherwise you would download an incomplete or corrupted savegame.
::::

1. <b>Stop the server</b><br>
   Stop your server via the dashboard.

2. <b>Connect via SFTP</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md).

3. <b>Open the directory</b><br>
   Go to the following directory:

   ```
   /Zomboid/Saves/Multiplayer/
   ```

4. <b>Download the files</b><br>
   Download the complete savegame folder from this directory to your PC. The folder contains the entire savegame of your server — always download it in full, not just individual files from it.

5. <b>Start the server</b><br>
   Start your server again.

:::: tip Find the right folder
The `Multiplayer/` directory contains one folder per savegame. If there are several folders, you can identify the currently used savegame by the most recent modification date.
::::

:::: tip Restore the savegame
If you want to transfer the savegame back to a server later, follow the guide [Add savegame](add-savegame.md).
::::

:::: info Regular backups
For automatic or regular backups you can also use the backup function: [Create backup](create-backup.md).
::::
