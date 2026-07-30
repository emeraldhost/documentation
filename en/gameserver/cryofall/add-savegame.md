---
description: Add a savegame to a CryoFall server
---

# How to Add a Savegame to Your CryoFall Server

The complete world of a CryoFall server lives in the `/Data/Saves/` folder. To use a different save you simply replace that folder – there is no world name to enter anywhere.

:::: info Note
This guide covers saves that come from a CryoFall server – for example a [downloaded savegame](download-savegame.md) or a world from another server you want to move over.
::::

:::: warning Caution
Only use saves that were created with the same game version your server runs. Saves from older versions are no longer compatible after an update.
::::

## Upload the savegame

1. <b>Stop the server</b><br>
   Stop your server via the dashboard. While the server is running it writes to the save regularly.

2. <b>Create a backup</b><br>
   Secure your current state before replacing it: [Create Backup](create-backup.md).

3. <b>Connect via SFTP</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md).

4. <b>Open the directory</b><br>
   Go to the following directory:

   ```
   /Data/
   ```

5. <b>Remove the old save</b><br>
   Delete the existing `Saves` folder including its contents.

   :::: warning Caution
   This removes the current world of your server. So do not skip step 2 if you might want to switch back.
   ::::

6. <b>Upload the new save</b><br>
   Upload your `Saves` folder with all of its contents into `/Data/`. The folder name has to be exactly `Saves` – your server runs on Linux and is case-sensitive.

7. <b>Start the server</b><br>
   Start your server. On startup it loads the existing save.

## Manage multiple worlds with slots

CryoFall stores every world in a numbered slot. That lets you keep several worlds side by side and switch between them without moving any files.

1. <b>Stop the server</b><br>
   Stop your server via the dashboard.

2. <b>Open the configuration</b><br>
   Open the following file via [SFTP](../establish-sftp-connection.md):

   ```
   /Data/SettingsServer.xml
   ```

3. <b>Change the slot</b><br>
   Enter the slot number you want to use:

   ```xml
   <savegame_slot_id>0</savegame_slot_id>
   ```

4. <b>Start the server</b><br>
   Save the file and start your server. If a world already exists for that slot it gets loaded – otherwise the server generates a new world.

:::: danger Important
When you upload a save from somewhere else, the slot number has to match that save. If an empty world is generated after the start, the wrong slot is usually configured. Stop the server, change `savegame_slot_id` and start it again – the uploaded save is not lost in the meantime.
::::

## Reset the world

If you want to start over completely, just delete the save – your server automatically generates a new world on the next start.

1. <b>Stop the server</b><br>
   Stop your server via the dashboard.

2. <b>Create a backup</b><br>
   Secure the old world in case you need it later: [Create Backup](create-backup.md).

3. <b>Delete the save</b><br>
   Delete the following folder via [SFTP](../establish-sftp-connection.md):

   ```
   /Data/Saves/
   ```

4. <b>Start the server</b><br>
   Start your server. It generates a new world.

:::: warning Caution
A reset also removes all characters, bases and progress of your players. Announce a wipe well in advance.
::::

:::: info Single-player worlds
For worlds you started locally in your game we have no documented way of transferring them onto a server. Work with saves that come from a server instead.
::::

:::: warning Settings managed by the dashboard
Server name, description, server list, maximum players, autosave interval and the number of saved states are written from the **dashboard** into `SettingsServer.xml` on every start. If you change these values inside the file they are lost on the next start – only change them in the dashboard.
::::
