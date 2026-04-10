---
description: Add mods to a Project Zomboid server
---

# How to Add Mods to Your Project Zomboid Server

You can install Steam Workshop mods on your server to enhance the gameplay experience.

## Find Workshop ID and Mod ID

1. <b>Open Steam Workshop</b><br>
   Open the [Steam Workshop for Project Zomboid](https://steamcommunity.com/app/108600/workshop/) and find the desired mod.

2. <b>Copy Workshop ID</b><br>
   You can find the Workshop ID in the URL of the Workshop page. Copy the number after `?id=`.

   :::: tip Example
   In the URL `https://steamcommunity.com/sharedfiles/filedetails/?id=2392709985`, the Workshop ID is `2392709985`.
   ::::

3. <b>Find Mod ID</b><br>
   The Mod ID can be found on the Workshop page in the mod description (often listed as "Mod ID").

## Add mods to the server

1. <b>Stop the server</b><br>
   Stop your server via the dashboard.

2. <b>Connect via SFTP</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md).

3. <b>Open config</b><br>
   Open the file `ProjectZomboid.ini` at:

   ```
   /.cache/Server/ProjectZomboid.ini
   ```

4. <b>Add mods</b><br>
   Add the Mod IDs and Workshop IDs, separated by `;`:

   ```ini
   Mods=ModID1;ModID2;ModID3
   WorkshopItems=WorkshopID1;WorkshopID2;WorkshopID3
   ```

   :::: tip Example
   ```ini
   Mods=jiggasGreenfireMelee;tsarslib
   WorkshopItems=2392709985;2392987599
   ```
   ::::

5. <b>Start the server</b><br>
   Save the file and start your server. The mods will be downloaded automatically on startup.

:::: danger Important
All players must **subscribe to the same mods** via the Steam Workshop to be able to join the server.
::::
