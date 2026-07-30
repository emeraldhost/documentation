---
description: Download a savegame from a StarRupture server
---

# How to Download the Savegame of Your StarRupture Server

You can download your server's save to your PC at any time – for example as an additional backup or to transfer it to another server.

:::: warning Caution
Stop your server before downloading the files. StarRupture saves automatically at regular intervals while running – otherwise you would download an incomplete save.
::::

1. <b>Stop the server</b><br>
   Stop your server via the dashboard.

2. <b>Connect via SFTP</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md).

3. <b>Open the directory</b><br>
   Navigate to the following directory:

   ```
   /StarRupture/Saved/SaveGames/
   ```

   Open the folder named after your session there. Which session your server uses is defined by the `SessionName` value in the file `/DSSettings.txt`.

4. <b>Download the files</b><br>
   Download both files of the save to your PC:

   ```
   AutoSave0.sav
   AutoSave0.met
   ```

5. <b>Start the server</b><br>
   Start your server again.

:::: info Note
The two files belong together: the `.sav` holds the actual save with world, base and progress, the `.met` contains the matching metadata. Always back them up together – without the `.met` the save cannot be loaded later.
::::

:::: tip Back up the configuration as well
If you also want to save your server settings, download the following file from the main directory in addition:

```
/DSSettings.txt
```

It contains values such as `SessionName`, `SaveGameName` and the save interval.
::::

:::: tip Restoring the savegame
If you want to transfer the save back to a server later, follow the guide [Add savegame](add-savegame.md).
::::

:::: info Regular backups
For automatic or regular backups you can also use the backup function: [Create backup](create-backup.md).
::::
