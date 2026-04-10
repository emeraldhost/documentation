---
description: Upload a savegame to a VEIN server
---

# How to Add a Savegame to Your VEIN Server

You can transfer your local savegame to your server and continue playing there. The savegame consists of `.vns` files (e.g. `Server.vns`).

:::: warning Warning
Uploading will overwrite the existing savegame on the server. Create a backup beforehand if you want to keep the current savegame.
::::

1. <b>Stop the server</b><br>
   Stop your server via the dashboard.

2. <b>Connect via SFTP</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md).

3. <b>Upload savegame</b><br>
   Upload your `.vns` files (e.g. `Server.vns`) to the following directory on the server:

   ```
   /Vein/Saved/SaveGames/
   ```

4. <b>Start the server</b><br>
   Start your server. Your savegame will now be loaded.

:::: tip Tip
You can find your local savegame on your PC in the Steam directory at `<Steam>\steamapps\common\VEIN\Saved\SaveGames\`.
::::
