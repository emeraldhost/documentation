---
description: Download a savegame from an Abiotic Factor server
---

# How to Download the Savegame of Your Abiotic Factor Server

You can download your server's savegame to your PC at any time – for example as an additional backup or to move it to another server.

:::: warning Caution
Stop your server before downloading the files. The server writes to the world files while it is running – if you download during that, the savegame can be incomplete.
::::

1. <b>Stop the server</b><br>
   Stop your server via the dashboard.

2. <b>Connect via SFTP</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md).

3. <b>Open the directory</b><br>
   Change to the following directory:

   ```
   /AbioticFactor/Saved/SaveGames/Server/Worlds/
   ```

4. <b>Download the world folder</b><br>
   Download the complete folder of your world with all of its files to your PC. By default the folder is called `Cascade`.

5. <b>Start the server</b><br>
   Start your server again.

:::: warning Caution
A savegame is always the complete world folder. Always download it in full – individual files from it do not make a usable savegame.
::::

:::: info Which folder is the right one?
If several world folders exist side by side, the active one is the folder loaded through your server's world name – by default `Cascade`. When in doubt the file timestamps help: the most recently modified folder is the active savegame.
::::

:::: tip Back up the settings as well
The gameplay and sandbox settings of your world are stored in the `SandboxSettings.ini` file inside the world folder – so it is downloaded together with that folder. The start parameter `-SandboxIniPath=` can place the file somewhere else, for example directly under `/AbioticFactor/Saved/`.

Your admin list sits outside the world folder and has to be saved separately:

```
/AbioticFactor/Saved/SaveGames/Server/Admin.ini
```
::::

:::: tip Restore the savegame
If you want to move the savegame back to a server later, follow the guide [Add Savegame](add-savegame.md).
::::

:::: info Regular backups
For automatic or regular backups you can also use the backup feature: [Create Backup](create-backup.md).
::::
