---
description: Download a savegame from a Citadel Forged with Fire server
---

# How to Download the Savegame of Your Citadel Forged with Fire Server

You can download your server's save to your PC at any time – for example as an additional backup or to transfer it to another server.

:::: warning Caution
Stop your server before downloading the files. Your server saves automatically while running – if you download during operation, the save can be incomplete.
::::

1. <b>Stop the server</b><br>
   Stop your server via the dashboard.

2. <b>Connect via SFTP</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md).

3. <b>Open the directory</b><br>
   Navigate to the following directory:

   ```
   /Citadel/Saved/SaveGames/
   ```

4. <b>Download the entire folder</b><br>
   Download the complete content of this directory including all subfolders and files to your PC.

5. <b>Start the server</b><br>
   Start your server again.

:::: info What is inside the savegame?
The folder contains the world data as well as the data of all players. The character data is named after the **SteamID64** of the respective player. Here you can learn how to find your [SteamID64](../steamid64-find-out.md).
::::

:::: warning Warning
A save is always the **entire folder content**. Always download it completely – individual files from it do not make a usable save.
::::

:::: tip Back up the configuration as well
If you also want to save your server settings, download the following folder in addition:

```
/Config/
```

It contains, among others, the `Game.ini` with your server settings.
::::

:::: tip Restoring the savegame
If you want to transfer the save back to a server later, follow the guide [Add savegame](add-savegame.md).
::::

:::: info Regular backups
For automatic or regular backups you can also use the backup function: [Create backup](create-backup.md).
::::
