---
title: How to Add Mods to Your Conan Exiles Server
description: Step-by-step instructions on how to add mods to your Conan Exiles server.
---

# How to Add Mods to Your Conan Exiles Server

:::: tip Tip
You can also upload the mod files using an FTP program. Here you will find instructions on how to [establish an SFTP connection](../establish-sftp-connection.md).
::::

:::: warning Warning
Make sure the mods are compatible with your current server version. Incompatible mods can prevent your server from starting.
::::

## Steps

1. <b>Subscribe to mods</b><br>
   Open the [Steam Workshop](https://steamcommunity.com/app/440900/workshop/) for Conan Exiles and subscribe to the mods you want to use on your server. Steam will automatically download the mods to your local PC.

2. <b>Locate mod files</b><br>
   The downloaded mod files are located on your PC in the folder:
   ```
   C:\Program Files (x86)\Steam\steamapps\workshop\content\440900
   ```
   Inside the numbered subfolders, you will find the `.pak` files – these are the ones you need.

3. <b>Create Mods folder</b><br>
   Open your server in the file browser and navigate to the `ConanSandbox` folder. Create a new folder named `Mods`.

4. <b>Upload mods</b><br>
   Copy all `.pak` files of your desired mods to the `ConanSandbox/Mods` folder.

5. <b>Create modlist.txt</b><br>
   Create a new file named `modlist.txt` in the `ConanSandbox/Mods` folder. Add each mod with an asterisk (*) at the beginning – each mod on a new line:
   ```
   *ModName1.pak
   *ModName2.pak
   *ModName3.pak
   ```

6. <b>Restart server</b><br>
   Save the file and restart your server. After restarting, the mods will be loaded automatically.

:::: info Info
All players who want to join your server must have the same mods installed.
::::
