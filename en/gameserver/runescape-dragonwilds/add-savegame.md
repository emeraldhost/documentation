---
description: Upload a savegame to a RuneScape Dragonwilds server
---

# How to Add a Savegame to Your RuneScape: Dragonwilds Server

You can upload an existing singleplayer world to your server.

## Find savegame

Your local savegame can be found on your PC at:

```
%LOCALAPPDATA%\RSDragonwilds\Saved\SaveGames
```

:::: tip Tip
Press `Windows + R` and enter `%LOCALAPPDATA%\RSDragonwilds\Saved\SaveGames` to open the folder directly.
::::

The world file has the `.sav` extension.

## Upload savegame

1. <b>Stop the server</b><br>
   Stop your server via the dashboard.

2. <b>Connect via SFTP</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md).

3. <b>Upload savegame</b><br>
   Upload the `.sav` file to the following directory on the server:

   ```
   /RSDragonwilds/Saved/SaveGames/
   ```

4. <b>Set world name</b><br>
   Open the **Settings** in the dashboard and enter the filename of your savegame (without `.sav`) in the **SaveGame** field.

5. <b>Start the server</b><br>
   Start your server.

:::: warning Warning
Uploading will overwrite the existing save on the server.
::::
