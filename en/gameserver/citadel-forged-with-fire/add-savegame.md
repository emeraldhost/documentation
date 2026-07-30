---
description: Add a savegame to a Citadel Forged with Fire server
---

# How to Add a Savegame to Your Citadel Forged with Fire Server

In Citadel Forged with Fire a save is **not a single file but a complete folder**. It contains the world data as well as the data of all players – the character data is named after the **SteamID64** of the respective player.

:::: info Note
You do **not** have to enter a world or save name in any configuration file. Your server always loads the save that is present in the savegame folder – the server name has nothing to do with it.
::::

:::: tip Tip
Create a [backup](create-backup.md) of your current save before uploading, in case you want to switch back later.
::::

## Find your local savegame

If you want to transfer a save from your PC, you can find it in the installation folder of the game – **not** in the `AppData` directory:

1. <b>Open your Steam library</b><br>
   Open Steam and switch to your **Library**.

2. <b>Open the local files</b><br>
   Right-click **Citadel Forged with Fire**, select **Manage** and then **Browse local files**.

3. <b>Open the savegame folder</b><br>
   In the window that opens, navigate to the following directory:

   ```
   Citadel\Saved\SaveGames
   ```

4. <b>Copy the entire content</b><br>
   You need the **entire content** of this folder. Individual files from it do not make a usable save.

## Upload the savegame

1. <b>Stop the server</b><br>
   Stop your server via the dashboard. While the server is running it keeps saving automatically and would overwrite your uploaded files again.

2. <b>Connect via SFTP</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md).

3. <b>Open the directory</b><br>
   Navigate to the following directory:

   ```
   /Citadel/Saved/SaveGames/
   ```

   :::: info Note
   If the folder does not exist yet, start your server once so the folder structure gets created. Stop it again afterwards, before uploading the files.
   ::::

4. <b>Remove the old save</b><br>
   Delete the existing content of the folder.

   :::: warning Warning
   This removes the current save of your server. Download it beforehand or create a [backup](create-backup.md) in case you want to switch back.
   ::::

5. <b>Upload the new save</b><br>
   Upload the entire content of your savegame folder into this directory. Make sure to keep the folder structure unchanged.

6. <b>Start the server</b><br>
   Start your server. Your uploaded save is now loaded on startup.

## Restore a save on your PC

If you want to use a save on your PC instead, the procedure is the same:

1. <b>Close the game</b><br>
   Close Citadel Forged with Fire completely.

2. <b>Replace the files</b><br>
   Copy the content of the save into the folder `Citadel\Saved\SaveGames` inside your game installation folder.

3. <b>Start the game</b><br>
   Restart the game – the save is now available to you.

:::: danger Important
The character data is named after the SteamID64 of the respective player. If you take over a save from another server or from another PC, the characters remain tied to the same Steam accounts. A player with a different SteamID64 starts with a new character on that save.
::::

:::: warning Warning
Always transfer the **entire folder content**. World and player data belong together – if individual files are missing, the save can be incomplete or fail to load at all.
::::

:::: tip Tip
See [Download savegame](download-savegame.md) for how to back up the save of your server.
::::
