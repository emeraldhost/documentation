---
description: Reset the world on a Valheim server
---

# How to Reset the World on Your Valheim Server

You can start over with a completely new world on your server at any time. The server automatically creates the new world with a random seed when it starts. Your players keep their characters and inventories, as Valheim does not store them on the server but on the players' side. Your lists of admins, banned players and the whitelist are kept as well, as the server stores them independently of the world.

:::: warning Warning
Back up your current world before resetting it: create a [backup](create-backup.md) via the dashboard or download the world to your PC ([Download Savegame](download-savegame.md)).
::::

## Create a new world under a new name (recommended)

With this method, your previous world stays on the server unchanged and you can switch back to it at any time.

1. <b>Stop the server</b><br>
   Stop your server via the dashboard.

2. <b>Enter a new world name</b><br>
   Navigate to the **Settings** in the dashboard. Note down the current entry in the **World Name** field (`Dedicated` by default) and enter a new name there that no world on your server uses yet (e.g. `MyWorld2`). The name can be at most 20 characters long. A name that only differs from an existing world in upper and lower case does not count as a new name.

3. <b>Start the server</b><br>
   Save the settings and start your server. If the server does not find a world with the entered name, it automatically creates a new world.

:::: tip Tip
To switch back to the old world, enter the previous name in the **World Name** field again and restart the server. You can also use this to switch between several worlds.
::::

## Recreate the world under the same name

With this method, you rename or delete the previous world. On the next start, the server creates a new world under the same name.

1. <b>Stop the server</b><br>
   Stop your server via the dashboard.

2. <b>Connect via SFTP</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md) and go to the following directory:

   ```
   /.config/unity3d/IronGate/Valheim/worlds_local/
   ```

   Alternatively, you can also use the file manager of the dashboard.

3. <b>Rename or delete the world folder</b><br>
   Since Valheim 1.0, the server stores each world in its own folder, named after the entry in the **World Name** field (e.g. `MyWorld`). Rename this folder (e.g. to `MyWorld_old`) if you want to keep the old world on the server, or delete it. If you also want to keep the old world on your PC, download the folder via SFTP before deleting it.

   If the directory contains the files `MyWorld.fwl` and `MyWorld.db` instead of the folder (a world from a version before Valheim 1.0), proceed the same way with these two files.

4. <b>Download or delete old backups</b><br>
   Folders and files whose name starts with `MyWorld_backup_` (e.g. `MyWorld_backup_auto-20260115-183000`) are backups of the old world that the server created itself. Since they carry the same world name, they would otherwise sit between the backups of the new world. The server then treats the backups with `auto` in their name like automatic backups of the new world and deletes them over time as it creates new backups. If you want to keep the old backups, download them to your PC via SFTP. If you no longer need them, delete them.

5. <b>Start the server</b><br>
   Start your server. It automatically creates a new world under the same name.

:::: info World suddenly new?
If the entry in the **World Name** field does not match any existing world, for example because of a typo, the server creates a new world on startup without asking. Your previous world is not lost in that case, it remains unchanged in the `worlds_local` directory. Enter the correct name and restart the server.
::::

:::: info Note
You cannot set a specific seed via the dashboard, the server always picks a random one for a new world. If you want to play a world with a specific seed, create it locally in the game and then upload it to your server via [Add Savegame](add-savegame.md).
::::
