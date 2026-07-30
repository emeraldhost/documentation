---
description: Download a savegame from a Voyagers of Nera server
---

# How to Download the Savegame of Your Voyagers of Nera Server

You can download your server's savegame to your PC at any time – for example as an additional backup or to move it to another server.

In Voyagers of Nera a savegame is always a **complete folder** named after the server ID. That ID is a random string your server generates itself on the first start.

:::: warning Caution
Stop your server before downloading the files. The server saves automatically at regular intervals – if you download while it does, the savegame can be incomplete.
::::

1. <b>Stop the server</b><br>
   Stop your server via the dashboard.

2. <b>Connect via SFTP</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md).

3. <b>Open the directory</b><br>
   Change to the following directory:

   ```
   /BoatGame/Saved/PersistedData/
   ```

4. <b>Download the savegame folder</b><br>
   Download the complete folder with the random string in its name – your server ID – including all of its files to your PC.

5. <b>Start the server</b><br>
   Start your server again.

:::: info Which folder is the right one?
The same directory also contains a `CustomConfig` folder. It holds your server settings and is **not** a savegame. The folder with the random string is your world.
::::

:::: warning Caution
A savegame is always the complete folder. Always download it in full – individual files from it do not make a usable savegame.
::::

:::: tip Back up the configuration as well
If you also want to save your server settings, download the following folder in addition:

```
/BoatGame/Saved/PersistedData/CustomConfig/
```
::::

:::: tip Restore the savegame
If you want to move the savegame back to a server later, follow the guide [Add Savegame](add-savegame.md).
::::

:::: info Regular backups
For automatic or regular backups you can also use the backup feature: [Create Backup](create-backup.md).
::::
