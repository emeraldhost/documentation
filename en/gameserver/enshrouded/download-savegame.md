---
description: Download a savegame from an Enshrouded server
---

# How to Download the Savegame of Your Enshrouded Server

You can download your server's save to your PC at any time — for example as an extra backup, to archive it, or to move it to another server.

:::: warning Caution
Stop your server before downloading the files. While the server is running it saves regularly, so you would end up downloading an incomplete or corrupted save.
::::

1. <b>Stop the server</b><br>
   Stop your server via the dashboard.

2. <b>Connect via SFTP</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md).

3. <b>Open the directory</b><br>
   Navigate to the save folder `savegame`.

4. <b>Download the files</b><br>
   Download both files of your world to your PC: `3ad85aea` and `3ad85aea_info`. Only together do they form a complete save — never download just one of the two files.

5. <b>Start the server</b><br>
   Start your server again.

:::: tip Finding the right folder
By default the save is stored in the `savegame` folder. If you have changed the default folder in the server settings, navigate to the folder you selected for the saves instead.
::::

:::: tip Playing the world locally
If you want to continue playing the downloaded world in singleplayer, rename the files back to the names of your local world (so `3ad85aea` to e.g. `3bd85c7d` and `3ad85aea_info` to `3bd85c7d_info`) and place them in the Steam `userdata` folder: `C:\Program Files (x86)\Steam\userdata\[YourSteamID]\1203620\remote`. Replace `[YourSteamID]` with your SteamID64.
::::

:::: tip Restoring the save later
If you want to transfer the save back to a server later on, follow the guide [Add savegame](add-savegame.md).
::::

:::: info Regular backups
For automatic or regular backups you can also use the backup function: [Create backup](create-backup.md).
::::
