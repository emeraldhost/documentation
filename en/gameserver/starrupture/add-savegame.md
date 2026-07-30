---
description: Add a savegame to a StarRupture server
---

# How to Add a Savegame to Your StarRupture Server

A StarRupture save consists of a **folder** named exactly like the session of your server, containing **two files with the same base name**: `AutoSave0.sav` and `AutoSave0.met`. In addition you have to enter the session name in the configuration file `DSSettings.txt` so the server finds and loads the save.

:::: tip Tip
Create a [backup](create-backup.md) of your current server save before uploading, in case you want to switch back later.
::::

## Structure of the savegame

| Path | Content |
|------|---------|
| `/StarRupture/Saved/SaveGames/<SessionName>/AutoSave0.sav` | The actual save containing world, base and progress |
| `/StarRupture/Saved/SaveGames/<SessionName>/AutoSave0.met` | The matching metadata file – belongs to the `.sav` and is mandatory |
| `/StarRupture/Saved/SaveGames/SaveData.dat` | Higher level file that the server manages itself |

:::: info Note
`.sav` and `.met` always belong together and have to share the same base name. If one of the two files is missing or the names differ, the server will not load the save.
::::

## The DSSettings.txt file

Which session the server uses and whether it loads an existing save or creates a new world is controlled in the file `DSSettings.txt` in the main directory of your server:

```
/DSSettings.txt
```

Its content uses JSON format:

```
{
  "SessionName": "MyServer",
  "SaveGameName": "AutoSave0.sav",
  "SaveGameInterval": "300",
  "StartNewGame": "false",
  "LoadSavedGame": "true"
}
```

:::: warning Caution
All values are enclosed in quotation marks – including numbers and `"true"`/`"false"`. If you enter them without quotation marks, the server cannot read the file.
::::

| Value | Meaning |
|-------|---------|
| `SessionName` | Name of the session – matches the folder name under `Saved/SaveGames/` exactly, maximum 20 characters |
| `SaveGameName` | File name of the save, `AutoSave0.sav` by default |
| `SaveGameInterval` | Interval of the automatic save in seconds, `"300"` by default |
| `StartNewGame` | `"true"` creates a completely new world on startup |
| `LoadSavedGame` | `"true"` loads the existing save of the configured session |

:::: warning Caution
If `SessionName`, `StartNewGame` or `LoadSavedGame` are offered as settings in your **dashboard**, only change them there. The `DSSettings.txt` can be rewritten from those fields when the server starts – manual changes in the file would be overwritten again.
::::

## Find your local savegame

You can find your own save from your PC under:

```
C:\Program Files (x86)\Steam\userdata\<SteamID64>\1631270\remote\Saved\SaveGames\
```

:::: info Note
`1631270` is the Steam app ID of StarRupture. The `<SteamID64>` folder consists of a long sequence of digits – how to determine your ID is described under [Find out SteamID64](../steamid64-find-out.md). If you installed Steam in a different directory, the `userdata` folder is located there instead.
::::

## Upload the savegame

1. <b>Stop the server</b><br>
   Stop your server via the dashboard. While the server is running it writes to the save files itself.

2. <b>Connect via SFTP</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md).

3. <b>Open the directory</b><br>
   Navigate to the following directory:

   ```
   /StarRupture/Saved/SaveGames/
   ```

   :::: info Note
   If the folder does not exist yet, start the server once so the folder structure is created. Stop it again afterwards before uploading the files.
   ::::

4. <b>Create the session folder</b><br>
   Create a folder there named exactly like the `SessionName` value in your `DSSettings.txt`. The name may be up to 20 characters long.

5. <b>Upload the files</b><br>
   Upload the `.sav` file and the matching `.met` file of your save into that folder.

6. <b>Rename the files</b><br>
   Rename both files so they match the `SaveGameName` value:

   ```
   AutoSave0.sav
   AutoSave0.met
   ```

   :::: warning Caution
   The base name has to be identical for both files. `AutoSave0.sav` together with `MySave.met` will not work.
   ::::

7. <b>Adjust DSSettings.txt</b><br>
   Open the file `/DSSettings.txt` and set the following values:

   ```
   "SessionName": "<your folder name>",
   "SaveGameName": "AutoSave0.sav",
   "StartNewGame": "false",
   "LoadSavedGame": "true"
   ```

8. <b>Start the server</b><br>
   Save all changes and start your server. Your uploaded save is now loaded on startup.

:::: danger Important
`StartNewGame` has to be `"false"`. If the value stays on `"true"`, the server creates a fresh world on every start and overwrites your uploaded save.
::::

## Create a new world

If you want to start with a completely new world instead, proceed as follows:

1. <b>Stop the server</b><br>
   Stop your server via the dashboard.

2. <b>Enable a new world</b><br>
   Open the file `/DSSettings.txt`, enter the desired `SessionName` and set:

   ```
   "StartNewGame": "true",
   "LoadSavedGame": "false"
   ```

3. <b>Start the server</b><br>
   Start your server. It now creates a new world.

4. <b>Join the server</b><br>
   Connect to your server, see [Join server](join-server.md).

5. <b>Save the world</b><br>
   Press `ESC` in game and select **Save**. Only this actually writes the new world to the server as a save.

6. <b>Disconnect and stop the server</b><br>
   Leave the server and stop it afterwards via the dashboard.

7. <b>Reset the values</b><br>
   Set both values in `/DSSettings.txt` back again:

   ```
   "StartNewGame": "false",
   "LoadSavedGame": "true"
   ```

8. <b>Start the server</b><br>
   Start your server again. From now on your new world is loaded on every start and progress is kept.

:::: danger Important
Do not forget this last step. If `StartNewGame` stays on `"true"`, the world you just created is replaced by a fresh one on the next server start.
::::

:::: info Note
The server saves automatically while running. How often is controlled by the `SaveGameInterval` value in `DSSettings.txt` – the value is given in seconds.
::::
