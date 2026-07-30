---
description: Add mods to a PixARK server
---

# How to Add Mods to Your PixARK Server

There is a Steam Workshop for PixARK. Unlike ARK Survival Evolved, however, the server does **not** download the mods itself – there is no field where you enter mod IDs. You have to upload the files to the server via SFTP yourself.

:::: danger Important
Mods are a special case in PixARK. The Workshop has barely been maintained for years, many entries are explicitly marked as "Legacy" or "Discontinued", and there is no official documentation for server usage. Whether a specific mod runs on your server cannot be predicted. Therefore **always** create a [backup](create-backup.md) beforehand and test one mod at a time.
::::

## Requirement

You can only obtain the mod files through a PixARK installation on your own PC: Steam downloads the mod as an archive, and it is only unpacked when you start the game for the first time. Only afterwards do the files exist in a form you can upload to the server.

## Obtain the mod files

1. <b>Subscribe to the mod</b><br>
   Open the [Steam Workshop for PixARK](https://steamcommunity.com/app/593600/workshop/), find the desired mod and subscribe to it.

2. <b>Start PixARK</b><br>
   Launch PixARK once on your PC and wait until you reach the main menu. Only then does the game unpack the mod files.

3. <b>Open the mods folder</b><br>
   Open the following directory on your PC:

   ```
   <Steam>\steamapps\common\PixARK\ShooterGame\Content\Mods
   ```

4. <b>Locate the files</b><br>
   Every mod consists of **two** items:

   | Item | Description |
   |------|-------------|
   | Folder named after the mod ID | A folder whose name is the numeric mod ID |
   | `<ModID>.mod` | A file of the same name right next to it |

   :::: warning Warning
   You need both. If you only upload the folder and forget the `.mod` file, the server will not recognise the mod.
   ::::

## Upload the mod to the server

1. <b>Stop the server</b><br>
   Stop your server via the dashboard.

2. <b>Connect via SFTP</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md).

3. <b>Open the directory</b><br>
   Navigate to the following directory. If the `Mods` folder does not exist yet, create it:

   ```
   /ShooterGame/Content/Mods/
   ```

4. <b>Upload the files</b><br>
   Upload the mod folder **and** the matching `.mod` file into this directory.

5. <b>Start the server</b><br>
   Start your server. If it does not start up cleanly or crashes, remove the mod again and restore your backup.

## Update mods

:::: info Note
The server does not update mods on its own. When a new version appears in the Workshop, you have to download it on your PC, start the game once and upload the files to the server again. If the server and client versions of a mod do not match, players run into errors when joining.
::::

:::: tip Tip
So that all your players have the same mod files, they should subscribe to the mod in the Steam Workshop as well and start the game once before joining your server.
::::
