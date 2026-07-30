---
description: Download the savegame from a 7 Days to Die server
---

# How to Download the Savegame of Your 7 Days to Die Server

You can download your server's savegame to your PC at any time — for example as an additional backup, to archive it, or to move it to another server.

:::: warning Caution
Stop your server before downloading the files. While the server is running it saves regularly — otherwise you would download an incomplete or corrupted savegame.
::::

1. <b>Stop the server</b><br>
   Stop your server via the dashboard.

2. <b>Connect via SFTP</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md).

3. <b>Download the world data</b><br>
   Navigate to the following directory:

   ```
   /.local/share/7DaysToDie/GeneratedWorlds/
   ```

   Download the complete folder of your world (terrain, buildings) to your PC.

4. <b>Download the save data</b><br>
   Then navigate to the following directory:

   ```
   /Saves/
   ```

   Download the complete folder of your save (player progress, placements) to your PC.

5. <b>Start the server</b><br>
   Start your server again.

:::: tip Tip
The file `serverconfig.xml` tells you which folders are the right ones: the value of `GameWorld` is the name of your world folder in `GeneratedWorlds/`, the value of `GameName` is the name of your save folder in `/Saves/`.
::::

:::: warning Caution
Always download both folders. Without the matching world data, the save cannot be restored later.
::::

:::: tip Restoring the savegame
If you want to transfer the savegame back to a server later, follow the guide [Add savegame](add-savegame.md).
::::

:::: info Regular backups
For automatic or regular backups you can also use the backup function: [Create backup](create-backup.md).
::::
