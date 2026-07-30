---
description: Add a savegame to an Echoes of Elysium server
---

# How to Add a Savegame to Your Echoes of Elysium Server

The complete save of an Echoes of Elysium server lives in a single directory called `world`. That is where the server stores your world with everything you have built in it.

:::: info Note
There is **no world name** that you would have to enter anywhere. Which world is loaded depends purely on the contents of the `world` directory. Switching worlds therefore always means: replace the contents of that directory.
::::

:::: tip Where does a savegame come from?
This guide is meant for worlds that come from an Echoes of Elysium server — for example when moving to another server or when restoring your own backup. How to download the save from a server is described in [Download savegame](download-savegame.md).
::::

## Upload the savegame

1. <b>Create a backup</b><br>
   Save the current state of your server before you overwrite anything: [Create backup](create-backup.md).

2. <b>Stop the server</b><br>
   Stop your server via the dashboard. While the server is running it writes to the world files itself and would overwrite your uploaded files.

3. <b>Connect via SFTP</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md).

4. <b>Open the directory</b><br>
   Navigate to the following directory:

   ```
   /world/
   ```

   :::: info Note
   The `world` directory is located in the main directory of your server, so the full path is `/home/container/world/`. If it does not exist yet, start the server once so the folder structure gets created, then stop it again.
   ::::

5. <b>Remove the old world data</b><br>
   Delete the existing contents of the `world` directory. If old files are left behind, they can get mixed up with your uploaded save.

   :::: warning Warning
   This removes the current world of your server. If you skipped step 1, create the backup now.
   ::::

6. <b>Upload the new world data</b><br>
   Upload the **contents** of your save into the `/world/` directory — that is, the files and subfolders themselves, not another `world` folder inside it.

7. <b>Start the server</b><br>
   Start your server. Your uploaded save is now loaded on startup.

:::: danger Do not rename the directory
Keep the name `world`. On every start the values from the fields in the **dashboard** are written into the server configuration `config.json` — including the world directory. If you enter a different folder there by hand, that change is lost again with the next start.
::::

:::: tip Keeping several worlds
If you want to switch between multiple worlds, download the other world to your PC beforehand. Additional folders next to `world` on the server are not loaded by the game.
::::
