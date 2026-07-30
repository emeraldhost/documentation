---
description: Download the savegame of a CryoFall server
---

# How to Download the Savegame of Your CryoFall Server

The complete world of your CryoFall server lives in the `/Data/Saves/` folder. You can download it to your PC at any time – for example as an additional backup or to move the world to another server.

:::: warning Caution
Stop your server before downloading the files. CryoFall saves the world automatically at regular intervals while running – otherwise you would download an incomplete save.
::::

1. <b>Stop the server</b><br>
   Stop your server via the dashboard.

2. <b>Connect via SFTP</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md).

3. <b>Open the directory</b><br>
   Go to the following directory:

   ```
   /Data/
   ```

4. <b>Download the savegame</b><br>
   Download the complete `Saves` folder including all of its contents to your PC:

   ```
   /Data/Saves/
   ```

5. <b>Start the server</b><br>
   Start your server again.

:::: info Note
Always download the **entire folder** instead of picking out single files. `Saves` holds the world data of your server together with the saved states the server created – only together do they form a loadable save.
::::

:::: tip Back up the configuration as well
If you also want to save your server settings, download these files from the `/Data/` folder too:

```
SettingsServer.xml
ModsConfig.xml
ServerRates.config
```

They contain your operators, the access lists and the game rates, among other things.
::::

:::: tip Restore the save later
If you want to move the save back onto a server later on, follow the guide [Add savegame](add-savegame.md).
::::

:::: info Regular backups
For automatic or regular backups you can also use the backup feature: [Create Backup](create-backup.md).
::::
