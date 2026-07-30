---
description: Download a savegame from an Arma 3 server
---

# How to Download the Savegame of Your Arma 3 Server

If your server runs a persistent mission such as Antistasi, Vindicta, KP Liberation or Wasteland, you can download its progress to your PC at any time – for example as an additional backup or to move it to another server.

:::: info No savegame available?
An Arma 3 server does not save the world state by itself. Saving only happens if the mission takes care of it. If you run a vanilla mission, no savegame file exists.
::::

:::: warning Caution
Stop your server before downloading the file. Persistent missions save while the server is running – if you download during that, the savegame can be incomplete.
::::

1. <b>Stop the server</b><br>
   Stop your server via the dashboard.

2. <b>Connect via SFTP</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md).

3. <b>Open the profile directory</b><br>
   Change to the following directory. The folder inside carries the profile name of your server:

   ```
   /serverprofile/home/
   ```

4. <b>Download the file</b><br>
   Download the file ending in `.vars.Arma3Profile` from the profile folder to your PC:

   ```
   /serverprofile/home/<profileName>/<profileName>.vars.Arma3Profile
   ```

5. <b>Start the server</b><br>
   Start your server again.

:::: tip Back up the mission as well
A savegame is useless without the matching mission. Therefore also download the `.pbo` file you use from the `/mpmissions` folder.
::::

:::: tip Back up the configuration as well
If you also want to save your server settings, download the file `/server.cfg` in addition.
::::

:::: tip Restore the savegame
If you want to move the savegame back to a server later, follow the guide [Add Savegame](add-savegame.md). Keep in mind that the file has to match the profile name of the target server.
::::

:::: info Regular backups
For complete backups of your server you can also use the backup feature: [Create Backup](create-backup.md).
::::
