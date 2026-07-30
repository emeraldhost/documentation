---
description: Download a savegame from a Colony Survival server
---

# How to Download the Savegame of Your Colony Survival Server

You can download the world of your server to your PC at any time – for example as an additional backup or to move it to another server.

:::: warning Caution
Stop your server before downloading the files. Colony Survival constantly writes to the world database while it is running – otherwise you would download an incomplete or corrupted save.
::::

1. <b>Stop the server</b><br>
   Stop your server via the dashboard.

2. <b>Connect via SFTP</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md).

3. <b>Open the directory</b><br>
   Navigate to the following directory:

   ```
   /gamedata/savegames/
   ```

4. <b>Download the world folder</b><br>
   Download the complete folder of your world including all files. You can see its name in the **World Name** field in the **dashboard**.

   | File | Content |
   |------|---------|
   | `world.sqlite3` | The actual world as a SQLite database |
   | `world.sqlite3-wal` | Write-ahead log of the database (not always present) |
   | `world.sqlite3-shm` | Shared memory file of the write-ahead log (not always present) |
   | `worldconfig.json` | Display name, world type and enabled mods |
   | `permissionusers.json` | Player permissions (if created) |
   | `permissiongroups.json` | Custom permission groups (if created) |

5. <b>Start the server</b><br>
   Start your server again.

:::: info Note
Always download the **complete folder**. The files belong together: without `worldconfig.json` the save is missing the world type and the list of enabled mods, and without the `-wal` file the most recent changes to the world can be missing.
::::

:::: tip Back up your mods as well
If your world uses mods, also save the mod directory so the world can be loaded again later:

```
/gamedata/mods/
```
::::

:::: tip Restore the savegame
If you want to move the save back onto a server later, follow the guide [Add Savegame](add-savegame.md).
::::

:::: info Regular backups
For automatic or regular backups you can also use the backup feature: [Create Backup](create-backup.md).
::::
