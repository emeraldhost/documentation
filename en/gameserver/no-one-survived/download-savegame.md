---
description: Download the savegame from a No One Survived server
---

# How to Download the Savegame of Your No One Survived Server

You can download your server's savegame to your PC at any time — for example as an additional backup, for archiving, or to transfer it to another server.

:::: warning Warning
Stop your server before you download the files. While the server is running it saves regularly — otherwise you would download an incomplete or corrupted savegame.
::::

1. <b>Stop the server</b><br>
   Stop your server via the dashboard.

2. <b>Connect via SFTP</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md).

3. <b>Open the directory</b><br>
   Change into the following directory:

   ```
   /WRSH/Saved/SaveGames/WorldSaves/
   ```

4. <b>Download the savegame</b><br>
   Download all `.sav` files that belong to your savegame. These are all files that start with your save name followed by an underscore – for example all files starting with `MyWorld_`.

   :::: info Which savegame is the active one?
   Which savegame is currently loaded is shown by the save name in the **dashboard**. The server uses the files whose name before the first underscore matches that entry exactly.
   ::::

5. <b>Download the automatic saves (optional)</b><br>
   If you also want to secure the server's intermediate saves, change into the following directory and download the files there as well:

   ```
   /WRSH/Saved/SaveGames/AutoSave/
   ```

6. <b>Back up the configuration (optional)</b><br>
   If you also want to secure your server settings, download the following file in addition:

   ```
   /WRSH/Saved/Config/WindowsServer/Game.ini
   ```

7. <b>Start the server</b><br>
   Start your server again.

:::: tip Load the savegame back in
If you want to transfer the savegame back onto a server later, follow the guide [Add Savegame](add-savegame.md).
::::

:::: info Regular backups
For automatic or regular backups you can also use the backup function: [Create Backup](create-backup.md).
::::
