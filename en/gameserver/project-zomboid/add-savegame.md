---
description: Upload a savegame to a Project Zomboid server
---

# How to Upload a Savegame to Your Project Zomboid Server

You can transfer your local savegame to your server and continue playing there.

## How to find your savegame

You can find your Project Zomboid multiplayer savegames on your PC at:

```
%USERPROFILE%\Zomboid\Saves\Multiplayer\
```

## How to upload the savegame

:::: warning Warning
Stop your server before uploading files. An existing savegame on the server will be overwritten.
::::

1. <b>Stop the server</b><br>
   Stop your server via the dashboard.

2. <b>Connect via SFTP</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md).

3. <b>Upload savegame</b><br>
   Upload your savegame folder to the following directory on the server:

   ```
   /Zomboid/Saves/Multiplayer/
   ```

4. <b>Start the server</b><br>
   Start your server. Your savegame will now be loaded.

:::: tip Tip
Create a backup of the existing savegame on the server before uploading, in case you want to restore it later.
::::
