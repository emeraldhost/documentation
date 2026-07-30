---
description: Download a savegame from a Palworld server
---

# How to Download the Savegame of Your Palworld Server

You can download your server's savegame to your PC at any time, for example as an extra backup, to archive it, or to move it to another server.

:::: warning Caution
Stop your server before downloading the files. While the server is running, it saves regularly, otherwise you would download an incomplete or corrupted save.
::::

1. <b>Stop the server</b><br>
   Stop your server via the dashboard.

2. <b>Connect via SFTP</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md).

3. <b>Open the directory</b><br>
   Navigate to the following directory:

   ```
   /Pal/Saved/SaveGames/0/
   ```

4. <b>Download the savegame folder</b><br>
   Download the complete savegame folder to your PC. The folder name is a long string of letters and numbers and contains all world and player data.

5. <b>Start the server</b><br>
   Start your server again.

:::: tip Tip
If there are several folders in `/Pal/Saved/SaveGames/0/`, you can find the currently loaded savegame folder in the following file:

```
/Pal/Saved/Config/LinuxServer/GameUserSettings.ini
```

The `DedicatedServerName=` parameter contains the name of the savegame folder in use.
::::

:::: tip Restoring the savegame
If you want to transfer the save back to a server later, follow the guide [Upload savegame](upload-savegame.md).
::::

:::: info Regular backups
For automatic or regular backups you can also use the backup function: [Create backup](create-backup.md).
::::
