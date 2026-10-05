---
description: Upload a savegame to a The Bus server
---

# How to Add a Savegame to Your The Bus Server

You can transfer a savegame to your server and continue playing there.

:::: warning Warning
If a file with the same name already exists in the target folder, it will be overwritten during the upload. Create a [backup](create-backup.md) beforehand if you want to keep the existing savegame.
::::

:::: info Note
Savegames from older game versions (e.g. from Early Access) are not necessarily compatible with the current version. After starting, also check that the server is running the map you played the savegame on – you can find out how to switch the map under [Change Map](change-map.md).
::::

1. <b>Stop the server</b><br>
   Stop your server via the dashboard.

2. <b>Connect via SFTP</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md).

3. <b>Upload savegame</b><br>
   Upload the complete contents of your saved `SaveGames` folder to the following directory on the server, e.g. from the guide [Download Savegame](download-savegame.md):

   ```
   /TheBus/Saved/SaveGames/
   ```

4. <b>Start the server</b><br>
   Start your server, join it and check whether your previous progress has been loaded.
