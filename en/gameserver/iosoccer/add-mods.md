---
description: Add mods and plugins to an IOSoccer server
---

# How to Add Mods to Your IOSoccer Server

Plugins on an IOSoccer server run through **Metamod:Source** and **SourceMod**. You need **both**: Metamod:Source hooks into the Source Engine, and SourceMod builds on top of it to provide the plugin environment and the admin features. SourceMod officially supports IOSoccer and already ships the matching game data for the Linux server.

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
   /iosoccer/
   ```

   Afterwards the folder `/iosoccer/addons/metamod/` exists.

5. <b>Start the server</b><br>
   Start your server and check in the server console with `meta version` whether Metamod:Source was loaded.

:::: warning Metamod is not loading?
If the server answers `meta version` with `Unknown command`, you can load Metamod:Source through the `gameinfo.txt` instead. Open the file `/iosoccer/gameinfo.txt` and add the following as the first line inside the `SearchPaths` block:

```
GameBin	|gameinfo_path|addons/metamod/bin
```

Restart the server afterwards.
::::

## Install SourceMod

1. <b>Download SourceMod</b><br>
   Download the current stable version of [SourceMod](https://www.sourcemod.net/downloads.php) as a **Linux** package (`.tar.gz`).

   :::: info Note
   SourceMod ships its own game data for IOSoccer. Always use the current stable branch — it contains the most recent game data for the game.
   ::::

2. <b>Stop the server</b><br>
   Stop your server via the dashboard.

3. <b>Upload the files</b><br>
   Extract the archive and upload the `addons` and `cfg` folders it contains via [SFTP](../establish-sftp-connection.md) to the following directory:

   ```
   /iosoccer/
   ```

   Existing folders are merged, not replaced. Afterwards the folder `/iosoccer/addons/sourcemod/` exists.

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
   /iosoccer/addons/sourcemod/plugins/
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
   /iosoccer/maps/
   ```

4. <b>Load the map</b><br>
   Start your server and switch to the new map in the server console with `changelevel <map name>`. The map name is entered without the `.bsp` extension. The command `maps *` lists every installed map.

:::: info Note
There is no Steam Workshop for IOSoccer. Custom maps are therefore always uploaded as `.bsp` files to the `/iosoccer/maps/` folder.
::::

## Adjust the map rotation

The map rotation is a text file with one map name per line, each without the `.bsp` extension:

```
/iosoccer/mapcycle.txt
```

Which file is used is defined in `/iosoccer/cfg/server.cfg`:

```
mapcyclefile "mapcycle.txt"
```

:::: info Note
The mapcycle file sits directly in the game folder `/iosoccer/` and **not** in the `cfg` subfolder. The server only looks for it there — a file under `/iosoccer/cfg/` is not read.
::::

:::: tip Tip
Also add your custom maps to the mapcycle file in use so they show up in the regular rotation instead of being reachable only through `changelevel`.
::::

:::: info Note
Which map your server starts on is defined by the **Map** field in the **dashboard** — that value is passed on every start. The mapcycle file only determines which map comes next afterwards.
::::

## Deliver custom maps to players

Players who do not own a custom map cannot join the server. With a download server (FastDL) they download the files automatically when connecting. Add the following lines to `/iosoccer/cfg/server.cfg`:

```
sv_allowdownload 1
sv_downloadurl "https://your-domain.com/fastdl/"
```

:::: info Note
The web storage behind `sv_downloadurl` is not part of the game server — you need your own web server or web space where the map files are stored in the same folder structure as on the server. Without FastDL you have to distribute your maps to your players yourself.
::::

## Set kits and team names

You set up the two teams of a match through server settings — no plugins required:

| Setting | Meaning |
|---------|---------|
| `mp_teamkits <home> <away>` | Sets the kits of both teams. The first value applies to the home team, the second to the away team. Instead of a number you can also search for a team name, for example `mp_teamkits barcelona`. |
| `mp_teamnames` | Overrides the team names, for example `mp_teamnames "FCB:FC Barcelona,RMA:Real Madrid"` |

## Client-side mods

:::: warning Warning
The well-known IOSoccer community mods — custom balls, goal nets, keeper gloves, boots, skyboxes or HUD and chat tweaks — are **client-side only**. Every player installs them into their own local Steam game directory, and they cannot be distributed through the server. On the server they have no effect.
::::

## Folder structure at a glance

```
/iosoccer/addons/metamod/
/iosoccer/addons/sourcemod/
/iosoccer/addons/sourcemod/plugins/     <- .smx plugin files
/iosoccer/addons/sourcemod/configs/     <- configurations, e.g. admin lists
/iosoccer/cfg/                          <- server.cfg and autoexec.cfg
/iosoccer/maps/                         <- .bsp map files
/iosoccer/mapcycle.txt                  <- map rotation
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
If the server answers one of these commands with `Unknown command`, that component was not loaded. In that case check whether you used the Linux package and whether the folders really are located under `/iosoccer/addons/`.
::::

:::: warning Warning
Always stop your server before uploading files. After a game update Metamod:Source, SourceMod and individual plugins can become incompatible — check whether updates are available in that case.
::::

:::: tip Tip
To learn how to give yourself admin rights with SourceMod afterwards, see [Add Admin](add-admin.md).
::::
