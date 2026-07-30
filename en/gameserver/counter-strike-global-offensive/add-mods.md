---
description: Add mods and plugins to a Counter-Strike Global Offensive server
---

# How to Add Mods to Your Counter-Strike Global Offensive Server

Plugins on a Counter-Strike Global Offensive server run through **Metamod:Source** and **SourceMod**. You need **both**: Metamod:Source hooks into the Source Engine, and SourceMod builds on top of it to provide the plugin environment and the admin features.

:::: danger Important
Your server runs on Linux. Always download the **Linux package** (`.tar.gz`) of Metamod:Source and SourceMod — the `.zip` package is the Windows build and will not work.
::::

:::: danger Important
Use the **1.12** branch for both. Metamod:Source version **2.0** is built for Source 2 and therefore only for Counter-Strike 2 — it does not work on a Counter-Strike Global Offensive server.
::::

:::: info Note
Your players do not have to install anything. Plugins are executed server-side only, no downloads are required on the player's side.
::::

## Install Metamod:Source

1. <b>Download Metamod:Source</b><br>
   Download the current stable version of [Metamod:Source](https://www.metamodsource.net/downloads.php?branch=stable) (1.12 branch) as a **Linux** package (`.tar.gz`).

2. <b>Stop the server</b><br>
   Stop your server via the dashboard.

3. <b>Connect via SFTP</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md).

4. <b>Upload the files</b><br>
   Extract the archive and upload the `addons` folder it contains to the following directory:

   ```
   /csgo/
   ```

   Afterwards the folder `/csgo/addons/metamod/` exists.

5. <b>Start the server</b><br>
   Start your server and check in the server console with `meta version` whether Metamod:Source was loaded.

:::: info Note
You do not have to create your own `metamod.vdf` — since Metamod:Source 1.10.0 the matching file is already part of the package. An entry in a `gameinfo.gi` is not needed either, that only applies to Counter-Strike 2.
::::

## Install SourceMod

1. <b>Download SourceMod</b><br>
   Download the current stable version of [SourceMod](https://www.sourcemod.net/downloads.php) (1.12 branch) as a **Linux** package (`.tar.gz`).

2. <b>Stop the server</b><br>
   Stop your server via the dashboard.

3. <b>Upload the files</b><br>
   Extract the archive and upload the `addons` and `cfg` folders it contains via [SFTP](../establish-sftp-connection.md) to the following directory:

   ```
   /csgo/
   ```

   Existing folders are merged, not replaced. Afterwards the folder `/csgo/addons/sourcemod/` exists.

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
   /csgo/addons/sourcemod/plugins/
   ```

4. <b>Start the server</b><br>
   Start your server and check with `sm plugins list` whether the plugin was loaded.

:::: warning Warning
Not every SourceMod plugin supports Counter-Strike Global Offensive. Before uploading, check whether the plugin is explicitly offered for CS:GO.
::::

## Add custom maps

1. <b>Download the map</b><br>
   Download the map you want. Maps come as a `.bsp` file, sometimes together with additional files such as sounds or models.

2. <b>Stop the server</b><br>
   Stop your server via the dashboard.

3. <b>Upload the map</b><br>
   Upload the `.bsp` file via [SFTP](../establish-sftp-connection.md) to the following directory:

   ```
   /csgo/maps/
   ```

4. <b>Start the server</b><br>
   Start your server. Use `changelevel <map name>` in the server console to switch to the new map.

:::: warning Warning
Custom maps only exist on the server. Your players need the map as well, otherwise they cannot join. Set up FastDL so it is downloaded automatically.
::::

## Set up FastDL

With FastDL your players automatically download custom maps and additional files from a web space when connecting, instead of having to install them manually.

1. <b>Put the files on your web space</b><br>
   Create a folder on your web space and mirror the folder structure of the server inside it, for example `maps/`, `sound/` and `models/`. Copy the required files into the matching folders.

2. <b>Compress the files</b><br>
   Compress the files on the web space in the `.bz2` format. `de_example.bsp` becomes `de_example.bsp.bz2`.

3. <b>Add the download address</b><br>
   Open the following file via [SFTP](../establish-sftp-connection.md) and add the address of your FastDL folder:

   ```
   /csgo/cfg/server.cfg
   ```

   ```
   sv_downloadurl "https://your-domain.com/fastdl/"
   ```

4. <b>Start the server</b><br>
   Save the file and restart your server.

:::: info Note
The files have to exist on the server **and** on the web space. The server loads the map itself from `/csgo/maps/`, your players fetch it through the FastDL address.
::::

## Folder structure at a glance

```
/csgo/addons/metamod/
/csgo/addons/sourcemod/
/csgo/addons/sourcemod/plugins/     <- .smx plugin files
/csgo/addons/sourcemod/configs/     <- configurations, e.g. admin lists
/csgo/maps/                         <- maps
/csgo/cfg/                          <- server.cfg and other configurations
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
If the server answers one of these commands with `Unknown command`, that component was not loaded. In that case check whether you used the Linux package of the 1.12 branch and whether the folders really are located under `/csgo/addons/`.
::::

:::: warning Warning
Always stop your server before uploading files.
::::

:::: tip Tip
To learn how to give yourself admin rights with SourceMod afterwards, see [Add Admin](add-admin.md).
::::
