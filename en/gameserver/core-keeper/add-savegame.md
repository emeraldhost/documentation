---
description: Upload a savegame to a Core Keeper server
---

# How to Add a Savegame to Your Core Keeper Server

You can upload an existing singleplayer world to your server.

## Find savegame

Your local savegame can be found on your PC at:

```
%USERPROFILE%\AppData\LocalLow\Pugstorm\Core Keeper\Steam\<SteamID>\worlds
```

:::: tip Tip
Press `Windows + R`, enter `%USERPROFILE%\AppData\LocalLow\Pugstorm\Core Keeper\Steam\` and navigate to the folder with your SteamID, then to `worlds`.
::::

The world file is named e.g. `0.world.gzip`. The number before `.world.gzip` is the **World Index**.

## Upload savegame

1. <b>Stop the server</b><br>
   Stop your server via the dashboard.

2. <b>Connect via SFTP</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md).

3. <b>Upload world</b><br>
   Upload the `.world.gzip` file to the following directory:

   ```
   /.config/unity3d/Pugstorm/CoreKeeper/DedicatedServer/worlds/
   ```

4. <b>Set World Index</b><br>
   Make sure the **World Index** in the server settings matches the number of your world file.

   :::: tip Example
   If your file is named `0.world.gzip`, the World Index must be `0`. For `3.world.gzip` it must be `3`.
   ::::

5. <b>Start the server</b><br>
   Start your server.

:::: warning Warning
Uploading will overwrite the existing save on the server.
::::
