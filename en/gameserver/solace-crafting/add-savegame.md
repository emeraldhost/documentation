---
description: Add a savegame to a Solace Crafting server
---

# How to Add a Savegame to Your Solace Crafting Server

In Solace Crafting a world is always a **complete folder** – the folder name is also the world name. Which world your server loads is defined in the configuration file `servercfg.dat` under `worldSaveToUse`.

:::: info Note
By default the dedicated server uses the world folder `MultiplayerWorld`. If no world with that name exists, the server automatically creates a new world with the default settings on startup.
::::

:::: tip Tip
Create a [backup](create-backup.md) of your current server save before uploading, in case you want to switch back later.
::::

## Prepare the world in the client

The world settings – difficulty, seed, biomes and the various rates – are only defined when **creating a world inside the game**. They cannot be changed on the server afterwards. If you want to use your own settings, take the detour via the client:

1. <b>Create the world</b><br>
   Launch Solace Crafting on your PC and create a new world with the settings you want.

2. <b>Close the game</b><br>
   Leave the world and close the game so that all files are written completely.

## Find your local savegame

Your worlds are stored on your PC under:

```
%USERPROFILE%\AppData\LocalLow\Big Kitty Games\Solace Crafting\Worlds
```

:::: tip Tip
Press `Windows key + R`, enter the path and confirm with Enter. Every subfolder in `Worlds` is one world – you need the **complete folder** including its contents.
::::

## Upload the savegame

1. <b>Stop the server</b><br>
   Stop your server via the dashboard. While the server is running it writes to the save files itself.

2. <b>Connect via SFTP</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md).

3. <b>Open the directory</b><br>
   Navigate to the following directory:

   ```
   /.config/unity3d/Big Kitty Games/Solace Crafting/Worlds/
   ```

   :::: info Note
   The folder `.config` starts with a dot and is therefore hidden. Enable the display of hidden files in your SFTP client if you cannot see it. If the directory does not exist yet, start your server once so the folder structure is created, then stop it again.
   ::::

4. <b>Upload the world folder</b><br>
   Upload the complete world folder including all its files into this directory.

5. <b>Enter the world in the configuration</b><br>
   Open the following file:

   ```
   /.config/unity3d/Big Kitty Games/Solace Crafting/servercfg.dat
   ```

   Set `worldSaveToUse` to the name of the world folder you uploaded:

   ```json
   "worldSaveToUse": "MyWorld",
   ```

   :::: tip Alternative
   Instead of changing the value you can simply rename your uploaded folder to `MultiplayerWorld`. The default configuration then stays untouched.
   ::::

6. <b>Start the server</b><br>
   Save all changes and start your server. Your uploaded world is now loaded on startup.

:::: danger Important
The folder name and the value of `worldSaveToUse` have to match exactly, including upper and lower case. If the name does not match, the server creates a new, empty world instead.
::::

:::: warning Warning
If a folder with the same name already exists in the target directory, the current save is overwritten. Download it beforehand if you want to keep it: [Download savegame](download-savegame.md).
::::
