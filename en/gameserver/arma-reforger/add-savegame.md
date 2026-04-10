---
description: Upload a savegame to an Arma Reforger server
---

# How to Add a Savegame to Your Arma Reforger Server

You can transfer a savegame to your server to continue an existing game state.

## Upload the savegame

:::: warning Warning
Stop your server before uploading files, otherwise they will be overwritten by the server.
::::

1. <b>Stop the server</b><br>
   Stop your server via the dashboard.

2. <b>Connect via SFTP</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md).

3. <b>Upload savegame</b><br>
   Upload your save folder to the following directory on the server:

   ```
   /config/profile/save/
   ```

:::: warning Warning
Uploading files will overwrite any existing savegame on the server.
::::

4. <b>Start the server</b><br>
   Start your server. Your savegame will now be loaded.
