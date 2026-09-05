---
slug: "add-mods"
language: "en"
title: "How to Add Mods to Your Counter-Strike Source Server"
description: "Add mods and plugins to a Counter-Strike Source server"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["counter-strike-source"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Add Mods"
sort: 2
related: ["gameserver/counter-strike-source/add-admin", "gameserver/counter-strike-source/create-backup", "gameserver/counter-strike-source/join-server", "gameserver/counter-strike-source/kick-ban-players"]
---

Plugins on a Counter-Strike Source server run through **Metamod:Source** and **SourceMod**. You need **both**: Metamod:Source hooks into the Source Engine, and SourceMod builds on top of it to provide the plugin environment and the admin features.

> [!IMPORTANT]
> Your server runs on Linux. Always download the **Linux package** (`.tar.gz`) of Metamod:Source and SourceMod – the `.zip` package is the Windows build and will not work.

> [!NOTE]
> Your players do not have to install anything. Plugins are executed server-side only, no downloads are required on the player's side.

## Install Metamod:Source

1. **Download Metamod:Source**\
   Download the current stable version of [Metamod:Source](https://www.metamodsource.net/downloads.php?branch=stable) (currently the 1.12 branch) as a **Linux** package (`.tar.gz`).

2. **Stop the server**\
   Stop your server via the dashboard.

3. **Connect via SFTP**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection).

4. **Upload the files**\
   Extract the archive and upload the `addons` folder it contains to the following directory:

   ```text
   /cstrike/
   ```

   Afterwards the folder `/cstrike/addons/metamod/` exists.

5. **Start the server**\
   Start your server and check in the server console with `meta version` whether Metamod:Source was loaded.

> [!NOTE]
> You do not have to create your own `metamod.vdf` – since Metamod:Source 1.10.0 the matching file is already part of the package.

## Install SourceMod

1. **Download SourceMod**\
   Download the current stable version of [SourceMod](https://www.sourcemod.net/downloads.php) (currently the 1.12 branch) as a **Linux** package (`.tar.gz`).

2. **Stop the server**\
   Stop your server via the dashboard.

3. **Upload the files**\
   Extract the archive and upload the `addons` and `cfg` folders it contains via [SFTP](/tutorials/gameserver/establish-sftp-connection) to the following directory:

   ```text
   /cstrike/
   ```

   Existing folders are merged, not replaced. Afterwards the folder `/cstrike/addons/sourcemod/` exists.

4. **Start the server**\
   Start your server and check in the server console with `sm version` whether SourceMod was loaded.

## Install plugins

1. **Download the plugin**\
   Download the plugin you want. Ready-to-use plugins come as a `.smx` file.

2. **Stop the server**\
   Stop your server via the dashboard.

3. **Upload the plugin**\
   Upload the `.smx` file via [SFTP](/tutorials/gameserver/establish-sftp-connection) to the following directory:

   ```text
   /cstrike/addons/sourcemod/plugins/
   ```

4. **Start the server**\
   Start your server and check with `sm plugins list` whether the plugin was loaded.

## Add custom maps

1. **Download the map**\
   Download the map you want. Maps come as a `.bsp` file, sometimes together with additional files such as sounds or models.

2. **Stop the server**\
   Stop your server via the dashboard.

3. **Upload the map**\
   Upload the `.bsp` file via [SFTP](/tutorials/gameserver/establish-sftp-connection) to the following directory:

   ```text
   /cstrike/maps/
   ```

4. **Start the server**\
   Start your server. Use `changelevel <map name>` in the server console to switch to the new map.

> [!WARNING]
> Custom maps only exist on the server. Your players need the map as well, otherwise they cannot join. Set up FastDL so it is downloaded automatically.

## Set up FastDL

With FastDL your players automatically download custom maps and additional files from a web space when connecting, instead of having to install them manually.

1. **Put the files on your web space**\
   Create a folder on your web space and mirror the folder structure of the server inside it, for example `maps/`, `sound/` and `models/`. Copy the required files into the matching folders.

2. **Compress the files**\
   Compress the files on the web space in the `.bz2` format. `de_example.bsp` becomes `de_example.bsp.bz2`.

3. **Add the download address**\
   Open the following file via [SFTP](/tutorials/gameserver/establish-sftp-connection) and add the address of your FastDL folder:

   ```text
   /cstrike/cfg/server.cfg
   ```

   ```text
   sv_downloadurl "https://your-domain.com/fastdl/"
   ```

4. **Start the server**\
   Save the file and restart your server.

> [!NOTE]
> The files have to exist on the server **and** on the web space. The server loads the map itself from `/cstrike/maps/`, your players fetch it through the FastDL address.

## Folder structure at a glance

```text
/cstrike/addons/metamod/
/cstrike/addons/sourcemod/
/cstrike/addons/sourcemod/plugins/     <- .smx plugin files
/cstrike/addons/sourcemod/configs/     <- configurations, e.g. admin lists
/cstrike/maps/                         <- maps
/cstrike/cfg/                          <- server.cfg and other configurations
```

## Verify the installation

Enter the following commands in the server console:

| Command | Description |
|--------|-------------|
| `meta version` | Show the Metamod:Source version |
| `meta list` | Show the extensions loaded by Metamod |
| `sm version` | Show the SourceMod version |
| `sm plugins list` | Show the loaded SourceMod plugins |

> [!WARNING]
> If the server answers one of these commands with `Unknown command`, that component was not loaded. In that case check whether you used the Linux package and whether the folders really are located under `/cstrike/addons/`.

> [!WARNING]
> Always stop your server before uploading files. After a game update Metamod:Source, SourceMod and individual plugins can become incompatible – check whether updates are available in that case.

> [!TIP]
> To learn how to give yourself admin rights with SourceMod afterwards, see [Add Admin](/tutorials/gameserver/counter-strike-source/add-admin).
