---
description: Download a savegame from a Satisfactory server
---

# How to Download the Savegame of Your Satisfactory Server

You can download your server's save to your PC at any time – for example as an additional backup or to transfer it to another server.

:::: warning Caution
Stop your server before downloading the files. Satisfactory saves automatically while running – if you download during a save, the file can be incomplete.
::::

1. <b>Stop the server</b><br>
   Stop your server via the dashboard.

2. <b>Connect via SFTP</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md).

3. <b>Open the directory</b><br>
   Navigate to the following directory:

   ```
   /.config/Epic/FactoryGame/Saved/SaveGames/server/
   ```

   :::: info Note
   The folder `.config` starts with a dot and is therefore hidden. Enable the display of hidden files in your SFTP client if you cannot see it.
   ::::

4. <b>Download the save</b><br>
   Download the `.sav` file you need to your PC. The file name matches the name of the session in the game.

5. <b>Start the server</b><br>
   Start your server again.

:::: info Which file is the right one?
If there are several `.sav` files in the folder, the most recently modified one is usually your current save. On top of that, the server keeps rotating autosave files whose names end in `_autosave_0`, `_autosave_1` and so on. You can also see which session is loaded in the **Server Manager** on the **Manage Saves** tab.
::::

:::: tip Back up the configuration as well
If you also want to save your server settings, download the following folder in addition:

```
/FactoryGame/Saved/Config/LinuxServer/
```

The server name as well as the admin and server password are stored in the parent folder instead, in a file starting with `ServerSettings.` that contains the Game Port of your server in its name:

```
/.config/Epic/FactoryGame/Saved/SaveGames/
```
::::

:::: danger Important
Do not delete the `ServerSettings.` file on the server. Without it, the server loses its name, its admin password, its server password and its certificate and counts as unclaimed again.
::::

:::: tip Restoring the savegame
If you want to transfer the save back to a server later, follow the guide [Add Savegame](add-savegame.md).
::::

:::: info Regular backups
For automatic or regular backups you can also use the backup function: [Create Backup](create-backup.md).
::::
