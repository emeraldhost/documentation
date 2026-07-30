---
description: Add a savegame to a HumanitZ server
---

# How to Add a Savegame to Your HumanitZ Server

The savegame of a HumanitZ server is stored in a single file following the pattern `Save_<name>.sav`. Which name your server loads is defined by the `SaveName` value in the configuration file – so the file name and the configuration have to match.

:::: tip Tip
Create a [backup](create-backup.md) of your current server save before uploading, in case you want to switch back later.
::::

:::: info Project folder
All paths in this guide start with the project folder `HumanitZServer`. If your server still runs a version older than HumanitZ 1.0, that folder is called `TSSGame` instead. Check via SFTP which of the two folders exists on your server and adjust the paths accordingly.
::::

## Files of the savegame

| File | Content |
|------|---------|
| `Save_<name>.sav` | The actual savegame with the world, bases, vehicles and player data. By default the file is called `Save_DedicatedSaveMP.sav`. |
| `Save_ClanData.sav` | The clan and group data of the server |

Both files are located in the same folder and belong together. Always transfer them together.

## Upload the savegame

1. <b>Stop the server</b><br>
   Stop your server via the dashboard. While the server is running it writes to the savegame file itself.

2. <b>Connect via SFTP</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md).

3. <b>Open the directory</b><br>
   Change to the following directory:

   ```
   /HumanitZServer/Saved/SaveGames/SaveList/Default/
   ```

   :::: info Note
   If the folder does not exist yet, start the server once so the folder structure is created. Stop it again afterwards before uploading the files.
   ::::

4. <b>Upload the files</b><br>
   Upload your `Save_<name>.sav` and the matching `Save_ClanData.sav` into this directory. If files with the same name already exist there, you overwrite them – back them up first if you still need them.

5. <b>Set the SaveName</b><br>
   Open the following file:

   ```
   /HumanitZServer/GameServerSettings.ini
   ```

   In the `[Host Settings]` section enter the name of your savegame – **without** the leading `Save_` and **without** the `.sav` extension:

   ```ini
   [Host Settings]
   SaveName="DedicatedSaveMP"
   ```

   :::: tip Example
   | File on the server | Entry in the configuration |
   |--------------------|----------------------------|
   | `Save_DedicatedSaveMP.sav` | `SaveName="DedicatedSaveMP"` |
   | `Save_MyWorld.sav` | `SaveName="MyWorld"` |
   ::::

6. <b>Start the server</b><br>
   Save all changes and start your server. On startup it now loads your uploaded savegame.

:::: danger Important
The file name and `SaveName` have to match exactly. If the server does not find a matching file, it creates a **new, empty world** under that name – your uploaded savegame is then not loaded. Also mind upper and lower case: your server runs on Linux, where case matters.
::::

:::: warning Warning
A changed `SaveName` always means a different savegame. If you want to switch between two worlds, you can keep both `.sav` files in the folder and only change the `SaveName`.
::::

## Moving to another server

When moving from another HumanitZ server, the easiest way is to download the complete `Default` folder and upload it again on the new server. How to download it is described in [Download Savegame](download-savegame.md).

:::: info Singleplayer savegame
There is **no documented procedure** for transferring a singleplayer savegame to a dedicated server. Neither the official wiki nor the server documentation describes such a way. This guide therefore only covers savegames that come from a dedicated server.
::::
