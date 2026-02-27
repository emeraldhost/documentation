---
description: Upload a savegame to a Palworld server
---

# How to Upload a Savegame to Your Palworld Server

You can transfer your local savegame to your server and continue playing there.

## How to find your savegame

You can find your Palworld savegames on your PC at:

```
%localappdata%\Pal\Saved\SaveGames\
```

Inside this folder there is a subfolder with your Steam ID, and within that your savegame folder (a long string of letters and numbers).

## How to upload the savegame

:::: warning Warning
Stop your server before uploading files, otherwise they will be overwritten by the server.
::::

1. <b>Stop the server</b><br>
   Stop your server via the dashboard.

2. <b>Connect via SFTP</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md).

3. <b>Upload savegame</b><br>
   Upload your savegame folder to the following directory on the server:

   ```
   /Pal/Saved/SaveGames/0/
   ```

4. <b>Enter folder name</b><br>
   Open the file `GameUserSettings.ini` at:

   ```
   /Pal/Saved/Config/LinuxServer/GameUserSettings.ini
   ```

   Find the parameter `DedicatedServerName=` and enter the name of your uploaded savegame folder:

   ```ini
   DedicatedServerName=YOUR_FOLDER_NAME
   ```

5. <b>Start the server</b><br>
   Start your server. Your savegame will now be loaded.

:::: tip Tip
You can find the savegame folder name in the directory `/Pal/Saved/SaveGames/0/`. It is the long string that serves as the folder name.
::::
