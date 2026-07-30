---
description: Download a savegame from a SCUM server
---

# How to Download the Savegame of Your SCUM Server

You can download your server's save to your PC at any time – for example as an additional backup or to transfer it to another server.

:::: warning Caution
Stop your server before downloading the files. SCUM constantly writes to the database while running — otherwise you would download an incomplete or corrupted save.
::::

1. <b>Stop the server</b><br>
   Stop your server via the dashboard.

2. <b>Connect via SFTP</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md).

3. <b>Open the directory</b><br>
   Navigate to the following directory:

   ```
   /SCUM/Saved/SaveFiles/
   ```

4. <b>Download the files</b><br>
   Download all three files to your PC:

   ```
   SCUM.db
   SCUM.db-wal
   SCUM.db-shm
   ```

5. <b>Start the server</b><br>
   Start your server again.

:::: info Note
The three files belong together: `SCUM.db` is the actual database containing the world, bases, vehicles and characters, `SCUM.db-wal` is the write-ahead log and `SCUM.db-shm` the matching shared memory file. Always back them up together.
::::

:::: tip Back up the configuration as well
If you also want to save your server settings, download the following folder in addition:

```
/SCUM/Saved/Config/WindowsServer/
```

It contains files such as `ServerSettings.ini`, `AdminUsers.ini` and `BannedUsers.ini`.
::::

:::: tip Restoring the savegame
If you want to transfer the save back to a server later, follow the guide [Add savegame](add-savegame.md).
::::

:::: info Regular backups
For automatic or regular backups you can also use the backup function: [Create backup](create-backup.md).
::::
