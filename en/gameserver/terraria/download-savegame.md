---
description: Download a savegame from a Terraria server
---

# How to Download the Savegame of Your Terraria Server

You can download your server's world to your PC at any time – for example as an additional backup, to archive it, or to move it to another server.

:::: warning Caution
Stop your server before downloading the file. While the server is running it saves at regular intervals — otherwise you would download an incomplete or corrupted world.
::::

1. <b>Stop the server</b><br>
   Stop your server via the dashboard.

2. <b>Connect via SFTP</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md).

3. <b>Open the directory</b><br>
   Navigate to the following directory:

   ```
   /saves/Worlds/
   ```

4. <b>Download the world</b><br>
   Download the `.wld` file of your world to your PC. The entire world is contained in this single file.

5. <b>Start the server</b><br>
   Start your server again.

:::: tip Which file is the right one?
You can tell which world is loaded from the **World Name** field in the **Settings** of the dashboard. If it contains `MyWorld`, for example, you need the file `MyWorld.wld`.
::::

:::: info Backup files
The server also stores backups with the `.bak` extension in the same folder. They belong to your world and contain a slightly older state. Download them as well if you want a complete copy of your worlds folder.
::::

:::: tip Continue playing locally
Copy the downloaded `.wld` file to `%userprofile%\Documents\My Games\Terraria\Worlds` on your PC to open the world in single player.
::::

:::: tip Restoring the world
If you want to transfer the world back to a server later, follow the guide [Add savegame](add-savegame.md).
::::

:::: info Regular backups
For automatic or regular backups you can also use the backup function: [Create backup](create-backup.md).
::::
