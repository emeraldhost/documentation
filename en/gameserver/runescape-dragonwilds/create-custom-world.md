---
description: Create a custom world on a RuneScape Dragonwilds server
---

# How to Create a Custom World on Your RuneScape: Dragonwilds Server

By default, the server automatically creates a world with standard settings. You can instead create a world with your own settings and upload it to the server.

## Create custom world

1. <b>Launch the game</b><br>
   Start RuneScape: Dragonwilds locally on your PC.

2. <b>Create new world</b><br>
   Create a new world and select the **Custom** option. In the **Advanced** tab you can adjust all settings to your liking.

3. <b>Enter the world</b><br>
   Enter the world briefly so the save file is generated. Then exit the world again.

4. <b>Find savegame</b><br>
   The created `.sav` file can be found at:

   ```
   %LOCALAPPDATA%\RSDragonwilds\Saved\SaveGames
   ```

## Upload world to the server

1. <b>Stop the server</b><br>
   Stop your server via the dashboard.

2. <b>Connect via SFTP</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md).

3. <b>Upload savegame</b><br>
   Upload the `.sav` file to the following directory:

   ```
   /RSDragonwilds/Saved/SaveGames/
   ```

4. <b>Set world name</b><br>
   Open the **Settings** in the dashboard and enter the filename of your savegame (without `.sav`) in the **SaveGame** field.

5. <b>Start the server</b><br>
   Start your server. The custom world will now be loaded.

:::: info Note
The server automatically loads the most recent `.sav` file in the SaveGames folder. If a world already exists, it will be replaced by the uploaded file.
::::
