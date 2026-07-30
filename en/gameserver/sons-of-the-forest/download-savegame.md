---
description: Download a savegame from a Sons Of The Forest server
---

# How to Download the Savegame of Your Sons Of The Forest Server

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
   /serverconfig/Saves/DedicatedServer/Multiplayer/
   ```

4. <b>Choose the right folder</b><br>
   Each save is stored in its own folder named after the ten-digit slot number (e.g. `0000000001` for save slot `1`).

5. <b>Download the folder</b><br>
   Download the complete folder including all files it contains to your PC – these include several `.json` files and a `SaveData.zip`. The files belong together and must always be saved as a set.

6. <b>Start the server</b><br>
   Start your server again.

:::: tip Which folder is the right one?
You can tell which save your server currently uses from the `SaveSlot` value in the file `/serverconfig/dedicatedserver.cfg`. If it contains `"SaveSlot": 1`, for example, you need the folder `0000000001`.
::::

:::: info Note
Player data such as inventory, position and clothing is not part of the world savegame. Only the world state and your buildings are saved.
::::

:::: tip Restoring the savegame
If you want to transfer the save back to a server later, follow the guide [Add savegame](add-savegame.md).
::::

:::: info Regular backups
For automatic or regular backups you can also use the backup function: [Create backup](create-backup.md).
::::
