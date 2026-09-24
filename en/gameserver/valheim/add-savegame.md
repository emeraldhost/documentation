---
description: Add a savegame to a Valheim server
---

# How to Add a Savegame to Your Valheim Server

You can transfer a local save to your server to continue playing with an existing world.

## Find the local savegame

1. <b>Open savegame folder</b><br>
   Press `Windows Key + R`, enter the following path and confirm with Enter:

   ```
   %userprofile%\AppData\LocalLow\IronGate\Valheim\worlds_local
   ```

2. <b>Identify the world folder</b><br>
   Since Valheim 1.0, every world is a folder of its own named after the world, for example `MyWorld`. The files inside belong together as a set, so you always transfer the complete folder. Folders with `_backup_` in their name are backups of your world, not the current state.

:::: info Note
If you only find the two files `<WorldName>.fwl` and `<WorldName>.db` instead of a folder, the world is still in the format used before Valheim 1.0. You can upload such worlds as well, see [Upload worlds in the old format](#upload-worlds-in-the-old-format).
::::

## Upload and apply the savegame

1. <b>Stop the server</b><br>
   Stop your server via the dashboard.

2. <b>Connect via SFTP</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md) and navigate to the following directory:

   ```
   /.config/unity3d/IronGate/Valheim/worlds_local/
   ```

3. <b>Rename a world with the same name</b><br>
   If there is already a folder with the same name as your world, rename it (for example from `MyWorld` to `MyWorld_old`) or download it to your PC first and only then delete it. Never upload your world into an existing world folder, otherwise the files of two saves get mixed.

4. <b>Upload the world folder</b><br>
   Upload the complete folder of your world with its name unchanged to the `worlds_local` directory. Afterwards your world is located at, for example:

   ```
   /.config/unity3d/IronGate/Valheim/worlds_local/MyWorld/
   ```

   :::: danger Important
   Upload the folder directly into `worlds_local` and not into another subfolder, because the server only looks for worlds one folder level deep. Do not rename any files inside the folder and do not mix files from different saves. If the server does not find a complete set of files, it cannot load the world and deletes the incomplete files on startup.
   ::::

5. <b>Set world name</b><br>
   Open the dashboard, navigate to the **Settings** and enter the exact name of your world folder in the **World Name** field, in this example `MyWorld`. The field allows a maximum of 20 characters.

6. <b>Start the server</b><br>
   Save the settings and start your server.

:::: warning Warning
If the `worlds_local` folder does not exist, start the server once so the folder structure is created automatically. Stop the server again before uploading the files.
::::

:::: tip Tip
If the server loads a new, empty world instead of yours, it did not find your world, for example because of a typo in the **World Name** field or because the folder is not located directly in `worlds_local`. The server has then created a new world under the entered name. Stop the server, delete the newly created folder and fix the error.
::::

:::: tip Tip
Create a [backup](create-backup.md) of your existing server savegame before uploading, in case you want to switch back later.
::::

## Upload worlds in the old format

Worlds that have not been opened since Valheim 1.0, as well as backups from before that, consist of the two files `<WorldName>.fwl` and `<WorldName>.db`. You can transfer such worlds to your server as well. Follow the steps above with these differences:

- Instead of a folder, upload the two files `<WorldName>.fwl` and `<WorldName>.db` directly into the `worlds_local` directory. Both files must come from the same save.
- Enter the name of the files without the file extension in the **World Name** field, for example `MyWorld` for `MyWorld.fwl` and `MyWorld.db`.

As soon as the server saves the world for the first time, it automatically converts it into a world folder in the new format. It renames the original files to `<WorldName>_backup_<Timestamp>.fwl` and `.db` so that the old state is kept as a backup.

:::: warning Warning
Here too, rename or remove an existing world folder with the same name first, as described in step 3. If a world folder and a pair of files with the same name are next to each other, the server only loads the newer state and automatically moves the older one to a backup. This can also be the world you just uploaded.
::::
