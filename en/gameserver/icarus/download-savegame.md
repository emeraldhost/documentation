---
description: Download a savegame from an Icarus server
---

# How to Download the Savegame of Your Icarus Server

You can download your server's prospect to your PC at any time, for example as an extra backup, to archive it, or to move it to another server.

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
   /ICARUS/Saved/PlayerData/DedicatedServer/Prospects/
   ```

4. <b>Download the prospect file</b><br>
   Download the `<YourProspect>.json` file to your PC. Every prospect is a single `.json` file that contains the complete save.

5. <b>Start the server</b><br>
   Start your server again.

:::: tip Tip
You can see which prospect is currently loaded in the following file:

```
/ICARUS/Saved/Config/WindowsServer/ServerSettings.ini
```

The `LoadProspect=` parameter contains the file name of your prospect (without `.json`).
::::

:::: tip Restoring the savegame
If you want to transfer the save back to a server later, follow the guide [Add savegame](add-savegame.md).
::::

:::: info Regular backups
For automatic or regular backups you can also use the backup function: [Create backup](create-backup.md).
::::
