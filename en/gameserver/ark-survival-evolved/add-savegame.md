---
description: Upload a savegame to an ARK Survival Evolved server
---

# How to Add a Savegame to Your ARK Survival Evolved Server

You can transfer your local savegame to your server and continue playing there.

## Find your savegame

You can find your ARK savegames on your PC at:

```
<Steam>\steamapps\common\ARK\ShooterGame\Saved\SavedArksLocal\
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
   /ShooterGame/Saved/SavedArks/
   ```

:::: warning Warning
Uploading files will overwrite any existing savegame on the server.
::::

4. <b>Start the server</b><br>
   Start your server. Your savegame will now be loaded.
