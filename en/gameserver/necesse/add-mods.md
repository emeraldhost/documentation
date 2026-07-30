---
description: Add mods to a Necesse server
---

# How to Add Mods to Your Necesse Server

In Necesse, mods are individual **`.jar` files**. Your server loads them from a dedicated folder that you fill via SFTP.

:::: warning Caution
Stop your server before adding, updating or removing mods. Also create a [backup](create-backup.md) first – mods can permanently change your world.
::::

:::: info No automatic Workshop download
Your server **cannot** download mods from the Steam Workshop by itself. You always upload the `.jar` file of each mod manually.
::::

:::: danger Mind the start parameter
Necesse only reads the `mods` folder if the startup command of your server contains the parameter `-mod ./mods`. After the restart, check in the console whether your mods are listed. If they are missing, we are happy to add the parameter for you free of charge – just open a support ticket.
::::

## Obtain the mod file

1. <b>Choose a mod</b><br>
   Look for the mod you want in the Necesse Steam Workshop or on the mod author's page.

2. <b>Get the `.jar` file</b><br>
   You need the plain `.jar` file of the mod. If the author does not offer a direct download, subscribe to the mod in the Steam Workshop and start Necesse once – the game then downloads the mod and places the `.jar` file in your local mods folder:

   ```
   %appdata%\Necesse\mods
   ```

3. <b>Check the version</b><br>
   Make sure the mod matches the game version of your server. Mods built for a different version can prevent the server from starting.

## Upload the mod

1. <b>Stop the server</b><br>
   Stop your server via the dashboard.

2. <b>Connect via SFTP</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md).

3. <b>Open the mods folder</b><br>
   Change into the following directory:

   ```
   /mods/
   ```

   :::: info Note
   If the folder does not exist yet, create it in the root directory of your server. The name must be exactly `mods` – your server runs on Linux and is case sensitive.
   ::::

4. <b>Upload the `.jar` file</b><br>
   Upload the `.jar` file directly into this folder. Do not create subfolders – the server only reads files that sit directly in the folder.

5. <b>Start the server</b><br>
   Start your server via the dashboard.

6. <b>Check the console</b><br>
   On startup your server lists the detected mods in the console. If your mod appears there, it was loaded.

:::: danger Important
All mods that are **not** marked as `clientside` must be installed on the server **and** on every player's client in the same version. If such a mod is missing on one side or present in a different version, joining fails. Every player subscribes to the mod in the Steam Workshop and enables it in the game's mod menu. Mods the author marked as `clientside` can be used on your own – the server does not need them.
::::

## Remove mods

1. <b>Stop the server</b><br>
   Stop your server via the dashboard.

2. <b>Delete the file</b><br>
   Delete the corresponding `.jar` file from the `/mods/` folder.

3. <b>Start the server</b><br>
   Start your server again.

:::: warning Caution
If you remove a mod that added blocks, items or enemies to the world, its content disappears from your world. When in doubt, restore a [backup](create-backup.md) instead of simply deleting the mod.
::::

:::: warning Mods are not loaded
If your mod does not show up in the console after the restart, first check the spelling and the location of the file: it has to sit directly in `/mods/` and end in `.jar`. If no mod is detected at all, the start parameter `-mod ./mods` is usually missing – contact us via a support ticket for that.
::::

:::: info Note
After a game update, mods can become incompatible and prevent the server from starting. In that case update your mods or temporarily remove them from the `/mods/` folder.
::::
