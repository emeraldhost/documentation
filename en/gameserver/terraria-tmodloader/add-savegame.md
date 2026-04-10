---
description: Upload a savegame to a Terraria tModLoader server
---

# How to Add a Savegame to Your Terraria tModLoader Server

You can transfer your local savegame to your server and continue playing there. The savegame consists of the `.wld` and `.twld` files.

:::: warning Warning
Uploading will overwrite the existing savegame on the server. Create a backup beforehand if you want to keep the current savegame.
::::

1. <b>Stop the server</b><br>
   Stop your server via the dashboard.

2. <b>Connect via SFTP</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md).

3. <b>Upload savegame</b><br>
   Upload your `.wld` and `.twld` files to the following directory on the server:

   ```
   /.local/share/Terraria/tModLoader/Worlds/
   ```

4. <b>Start the server</b><br>
   Start your server. Your savegame will now be loaded.

:::: tip Tip
You can find your local savegame on your PC at `%USERPROFILE%\Documents\My Games\Terraria\tModLoader\Worlds\`.
::::
