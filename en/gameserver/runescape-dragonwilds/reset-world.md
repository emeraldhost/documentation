---
description: Reset the world of a RuneScape Dragonwilds server
---

# How to Reset the World on Your RuneScape: Dragonwilds Server

The dashboard has no button to reset the world. On startup, the server always loads the most recent `.sav` file from the `RSDragonwilds/Saved/SaveGames` folder. If it finds none, it automatically creates a new standard world. So you get a fresh world by emptying that folder.

:::: danger Important
Resetting removes your current world for good: all buildings and placed objects and with them your entire progress in this world. There is no undo. So always create a backup **first** — without one there is no way back to your old state.
::::

## Reset the world

1. <b>Create a backup</b><br>
   Back up your current world before you delete anything: [Create backup](create-backup.md). You can also download the `.sav` file to your PC: [Download savegame](download-savegame.md).

2. <b>Stop the server</b><br>
   Stop your server via the dashboard. A running server keeps writing to its save file — never delete the files while it is running.

3. <b>Connect via SFTP</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md) and open the following directory:

   ```
   /RSDragonwilds/Saved/SaveGames/
   ```

4. <b>Delete the saves</b><br>
   Delete all files in this directory. Keep the `SaveGames` folder itself — only delete its contents.

5. <b>Set the world name</b><br>
   Optional: Open the **Settings** in the dashboard and enter the name the new world should get in the **Server Name** field. If you leave the field unchanged, the new world gets the name that is currently entered there.

6. <b>Start the server</b><br>
   Start your server via the dashboard. While booting up, it creates a new standard world with that name.

:::: warning Warning
Only delete the contents of the `SaveGames` folder. The file `DedicatedServer.ini` in `RSDragonwilds/Saved/Config/LinuxServer/` holds your server configuration — including the Owner ID, server password and admin password. Leave it untouched.
::::

## What is gone and what stays

| Gone | Stays |
|------|-------|
| The world with all buildings and placed objects | Owner ID, server password and admin password |
| Your entire progress in this world | The remaining configuration in `DedicatedServer.ini` |
| Everything you did not back up beforehand | The backups you created earlier and any downloaded savegames |

:::: tip Custom settings for the new world
The server always creates a world with standard settings. If the new world should run with your own rules, create it locally in the game and upload it: [Create custom world](create-custom-world.md).
::::

## Load a different world

If several `.sav` files are in the `SaveGames` folder, the server always loads the **most recent** one — the **Server Name** field alone is not enough to switch between existing worlds. The world you want has to be the only one in the folder.

1. <b>Stop the server</b><br>
   Stop your server via the dashboard.

2. <b>Connect via SFTP</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md) and open the directory `/RSDragonwilds/Saved/SaveGames/`.

3. <b>Remove the other worlds from the folder</b><br>
   Download every `.sav` file that should not be loaded to your PC and then delete it from the folder. In the end, only the `.sav` file of the world you want remains.

4. <b>Set the world name</b><br>
   Open the **Settings** in the dashboard and enter the filename of this world without the `.sav` extension in the **Server Name** field. This keeps the world name in the dashboard in line with the world that is loaded.

5. <b>Start the server</b><br>
   Start your server. It now loads the remaining world.

:::: warning Warning
Never rename `.sav` files. If the server starts with a renamed file, the progress stored in it is lost. Always keep the original filename.
::::

:::: tip Restoring the old world
If you created a backup before deleting, you restore it via the dashboard: [Create backup](create-backup.md). If you downloaded the `.sav` file to your PC instead, upload it again via SFTP: [Add savegame](add-savegame.md).
::::
