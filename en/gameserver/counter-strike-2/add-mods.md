---
description: Add mods to a Counter-Strike 2 server
---

# How to Add Mods to Your Counter-Strike 2 Server

To use plugins and mods on your CS2 server, you need **Metamod** and **CounterStrikeSharp** as a base framework.

## Install Metamod

1. <b>Download Metamod</b><br>
   Download the latest version of [Metamod:Source](https://www.sourcemm.net/downloads.php/?branch=master) for CS2.

2. <b>Stop the server</b><br>
   Stop your server via the dashboard.

3. <b>Connect via SFTP</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md).

4. <b>Upload files</b><br>
   Extract the archive and upload the `addons` folder to the following directory:

   ```
   /game/csgo/
   ```

5. <b>Edit gameinfo.gi</b><br>
   Open the file `/game/csgo/gameinfo.gi` and find the line:

   ```
   Game_LowViolence	csgo_lv
   ```

   Add a new line **below** it:

   ```
   Game	csgo/addons/metamod
   ```

6. <b>Start the server</b><br>
   Start your server. Verify with the console command `meta list` that Metamod has been loaded.

## Install CounterStrikeSharp

1. <b>Download CounterStrikeSharp</b><br>
   Download the latest **with-runtime** version from [CounterStrikeSharp](https://github.com/roflmuffin/CounterStrikeSharp/releases).

2. <b>Upload files</b><br>
   Extract the archive and upload the `addons` folder to the following directory:

   ```
   /game/csgo/
   ```

3. <b>Restart the server</b><br>
   Restart your server. Verify with `css_plugins list` that CounterStrikeSharp has been loaded.

## Install plugins

1. <b>Download plugin</b><br>
   Download the desired plugin.

2. <b>Upload plugin</b><br>
   Upload the plugin folder to the following directory:

   ```
   /game/csgo/addons/counterstrikesharp/plugins/
   ```

3. <b>Restart the server</b><br>
   Restart your server.

:::: warning Warning
Always stop your server before uploading files. After a CS2 update, Metamod, CounterStrikeSharp and plugins may be incompatible — check for updates beforehand.
::::
