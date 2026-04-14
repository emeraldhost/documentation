---
description: Add a savegame to a Windrose server
---

# How to Add a Savegame to Your Windrose Server

You can transfer a local save to your server to continue playing with an existing world.

## Find the local savegame

1. <b>Open savegame folder</b><br>
   Press `Windows Key + R`, enter the following path and confirm with Enter:

   ```
   %LOCALAPPDATA%\R5\Saved\SaveProfiles
   ```

2. <b>Navigate to the world folder</b><br>
   Open your SteamID folder and navigate to:

   ```
   RocksDB\<GameVersion>\Worlds\
   ```

3. <b>Identify the world folder</b><br>
   Inside you will find a folder named with an alphanumeric string – the `<WorldID>`. This corresponds to the island ID of your world.

## Upload and apply the savegame

1. <b>Stop the server</b><br>
   Stop your server via the dashboard.

2. <b>Connect via SFTP</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md).

3. <b>Upload world folder</b><br>
   Upload the entire `<WorldID>` folder to the following directory:

   ```
   /R5/Saved/SaveProfiles/Default/RocksDB/<GameVersion>/Worlds/
   ```

   The placeholder `<GameVersion>` must match the server's version folder name.

4. <b>Set island ID</b><br>
   For the server to load the uploaded world, set the [island ID](set-island-id.md) to the name of the `<WorldID>` folder.

5. <b>Start the server</b><br>
   Start your server.

:::: warning Warning
Make sure the `<GameVersion>` of your savegame matches the server version. Saves from older versions may be incompatible.
::::

:::: tip Tip
Create a backup of your existing server savegame before uploading, in case you want to switch back later.
::::
