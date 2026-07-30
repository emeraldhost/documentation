---
description: Download a savegame from a The Lord of the Rings Return to Moria server
---

# How to Download the Savegame of Your The Lord of the Rings Return to Moria Server

You can download your server's world to your PC at any time – for example as an additional backup or to move it to another server.

:::: warning Caution
Stop your server before downloading the file. As long as the server runs it keeps writing to the world – downloading during that time can result in an incomplete savegame.
::::

1. <b>Stop the server</b><br>
   Stop your server via the dashboard. The server saves and shuts down cleanly while doing so.

2. <b>Connect via SFTP</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md).

3. <b>Open the directory</b><br>
   Change to the following directory:

   ```
   /Moria/Saved/SaveGamesDedicated/
   ```

4. <b>Download the world file</b><br>
   Download the desired `MW_*.sav` file to your PC. Every world on your server is exactly one such file.

5. <b>Start the server</b><br>
   Start your server again.

:::: info Which file is the right one?
The world your server uses is defined in the `[World]` section of `MoriaServerConfig.ini` in the main directory: as a file name in `OptionalWorldFilename` or – if that is empty – through the world name in `Name`.
::::

:::: tip Back up the configuration as well
If you also want to save your server settings, download these files from the main directory in addition:

```
MoriaServerConfig.ini
MoriaServerPermissions.txt
MoriaServerRules.txt
```
::::

:::: tip Restore the savegame
If you want to move the world back to a server later, follow the guide [Add Savegame](add-savegame.md).
::::

:::: info Regular backups
For complete backups of your server you can also use the backup feature: [Create Backup](create-backup.md).
::::
