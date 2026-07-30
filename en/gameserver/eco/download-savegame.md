---
description: Download a savegame from an Eco server
---

# How to Download the Savegame of Your Eco Server

You can download your server's save to your PC at any time – for example as an additional backup or to transfer it to another server.

:::: warning Caution
Stop your server before downloading the files. Eco writes to the save regularly while running – otherwise you would download an incomplete state.
::::

1. <b>Stop the server</b><br>
   Stop your server via the dashboard.

2. <b>Connect via SFTP</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md).

3. <b>Open the directory</b><br>
   Navigate to the following directory:

   ```
   /Storage/
   ```

4. <b>Download the files</b><br>
   Download both files to your PC:

   ```
   Game.db
   Game.eco
   ```

5. <b>Start the server</b><br>
   Start your server again.

:::: danger Important
`Game.db` and `Game.eco` belong together and reference each other. Always back them up together – a single file cannot be loaded.
::::

## What else is in the storage folder?

| File or folder | Content |
|----------------|---------|
| `Game.db` | Database containing the world and all objects |
| `Game.eco` | State of the world, including players, economy and laws |
| `Backup/` | Automatic snapshots the server creates itself and overwrites on a rolling basis |

:::: tip Back up the configuration as well
If you also want to save your server settings, download the following folder in addition:

```
/Configs/
```

It contains files such as `Network.eco`, `Users.eco` and `Storage.eco`.
::::

:::: tip Restoring the savegame
If you want to transfer the save back to a server later, follow the guide [Add savegame](add-savegame.md).
::::

:::: info Regular backups
For automatic or regular backups you can also use the backup function: [Create backup](create-backup.md).
::::
