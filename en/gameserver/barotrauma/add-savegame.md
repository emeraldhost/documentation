---
description: Upload a savegame to a Barotrauma server
---

# How to Upload a Savegame to Your Barotrauma Server

You can transfer your local savegame to your server and continue playing there.

## How to find your savegame

You can find your Barotrauma savegames on your PC at:

```
%LOCALAPPDATA%\Daedalic Entertainment GmbH\Barotrauma\Multiplayer\
```

The savegames are `.save` files in this folder.

## How to upload the savegame

:::: warning Warning
Stop your server before uploading files, otherwise they will be overwritten by the server.
::::

1. <b>Stop the server</b><br>
   Stop your server via the dashboard.

2. <b>Connect via SFTP</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md).

3. <b>Upload savegame</b><br>
   Upload your `.save` file to the following directory on the server:

   ```
   /config/Multiplayer/
   ```

4. <b>Start the server</b><br>
   Start your server and select the uploaded savegame.
