---
description: Download a savegame from a RuneScape Dragonwilds server
---

# How to Download the Savegame of Your RuneScape: Dragonwilds Server

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
   /RSDragonwilds/Saved/SaveGames/
   ```

4. <b>Download the file</b><br>
   Download the `.sav` file of your world from this directory to your PC. This single file contains the complete savegame.

5. <b>Start the server</b><br>
   Start your server again.

:::: tip Find the right file
If there are several `.sav` files in the directory, you can find the name of the active world in the **Settings** in the dashboard in the **SaveGame** field — the matching file has exactly that name plus the `.sav` extension.
::::

:::: tip Restore the savegame
If you want to transfer the savegame back to a server later, follow the guide [Add savegame](add-savegame.md).
::::

:::: info Regular backups
For automatic or regular backups you can also use the backup function: [Create backup](create-backup.md).
::::
