---
description: Download a savegame from a HumanitZ server
---

# How to Download the Savegame of Your HumanitZ Server

You can download your server's savegame to your PC at any time – for example as an additional backup or to move it to another server.

:::: warning Caution
Stop your server before downloading the files. HumanitZ saves automatically while running – if you download during that, the savegame can be incomplete.
::::

:::: info Project folder
All paths in this guide start with the project folder `HumanitZServer`. If your server still runs a version older than HumanitZ 1.0, that folder is called `TSSGame` instead. Check via SFTP which of the two folders exists on your server and adjust the paths accordingly.
::::

1. <b>Stop the server</b><br>
   Stop your server via the dashboard.

2. <b>Connect via SFTP</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md).

3. <b>Open the directory</b><br>
   Change to the following directory:

   ```
   /HumanitZServer/Saved/SaveGames/SaveList/
   ```

4. <b>Download the folder</b><br>
   Download the complete `Default` folder with all of its files to your PC.

5. <b>Start the server</b><br>
   Start your server again.

## Which files belong to the savegame?

| File | Content |
|------|---------|
| `Save_<name>.sav` | The actual savegame with the world, bases, vehicles and player data. By default the file is called `Save_DedicatedSaveMP.sav`. |
| `Save_ClanData.sav` | The clan and group data of your server |

:::: warning Caution
Always download the complete `Default` folder. If `Save_ClanData.sav` is missing, the clan data is lost when you restore the savegame.
::::

:::: info Which name is the right one?
The name of your savegame file is defined by the `SaveName` value in the `[Host Settings]` section of the file `/HumanitZServer/GameServerSettings.ini`. If it says `SaveName="DedicatedSaveMP"`, then `Save_DedicatedSaveMP.sav` is your current savegame.
::::

:::: tip Back up the configuration as well
If you also want to save your server settings, download the following files in addition:

```
/HumanitZServer/GameServerSettings.ini
/HumanitZServer/F_BannedPlayers.txt
/HumanitZServer/F_MVPAccess.txt
```

The two text files only exist if you have set up bans or a whitelist.
::::

:::: tip Restore the savegame
If you want to move the savegame back to a server later, follow the guide [Add Savegame](add-savegame.md).
::::

:::: info Regular backups
For automatic or regular backups you can also use the backup feature: [Create Backup](create-backup.md).
::::
