---
description: Add a savegame to a The Lord of the Rings Return to Moria server
---

# How to Add a Savegame to Your The Lord of the Rings Return to Moria Server

A world in Return to Moria is a single file with the prefix `MW_` and the extension `.sav`, for example `MW_BAD1ED294904FE2C24A8ED8BC98145AB.sav`. You upload this file to your server and then define in the configuration which world should be loaded.

:::: tip Tip
Create a [backup](create-backup.md) of your current server savegame before uploading, in case you want to switch back later.
::::

## Find your local savegame

1. <b>Open the savegame folder</b><br>
   Press `Windows key + R`, enter the following path and confirm with Enter:

   ```
   %localappdata%\Moria\Saved
   ```

2. <b>Choose the folder of your platform</b><br>
   Open the folder for your platform: `SaveGamesSteam` on Steam, `SaveGamesEpic` for the Epic Games Store.

3. <b>Select the world file</b><br>
   Your worlds are stored there as individual `MW_*.sav` files. Choose the file of the world you want to move to the server.

:::: info Note
Only worlds from PC (Steam or Epic Games Store) can be transferred. There is no documented way to move savegames from PlayStation 5 or Xbox to a server.
::::

## Upload the savegame

1. <b>Stop the server</b><br>
   Stop your server via the dashboard. The server saves while stopping and shuts down cleanly – as long as it runs it keeps writing to the world file.

2. <b>Connect via SFTP</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md).

3. <b>Open the directory</b><br>
   Change to the following directory:

   ```
   /Moria/Saved/SaveGamesDedicated/
   ```

   :::: info Note
   If the folder does not exist yet, start the server once completely so the folder structure and the configuration files are created. Stop it again before uploading the file.
   ::::

4. <b>Upload the world file</b><br>
   Upload your `MW_*.sav` file into this directory. Keep the file name unchanged – if a file with the same name already exists there, rename one of the two beforehand.

5. <b>Set the world in the configuration</b><br>
   Open the file `MoriaServerConfig.ini` in the main directory of your server and define in the `[World]` section which world should be loaded:

   ```
   [World]
   OptionalWorldFilename=MW_BAD1ED294904FE2C24A8ED8BC98145AB.sav
   ```

   This makes the server load exactly that file – including the `.sav` extension.

   :::: info Note
   If the line `OptionalWorldFilename` is missing from your configuration, simply add it below `[World]`.
   ::::

6. <b>Start the server</b><br>
   Save the change and start your server. Your uploaded world is now loaded on startup.

## Why you should not use the world name

The `[World]` section also contains a `Name` entry. A world can be selected through it as well, but for your server that is not the right approach.

:::: warning Caution
The `Name` entry is applied automatically from your server settings on every start. Changing it directly in `MoriaServerConfig.ini` therefore does not persist. Always use `OptionalWorldFilename` to load an uploaded savegame.
::::

:::: danger Important
If the server does not find a world with the configured world name, it automatically creates a **new** world using the values from the `[World.Create]` section – with the game mode, seed and difficulty configured there. Your uploaded savegame stays on the disk but is not loaded.
::::

:::: tip Tip
`OptionalWorldFilename` is also the right choice if you have several worlds with the same name in the folder. Always enter the exact file name including `.sav`.
::::

## Important notes

:::: warning Caution
Changes to `MoriaServerConfig.ini` are only read on the next start. Always edit the file while the server is stopped and restart it afterwards.
::::

:::: warning Caution
Only stop your server through the dashboard. This is the only way the current state is saved and the server shuts down cleanly. A forced shutdown can cost progress and leave the online session hanging, which makes the next start take several minutes.
::::

:::: info Note
There is no automatic synchronization between the world on your PC and the world on the server. Changes made on the server do not end up in your local savegame and vice versa – you have to transfer the file manually every time.
::::
