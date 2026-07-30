---
description: Download a world from a Hytale server
---

# How to Download the World of Your Hytale Server

You can download your server's world to your PC at any time, for example as an extra backup, to archive it, or to move it to another server.

:::: warning Caution
Stop your server before downloading the files. While the server is running, it saves regularly, otherwise you would download an incomplete or corrupted save.
::::

1. <b>Stop the server</b><br>
   Stop your server via the dashboard.

2. <b>Connect via SFTP</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md).

3. <b>Open the directory</b><br>
   Navigate to the following directory:

   ```
   /universe/worlds/
   ```

4. <b>Download the world folder</b><br>
   Every world is stored here as its own folder. Download the complete folder of your world to your PC.

5. <b>Download player data (optional)</b><br>
   Player progress (inventory, position, etc.) is not stored in the world folders but separately in the `players/` folder. If you want to save it as well, additionally download the contents of that folder.

6. <b>Start the server</b><br>
   Start your server again.

:::: tip Tip
You can see which world is currently loaded in the `config.json` in the root directory of your server. In the `Defaults` block, the `World` value contains the name of the world folder.
::::

:::: tip Restoring the world
If you want to transfer the world back to a server later, follow the guide [Upload world](upload-world.md).
::::

:::: info Regular backups
For automatic or regular backups you can also use the backup function: [Create backup](create-backup.md).
::::
