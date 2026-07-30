---
description: Download a savegame from a Romestead server
---

# How to Download the Savegame of Your Romestead Server

You can download your server's world to your PC at any time – for example as an additional backup or to transfer it to another server.

:::: warning Caution
Stop your server before downloading the files. Romestead saves automatically every six minutes – if you download in the middle of a save, the savegame can be incomplete.
::::

1. <b>Save the world</b><br>
   Run the following command in your server's **console** so the current state is written to disk in full:

   ```
   save
   ```

   :::: info Note
   The server is frozen briefly while the save runs. Wait for the message in the console before you continue.
   ::::

2. <b>Stop the server</b><br>
   Stop your server via the dashboard.

3. <b>Connect via SFTP</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md).

4. <b>Open the directory</b><br>
   Navigate to your server's main directory – the same place as `config.json`.

5. <b>Download the world</b><br>
   Download the complete folder including all files and subfolders to your PC:

   ```
   /saved_worlds/
   ```

6. <b>Start the server</b><br>
   Start your server again.

:::: info Which world does my server load?
The world that is loaded on startup is defined in `config.json` in your server's main directory, in the `AutoStartWorldName` value.
::::

:::: warning Caution
Always download the folder in full. Individual files taken from it do not make a usable savegame.
::::

:::: tip Back up the configuration as well
If you also want to save your server settings, download the following file in addition:

```
/config.json
```

It contains the name of the world that is loaded automatically along with the other base settings of your server.
::::

:::: info Savegames from single-player
There is no documented way to move a world from local single-player onto a dedicated server: neither the storage location of local worlds nor a transfer procedure is officially described. Create your world directly on the server instead.
::::

:::: info Regular backups
For automatic or regular backups you can also use the backup function: [Create backup](create-backup.md).
::::
