---
description: Download a savegame from a DayZ server
---

# How to Download the Savegame of Your DayZ Server

You can download your server's savegame to your PC at any time — for example as an extra backup, to archive it, or to move it to another server. The savegame is located in the `storage_1` folder.

:::: info Note
DayZ saves are stored server-side only. The downloaded folder can therefore only be restored to another DayZ server, not to a singleplayer game.
::::

:::: warning Caution
Stop your server before downloading the files. While the server is running it saves regularly, so you would end up downloading an incomplete or corrupted save.
::::

1. <b>Stop the server</b><br>
   Stop your server via the dashboard.

2. <b>Connect via SFTP</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md).

3. <b>Open the directory</b><br>
   Navigate to the following directory:

   ```
   /mpmissions/dayzOffline.chernarusplus/storage_1/
   ```

   :::: tip Tip
   If you are using the Livonia map, the path is:
   ```
   /mpmissions/dayzOffline.enoch/storage_1/
   ```
   ::::

4. <b>Download the folder</b><br>
   Download the complete `storage_1` folder including all files inside it to your PC. It holds the entire world state of your server including buildings, loot and vehicles.

5. <b>Start the server</b><br>
   Start your server again.

:::: tip Finding the right mission
The `storage_1` folder is always located inside the mission folder of the map your server currently loads: `dayzOffline.chernarusplus` for Chernarus, `dayzOffline.enoch` for Livonia. If you run a different map, you will find the folder in that map's mission folder under `/mpmissions/`.
::::

:::: tip Restoring the save later
If you want to transfer the save back to a server later on, follow the guide [Add savegame](add-savegame.md).
::::

:::: info Regular backups
For automatic or regular backups you can also use the backup function: [Create backup](create-backup.md).
::::
