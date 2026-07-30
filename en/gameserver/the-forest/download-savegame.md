---
description: Download a savegame from a The Forest server
---

# How to Download the Savegame of Your The Forest Server

You can download your server's savegame to your PC at any time – for example as an additional backup or to move it to another server.

:::: warning Caution
Stop your server before downloading the files. The Forest saves automatically at regular intervals – if you download while it does, the savegame can be incomplete.
::::

1. <b>Stop the server</b><br>
   Stop your server via the dashboard.

2. <b>Connect via SFTP</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md).

3. <b>Open the directory</b><br>
   Change to the following directory:

   ```
   /TheForestDedicatedServer_Data/Multiplayer/
   ```

4. <b>Download the slot folder</b><br>
   Download the complete folder of your savegame – `Slot1` to `Slot5` – with all of its files to your PC.

5. <b>Start the server</b><br>
   Start your server again.

:::: info Which slot is the right one?
The slot your server uses is defined in the file `/TheForestDedicatedServer_Data/forest/config/config.cfg` in the `slot` value. If it says `slot 1`, then `Slot1` is your current savegame.
::::

:::: warning Caution
A savegame is always the complete `Slot#` folder. Always download it in full – individual files from it do not make a usable savegame.
::::

:::: tip Back up the configuration as well
If you also want to save your server settings, download the following file in addition:

```
/TheForestDedicatedServer_Data/forest/config/config.cfg
```
::::

:::: tip Restore the savegame
If you want to move the savegame back to a server later, follow the guide [Add Savegame](add-savegame.md).
::::

:::: info Regular backups
For automatic or regular backups you can also use the backup feature: [Create Backup](create-backup.md).
::::
