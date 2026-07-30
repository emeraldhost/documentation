---
description: Download a savegame from a Frozen Flame server
---

# How to Download the Savegame of Your Frozen Flame Server

You can download the save of your server to your PC at any time – for example as an additional backup or to transfer it to another server.

:::: warning Caution
Stop your server before downloading the files. As long as the server is running it keeps writing to the save – otherwise you would download an incomplete state.
::::

1. <b>Save the world</b><br>
   Run the following command via RCON so the current state is written to disk – see [Add Admin](add-admin.md):

   ```
   Admin_SaveAll
   ```

2. <b>Stop the server</b><br>
   Stop your server via the dashboard.

3. <b>Connect via SFTP</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md).

4. <b>Open the directory</b><br>
   Navigate to the following directory:

   ```
   /FrozenFlame/Saved/
   ```

5. <b>Download the folder</b><br>
   Download the complete `SaveGames` folder to your PC:

   ```
   /FrozenFlame/Saved/SaveGames/
   ```

6. <b>Start the server</b><br>
   Start your server again.

:::: info Note
Always back up the **complete** `SaveGames` folder. Which file inside it belongs to which part of the save is not documented – picking out individual files is therefore not a reliable backup.
::::

:::: tip Back up the configuration as well
If you also want to save your server settings, download the following folder in addition:

```
/FrozenFlame/Saved/Config/LinuxServer/
```

It contains files such as the `Game.ini` and the `Engine.ini` of your server.
::::

:::: tip Restoring the savegame
If you want to transfer the save back to a server later, follow the guide [Add savegame](add-savegame.md).
::::

:::: info Regular backups
For automatic or regular backups you can also use the backup function: [Create backup](create-backup.md).
::::
