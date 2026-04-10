---
description: Upload a savegame to a DayZ server
---

# How to Add a Savegame to Your DayZ Server

You can transfer your local savegame to your server and continue playing there. The savegame is located in the `storage_1` folder.

:::: warning Warning
Uploading will overwrite the existing savegame on the server. Create a backup beforehand if you want to keep the current savegame.
::::

1. <b>Stop the server</b><br>
   Stop your server via the dashboard.

2. <b>Connect via SFTP</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md).

3. <b>Upload savegame</b><br>
   Upload your `storage_1` folder to the following directory on the server:

   ```
   /mpmissions/dayzOffline.chernarusplus/storage_1/
   ```

   :::: tip Tip
   If you are using the Livonia map, the path is:
   ```
   /mpmissions/dayzOffline.enoch/storage_1/
   ```
   ::::

4. <b>Start the server</b><br>
   Start your server. Your savegame will now be loaded.

:::: tip Tip
You can find your local savegame on your PC at `%LOCALAPPDATA%\DayZ\`.
::::
