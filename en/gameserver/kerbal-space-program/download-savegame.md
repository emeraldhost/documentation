---
description: Download the savegame of a Kerbal Space Program server
---

# How to Download the Savegame of Your Kerbal Space Program Server

You can download the savegame of your server to your PC at any time – for example as an additional backup or to move it to another server. The complete savegame is stored in the `Universe` folder in the main directory of your server.

:::: warning Caution
Stop your server before downloading the files. DarkMultiPlayer constantly writes vessel and player data while running – otherwise you would download an incomplete savegame.
::::

1. <b>Stop the server</b><br>
   Stop your server via the dashboard.

2. <b>Connect via SFTP</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md).

3. <b>Open the directory</b><br>
   Navigate to the main directory of your server. It contains the folder:

   ```
   /Universe/
   ```

4. <b>Download the folder</b><br>
   Download the complete `Universe` folder including all subfolders to your PC. Individual files are not enough – vessels, Kerbals and player progress live in different subfolders.

5. <b>Start the server</b><br>
   Start your server again.

:::: info Note
The folder consists of plain text files only: `Vessels` holds one file per vessel, `Kerbals` one file per Kerbal, and `Scenarios` one subfolder per player with science, funds, reputation and tech tree.
::::

:::: tip Back up the configuration as well
If you also want to save your server settings, download this folder in addition:

```
/Config/
```

It contains `Settings.txt`, `admins.txt`, `mod-control.txt` and the ban lists, among others.
::::

:::: tip Restore the savegame later
If you want to move the savegame back to a server later, follow the guide [Add Savegame](add-savegame.md).
::::

:::: info Regular backups
For automatic or regular backups you can also use the backup feature: [Create Backup](create-backup.md).
::::
