---
description: Upload a savegame to a The Bus server
---

# How to Add a Savegame to Your The Bus Server

You can transfer a savegame to your server and continue playing there.

:::: warning Warning
Uploading will overwrite the existing savegame on the server. Create a backup beforehand if you want to keep the current savegame.
::::

1. <b>Stop the server</b><br>
   Stop your server via the dashboard.

2. <b>Connect via SFTP</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md).

3. <b>Upload savegame</b><br>
   Upload your save files to the following directory on the server:

   ```
   /TheBus/Saved/SaveGames/
   ```

4. <b>Start the server</b><br>
   Start your server. Your savegame will now be loaded.
