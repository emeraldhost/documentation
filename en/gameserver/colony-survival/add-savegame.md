---
description: Add a savegame to a Colony Survival server
---

# How to Add a Savegame to Your Colony Survival Server

A save in Colony Survival is **a complete folder**, not a single file. Every world lives in its own subfolder inside the savegame directory of your server, and the name of that folder decides which world is loaded.

```
/gamedata/savegames/<worldname>/
```

:::: danger Important
The folder name has to match the value you enter in the **World Name** field in the **dashboard** exactly – including upper and lower case. If the server does not find a matching folder, it creates a new, empty world instead.
::::

## Files of a savegame

| File | Content |
|------|---------|
| `world.sqlite3` | The actual world as a SQLite database – terrain, buildings, colonies and settlers |
| `world.sqlite3-wal` | Write-ahead log of the database (not always present) |
| `world.sqlite3-shm` | Shared memory file of the write-ahead log (not always present) |
| `worldconfig.json` | Display name of the world, world type and the list of enabled mods |
| `permissionusers.json` | Optional: player permissions for this world |
| `permissiongroups.json` | Optional: custom permission groups for this world |

:::: info Note
If the world comes from an older game version, it may still contain a `regions/` folder and a `settings_readonly.json` file instead of `world.sqlite3`. In that case upload the complete folder as well – the server converts the world while loading it. Very old worlds (from before version 0.9) can no longer be loaded.
::::

## Upload the savegame

1. <b>Stop the server</b><br>
   Stop your server via the dashboard. While the server is running it constantly writes to the database and locks the savegame directory.

2. <b>Connect via SFTP</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md).

3. <b>Open the directory</b><br>
   Navigate to the following directory:

   ```
   /gamedata/savegames/
   ```

   :::: info Note
   If the folder does not exist yet, start your server once so the folder structure is created. Afterwards stop it again.
   ::::

4. <b>Secure the current save</b><br>
   Create a [backup](create-backup.md) or download the existing world folder in case you want to switch back later.

5. <b>Upload the world folder</b><br>
   Upload the complete folder of your world including all files into this directory. Use a distinctive folder name without spaces or special characters, for example `MyWorld`.

   :::: warning Warning
   If a folder with the same name already exists, delete it beforehand or rename your uploaded folder. Never mix the files of two worlds in one folder.
   ::::

6. <b>Enter the World Name</b><br>
   Open the **dashboard**, go to the **settings** and enter exactly the folder name from step 5 into the **World Name** field.

7. <b>Start the server</b><br>
   Start your server. Your uploaded world is now loaded on startup.

:::: tip Tip
Check the console in the dashboard after starting. If the server loads the intended world, its name shows up there. If it creates a new world instead, the folder name does not match the **World Name** field.
::::

## Move a world from another server

Switching worlds works most reliably when both of them come from a dedicated server – for example when moving to another host. Download the complete world folder there and then follow the steps above.

:::: warning Do not forget the mods
The file `worldconfig.json` stores which mods are enabled for this world. If those mods are missing on the new server, the world can fail to load properly. Upload the matching mods as well: [Add Mods](add-mods.md).
::::

## Find your local savegame

If you hosted a co-op world on your PC and want to move it to the server, you can find it in the installation folder of the game:

```
...\Steam\steamapps\common\Colony Survival\gamedata\savegames\
```

If Steam Cloud synchronisation is enabled, your worlds are stored here instead:

```
...\Steam\steamapps\common\Colony Survival\gamedata\savegames\_cloud\<SteamAccountID>\
```

:::: danger Single player worlds
Only transfer worlds you have already used in multiplayer. A pure single player world is marked as such in the game and has to be converted in the client first – whether a dedicated server loads it without that conversion is not documented. Always work with copies only.
::::
