---
description: Add mods and plugins to a Black Mesa server
---

# How to Add Mods to Your Black Mesa Server

Plugins on a Black Mesa server run through **Metamod:Source** and **SourceMod**. You need **both**: Metamod:Source hooks into the Source Engine, and SourceMod builds on top of it to provide the plugin environment and the admin features. Metamod:Source has supported Black Mesa officially since version 1.10.5, and SourceMod builds on top of it.

:::: danger Important
Your server runs on Linux. Always download the **Linux package** (`.tar.gz`) of Metamod:Source and SourceMod — the `.zip` package is the Windows build and will not work.
::::

:::: info Note
Your players do not have to install anything for plugins. SourceMod plugins are executed server-side only. Only custom maps and custom content require the matching files on the players' side as well.
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
   /bms/
   ```

   Afterwards the folder `/bms/addons/metamod/` exists.

5. <b>Start the server</b><br>
   Start your server and check in the server console with `meta version` whether Metamod:Source was loaded.

:::: info Note
You do not have to create your own `metamod.vdf` — the matching file is already part of the package. According to the Metamod documentation a self-made VDF file is only required for Left 4 Dead 1 and third-party mods.
::::

## Install SourceMod

1. <b>Download SourceMod</b><br>
   Download the current stable version of [SourceMod](https://www.sourcemod.net/downloads.php?branch=stable) (currently the 1.12 branch) as a **Linux** package (`.tar.gz`).

2. <b>Stop the server</b><br>
   Stop your server via the dashboard.

3. <b>Upload the files</b><br>
   Extract the archive and upload the `addons` and `cfg` folders it contains via [SFTP](../establish-sftp-connection.md) to the following directory:

   ```
   /bms/
   ```

   Existing folders are merged, not replaced. Afterwards the folder `/bms/addons/sourcemod/` exists.

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
   /bms/addons/sourcemod/plugins/
   ```

4. <b>Start the server</b><br>
   Start your server and check with `sm plugins list` whether the plugin was loaded.

## Folder structure at a glance

```
/bms/cfg/                                 <- server.cfg and other configurations
/bms/cfg/mapcycle.txt                     <- map rotation
/bms/maps/                                <- maps in BSP format
/bms/addonlist.txt                        <- list of active VPK packages
/bms/addons/                              <- VPK packages and extensions
/bms/addons/workshop/                     <- VPK packages from the Steam Workshop
/bms/addons/metamod/
/bms/addons/sourcemod/
/bms/addons/sourcemod/plugins/            <- .smx plugin files
/bms/addons/sourcemod/configs/            <- configurations, e.g. admin lists
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
If the server answers one of these commands with `Unknown command`, that component was not loaded. In that case check whether you used the Linux package and whether the folders really are located under `/bms/addons/`.
::::

## Custom maps and custom content

1. <b>Stop the server</b><br>
   Stop your server via the dashboard.

2. <b>Upload maps in BSP format</b><br>
   Upload maps that come as a `.bsp` file via [SFTP](../establish-sftp-connection.md) to the following directory:

   ```
   /bms/maps/
   ```

3. <b>Upload content in VPK format</b><br>
   Maps and custom content that come as a `.vpk` package belong in the addons folder instead. Packages from the Steam Workshop go into the `workshop` subfolder:

   ```
   /bms/addons/
   /bms/addons/workshop/
   ```

4. <b>Activate the VPK packages</b><br>
   A VPK package is only loaded once it is listed in the addon list. Open the following file — if it does not exist yet, create it:

   ```
   /bms/addonlist.txt
   ```

   Add the packages like this (`1` = active, `0` = inactive):

   ```
   "AddonList"
   {
      "workshop\432070352.vpk"     "1"
      "workshop\432074065.vpk"     "1"
   }
   ```

5. <b>Add the map to the rotation</b><br>
   Add the map to the following file — one map per line, each without the file extension:

   ```
   /bms/cfg/mapcycle.txt
   ```

6. <b>Start the server</b><br>
   Start your server. With `changelevel <map name>` in the server console you switch to a map directly.

:::: info Official deathmatch maps
Black Mesa ships with ten official multiplayer maps: `dm_bounce`, `dm_chopper`, `dm_crossfire`, `dm_gasworks`, `dm_lambdabunker`, `dm_power`, `dm_stack`, `dm_stalkyard`, `dm_subtransit` and `dm_undertow`.

You can see which maps actually exist on your server in the `/bms/maps/` folder. Deathmatch maps start with `dm_`, campaign maps with `bm_`.
::::

:::: warning Warning
The Black Mesa Steam Workshop is **client-side**. Subscribed content only ends up on your PC — for the server you have to upload the files manually to `/bms/addons/workshop/` or `/bms/maps/` and list them in `addonlist.txt`.
::::

:::: danger Important
Custom maps also have to be present on your players' machines, otherwise they cannot join. Either every player downloads the map themselves (for example through the Workshop), or you provide the files through your own download server (FastDL).
::::

## Co-op mode with SourceCoop

The multiplayer mode of Black Mesa is a pure deathmatch mode. If you want to play the campaign together, the community plugin [SourceCoop](https://github.com/ampreeT/SourceCoop) exists for exactly that.

1. <b>Meet the requirements</b><br>
   Metamod:Source and SourceMod have to be installed and working as described above.

2. <b>Download SourceCoop</b><br>
   Download the current version of the plugin from the GitHub project.

3. <b>Stop the server</b><br>
   Stop your server via the dashboard.

4. <b>Upload the files</b><br>
   Upload the contents of the archive (the folders `addons`, `materials` and `models`) via [SFTP](../establish-sftp-connection.md) to `/bms/`, following the folder structure it contains. The plugin files end up in `/bms/addons/sourcemod/plugins/`, the map configurations (`.edt` files) in `/bms/addons/sourcemod/data/srccoop/`.

5. <b>Set the starting map</b><br>
   Add the first map of the campaign you want to `/bms/cfg/mapcycle.txt`, for example `bm_c0a0a`.

6. <b>Start the server</b><br>
   Start your server and check with `sm plugins list` whether SourceCoop was loaded.

:::: info Note
SourceCoop is a community project and not an official part of Black Mesa. You can find the exact folder structure, the available settings and known limitations in the documentation of the project.
::::

:::: warning Warning
Always stop your server before uploading files. After a game update Metamod:Source, SourceMod and individual plugins can become incompatible — check whether updates are available in that case.
::::

:::: tip Tip
To learn how to give yourself admin rights with SourceMod afterwards, see [Add Admin](add-admin.md).
::::
