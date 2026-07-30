---
description: Add gamemodes, filterscripts, plugins and custom models to a GTA San Andreas server
---

# How to Add Mods to Your GTA San Andreas Server

A SA-MP or open.mp server has no classic mod system. It is extended in four ways:

| Way | What it is | Target folder |
|-----|------------|---------------|
| **Gamemode** | The main script that defines what happens on the server (roleplay, racing, freeroam …) | `/gamemodes/` |
| **Filterscript** | A small additional script that runs alongside the gamemode | `/filterscripts/` |
| **Plugin** | A native extension of the server, e.g. for MySQL or the streamer | `/plugins/` |
| **Custom models / artwork** | Your own 3D models and textures as `.dff` and `.txd` files | `/models/` |

:::: info Note
There are two server variants with different configuration files: **SA-MP** uses `server.cfg`, **open.mp** uses `config.json`. open.mp still reads `server.cfg`, but recommends `config.json` because it offers more settings. You can see which file you have via [SFTP](../establish-sftp-connection.md) in the main directory of your server.
::::

:::: warning Caution
Stop your server via the dashboard before uploading files or changing the configuration.
::::

## Install a gamemode

1. <b>Stop the server</b><br>
   Stop your server via the dashboard.

2. <b>Connect via SFTP</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md).

3. <b>Upload the gamemode</b><br>
   Upload the `.amx` file of your gamemode to the following directory:

   ```
   /gamemodes/
   ```

   :::: info Note
   Only the compiled `.amx` file belongs on the server. The matching `.pwn` file is just the source code and is not executed by the server.
   ::::

4. <b>Register the gamemode</b><br>
   Enter the file name **without** the `.amx` extension in your configuration.

   **open.mp — `config.json`:**

   ```json
   {
       "pawn": {
           "main_scripts": ["my-gamemode 1"]
       }
   }
   ```

   **SA-MP — `server.cfg`:**

   ```
   gamemode0 my-gamemode 1
   ```

   The number behind it defines how many rounds the gamemode runs before the server switches to the next entry.

5. <b>Start the server</b><br>
   Save the change and start your server.

:::: tip Tip
If you want to rotate through several gamemodes, add them as further entries in `main_scripts`, or use consecutive `gamemode0`, `gamemode1`, `gamemode2` and so on in `server.cfg`.
::::

## Install a filterscript

Filterscripts run in addition to the gamemode and can be combined freely.

1. <b>Upload the filterscript</b><br>
   Upload the `.amx` file via [SFTP](../establish-sftp-connection.md) to the following directory:

   ```
   /filterscripts/
   ```

2. <b>Register the filterscript</b><br>

   **open.mp — `config.json`:**

   ```json
   {
       "pawn": {
           "side_scripts": ["filterscripts/Race_System"]
       }
   }
   ```

   **SA-MP — `server.cfg`:**

   ```
   filterscripts Race_System Anticheat Adminspec
   ```

   In `server.cfg` you separate several filterscripts with spaces.

3. <b>Start the server</b><br>
   Save the change and start your server.

## Install a plugin

:::: danger Important
Your server runs on **Linux** and therefore requires plugins as `.so` files. Windows plugins in `.dll` format do **not** work. Many plugins are offered for both systems — make sure you download the Linux version.
::::

1. <b>Upload the plugin</b><br>
   Upload the `.so` file via [SFTP](../establish-sftp-connection.md) to the following directory:

   ```
   /plugins/
   ```

2. <b>Place the include</b><br>
   If the plugin ships an include file (e.g. `streamer.inc` or `sscanf2.inc`), it belongs in the following directory so you can compile your gamemode against it:

   ```
   /qawno/include/
   ```

3. <b>Register the plugin</b><br>

   **open.mp — `config.json`:**

   ```json
   {
       "pawn": {
           "legacy_plugins": ["mysql", "streamer"]
       }
   }
   ```

   **SA-MP — `server.cfg`:**

   ```
   plugins mysql.so streamer.so
   ```

4. <b>Start the server</b><br>
   Save the change and start your server.

:::: info Note
open.mp additionally ships its own components, which live in the `/components/` folder. These are not the same as classic SA-MP plugins and are not listed in `legacy_plugins`.
::::

## Add custom models

Custom models let you bring your own vehicles, objects or skins onto the server. Players download these files automatically when they connect — they do **not** have to install anything.

1. <b>Upload the models</b><br>
   Upload your `.dff` and `.txd` files via [SFTP](../establish-sftp-connection.md) to the following directory:

   ```
   /models/
   ```

2. <b>Enable artwork</b><br>

   **open.mp — `config.json`:**

   ```json
   {
       "artwork": {
           "enable": true,
           "models_path": "models"
       }
   }
   ```

   **SA-MP — `server.cfg`:**

   ```
   useartwork 1
   artpath models
   ```

3. <b>Register the models in the script</b><br>
   The files alone are not enough. Your gamemode has to register the models in `OnGameModeInit` using `AddSimpleModel` or `AddCharModel`. Only then are they delivered to the players.

4. <b>Start the server</b><br>
   Save the changes and start your server.

:::: warning Caution
Custom models were introduced with SA-MP 0.3.DL R1 and do not work in earlier versions. In addition, `useartwork` or `artwork.enable` has to be turned on, otherwise the models are ignored.
::::

:::: info Note
On the players' side the downloaded models end up in the cache under `Documents\GTA San Andreas User Files\SAMP\cache`, in a subfolder per server IP and port. If models are displayed incorrectly after an update, clearing that folder usually helps.
::::

:::: tip Tip
If the models do not reach your players, open.mp can serve them from an external web server instead. Enter its HTTP address in `artwork.cdn` — the files are then downloaded from there instead of from the server itself.
::::

## Where do scripts store their data?

Everything a gamemode stores permanently — accounts, houses, vehicles, statistics — is created by the script itself. The only folder Pawn scripts are allowed to write to is:

```
/scriptfiles/
```

:::: info Note
Scripts cannot access files outside of `scriptfiles`. Many larger gamemodes store their data in a MySQL or SQLite database instead. How to back that data up is described under [Create Backup](create-backup.md).
::::

:::: danger Important
Single-player mods for GTA San Andreas (`.asi` plugins, CLEO scripts, replaced models) are **not** server mods. They do not belong on the server and even prevent the multiplayer client from starting on your players' PCs.
::::
