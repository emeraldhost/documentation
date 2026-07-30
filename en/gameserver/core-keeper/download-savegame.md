---
description: Download a savegame from a Core Keeper server
---

# How to Download the Savegame of Your Core Keeper Server

You can download your server's world to your PC at any time — for example as an extra backup, to archive it, or to move it to another server.

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
   /.config/unity3d/Pugstorm/CoreKeeper/DedicatedServer/worlds/
   ```

4. <b>Download the world file</b><br>
   Download your world's `.world.gzip` file to your PC, for example `0.world.gzip`. If several worlds are stored in the directory, simply download all files to be on the safe side.

5. <b>Start the server</b><br>
   Start your server again.

:::: tip Finding the right world file
The number before `.world.gzip` is the **World Index**. You can tell which world your server currently loads from the World Index in the server settings: if it is set to `0`, then `0.world.gzip` is the active world; for `3` it is `3.world.gzip`.
::::

:::: tip Tip
If you want to continue playing the downloaded world locally in singleplayer, place the `.world.gzip` file on your PC in the following folder:

```
%USERPROFILE%\AppData\LocalLow\Pugstorm\Core Keeper\Steam\<SteamID>\worlds
```
::::

:::: tip Restoring the save later
If you want to transfer the save back to a server later on, follow the guide [Add savegame](add-savegame.md).
::::

:::: info Regular backups
For automatic or regular backups you can also use the backup function: [Create backup](create-backup.md).
::::
