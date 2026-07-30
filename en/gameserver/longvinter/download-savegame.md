---
description: Download a savegame from a Longvinter server
---

# How to Download the Savegame of Your Longvinter Server

You can download your server's save to your PC at any time – for example as an additional backup or to transfer it to another server.

:::: warning Caution
Stop your server before downloading the files. Longvinter saves roughly every ten minutes while running — otherwise you would download an incomplete save.
::::

1. <b>Stop the server</b><br>
   Stop your server via the **dashboard**.

2. <b>Connect via SFTP</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md).

3. <b>Open the directory</b><br>
   Navigate to the following directory:

   ```
   /Longvinter/Saved/
   ```

4. <b>Download the save</b><br>
   Download the complete `SaveGames` folder including all `.sav` files to your PC.

5. <b>Start the server</b><br>
   Start your server again.

:::: info Note
The `SaveGames` folder holds the entire save – among other things tents, chests including their contents and the progress of your players. The individual `.sav` files belong together, so always back them up as a whole.
::::

:::: tip Back up the configuration as well
If you also want to save your server settings and admins, download the following file in addition:

```
/Longvinter/Saved/Config/LinuxServer/Game.ini
```
::::

:::: warning Warning
Longvinter saves can grow to several gigabytes. Use an SFTP client such as FileZilla or WinSCP for the download – large transfers are more likely to break off in the browser file manager.
::::

:::: tip Restoring the savegame
If you want to transfer the save back to a server later, follow the guide [Add savegame](add-savegame.md).
::::

:::: info Regular backups
For automatic or regular backups you can also use the backup function: [Create backup](create-backup.md).
::::
