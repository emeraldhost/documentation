---
description: Add a savegame to a Valheim server
---

# How to Add a Savegame to Your Valheim Server

You can transfer a local save to your server to continue playing with an existing world.

## Find the local savegame

1. <b>Open savegame folder</b><br>
   Press `Windows Key + R`, enter the following path and confirm with Enter:

   ```
   %userprofile%\AppData\LocalLow\IronGate\Valheim\worlds_local
   ```

2. <b>Identify world files</b><br>
   Each world consists of two files with the same name: `<WorldName>.fwl` (world metadata) and `<WorldName>.db` (world data). Both files must be transferred together.

## Upload and apply the savegame

1. <b>Stop the server</b><br>
   Stop your server via the dashboard.

2. <b>Connect via SFTP</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md).

3. <b>Upload world files</b><br>
   Upload both files `<WorldName>.fwl` and `<WorldName>.db` to the following directory:

   ```
   /.config/unity3d/IronGate/Valheim/worlds_local/
   ```

4. <b>Set world name</b><br>
   Open the dashboard, navigate to the **Settings** and enter the name of your uploaded files – without the file extension – in the **World Name** field (e.g. `MyWorld` for `MyWorld.fwl` and `MyWorld.db`).

5. <b>Start the server</b><br>
   Save the settings and start your server.

:::: warning Warning
If the `worlds_local` folder does not exist, start the server once so the folder structure is created automatically. Stop the server again before uploading the files.
::::

:::: tip Tip
Create a backup of your existing server savegame before uploading, in case you want to switch back later.
::::
