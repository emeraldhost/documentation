---
description: Add a savegame to an Unturned server
---

# How to Add a Savegame to Your Unturned Server

An Unturned save is not a single file – it consists of the folders `Level/` (the world) and `Players/` (the characters) inside your server folder under `/Servers/`. You do not have to enter a world name anywhere: the folder inside `Level/` is always named after the map the save was created on.

:::: tip Tip
Create a [backup](create-backup.md) of your current save before uploading, in case you want to switch back later.
::::

## Structure of a save

```
/Servers/<ServerID>/
        ├── Level/<MapName>/   ← structures, vehicles, objects
        └── Players/           ← characters, one subfolder per player
```

:::: info Which folder is mine?
`<ServerID>` is the folder name inside `/Servers/`. It comes from your server's startup parameter – usually there is exactly one folder there.
::::

## Upload the savegame

1. <b>Stop the server</b><br>
   Stop your server via the dashboard. While the server is running it writes to the save files itself and would overwrite your files on shutdown.

2. <b>Connect via SFTP</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md).

3. <b>Open the directory</b><br>
   Navigate to the folder of your server:

   ```
   /Servers/<ServerID>/
   ```

   :::: info Note
   If the folder does not exist yet, start the server once so the folder structure is created. Then stop it again before uploading your files.
   ::::

4. <b>Remove the old save</b><br>
   Delete the existing folders `Level/` and `Players/` if you want to replace the current save completely. Leftovers of the old world can lead to a mixed state.

5. <b>Upload the folders</b><br>
   Upload the folders `Level/` and `Players/` of your save completely into this directory.

6. <b>Set the map</b><br>
   Open the following file:

   ```
   /Servers/<ServerID>/Server/Commands.dat
   ```

   and enter the map that matches the folder name inside `Level/` – one instruction per line:

   ```
   Map Washington
   ```

7. <b>Start the server</b><br>
   Save all changes and start your server. Your uploaded save is now loaded on startup.

:::: danger Map and folder name must match
If the folder inside `Level/` is called `Elver`, for example, then `Commands.dat` has to contain `Map Elver`. If the names do not match, the server generates a new, empty world and your uploaded save is ignored.
::::

:::: warning Workshop maps need an extra entry
If your save comes from a Workshop map (e.g. Elver, Carpat or Hawaii), the `Map` entry alone is not enough. The map also has to be listed in `WorkshopDownloadConfig.json` so your server downloads it. See [Add mods](add-mods.md) for how to do that.
::::

## Keep the characters

The `Players/` folder holds the player saves. If you only want to keep the world and let all players start fresh, upload `Level/` only and leave `Players/` out. The other way round, the characters stay intact if you leave `Players/` untouched and only replace `Level/`.

:::: danger Single player worlds
Whether a single player world from the `Worlds` folder of your local Unturned installation can be used on a dedicated server is **not documented**. There is no official procedure for it. Always work with copies only and create a backup beforehand – an attempt can fail or lead to unexpected behaviour. Switching between two saves works reliably when both of them come from a dedicated server.
::::

:::: info Note
Unturned does not save automatically. To keep your progress, enter `save` in the console before stopping the server, or shut it down using `shutdown`.
::::
