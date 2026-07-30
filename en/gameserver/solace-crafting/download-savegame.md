---
description: Download a savegame from a Solace Crafting server
---

# How to Download the Savegame of Your Solace Crafting Server

You can download your server's world to your PC at any time – for example as an additional backup, for archiving or to transfer it to another server.

:::: warning Caution
Stop your server before downloading the files. While the server is running it saves regularly – otherwise you would download an incomplete or corrupted save.
::::

1. <b>Stop the server</b><br>
   Stop your server via the dashboard.

2. <b>Connect via SFTP</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md).

3. <b>Open the directory</b><br>
   Navigate to the following directory:

   ```
   /.config/unity3d/Big Kitty Games/Solace Crafting/Worlds/
   ```

   :::: info Note
   The folder `.config` starts with a dot and is therefore hidden. Enable the display of hidden files in your SFTP client if you cannot see it.
   ::::

4. <b>Download the world folder</b><br>
   Download the complete folder of your world including all its files to your PC. If several worlds are stored in the directory, download all folders when in doubt.

5. <b>Start the server</b><br>
   Start your server again.

:::: tip Find the right world
The world your server currently loads is defined in the file `servercfg.dat` under the value `worldSaveToUse`. The name entered there matches the folder name inside the `Worlds` directory. Without any changes this is the folder `MultiplayerWorld`.
::::

:::: tip Back up the configuration as well
If you also want to save your server settings, download the following file in addition:

```
/.config/unity3d/Big Kitty Games/Solace Crafting/servercfg.dat
```
::::

:::: tip Continue playing the world locally
If you want to continue playing the downloaded world in single player on your PC, place the world folder into the following directory:

```
%USERPROFILE%\AppData\LocalLow\Big Kitty Games\Solace Crafting\Worlds
```
::::

:::: tip Restoring the savegame
If you want to transfer the save back to a server later, follow the guide [Add savegame](add-savegame.md).
::::

:::: info Regular backups
For automatic or regular backups you can also use the backup function: [Create backup](create-backup.md).
::::
