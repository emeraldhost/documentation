---
description: Install mods on a Barotrauma server
---

# How to Install Mods on Your Barotrauma Server

You can install Steam Workshop mods on your server to enhance the gameplay experience.

:::: warning Warning
Stop your server before installing mods. After a game update, mods may be incompatible and cause crashes.
::::

## Download mods

1. <b>Subscribe in Steam Workshop</b><br>
   Open the [Steam Workshop for Barotrauma](https://steamcommunity.com/app/602960/workshop/) and subscribe to the desired mods.

2. <b>Launch the game</b><br>
   Launch Barotrauma on your PC so the mods are downloaded.

3. <b>Find mod folders</b><br>
   The downloaded mods can be found on your PC at:

   ```
   %LocalAppData%/Daedalic Entertainment GmbH/Barotrauma/WorkshopMods/Installed
   ```

   Each mod is stored in a folder with a numeric ID.

## Upload mods to the server

1. <b>Stop the server</b><br>
   Stop your server via the dashboard.

2. <b>Connect via SFTP</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md).

3. <b>Upload mods</b><br>
   Upload the mod folders to the following directory:

   ```
   /LocalMods/
   ```

   :::: tip Tip
   Rename the folders from the numeric ID to the mod name so you can identify them more easily. You can find the name in the `filelist.xml` inside each mod folder.
   ::::

## Enable mods

1. <b>Open config_player.xml</b><br>
   Open the file `config_player.xml` in the root directory of your server.

2. <b>Add mod entries</b><br>
   Add an entry for each mod within the `<regularpackages>` section:

   ```xml
   <regularpackages>
     ...
     <package path="LocalMods/ModName/filelist.xml" enabled="true"/>
   </regularpackages>
   ```

   Replace `ModName` with the name of the mod folder. For multiple mods, simply add multiple entries:

   ```xml
   <regularpackages>
     ...
     <package path="LocalMods/HaloWeapons/filelist.xml" enabled="true"/>
     <package path="LocalMods/MoreMonsters/filelist.xml" enabled="true"/>
   </regularpackages>
   ```

3. <b>Start the server</b><br>
   Save the file and start your server.

:::: info Note
Some mods need to be installed on both the server and all players. Check the mod description to see if a client-side installation is required.
::::

:::: danger Important
Do **not** place mods in the `WorkshopMods` folder on the server. This folder is managed by Steam and should not be modified manually.
::::
