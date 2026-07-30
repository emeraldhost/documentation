---
description: Add mods and plugins to a Left 4 Dead 2 server
---

# How to Add Mods to Your Left 4 Dead 2 Server

Plugins on a Left 4 Dead 2 server run through **Metamod:Source** and **SourceMod**. You need **both**: Metamod:Source hooks into the Source Engine, and SourceMod builds on top of it to provide the plugin environment and the admin features.

:::: danger Important
Your server runs on Linux. Always download the **Linux package** (`.tar.gz`) of Metamod:Source and SourceMod — the `.zip` package is the Windows build and will not work.
::::

:::: info Note
Your players do not have to install anything. Plugins are executed server-side only, no downloads are required on the player's side.
::::

## Install Metamod:Source

1. <b>Download Metamod:Source</b><br>
   Download the current stable version of [Metamod:Source](https://www.metamodsource.net/downloads.php?branch=stable) for Left 4 Dead 2 as a **Linux** package (`.tar.gz`).

2. <b>Stop the server</b><br>
   Stop your server via the dashboard.

3. <b>Connect via SFTP</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md).

4. <b>Upload the files</b><br>
   Extract the archive and upload the `addons` folder it contains to the following directory:

   ```
   /left4dead2/
   ```

   Afterwards the folder `/left4dead2/addons/metamod/` exists.

5. <b>Start the server</b><br>
   Start your server and check in the server console with `meta version` whether Metamod:Source was loaded.

:::: info Note
You do not have to create your own `metamod.vdf` for Left 4 Dead 2 — the matching file is already part of the package. According to the Metamod documentation a self-made VDF file is only required for Left 4 Dead 1 and third-party mods.
::::

## Install SourceMod

1. <b>Download SourceMod</b><br>
   Download the current stable version of [SourceMod](https://www.sourcemod.net/downloads.php) (currently the 1.12 branch) as a **Linux** package (`.tar.gz`).

2. <b>Stop the server</b><br>
   Stop your server via the dashboard.

3. <b>Upload the files</b><br>
   Extract the archive and upload the `addons` and `cfg` folders it contains via [SFTP](../establish-sftp-connection.md) to the following directory:

   ```
   /left4dead2/
   ```

   Existing folders are merged, not replaced. Afterwards the folder `/left4dead2/addons/sourcemod/` exists.

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
   /left4dead2/addons/sourcemod/plugins/
   ```

4. <b>Start the server</b><br>
   Start your server and check with `sm plugins list` whether the plugin was loaded.

## Folder structure at a glance

```
/left4dead2/addons/metamod/
/left4dead2/addons/sourcemod/
/left4dead2/addons/sourcemod/plugins/     <- .smx plugin files
/left4dead2/addons/sourcemod/configs/     <- configurations, e.g. admin lists
/left4dead2/cfg/                          <- server.cfg and other configurations
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
If the server answers one of these commands with `Unknown command`, that component was not loaded. In that case check whether you used the Linux package and whether the folders really are located under `/left4dead2/addons/`.
::::

:::: warning Warning
Always stop your server before uploading files. After a game update Metamod:Source, SourceMod and individual plugins can become incompatible — check whether updates are available in that case.
::::

:::: tip Tip
To learn how to give yourself admin rights with SourceMod afterwards, see [Add Admin](add-admin.md).
::::
