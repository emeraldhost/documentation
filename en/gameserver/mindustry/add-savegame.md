---
description: Add a savegame to a Mindustry server
---

# How to Add a Savegame to Your Mindustry Server

In Mindustry a save is a single file with the extension `.msav`. Your server reads it from the folder `/config/saves/`.

:::: info Note
There is **no world name field** in any configuration. The so-called slot is simply the file name without the `.msav` extension. So the file `myworld.msav` is loaded with the command `load myworld`.
::::

## Upload the savegame

1. <b>Stop the server</b><br>
   Stop your server via the dashboard. If a game is running, the server might otherwise overwrite your file with an auto-save.

2. <b>Connect via SFTP</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md).

3. <b>Open the directory</b><br>
   Change into the following directory:

   ```
   /config/saves/
   ```

   :::: info Note
   If the folder does not exist yet, create it. The spelling must be exactly `config/saves` – your server runs on Linux and is case sensitive.
   ::::

4. <b>Upload the file</b><br>
   Upload your `.msav` file directly into this folder. Do not create subfolders – the server only reads files that sit directly in the folder.

   :::: tip Tip
   Use a short file name without spaces, for example `myworld.msav`. You will later use that name without the extension as the slot.
   ::::

5. <b>Start the server</b><br>
   Start your server via the dashboard.

6. <b>Open the console</b><br>
   Open the **console** of your server in the dashboard.

7. <b>List the saves</b><br>
   Check whether your save was detected:

   ```
   saves
   ```

   The server lists all slots it found, without the extension.

8. <b>Load the save</b><br>
   If a game is already running, end it first with `stop`. Then load your save:

   ```
   load myworld
   ```

   Your server then hosts the loaded state and players can join.

:::: warning Caution
Loading a different save replaces the running game. Create a [backup](create-backup.md) first or download the current state in case you want to switch back.
::::

:::: danger Important
If the server reports `No (valid) save data found for slot.`, either the slot name is wrong or the file is damaged or was uploaded incompletely. Check the spelling with `saves` and re-upload the file if in doubt.
::::

## Load a save automatically on startup

To make your server load the same save on its own after a restart, store a startup command in the **console**:

```
config startCommands load myworld
```

:::: warning Caution
Do **not** put the command in quotation marks. Mindustry stores everything after the setting name literally – quotation marks would be saved along with it and the startup command would fail on the next start.
::::

:::: info Note
Separate multiple startup commands with a comma, for example `config startCommands load myworld,pause off`. The setting is saved immediately and applies from the next server start onwards.
::::

## Find your local savegame

Your singleplayer saves are stored on your PC in the Mindustry data directory:

| System | Path |
|--------|------|
| Windows | `%AppData%\Mindustry\saves\` |
| Linux | `~/.local/share/Mindustry/saves/` |
| macOS | `~/Library/Application Support/Mindustry/saves/` |

:::: warning Steam version
The Steam version places its data directory **inside the game folder**. You will find the saves there under `saves/saves/` within your Mindustry installation folder, not in the paths listed above.
::::

:::: danger Important
Server saves and singleplayer saves use the same `.msav` format. Whether a singleplayer save can be continued on a dedicated server one to one is, however, not officially documented. Always work with copies and create a [backup](create-backup.md) beforehand.
::::

## Add a custom map

Maps are not saves but a separate file type – they live in a different folder, although they also use the `.msav` extension.

1. <b>Upload the map</b><br>
   Upload the `.msav` file of your map via [SFTP](../establish-sftp-connection.md) into the following directory:

   ```
   /config/maps/
   ```

2. <b>Reload the maps</b><br>
   Enter the following in the **console** of your dashboard:

   ```
   reloadmaps
   ```

3. <b>Check the map</b><br>
   List all custom maps:

   ```
   maps custom
   ```

4. <b>Start the map</b><br>
   End any running game with `stop` and then start your map:

   ```
   host my_map
   ```

   :::: info Note
   Spaces in the map name may be written as underscores, and the map name is not case sensitive. If the server reports `No map with name '...' found.`, check the name with `maps custom`.
   ::::

:::: warning Caution
Starting a map with `host` begins a new game. Your previous progress is only kept if you saved it beforehand with `save <slot>`.
::::
