---
description: Download the savegame from a Nightingale server
---

# How to Download the Savegame of Your Nightingale Server

You can download your server's save to your PC at any time – for example as an additional backup or to move it to another server.

:::: warning Caution
Stop your server before downloading the files. Nightingale constantly writes to the world and character data while it is running – otherwise you would download an incomplete save.
::::

## Where the save is stored

The complete save lives in the `Offline` folder. Realms and characters are stored separately inside it:

| Directory | Content |
|-----------|---------|
| `/NWX/Saved/Offline/DedicatedServer/Deploy/` | The realms of your server, meaning all worlds including their buildings |
| `/NWX/Saved/Offline/<PlatformID>/Profiles/` | The character data of a player. `<PlatformID>` is the Steam or Epic ID of that player – each player has their own folder. |

:::: info Note
Nightingale has **no world or save name** that you enter anywhere. The server always loads whatever is stored in these folders.
::::

## Download the savegame

1. <b>Stop the server</b><br>
   Stop your server via the dashboard.

2. <b>Connect via SFTP</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md).

3. <b>Open the directory</b><br>
   Switch to the following directory:

   ```
   /NWX/Saved/
   ```

4. <b>Download the folder</b><br>
   Download the complete `Offline` folder including all subfolders to your PC:

   ```
   /NWX/Saved/Offline/
   ```

   :::: tip Tip
   Always download realms and characters together. A realm without its matching character can only be used to a limited extent later on.
   ::::

5. <b>Start the server</b><br>
   Start your server again.

:::: tip Save the server state as well
If you also want to keep the server state – including the list of banned players – download this folder too:

```
/NWX/Saved/Config/
```
::::

:::: tip Save the configuration as well
The server settings are stored in the following file:

```
/NWX/Config/ServerSettings.ini
```

Note: the admin password, the server password and the difficulty are written into this file from the **dashboard** every time the server starts. So you do not need the file to restore those values.
::::

:::: tip Restore the save later
If you want to move the save back onto a server later, follow the guide [Add Savegame](add-savegame.md).
::::

:::: info Regular backups
For automatic or regular backups you can also use the backup feature: [Create Backup](create-backup.md).
::::
