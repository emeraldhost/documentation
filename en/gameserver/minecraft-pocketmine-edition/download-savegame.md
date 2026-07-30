---
description: Download a savegame from a Minecraft PocketMine Edition server
---

# How to Download the Savegame of Your Minecraft PocketMine Edition Server

You can download your server's world to your PC at any time – for example as an additional backup, for archiving or to transfer it to another server.

:::: warning Caution
Stop your server before downloading the files. While running, the server constantly writes to the world database – otherwise you would download an incomplete or corrupted save.
::::

1. <b>Find the active world</b><br>
   Open the `server.properties` file in the main folder of your server. The `level-name` entry shows the folder name of the currently loaded world:

   ```
   level-name=my_world
   ```

2. <b>Stop the server</b><br>
   Stop your server via the dashboard.

3. <b>Connect via SFTP</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md) or use the file browser in the dashboard.

4. <b>Open the directory</b><br>
   In the main folder of your server, navigate to the following folder:

   ```
   worlds
   ```

5. <b>Download the world folder</b><br>
   Every world is stored here as its own folder. Download the folder of your world **completely** – including the `db` subfolder as well as the files `level.dat` and `levelname.txt`.

6. <b>Start the server</b><br>
   Start your server again.

:::: danger Important
The `db` subfolder contains the actual LevelDB database with all chunks. Without it the downloaded save is worthless.
::::

:::: tip Back up the configuration as well
If you also want to save your server settings, download these additional files and folders from the main folder of your server:

```
server.properties
pocketmine.yml
ops.txt
white-list.txt
banned-players.txt
banned-ips.txt
plugins
plugin_data
resource_packs
```

The `plugin_data` folder holds the configurations of your plugins, and the `resource_packs` folder contains the packs themselves as well as the `resource_packs.yml` file.
::::

:::: tip Restoring the savegame
If you want to transfer the world back to a server later, follow the guide [Add savegame](add-savegame.md).
::::

:::: info Regular backups
For automatic or regular backups you can also use the backup function: [Create backup](create-backup.md).
::::
