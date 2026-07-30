---
description: Add a savegame to a Necesse server
---

# How to Add a Savegame to Your Necesse Server

A Necesse world is **a single `.zip` file** named after the world – for example `My_World.zip`. You upload this file to your server and then enter its name in the dashboard.

:::: tip Tip
Create a [backup](create-backup.md) of your current server world before uploading, in case you want to switch back later.
::::

## Find your local world

1. <b>Open the savegame folder</b><br>
   Press `Windows key + R`, enter the following path and confirm with Enter:

   ```
   %appdata%\Necesse\saves\worlds
   ```

2. <b>Select the world file</b><br>
   Every world is stored as its own `.zip` file in this folder. Pick the file of the world you want to transfer.

   :::: info Note
   Do **not** extract the file. Necesse expects the world as a packed archive.
   ::::

## Upload the world

1. <b>Stop the server</b><br>
   Stop your server via the dashboard. While the server is running it writes to the world file itself.

2. <b>Connect via SFTP</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md).

3. <b>Open the directory</b><br>
   Change into the following directory:

   ```
   /saves/worlds/
   ```

   :::: info Note
   If the folder does not exist yet, start the server once so the folder structure is created. Stop it again before uploading the file. If the existing worlds of your server are located directly in `/saves/`, use that existing folder instead of `/saves/worlds/`.
   ::::

4. <b>Upload the world file</b><br>
   Upload your `.zip` file into this directory. If a file with the same name already exists, rename your uploaded file or download the existing one first.

5. <b>Enter the world name in the dashboard</b><br>
   Open the dashboard, go to the **settings** and enter the name of your world file in the **Save Name** field – **without** the `.zip` extension (e.g. `My_World` for `My_World.zip`).

6. <b>Start the server</b><br>
   Save the settings and start your server. Your uploaded world is now loaded on startup.

:::: danger Mind upper and lower case
Your server runs on Linux and is case sensitive. `My_World` and `my_world` are two different worlds. If the name you entered does not match the file name exactly, the server creates a **new, empty world** under that name instead.
::::

:::: warning Caution
The world name is passed as a startup parameter. Only set it in the dashboard – a different entry in `/cfg/server.cfg` has no effect.
::::

:::: info Adjust world settings
The settings of a world (file `worldSettings.cfg`) are located **inside** the `.zip` file. To change them, download the file, extract it, edit `worldSettings.cfg` and pack the contents back into a `.zip` archive with the same name and the same structure.
::::

:::: tip Tip
The name your server currently loads is shown in the dashboard in the **Save Name** field. If you name your uploaded file exactly the same way, you do not have to change anything there – but make sure to back up the previous world file first.
::::
