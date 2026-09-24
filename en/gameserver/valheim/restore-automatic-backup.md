---
description: Restore an automatic backup on a Valheim server
---

# How to Restore an Automatic Backup on Your Valheim Server

Valheim automatically creates regular backups of your world on your server. This lets you roll your world back to an earlier point in time, for example if it got corrupted or something was accidentally destroyed. These automatic backups are independent of the dashboard backups you create via [Create backup](create-backup.md).

## How to find the automatic backups

The worlds and their automatic backups are located on your server at:

```
/.config/unity3d/IronGate/Valheim/worlds_local/
```

Since Valheim 1.0, every world is a folder of its own. The folder of your world has the same name as the **World Name** field in the **Settings** of the dashboard (default: `Dedicated`).

Each automatic backup is another folder in the same directory. Its name follows the pattern `<WorldName>_backup_auto-YYYYMMDD-HHMMSS`. Your server created the folder `MyWorld_backup_auto-20260115-183000`, for example, on January 15, 2026 at 18:30:00. It contains the last saved state of the world `MyWorld` before that time. The time is based on the server's system time and may therefore differ from your local time.

With the default values, your server keeps 4 automatic backups: one from about 2 hours ago and three older ones 12 hours apart. You can change the number and the intervals with the **Backup Count**, **Backup Shorttime** and **Backup Longtime** fields (see [Change backup settings](change-backup-settings.md)).

:::: info Note
If you can't find any backup folder, check the following: The server only creates automatic backups when it saves the world, that is, at the interval set in the **Backup Interval** field (default: every 30 minutes) and when it stops. It only does this once it has been running for at least 20 minutes since it started. If **Backup Count** is set to `0` or `1`, it creates no automatic backups at all.
::::

## How to restore a backup

:::: warning Warning
Restoring resets the entire world to the state of the backup. Everything that has happened in the world since then is lost. The players' characters, including inventory and skills, are not stored on the server but with the players themselves, so they stay unchanged.
::::

1. <b>Stop the server</b><br>
   Stop your server via the dashboard. While it is running, it would write its current state over the restored backup the next time it saves or when it stops.

2. <b>Back up the current state</b><br>
   Create a [backup](create-backup.md) via the dashboard so you can return to the current state if needed.

3. <b>Open the directory</b><br>
   Open the file manager in the dashboard and navigate to the following directory:

   ```
   /.config/unity3d/IronGate/Valheim/worlds_local/
   ```

   Alternatively, you can connect via [SFTP](../establish-sftp-connection.md).

4. <b>Choose a backup</b><br>
   Use the timestamp in the folder name to find the backup with the state you want to restore, for example `MyWorld_backup_auto-20260115-183000`.

5. <b>Rename the current world</b><br>
   Rename the folder of your current world, for example from `MyWorld` to `MyWorld_old`. This keeps the current state, but it will no longer be loaded.

6. <b>Rename the backup folder</b><br>
   Rename the chosen backup folder to exactly the name in the **World Name** field, in this example `MyWorld`. Pay attention to upper and lower case. The backup folder then becomes your active world.

   :::: danger Important
   Only rename the folder itself. The files inside belong together as a set: don't rename them, don't move them and don't mix them with files from other backups.
   ::::

7. <b>Start the server</b><br>
   Start your server and check in the game that the desired state was loaded.

:::: tip Tip
If the server loads a new, empty world instead of your backup, stop it and check the name of the restored folder. If it differs from the **World Name** field, the server has created a new folder with a new world under the name from **World Name**. Delete only this new folder and rename the restored folder correctly. If the name does match, the server couldn't load the backup, for example because it is corrupted. In that case, restore the dashboard [backup](create-backup.md) from step 2 and try again with a different automatic backup.

The `MyWorld_old` folder remains as a separate world and is not loaded. If you no longer need the old state, you can delete it.
::::

## Backups from before Valheim 1.0

Before Valheim 1.0, a world consisted of the two files `<WorldName>.fwl` and `<WorldName>.db`. When your server saved such a world with Valheim 1.0 for the first time and converted it to the new format in the process, it kept the old state as a backup. This backup is a pair of files in `worlds_local` without `auto` in its name, for example `MyWorld_backup_20260910-201500.fwl` and `MyWorld_backup_20260910-201500.db`. Unlike the automatic backups, the server never deletes it on its own.

According to Iron Gate, you can use this backup to recover items on item stands or armor stands that lost their level or variant during the switch to 1.0, for example. Since patch 1.0.12, the server converts worlds correctly.

:::: warning Warning
This discards all progress made in the world since the switch to 1.0.
::::

1. <b>Stop the server</b><br>
   Stop your server via the dashboard.

2. <b>Back up the current state</b><br>
   Create a [backup](create-backup.md) via the dashboard.

3. <b>Rename the current world</b><br>
   Open the directory `/.config/unity3d/IronGate/Valheim/worlds_local/` in the file manager or via [SFTP](../establish-sftp-connection.md) and rename the folder of your current world, for example from `MyWorld` to `MyWorld_old`.

   :::: info Note
   This step is required: if a world folder and a pair of files with the same name sit next to each other, the server only loads the newer state and moves the older one back into a backup.
   ::::

4. <b>Rename the backup files</b><br>
   Rename the two files of the backup to `<WorldName>.fwl` and `<WorldName>.db`, in this example `MyWorld.fwl` and `MyWorld.db`. Both files must come from the same backup.

5. <b>Start the server</b><br>
   Start your server and check in the game that the desired state was loaded. The first time it saves, the server converts the world back into a world folder and stores the pair of files as a backup again, with a new timestamp. If your server runs on the `default_pre1_0` branch (see [Change Branch](change-branch.md)), the world stays a pair of files instead.
