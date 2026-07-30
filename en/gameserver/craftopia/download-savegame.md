---
description: Download a savegame from a Craftopia server
---

# How to Download the Savegame of Your Craftopia Server

You can download your server's save to your PC at any time – for example as an additional backup or to transfer it to another server.

:::: warning Caution
Stop your server before downloading the files. Craftopia saves automatically while running – if you download during that time, the save can be incomplete or corrupted.
::::

1. <b>Stop the server</b><br>
   Stop your server via the dashboard.

2. <b>Connect via SFTP</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md).

3. <b>Open the directory</b><br>
   Navigate to the main directory of your server. There you will find the folder:

   ```
   /DedicatedServerSave/
   ```

4. <b>Download the folder</b><br>
   Download the **complete folder** including all files and subfolders to your PC.

5. <b>Start the server</b><br>
   Start your server again.

:::: warning Caution
The `DedicatedServerSave` folder contains all worlds of your server – the world files themselves are located in its subfolder `Worlds`. Always download the folder in full so nothing is missing.
::::

:::: info Different save location
By default the save is stored in `DedicatedServerSave/`. Which folder is actually used on your server is defined in the file `/ServerSetting.ini` in the `[Save]` section at the value `savePath`.
::::

:::: tip Back up the configuration as well
If you also want to save your server settings, download the following file in addition:

```
/ServerSetting.ini
```

It contains the world name, difficulty, game mode and the autosave settings, among others. You will need the world name if you want to restore the save later on.
::::

:::: tip Restoring the savegame
If you want to transfer the save back to a server later, follow the guide [Add savegame](add-savegame.md).
::::

:::: info Regular backups
For automatic or regular backups you can also use the backup function: [Create backup](create-backup.md).
::::
