---
description: Download the savegame of a Mindustry server
---

# How to Download the Savegame of Your Mindustry Server

You can download the save of your server to your PC at any time – for example as an additional backup or to move it to another server. A save is always exactly one file with the extension `.msav`.

## Save the current state

The server does not write the running game to disk permanently. So first store it via the **console** of your dashboard:

1. <b>Open the console</b><br>
   Open the **console** of your server in the dashboard.

2. <b>Save the game</b><br>
   Enter the following command and pick a short name without spaces:

   ```
   save myworld
   ```

   The server confirms the save and places the file at `/config/saves/myworld.msav`.

## Download the file

1. <b>Stop the server</b><br>
   Stop your server via the dashboard so nothing is written to the file during the download.

2. <b>Connect via SFTP</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md).

3. <b>Open the directory</b><br>
   Change into the following directory:

   ```
   /config/saves/
   ```

4. <b>Download the save</b><br>
   Download the `.msav` file you want to your PC:

   ```
   myworld.msav
   ```

5. <b>Start the server</b><br>
   Start your server again.

:::: info Note
To see which saves exist on your server, use the `saves` command in the console. It lists all slots without the `.msav` extension.
::::

:::: tip Auto-saves
If you enabled automatic saving, the same folder also contains files with the prefix `auto_`, for example `auto_Ground_Zero_....msav`. You can download and later load those as well.
::::

:::: tip Also back up settings and maps
If you want to save more than just the world, download the following files as well:

| Path | Content |
|------|---------|
| `/config/settings.bin` | All server settings as well as the admin and ban lists |
| `/config/maps/` | Your custom maps |
| `/config/mods/` | Installed mods and plugins |
::::

:::: warning Caution
`settings.bin` is a binary file. Back it up, but never edit it in a text editor – doing so destroys admins, bans and settings.
::::

:::: tip Restore the savegame
If you want to move the save back onto a server later, follow the guide [Add savegame](add-savegame.md).
::::

:::: info Regular backups
For automatic or regular backups you can also use the backup function: [Create Backup](create-backup.md).
::::
