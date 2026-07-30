---
description: Add a savegame to a No One Survived server
---

# How to Add a Savegame to Your No One Survived Server

The savegames of a No One Survived server are stored as files with the `.sav` extension in a fixed directory. Which savegame gets loaded is decided by the **save name** in the dashboard: the server looks for the matching file – if it cannot find it, it creates a new, empty world.

:::: info Note
The configuration folder is called `WindowsServer` on your Linux server as well. That is intended – No One Survived only ships a Windows server application, which runs on Linux servers through a compatibility layer.
::::

:::: tip Tip
Create a [backup](create-backup.md) of your current savegame before uploading, in case you want to switch back later.
::::

## Find your local savegame

The savegames on your own PC are stored in the same folder structure as on the server, which is why they can be transferred directly.

1. <b>Open the savegame folder</b><br>
   Press `Windows key + R`, enter the following path and confirm with Enter:

   ```
   %LOCALAPPDATA%\WRSH\Saved\SaveGames\WorldSaves
   ```

2. <b>Determine the save name</b><br>
   Your savegames are stored there as `.sav` files. The file names follow the pattern `<save name>_<suffix>.sav`. For the configuration you only need the part **before the first underscore**.

   If your file is called `MyWorld_0.sav`, for example, the save name is:

   ```
   MyWorld
   ```

   :::: info Note
   If several files belong to the same savegame, you can tell because they all start with the same save name followed by an underscore. In that case transfer all of those files together.
   ::::

## Upload the savegame

1. <b>Stop the server</b><br>
   Stop your server via the dashboard. While the server is running it constantly writes to the savegame files and would overwrite your uploaded files.

2. <b>Connect via SFTP</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md).

3. <b>Open the directory</b><br>
   Change into the following directory:

   ```
   /WRSH/Saved/SaveGames/WorldSaves/
   ```

   :::: info Note
   If the folder does not exist yet, start the server once so the folder structure gets created. Stop it again afterwards, before you upload the files.
   ::::

4. <b>Upload the files</b><br>
   Upload your `.sav` files into this directory. If files with the same names already exist there, download the current state first or rename your files.

5. <b>Enter the save name</b><br>
   Open the **dashboard** of your server and enter the part of the file name **before the first underscore** in the field for the save name:

   ```
   MyWorld
   ```

   :::: info Alternatively in the configuration file
   If you cannot find a matching field in the dashboard, the value is stored in the following file:

   ```
   /WRSH/Saved/Config/WindowsServer/Game.ini
   ```

   In the `[ServerSetting]` section you enter it like this:

   ```ini
   [ServerSetting]
   SaveName=MyWorld
   ```
   ::::

6. <b>Start the server</b><br>
   Save all changes and start your server. On startup your uploaded savegame is now loaded.

:::: danger Important
The save name has to match the file name exactly – only the part before the first underscore, without `.sav` and with correct capitalisation. If it does not match, your server starts with a **new, empty world**. Your uploaded savegame is not lost in that case, it is simply not loaded: correct the name and start the server again.
::::

:::: warning No special characters
Do not use special characters in the save name. Letters and numbers are allowed – spaces and special characters can cause the savegame not to be found.
::::

:::: warning Warning
If you enter the save name manually in `Game.ini`, that value gets overwritten from the dashboard fields on the next server start. That is why you should primarily use the dashboard and check after a start whether the desired value is still set.
::::

:::: info Automatic saves by the server
Next to `WorldSaves`, the server stores its own intermediate saves in the folder `/WRSH/Saved/SaveGames/AutoSave/`. If you want to use one of them, download it and load it back in following the same guide.
::::

:::: warning Check after updates
A server update or a validation of the game files can reset the configuration to default values. Check the save name afterwards before you make the server available again – otherwise an empty world is created.
::::
