---
description: Download a savegame from a Myth of Empires server
---

# How to Download the Savegame of Your Myth of Empires Server

The save of a Myth of Empires server is not a single file but the complete folder `Saved`. It contains the world, all structures, the player data and your server settings.

:::: warning Caution
Stop your server before downloading the files. Myth of Empires writes to the save regularly while running – if you download during operation, the save can be incomplete or corrupted.
::::

1. <b>Save the world</b><br>
   Run the command `cheat SaveWorld` in the game as an admin and wait about 30 to 45 seconds so the save is fully written to disk.

2. <b>Stop the server</b><br>
   Stop your server via the dashboard.

3. <b>Connect via SFTP</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md).

4. <b>Open the directory</b><br>
   Change to the following directory:

   ```
   /MOE/
   ```

5. <b>Download Saved</b><br>
   Download the complete folder `Saved` with all of its subfolders and files to your PC.

6. <b>Start the server</b><br>
   Start your server again.

:::: warning Caution
A save is always the complete folder `Saved`. World and player data are stored there side by side across several files and belong together – individual files taken from it do not make a usable save.
::::

:::: info What is inside the Saved folder?
| Entry | Content |
|-------|---------|
| `Config/WindowsServer/` | Your server settings, among them the `GameUserSettings.ini` |
| `Logs/` | The log files of your server |

The remaining files in the folder hold the world and the player data. Always back up the folder in full.
::::

:::: info Note
The configuration folder is called `WindowsServer` on your Linux server as well. That is intended – Myth of Empires only ships a Windows server binary, which runs on Linux servers through a compatibility layer.
::::

:::: danger The save is tied to the server ID
The save is stored under the **server ID** of your server. If you change that ID, the server no longer finds its previous save and creates a new, empty world. Write down the server ID of your server before restoring the save somewhere else.
::::

:::: tip Restore the save later
If you want to transfer the save back to a server later, follow the guide [Add Savegame](add-savegame.md).
::::

:::: info Regular backups
For automatic or regular backups you can also use the backup feature: [Create Backup](create-backup.md).
::::
