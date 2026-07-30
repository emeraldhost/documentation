---
description: Download a savegame from an Avorion server
---

# How to Download the Savegame of Your Avorion Server

You can download the galaxy of your server to your PC at any time – for example as an additional backup or to transfer it to another server.

:::: warning Caution
Stop your server before downloading the files. Avorion saves automatically while running – if you download during that, the galaxy can be incomplete.
::::

1. <b>Stop the server</b><br>
   Stop your server via the dashboard. Enter `/save` in the console beforehand so the current state is written to disk.

2. <b>Connect via SFTP</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md) or use the file browser in the dashboard.

3. <b>Find the galaxy folder</b><br>
   Navigate to the data directory `/galaxy/` of your server and open the folder named after your galaxy inside it. You can recognise the right folder by the files `server.ini`, `admin.xml` and `modconfig.lua`.

   :::: info Which galaxy is the right one?
   You can find the name of your current galaxy in the **dashboard** under the **settings** in the field for the galaxy name (**Galaxy Name**). The folder is named exactly like that.
   ::::

4. <b>Download the folder</b><br>
   Download the **complete** galaxy folder with all its files and subfolders to your PC.

5. <b>Start the server</b><br>
   Start your server again.

:::: warning Warning
A savegame is always the complete galaxy folder. Individual files taken from it do not make a usable savegame.
::::

:::: tip Reduce the download
The subfolder `workshop` inside the galaxy only contains the Workshop mods your server downloaded automatically. Your server downloads them again on the next start – so you can leave that folder out of the download if you want to save time and disk space.
::::

:::: tip Restore the savegame
If you want to transfer the galaxy back to a server later, follow the guide [Add savegame](add-savegame.md). Make sure that the folder name and the configured galaxy name match.
::::

:::: info Regular backups
For automatic or regular backups you can also use the backup feature: [Create Backup](create-backup.md).
::::
