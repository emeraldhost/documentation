---
description: Download a savegame from an Unturned server
---

# How to Download the Savegame of Your Unturned Server

In Unturned the save and the configuration live together in one folder under `/Servers/`. You can download that folder to your PC at any time – for example as an additional backup or to transfer it to another server.

:::: danger Save first
Unturned does **not** save automatically. If you download the files without saving first, all progress since the last save is missing.
::::

1. <b>Save the world</b><br>
   Open the **console** in the dashboard and enter the following command:

   ```
   save
   ```

2. <b>Stop the server</b><br>
   Stop your server via the dashboard.

3. <b>Connect via SFTP</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md).

4. <b>Open the directory</b><br>
   Navigate to the following directory:

   ```
   /Servers/
   ```

   :::: info Which folder is mine?
   The folder name matches the server ID from your server's startup parameter. Usually there is exactly one folder there – that is yours.
   ::::

5. <b>Download the folder</b><br>
   Download the complete folder of your server including all subfolders to your PC.

6. <b>Start the server</b><br>
   Start your server again.

## What is inside the folder?

| Folder / file | Content |
|---------------|---------|
| `Level/<MapName>/` | The world data: structures, vehicles and objects – one folder per map |
| `Players/` | The player saves, one subfolder per player |
| `Server/Commands.dat` | Your server commands and settings (map, password, player count) |
| `Server/Adminlist.dat` · `Server/Blacklist.dat` | Admin list and ban list |
| `Config.txt` | Difficulty and advanced server settings |
| `WorkshopDownloadConfig.json` | The list of your Workshop mods and maps |

:::: tip Save the world only
If you only want to keep the game progress, the folders `Level/` and `Players/` are enough. For a complete move to another server it is better to download the whole server folder.
::::

:::: warning Warning
Always download folders completely. Individual files from `Level/` or `Players/` do not make a usable save.
::::

:::: tip Restoring the savegame
If you want to transfer the save back to a server later, follow the guide [Add savegame](add-savegame.md).
::::

:::: info Regular backups
For automatic or regular backups you can also use the backup function: [Create backup](create-backup.md).
::::
