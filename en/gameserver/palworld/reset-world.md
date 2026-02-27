---
description: Reset the world on a Palworld server
---

# How to Reset the World on Your Palworld Server

You can reset your server's world to generate a completely new one. This deletes all save data and buildings.

:::: warning Warning
This action cannot be undone. Create a backup beforehand if you want to keep the save data.
::::

1. <b>Stop the server</b><br>
   Stop your server via the dashboard.

2. <b>Connect via SFTP</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md).

3. <b>Delete savegame folder</b><br>
   Navigate to:

   ```
   /Pal/Saved/SaveGames/0/
   ```

   Delete the folder inside (a folder with a long string of characters as its name).

4. <b>Start the server</b><br>
   Start your server. A new world will be generated automatically.

:::: tip Tip
Your server settings in `PalWorldSettings.ini` are preserved and do not need to be reconfigured.
::::
