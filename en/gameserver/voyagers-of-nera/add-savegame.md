---
description: Add a savegame to a Voyagers of Nera server
---

# How to Add a Savegame to Your Voyagers of Nera Server

Voyagers of Nera has **no world name in the configuration**. Which world is loaded is decided solely by the folder placed inside `PersistedData`. A savegame is always a complete folder named after the server ID – not a single file.

:::: tip Tip
Create a [backup](create-backup.md) of your current server save before uploading, in case you want to switch back later.
::::

## Find your local savegame

You only need this section if you want to transfer a savegame from your own PC. If the savegame comes from another server, you already have the folder from [Download Savegame](download-savegame.md).

1. <b>Open the savegame folder</b><br>
   Press `Windows key + R`, enter the following path and confirm with Enter:

   ```
   %localappdata%\BoatGame\Saved\PersistedData\nera
   ```

2. <b>Choose the right folder</b><br>
   Inside you find one folder per world, each named after its server ID. Choose the folder of the savegame you want to transfer – you need the **complete folder** including its contents.

   :::: tip Which ID belongs to which world?
   The server ID is shown in the game on the right next to each entry in the save selection screen. That way you can tell which folder belongs to which world.
   ::::

## Upload the savegame

1. <b>Stop the server</b><br>
   Stop your server via the dashboard. While the server is running it writes to the save files itself.

2. <b>Connect via SFTP</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md).

3. <b>Open the directory</b><br>
   Change to the following directory:

   ```
   /BoatGame/Saved/PersistedData/
   ```

   :::: info Note
   If the folder does not exist yet, start the server once so the folder structure is created. Stop it again afterwards before uploading the files.
   ::::

4. <b>Remove the current savegame</b><br>
   Delete the existing folder with the random string in its name. That is the world your server generated itself on the first start.

   :::: danger Important
   Do **not** delete the `CustomConfig` folder. It holds your server settings – without it your server resets the game settings to their defaults.
   ::::

5. <b>Upload the savegame</b><br>
   Upload your complete savegame folder with all of its files into this directory.

   :::: warning Caution
   Make sure the folder does not end up nested. Correct is `/BoatGame/Saved/PersistedData/<server ID>/`, wrong would be `/BoatGame/Saved/PersistedData/<server ID>/<server ID>/`. Extract archives on your PC first and upload the savegame folder itself – not the archive and no additional parent folder.
   ::::

6. <b>Start the server</b><br>
   Start your server. On startup it now loads your uploaded savegame.

:::: warning Only one savegame folder
Besides `CustomConfig` there should be exactly one savegame folder inside `PersistedData`. If several worlds remain there, it is not clear which one your server loads.
::::

:::: info Note
The server saves automatically. The interval is set in the **dashboard** through the autosave value – it is given in seconds.
::::
