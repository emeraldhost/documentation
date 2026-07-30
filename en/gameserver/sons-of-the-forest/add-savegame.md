---
description: Add a savegame to a Sons Of The Forest server
---

# How to Add a Savegame to Your Sons Of The Forest Server

You can transfer a local save to your server to continue playing with an existing world.

:::: warning Warning
Sons Of The Forest does **not** store player data such as inventory, position and clothing in the world savegame. After the import your buildings and the world state are preserved, but all players start with a new character.
::::

## Find the local savegame

1. <b>Open savegame folder</b><br>
   Press `Windows Key + R`, enter the following path and confirm with Enter:

   ```
   %userprofile%\AppData\LocalLow\Endnight\SonsOfTheForest\Saves
   ```

2. <b>Choose the right subfolder</b><br>
   Open the folder named after your SteamID64 and inside it the folder `Multiplayer`. It contains all worlds in which you were the host yourself.

   :::: info Note
   `MultiplayerClient` contains worlds in which you were only a guest, `Singleplayer` holds your single player worlds. For a dedicated server you need a save from `Multiplayer`.
   ::::

3. <b>Identify the save</b><br>
   Each save is a separate folder named with a random number (e.g. `1833122971`). It contains several files – among them various `.json` files and a `SaveData.zip` – that all belong together.

## Upload and apply the savegame

1. <b>Stop the server</b><br>
   Stop your server via the dashboard.

2. <b>Connect via SFTP</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md).

3. <b>Rename the folder</b><br>
   Rename the save folder to a ten-digit number with leading zeros. This number will be your save slot.

   :::: tip Example
   ```
   0000000002
   ```
   ::::

4. <b>Upload the save</b><br>
   Upload the complete folder including all files it contains to the following directory:

   ```
   /serverconfig/Saves/DedicatedServer/Multiplayer/
   ```

5. <b>Set the save slot</b><br>
   Open the file `/serverconfig/dedicatedserver.cfg` and adjust the following values:

   ```json
   "SaveSlot": 2,
   "SaveMode": "Continue",
   ```

   The number in `SaveSlot` must match the folder name without the leading zeros (`0000000002` therefore corresponds to `2`).

6. <b>Start the server</b><br>
   Save the file and start your server.

:::: danger Important
`SaveMode` must be set to `Continue`. If it is set to `New`, the slot will be overwritten with a freshly generated world on the next server start and your uploaded save will be lost.
::::

:::: tip Without renaming
You can also leave the folder name unchanged and instead enter the folder number directly as the save slot – for a folder named `1833122971` that would be `"SaveSlot": 1833122971`. All that matters is that the folder name and `SaveSlot` match.
::::

:::: warning Warning
If the folder `/serverconfig/Saves/DedicatedServer/Multiplayer/` does not exist yet, start the server once so the folder structure is created automatically. Stop the server again before uploading the files.
::::

:::: tip Tip
Create a [backup](create-backup.md) of your existing server savegame before uploading, in case you want to switch back later.
::::
