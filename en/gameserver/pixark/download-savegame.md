---
description: Download a savegame from a PixARK server
---

# How to Download the Savegame of Your PixARK Server

You can download your server's save to your PC at any time – for example as an additional backup or to transfer it to another server.

In PixARK all mutable data lives in a single folder: `Saved`. It contains the voxel world, the player and tribe data, your configuration files and the logs.

:::: warning Caution
Stop your server before downloading the files. While running, the server constantly writes to the save – otherwise you would download an incomplete or corrupted state.
::::

## Download the savegame

1. <b>Stop the server</b><br>
   Stop your server via the dashboard.

2. <b>Connect via SFTP</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md).

3. <b>Open the directory</b><br>
   Navigate to the following directory:

   ```
   /ShooterGame/
   ```

4. <b>Download the folder</b><br>
   Download the complete `Saved` folder to your PC:

   ```
   /ShooterGame/Saved/
   ```

   :::: info Note
   Always download the entire folder instead of picking individual subfolders. World, player and tribe data are stored in separate subfolders and belong together – if one of them is missing, the save is unusable.
   ::::

5. <b>Start the server</b><br>
   Start your server again.

## What is inside the Saved folder?

| Content | Description |
|---------|-------------|
| World data | The entire voxel world including all buildings and terrain changes |
| Player and tribe data | Characters, progress, inventories and tribes |
| `Config/WindowsServer/` | Configuration files, among them the `GameUserSettings.ini` |
| `Logs/` | The server logs |

:::: info Note
The configuration folder is called `WindowsServer` on your Linux server as well. That is intended – PixARK only ships a Windows server binary, which runs on Linux servers through a compatibility layer.
::::

:::: tip Restoring the savegame
If you want to transfer the save back to a server later, follow the guide [Add Savegame](add-savegame.md).
::::

:::: info Regular backups
For automatic or regular backups you can also use the backup function: [Create Backup](create-backup.md).
::::
