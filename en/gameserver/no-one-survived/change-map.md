---
description: Change the map of a No One Survived server
---

# How to Change the Map of Your No One Survived Server

No One Survived ships with two maps. Which one your server loads is controlled by the value `OpenMap` in the configuration file.

| Value | Map |
|-------|-----|
| `Map01` | Large map (default), roughly 8 x 8 km |
| `Map02` | Small map, roughly 4 x 4 km – the original map of the game |

:::: info Note
The numbering is not chronological: `Map01` is the **large** map that was added later, `Map02` is the smaller original map.
::::

:::: danger Back up first
Create a [backup](create-backup.md) before switching. Changing the map changes which world your server loads – without a backup you cannot get back to your previous state.
::::

## Switch the map

1. <b>Stop the server</b><br>
   Stop your server via the dashboard. The setting is only read on server start.

2. <b>Connect via SFTP</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md).

3. <b>Open Game.ini</b><br>
   Open the following file:

   ```
   /WRSH/Saved/Config/WindowsServer/Game.ini
   ```

   :::: info Note
   If the file does not exist yet, start the server once so it gets created. Stop it again afterwards.

   The folder is called `WindowsServer` on your Linux server as well. That is intended – No One Survived only ships a Windows server application, which runs on Linux servers through a compatibility layer.
   ::::

4. <b>Enter the map</b><br>
   Enter the desired value in the `[ServerSetting]` section. If the line does not exist yet, add it:

   ```ini
   [ServerSetting]
   OpenMap=Map02
   ```

5. <b>Set a new save name</b><br>
   Enter a new save name in the **dashboard** so a separate world gets created for the new map. Your previous savegame stays intact under its old name.

   :::: info Why a separate name?
   An existing savegame was created on the map you started it on. If you assign a separate save name for the new map, you can switch back at any time by entering the old name again.
   ::::

6. <b>Start the server</b><br>
   Save the file and start your server. On startup the selected map is loaded.

:::: tip Switching back
To switch back to the previous map, set `OpenMap` back and enter the matching save name in the dashboard again.
::::

:::: warning Mind the memory
The large map `Map01` needs considerably more memory than the small map `Map02`. The developer recommends at least 8 GB for the large map and at least 4 GB for the small map. If there is not enough memory, the server does not start properly or crashes during operation.
::::

:::: info No field in the dashboard
The map selection is not controlled through the dashboard, only through `Game.ini`. Because of that this value is not overwritten on server start and stays in place.
::::
