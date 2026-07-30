---
description: Add a savegame to a SCUM server
---

# How to Add a Savegame to Your SCUM Server

The complete save of a SCUM server lives in a single SQLite database called `SCUM.db`. It contains the world, all bases, vehicles, characters and their progress.

:::: info Note
The file name `SCUM.db` is fixed. You therefore do not have to enter a world or save name anywhere in the configuration – the server name has nothing to do with the savegame.
::::

## Files of the savegame

A save consists of three files that always belong together:

| File | Content |
|------|---------|
| `SCUM.db` | The actual database with the world, bases, vehicles and characters |
| `SCUM.db-wal` | Write-ahead log of the database |
| `SCUM.db-shm` | Shared memory file of the write-ahead log |

## Upload the savegame

1. <b>Stop the server</b><br>
   Stop your server via the dashboard. While the server is running it constantly writes to the database.

2. <b>Connect via SFTP</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md).

3. <b>Open the directory</b><br>
   Navigate to the following directory:

   ```
   /SCUM/Saved/SaveFiles/
   ```

4. <b>Remove the old files</b><br>
   Delete the existing files `SCUM.db`, `SCUM.db-wal` and `SCUM.db-shm` there. If `SCUM.db-wal` or `SCUM.db-shm` are left behind, they will overwrite parts of your uploaded database on startup.

   :::: warning Warning
   This removes the current save of your server. Create a [backup](create-backup.md) beforehand or download the existing save in case you want to switch back.
   ::::

5. <b>Upload the new database</b><br>
   Upload your own `SCUM.db` into the same directory. The file name has to be exactly `SCUM.db`.

6. <b>Start the server</b><br>
   Start your server. The new save is now loaded.

## Find your local savegame

You can find your single player save on your PC under:

```
C:\Users\<Username>\AppData\Local\SCUM\Saved\SaveFiles\
```

The database is called `SCUM.db` there as well.

:::: danger Important
There is **no official procedure** for transferring a single player save to a dedicated server. Player and world data are stored in the same database and cannot be separated without editing the database directly. An attempted transfer can therefore fail or lead to unexpected behaviour – only work with copies and create a backup beforehand.
::::

:::: tip Tip
Switching between two saves works most reliably when both of them come from a dedicated server – for example when moving to another server.
::::
