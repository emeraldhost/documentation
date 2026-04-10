---
description: Upload a savegame to a DayZ server
---

# How to Add a Savegame to Your DayZ Server

You can transfer a savegame from another DayZ server to your server. The savegame is located in the `storage_1` folder.

:::: info Note
DayZ saves are stored server-side only. This guide describes transferring savegames between DayZ servers, not from a singleplayer game.
::::

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
To obtain the savegame from another server, download the `storage_1` folder via SFTP from the source server.
::::
