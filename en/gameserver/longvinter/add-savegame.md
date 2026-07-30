---
description: Add a savegame to a Longvinter server
---

# How to Add a Savegame to Your Longvinter Server

The save of a Longvinter server is not a single file but the complete `SaveGames` folder. It contains many `.sav` files that together hold the world, all tents, chests and the progress of your players.

:::: info Note
Longvinter does not use a **world name**. There is no configuration key for a world or save name – on startup the server always loads whatever is inside the `SaveGames` folder.
::::

:::: danger Important
This guide is meant for saves that come from a **dedicated server** – for example when moving from another server or restoring a download. For worlds from a locally hosted session on your PC there is **no documented procedure** and no officially confirmed storage location, which is why we deliberately do not describe that route here.
::::

## Structure of the save

Longvinter stores several `.sav` files in the `SaveGames` folder that belong together: the server saves the world in sections and writes out the placed objects, the chests and the player data alongside it. How many files there are and what exactly they are called depends on the state of your server and changes with updates.

:::: warning Warning
Always transfer the **complete content** of the folder and never individual files – otherwise the data no longer matches up.
::::

## Upload the savegame

1. <b>Stop the server</b><br>
   Stop your server via the **dashboard**. While the server is running it writes to the save files itself and would overwrite your upload.

2. <b>Connect via SFTP</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md).

3. <b>Open the directory</b><br>
   Navigate to the following directory:

   ```
   /Longvinter/Saved/SaveGames/
   ```

   :::: info Note
   If the folder does not exist yet, start your server once so the folder structure gets created. Stop it again afterwards.
   ::::

4. <b>Remove the old save</b><br>
   Delete all existing `.sav` files in this folder. If files of the old save are left behind, they get mixed with your new save.

   :::: warning Warning
   This removes the current save of your server. Create a [backup](create-backup.md) beforehand or download the existing save in case you want to switch back: [Download savegame](download-savegame.md).
   ::::

5. <b>Upload the new save</b><br>
   Upload all `.sav` files of your save into this directory. The file names have to stay unchanged.

6. <b>Start the server</b><br>
   Start your server. The new save is now loaded.

:::: tip Tip
Longvinter saves can grow to several gigabytes over time. Use an SFTP client such as FileZilla or WinSCP for the transfer – large transfers are more likely to break off in the browser file manager.
::::

:::: info Note
Your server settings are not part of the save but live in a separate file:

```
/Longvinter/Saved/Config/LinuxServer/Game.ini
```

If you also want to take your settings and admins with you, transfer that file as well – see [Add Admin](add-admin.md).
::::
