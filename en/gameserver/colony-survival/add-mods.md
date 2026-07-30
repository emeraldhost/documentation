---
description: Add mods to a Colony Survival server
---

# How to Add Mods to Your Colony Survival Server

Mods in Colony Survival always consist of their own folder containing a `modInfo.json` file. On your server you upload those folders via SFTP and then enable the mods for your world.

:::: warning Caution
Stop your server before adding, changing or removing mods. Also create a [backup](create-backup.md) beforehand – after a game update mods can become incompatible and prevent the world from loading.
::::

## Download the mod

On a rented server you cannot let Workshop mods download automatically: that would require a Steam account that owns Colony Survival. Instead you download the mod files on your PC and transfer them via SFTP.

1. <b>Subscribe to the mod in the Workshop</b><br>
   Subscribe to the mod you want in the Colony Survival Steam Workshop and start the game once so Steam downloads the files.

2. <b>Open the mod folder on your PC</b><br>
   The downloaded mods are stored in your Steam directory:

   ```
   ...\Steam\steamapps\workshop\content\366090\
   ```

   Each subfolder represents one mod and is named after its Workshop ID.

3. <b>Pick the right folder</b><br>
   You need the folder that contains the `modInfo.json` file. If that file sits in a subfolder, this subfolder is the actual mod.

:::: info Note
If a mod is offered outside the Workshop, download it there and extract the archive. The same rule applies: the folder containing `modInfo.json` is the mod folder.
::::

## Upload the mod to the server

1. <b>Stop the server</b><br>
   Stop your server via the dashboard.

2. <b>Connect via SFTP</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md).

3. <b>Open the mod directory</b><br>
   Navigate to the following directory:

   ```
   /gamedata/mods/
   ```

   :::: info Note
   If the folder does not exist yet, create it. Out of the box it already contains the example `ExampleTexturePack` – it shows you how a mod folder is structured.
   ::::

4. <b>Upload the mod</b><br>
   Upload every mod as its own subfolder. The structure afterwards has to look like this:

   ```
   /gamedata/mods/<ModName>/modInfo.json
   ```

   :::: warning Warning
   Never upload the contents of a mod directly into `/gamedata/mods/` – the `modInfo.json` has to sit inside its own subfolder, otherwise the mod is not detected.
   ::::

## Enable the mod for your world

Uploaded mods are not active yet. They are enabled per world in the file `worldconfig.json`.

1. <b>Open the file</b><br>
   Open the following file via SFTP. `<worldname>` is the folder name of your world – it matches the **World Name** field in the dashboard:

   ```
   /gamedata/savegames/<worldname>/worldconfig.json
   ```

2. <b>Add the mod</b><br>
   Add one entry per mod to the `ModConfigEntries` section:

   ```json
   {
     "DisplayName": "My World",
     "WorldType": 2,
     "ModConfigEntries": [
       {
         "ModName": "ExampleTexturePack",
         "Enabled": true
       }
     ]
   }
   ```

   :::: info Note
   Only change the `ModConfigEntries` section and leave the other values of the file untouched. You can find the name of the mod in its `modInfo.json`. For Workshop mods the entries may contain additional fields such as `WorkshopID` – do not delete those.
   ::::

3. <b>Start the server</b><br>
   Save the file and start your server. On startup it loads the enabled mods.

4. <b>Check the result</b><br>
   Look at the console in the dashboard to see whether the mods were loaded. Errors during loading almost always point to a wrong folder structure or an incompatible mod.

:::: warning Warning
The file `modstate.json` mentioned in older guides no longer exists. Mods are enabled exclusively through the `worldconfig.json` of the respective world.
::::

## Do players have to install the mods?

:::: info Note
No – for mods that add content such as blocks, textures or recipes, the server transfers its files to the client automatically when connecting. Your fellow players will briefly see the server files being loaded when they join. Your server is then marked as "modded" in the server browser.
::::

:::: tip Tip
To disable a mod without deleting it: set the `"Enabled"` value of the corresponding entry in `worldconfig.json` to `false` and restart your server.
::::
