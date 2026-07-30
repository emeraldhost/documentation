---
description: Add a savegame to a Smalland Survive the Wilds server
---

# How to Add a Savegame to Your Smalland Survive the Wilds Server

The complete savegame of a world is stored in a single file with the `.wld` extension. The file name matches the **world name** you enter in the dashboard of your server exactly: if your world is called `MyWorld`, the server loads the file `MyWorld.wld`.

:::: info Note
Characters are **not** stored on the server. They are saved locally on each player's PC and tied to their account. Only the world data such as terrain, structures and tamed creatures is stored on the server.
::::

:::: tip Tip
Create a [backup](create-backup.md) of your current savegame before uploading, in case you want to switch back later.
::::

## Find your local savegame

If you want to transfer a world from your PC to the server, you find it here:

1. <b>Open the savegame folder</b><br>
   Press `Windows key + R`, enter the following path and confirm with Enter:

   ```
   %LOCALAPPDATA%\SMALLAND\Saved\SaveGames\Worlds\
   ```

2. <b>Select the world</b><br>
   This folder contains one `<worldname>.wld` file per world. Select the file of the world you want to transfer.

## Upload the savegame

1. <b>Stop the server</b><br>
   Stop your server via the dashboard. While the server is running it writes to the world file itself and would overwrite your upload again.

2. <b>Connect via SFTP</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md).

3. <b>Open the directory</b><br>
   Change to the following directory:

   ```
   /SMALLAND/Saved/SaveGames/Worlds/
   ```

   :::: info Note
   If the folder does not exist yet, start the server once so the folder structure is created. Stop it again afterwards before uploading the file.
   ::::

4. <b>Upload the world file</b><br>
   Upload your `.wld` file into this directory. If a file with the same name already exists there, delete it first or rename your uploaded file.

5. <b>Set the world name in the dashboard</b><br>
   Open the **dashboard** of your server and enter the file name **without the** `.wld` **extension** in the world name field (**World Name**).

   :::: tip Example
   | File in the `Worlds` folder | World name entry |
   |-----------------------------|------------------|
   | `MyWorld.wld` | `MyWorld` |
   | `World.wld` | `World` |
   ::::

6. <b>Start the server</b><br>
   Start your server. On startup it now loads your uploaded savegame.

:::: danger Important
The world name has to match the file name exactly, including upper and lower case. If it does not match, the server simply creates a **new, empty world** under the name you entered. Your uploaded file is kept, but it is not loaded.
::::

:::: warning No spaces in the world name
The world name must **not contain spaces**. If your uploaded file contains any, rename it first – for example `My World.wld` to `MyWorld.wld` – and then enter the new name in the dashboard.
::::

## Create a new world

If you want to start fresh without deleting your current savegame:

1. <b>Stop the server</b><br>
   Stop your server via the dashboard.

2. <b>Enter a new world name</b><br>
   Enter a world name in the dashboard that has not been used yet.

3. <b>Start the server</b><br>
   On the next start the server creates a new world with that name. Your old `.wld` file stays in the `Worlds` folder – you can switch back at any time by entering the old world name again.

## Reset a world

:::: warning Caution
If you want to reset a world completely, stop the server, delete the matching `.wld` file in the `Worlds` folder and start the server again. The server then generates the world from scratch. This step cannot be undone – back up the file beforehand if you might still need it.
::::
