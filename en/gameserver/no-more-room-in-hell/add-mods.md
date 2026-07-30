---
description: Add mods and plugins to a No More Room in Hell server
---

# How to Add Mods to Your No More Room in Hell Server

Plugins on a No More Room in Hell server run through **Metamod:Source** and **SourceMod**. You need **both**: Metamod:Source hooks into the Source Engine, and SourceMod builds on top of it to provide the plugin environment and the admin features. SourceMod officially supports No More Room in Hell and already ships the matching game data for the Linux server.

:::: danger Important
Your server runs on Linux. Always download the **Linux package** (`.tar.gz`) of Metamod:Source and SourceMod — the `.zip` package is the Windows build and will not work.
::::

:::: info Note
Your players do not have to install anything. Plugins are executed server-side only, no downloads are required on the player's side.
::::

## Install Metamod:Source

1. <b>Download Metamod:Source</b><br>
   Download the current stable version of [Metamod:Source](https://www.metamodsource.net/downloads.php?branch=stable) as a **Linux** package (`.tar.gz`).

2. <b>Stop the server</b><br>
   Stop your server via the dashboard.

3. <b>Connect via SFTP</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md).

4. <b>Upload the files</b><br>
   Extract the archive and upload the `addons` folder it contains to the following directory:

   ```
   /nmrih/
   ```

   Afterwards the folder `/nmrih/addons/metamod/` exists.

5. <b>Start the server</b><br>
   Start your server and check in the server console with `meta version` whether Metamod:Source was loaded.

:::: info Note
You do not have to create your own `metamod.vdf` — the matching file has been part of the package since Metamod:Source 1.10. The VDF generator in the Metamod documentation is only meant for Left 4 Dead 1, for third-party mods on Source SDK Base and for non-English listen servers; No More Room in Hell is not listed there.
::::

:::: warning Metamod is not loading?
If the server answers `meta version` with `Unknown command`, you can load Metamod:Source through the `gameinfo.txt` instead. Open the file `/nmrih/gameinfo.txt` and add the following as the first line inside the `SearchPaths` block:

```
GameBin	|gameinfo_path|addons/metamod/bin
```

Restart the server afterwards.
::::

## Install SourceMod

1. <b>Download SourceMod</b><br>
   Download the current stable version of [SourceMod](https://www.sourcemod.net/downloads.php) as a **Linux** package (`.tar.gz`).

   :::: info Note
   Game support for No More Room in Hell was last updated with **SourceMod 1.11**. Use at least that version, ideally the current stable branch.
   ::::

2. <b>Stop the server</b><br>
   Stop your server via the dashboard.

3. <b>Upload the files</b><br>
   Extract the archive and upload the `addons` and `cfg` folders it contains via [SFTP](../establish-sftp-connection.md) to the following directory:

   ```
   /nmrih/
   ```

   Existing folders are merged, not replaced. Afterwards the folder `/nmrih/addons/sourcemod/` exists.

4. <b>Start the server</b><br>
   Start your server and check in the server console with `sm version` whether SourceMod was loaded.

## Install plugins

1. <b>Download the plugin</b><br>
   Download the plugin you want. Ready-to-use plugins come as a `.smx` file.

2. <b>Stop the server</b><br>
   Stop your server via the dashboard.

3. <b>Upload the plugin</b><br>
   Upload the `.smx` file via [SFTP](../establish-sftp-connection.md) to the following directory:

   ```
   /nmrih/addons/sourcemod/plugins/
   ```

4. <b>Start the server</b><br>
   Start your server and check with `sm plugins list` whether the plugin was loaded.

## Add custom maps

1. <b>Download the map</b><br>
   Custom maps come as a `.bsp` file.

2. <b>Stop the server</b><br>
   Stop your server via the dashboard.

3. <b>Upload the map</b><br>
   Upload the `.bsp` file via [SFTP](../establish-sftp-connection.md) to the following directory:

   ```
   /nmrih/maps/
   ```

4. <b>Load the map</b><br>
   Start your server and switch to the new map in the server console with `changelevel <map name>`. The map name is entered without the `.bsp` extension.

:::: info Steam Workshop
No More Room in Hell has a [Steam Workshop](https://steamcommunity.com/app/224260/workshop/) with objective and survival maps, skins, sounds and mutators. How Workshop content is set up on the server side is not officially documented — so upload maps as `.bsp` files to the `/nmrih/maps/` folder instead.
::::

## Folder structure at a glance

```
/nmrih/addons/metamod/
/nmrih/addons/sourcemod/
/nmrih/addons/sourcemod/plugins/     <- .smx plugin files
/nmrih/addons/sourcemod/configs/     <- configurations, e.g. admin lists
/nmrih/cfg/                          <- server.cfg and other configurations
/nmrih/maps/                         <- .bsp map files
```

## Verify the installation

Enter the following commands in the server console:

| Command | Description |
|--------|-------------|
| `meta version` | Show the Metamod:Source version |
| `meta list` | Show the extensions loaded by Metamod |
| `sm version` | Show the SourceMod version |
| `sm plugins list` | Show the loaded SourceMod plugins |

:::: warning Warning
If the server answers one of these commands with `Unknown command`, that component was not loaded. In that case check whether you used the Linux package and whether the folders really are located under `/nmrih/addons/`.
::::

:::: warning Warning
Always stop your server before uploading files. After a game update Metamod:Source, SourceMod and individual plugins can become incompatible — check whether updates are available in that case.
::::

:::: tip Tip
To learn how to give yourself admin rights with SourceMod afterwards, see [Add Admin](add-admin.md).
::::
