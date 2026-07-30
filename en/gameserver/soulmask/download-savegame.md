---
description: Download a savegame from a Soulmask server
---

# How to Download the Savegame of Your Soulmask Server

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
   /WS/Saved/Worlds/Dedicated/Level01_Main/
   ```

4. <b>Download the world data</b><br>
   Download the `world.db` file from this directory to your PC. It contains your complete world including buildings, player and character data.

5. <b>Download the gameplay settings (optional)</b><br>
   If you also want to save your gameplay settings, go to the following directory as well and download the `GameXishu.json` file:

   ```
   /WS/Saved/GameplaySettings/
   ```

6. <b>Start the server</b><br>
   Start your server again.

:::: tip Find the right folder
The `Level01_Main` folder corresponds to the default map Cloud Mist Forest. If your server runs a different map, the `world.db` is located in the folder matching the value of the map setting in the dashboard (e.g. `DLC_Level01_Main` for Shifting Sands).
::::

:::: tip Restore the savegame
If you want to transfer the savegame back to a server later, follow the guide [Add savegame](add-savegame.md).
::::

:::: info Regular backups
For automatic or regular backups you can also use the backup function: [Create backup](create-backup.md).
::::
