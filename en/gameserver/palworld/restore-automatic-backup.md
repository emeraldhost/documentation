---
description: Restore an automatic backup on a Palworld server
---

# How to Restore an Automatic Backup on Your Palworld Server

Palworld automatically creates regular backups of your world on your server. This lets you roll your save back to an earlier point in time, for example if the save got corrupted or something was accidentally destroyed or deleted. These automatic backups are independent of the dashboard backups you create via [Create backup](create-backup.md).

## How to find the automatic backups

The automatic backups are located on your server at:

```
/Pal/Saved/SaveGames/0/<savegame folder>/backup/world/
```

The savegame folder is the folder with the long string of characters as its name (e.g. `A1B2C3D4E5F67890A1B2C3D4E5F67890`).

Inside `backup/world/` there is one folder per backup, named after the time it was created in the format `YYYY.MM.DD-HH.MM.SS`. The folder `2026.01.15-18.30.00`, for example, contains the state from January 15, 2026 at 18:30:00. Each backup folder contains the world files `Level.sav` and `LevelMeta.sav` as well as the `Players` folder with the player data. Several backups from the last few hours are kept at short intervals, while for older days one backup per day remains.

## How to restore a backup

:::: warning Warning
Restoring resets the entire save, meaning world and players, to the time of the backup. Everything that happened between the backup and now is lost.
::::

1. <b>Stop the server</b><br>
   Stop your server via the dashboard.

2. <b>Back up the current state</b><br>
   Create a [backup](create-backup.md) via the dashboard or download your savegame folder to your PC ([Download savegame](download-savegame.md)) so you can return to the current state if needed.

3. <b>Open the savegame folder</b><br>
   Open the file manager in the dashboard and navigate to your savegame folder:

   ```
   /Pal/Saved/SaveGames/0/<savegame folder>/
   ```

   Alternatively, you can connect via [SFTP](../establish-sftp-connection.md).

4. <b>Choose a backup</b><br>
   Open the subfolder `backup/world/` and use the timestamps to find the backup folder with the state you want to restore.

5. <b>Delete the current world files</b><br>
   Go back to the savegame folder and delete the files `Level.sav` and `LevelMeta.sav` as well as the `Players` folder. Delete only these three items, not the `backup` folder and not the savegame folder itself.

6. <b>Copy the backup files</b><br>
   Copy the files `Level.sav` and `LevelMeta.sav` as well as the `Players` folder from the chosen backup folder directly into the savegame folder, so they sit next to the `backup` folder.

7. <b>Start the server</b><br>
   Start your server and check in the game that the desired state was loaded.

:::: tip Tip
If there are several folders in `/Pal/Saved/SaveGames/0/`, you can find the currently loaded savegame folder in the following file:

```
/Pal/Saved/Config/LinuxServer/GameUserSettings.ini
```

The `DedicatedServerName=` parameter contains the name of the savegame folder in use.
::::

:::: info Note
The automatic backups are a feature of the Palworld server itself and are controlled by the `bIsUseBackupSaveData` setting in `PalWorldSettings.ini` (see [Edit server config](edit-server-config.md)). When it is set to `True`, your server creates the backups on its own.
::::
