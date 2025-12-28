---
title: Adding Mods to Your Conan Exiles Server
description: Step-by-step instructions on how to add mods to a Conan Exiles server
---

# Adding Mods to a Conan Exiles Server

::: tip Tip
You can also upload the mod files using an FTP program. Here you will find instructions on how to [establish an SFTP connection](../establish-sftp-connection.md).
:::

::: warning Warning
Make sure the mods are compatible with your current server version. Incompatible mods can prevent your server from starting.
:::

## Steps

1. <strong>Subscribe to the desired mods in the [Steam Workshop](https://steamcommunity.com/app/440900/workshop/).</strong>
   - Open the Steam Workshop for Conan Exiles and subscribe to the mods you want to use on your server.
   - Steam will automatically download the mods to your local PC.

2. <strong>Locate the downloaded mod files on your PC.</strong>
   - The mod files are located in the folder:
     ```
     C:\Program Files (x86)\Steam\steamapps\workshop\content\440900
     ```
   - Inside the numbered subfolders, you will find the `.pak` files – these are the ones you need.

3. <strong>Open your server in the file browser and create the Mods folder.</strong>
   - Navigate to the `ConanSandbox` folder.
   - Create a new folder named `Mods`.

4. <strong>Upload the .pak files to the Mods folder.</strong>
   - Copy all `.pak` files of your desired mods to the `ConanSandbox/Mods` folder.

5. <strong>Create the modlist.txt file.</strong>
   - Create a new file named `modlist.txt` in the `ConanSandbox/Mods` folder.
   - Add each mod with an asterisk (*) at the beginning – each mod on a new line:
     ```
     *ModName1.pak
     *ModName2.pak
     *ModName3.pak
     ```

6. <strong>Save the file and restart your server.</strong>
   - After restarting, the mods will be loaded automatically.

::: info Info
All players who want to join your server must have the same mods installed.
:::
