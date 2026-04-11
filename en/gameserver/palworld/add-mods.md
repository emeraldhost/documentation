---
description: Add mods to a Palworld server
---

# How to Add Mods to Your Palworld Server

Palworld officially supports server mods through its built-in mod system. Mods are placed in the `Mods/Workshop/` directory and then enabled in the `PalModSettings.ini` file.

:::: warning Warning
Mod support in Palworld is considered experimental and can cause crashes or corrupted save data. Back up your [savegame](upload-savegame.md) before installing mods, and stop the server before making any changes.
::::

:::: info Note
Server mods only work on the Windows dedicated server. Only mods whose `Info.json` contains `"IsServer": true` can be used.
::::

## Finding mods

You can find mods at the following sources, among others:

- [Steam Workshop](https://steamcommunity.com/app/1623730/workshop/)
- [Nexus Mods](https://www.nexusmods.com/games/palworld/mods)
- [CurseForge](https://www.curseforge.com/palworld)

## Add mods

1. <b>Stop the server</b><br>
   Stop your server via the dashboard.

2. <b>Connect via SFTP</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md).

3. <b>Upload the mod</b><br>
   Create a subfolder for the mod inside `/Mods/Workshop/` and upload the mod files into it. The `Info.json` file must be located directly in this folder:

   ```
   /Mods/Workshop/<ModFolder>/Info.json
   /Mods/Workshop/<ModFolder>/...
   ```

4. <b>Enable the mod</b><br>
   Open the file `/Mods/PalModSettings.ini` and add the mod. Use the `PackageName` from the mod's `Info.json` – not the folder name:

   ```ini
   [PalModSettings]
   bGlobalEnableMod=true
   ActiveModList=YourModPackageName
   ```

   For multiple mods, add one additional `ActiveModList=` line per mod.

5. <b>Start the server</b><br>
   Start your server. The mods are deployed automatically on startup.

## Remove mods

To disable a mod, remove the corresponding `ActiveModList=` line from `PalModSettings.ini` and restart the server. To remove it completely, also delete the associated folder from `/Mods/Workshop/`.

:::: info Note
Many mods must also be installed client-side by every player in order for their content to be visible in-game. Check the description of each mod for details.
::::
