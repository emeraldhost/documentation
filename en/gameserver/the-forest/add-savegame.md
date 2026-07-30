---
description: Add a savegame to a The Forest server
---

# How to Add a Savegame to Your The Forest Server

The Forest has **no world name**, it uses five fixed **save slots** (`1` to `5`) instead. A savegame is always a complete folder named `Slot1` to `Slot5` – not a single file. You upload that folder with all of its contents to your server and then set which slot should be loaded.

:::: tip Tip
Create a [backup](create-backup.md) of your current server save before uploading, in case you want to switch back later.
::::

## Find your local savegame

1. <b>Open the savegame folder</b><br>
   Press `Windows key + R`, enter the following path and confirm with Enter:

   ```
   %userprofile%\AppData\LocalLow\SKS\TheForest
   ```

2. <b>Choose the right subfolder</b><br>
   Open the folder whose name is a long sequence of numbers – that is your SteamID64. Inside it, switch to the `Multiplayer` folder.

   :::: info Note
   `Multiplayer` contains the worlds in which you were the host yourself, `SinglePlayer` your singleplayer worlds. For a dedicated server you use a savegame from `Multiplayer`.
   ::::

3. <b>Select the slot folder</b><br>
   Inside you find the folders `Slot1` to `Slot5`. Choose the folder of the savegame you want to transfer – you need the **complete folder** including its contents.

## Upload the savegame

1. <b>Stop the server</b><br>
   Stop your server via the dashboard. While the server is running it writes to the save files itself.

2. <b>Connect via SFTP</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md).

3. <b>Open the directory</b><br>
   Change to the following directory:

   ```
   /TheForestDedicatedServer_Data/Multiplayer/
   ```

   :::: info Note
   If the folder does not exist yet, start the server once so the folder structure is created. Stop it again afterwards before uploading the files.
   ::::

4. <b>Upload the slot folder</b><br>
   Upload the complete folder `Slot1` (or `Slot2` to `Slot5`) with all of its files into this directory. If a folder with the same name already exists there, delete it first or rename your uploaded folder to a free slot number.

5. <b>Set the slot in the configuration</b><br>
   Open the following file:

   ```
   /TheForestDedicatedServer_Data/forest/config/config.cfg
   ```

   Enter the number of the slot you uploaded:

   ```
   slot 1
   ```

6. <b>Set Init Type to Continue</b><br>
   Open the **dashboard**, switch to the **Settings** and change the **Init Type** field from `New` to `Continue`.

7. <b>Start the server</b><br>
   Save all changes and start your server. On startup it now loads your uploaded savegame.

:::: danger Important
**Init Type** has to be set to `Continue`. If the value stays on `New`, the server generates a fresh world on every start and your progress is not saved – your uploaded savegame would be lost.
::::

:::: warning Warning
Some values in `config.cfg` are rewritten on server start from the fields in the dashboard – among them `initType`, `serverName`, `serverPassword`, `serverPlayers`, `difficulty`, the ports and `serverSteamAccount`. Only change those values in the dashboard. The `slot` value is not affected and stays in the file.
::::

:::: danger Do not forget the Steam Account Token
Without a valid Steam Game Server Login Token (GSLT) your server runs anonymously – player data and savegames may then not be stored correctly. Create a token with **App ID 242760** at [steamcommunity.com/dev/managegameservers](https://steamcommunity.com/dev/managegameservers) and enter it in the dashboard under **Settings** in the **Steam Account Token** field.
::::

:::: info Note
The server saves automatically. How often is controlled by the `serverAutoSaveInterval` value in `config.cfg` – the value is given in minutes, and values below `15` are not possible.
::::
