---
description: Download a savegame from a Smalland Survive the Wilds server
---

# How to Download the Savegame of Your Smalland Survive the Wilds Server

You can download your server's savegame to your PC at any time – for example as an additional backup or to transfer it to another server.

:::: warning Caution
Stop your server before downloading the files. The server writes to the world file while it is running – otherwise you would download an incomplete savegame.
::::

1. <b>Stop the server</b><br>
   Stop your server via the dashboard.

2. <b>Connect via SFTP</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md).

3. <b>Open the directory</b><br>
   Change to the following directory:

   ```
   /SMALLAND/Saved/SaveGames/Worlds/
   ```

4. <b>Download the files</b><br>
   Download the **complete** `Worlds` folder to your PC. It contains one `<worldname>.wld` file per world.

5. <b>Start the server</b><br>
   Start your server again.

:::: info Which file is the right one?
Which world your server loads is controlled by the **world name** in the **dashboard**. If it says `MyWorld`, then `MyWorld.wld` is your current savegame. When in doubt, simply download the entire folder.
::::

:::: info Note
Characters are **not** stored on the server, they are saved locally on each player's PC. Through the server you only back up the world data such as terrain, structures and tamed creatures. Every player backs up their own character by copying the following folder on their PC:

```
%LOCALAPPDATA%\SMALLAND\Saved\SaveGames\
```
::::

:::: info Settings
You do not need to back up a configuration file. Smalland Survive the Wilds does not have one – all server settings are set in the **dashboard** and passed to the server on startup.
::::

:::: tip Restoring the savegame
If you want to transfer the savegame back to a server later, follow the guide [Add savegame](add-savegame.md).
::::

:::: info Regular backups
For automatic or regular backups you can also use the backup function: [Create backup](create-backup.md).
::::
