---
description: Download a savegame from a Terraria tModLoader server
---

# How to Download the Savegame of Your Terraria tModLoader Server

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
   /.local/share/Terraria/tModLoader/Worlds/
   ```

4. <b>Download the files</b><br>
   Download the `.wld` file and the matching `.twld` file to your PC. Both files belong together and form the savegame — always download both of them.

5. <b>Start the server</b><br>
   Start your server again.

:::: tip Find the right files
If there are several worlds in the directory, you can identify the active world by the name selected in the **Settings** in the dashboard. The `.wld` and the `.twld` file of a world always share the same filename.
::::

:::: tip Restore the savegame
If you want to transfer the savegame back to a server later, follow the guide [Add savegame](add-savegame.md).
::::

:::: info Regular backups
For automatic or regular backups you can also use the backup function: [Create backup](create-backup.md).
::::
