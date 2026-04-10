---
description: Upload a savegame to an Aloft server
---

# How to Add a Savegame to Your Aloft Server

You can transfer your local savegame to your server and continue playing there.

## Find your savegame

You can find your Aloft savegames on your PC at:

```
%LOCALAPPDATA%\Aloft\Saved\SaveGames\
```

## Upload the savegame

:::: warning Warning
Stop your server before uploading files, otherwise they will be overwritten by the server.
::::

1. <b>Stop the server</b><br>
   Stop your server via the dashboard.

2. <b>Connect via SFTP</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md).

3. <b>Upload savegame</b><br>
   Upload your savegame files to the following directory on the server:

   ```
   /Aloft/Saved/SaveGames/
   ```

:::: warning Warning
Uploading files will overwrite any existing savegame on the server.
::::

4. <b>Start the server</b><br>
   Start your server. Your savegame will now be loaded.
