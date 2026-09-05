---
slug: "add-mods"
language: "en"
title: "How to Add Mods to Your Fistful of Frags Server"
description: "Add mods and plugins to a Fistful of Frags server"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["fistful-of-frags"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Add Mods"
sort: 2
related: ["gameserver/fistful-of-frags/add-admin", "gameserver/fistful-of-frags/create-backup", "gameserver/fistful-of-frags/join-server", "gameserver/fistful-of-frags/kick-ban-players"]
---

Plugins on a Fistful of Frags server run through **Metamod:Source** and **SourceMod**. You need **both**: Metamod:Source hooks into the Source Engine, and SourceMod builds on top of it to provide the plugin environment and the admin features. SourceMod officially supports Fistful of Frags and already ships the matching game data.

> [!IMPORTANT]
> Your server runs on Linux. Always download the **Linux package** (`.tar.gz`) of Metamod:Source and SourceMod – the `.zip` package is the Windows build and will not work.

> [!NOTE]
> Your players do not have to install anything for plugins. Plugins are executed server-side only. Only custom maps have to be available on the player's side as well.

## Install Metamod:Source

1. **Download Metamod:Source**\
   Download the current stable version of [Metamod:Source](https://www.metamodsource.net/downloads.php?branch=stable) as a **Linux** package (`.tar.gz`).

2. **Stop the server**\
   Stop your server via the dashboard.

3. **Connect via SFTP**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection).

4. **Upload the files**\
   Extract the archive and upload the `addons` folder it contains to the following directory:

   ```text
   /fof/
   ```

   Afterwards the folder `/fof/addons/metamod/` exists.

5. **Start the server**\
   Start your server and check in the server console with `meta version` whether Metamod:Source was loaded.

> [!NOTE]
> You do not have to create your own `metamod.vdf` – the matching file is included in the package and ends up at `/fof/addons/metamod.vdf` when you upload it. If the server answers `meta version` with `Unknown command`, first check whether that file and the folder `/fof/addons/metamod/` really exist and whether you used the Linux package.

## Install SourceMod

1. **Download SourceMod**\
   Download the current stable version of [SourceMod](https://www.sourcemod.net/downloads.php) as a **Linux** package (`.tar.gz`).

   > [!NOTE]
   > SourceMod ships its own game data for Fistful of Frags. Always use the current stable branch – it contains the most recent game data for the game.

2. **Stop the server**\
   Stop your server via the dashboard.

3. **Upload the files**\
   Extract the archive and upload the `addons` and `cfg` folders it contains via [SFTP](/tutorials/gameserver/establish-sftp-connection) to the following directory:

   ```text
   /fof/
   ```

   Existing folders are merged, not replaced. Afterwards the folder `/fof/addons/sourcemod/` exists.

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
   /fof/addons/sourcemod/plugins/
   ```

4. **Start the server**\
   Start your server and check with `sm plugins list` whether the plugin was loaded.

## Add custom maps

1. **Download the map**\
   Custom maps come as a `.bsp` file.

2. **Stop the server**\
   Stop your server via the dashboard.

3. **Upload the map**\
   Upload the `.bsp` file via [SFTP](/tutorials/gameserver/establish-sftp-connection) to the following directory:

   ```text
   /fof/maps/
   ```

4. **Load the map**\
   Start your server and switch to the new map in the server console with `changelevel <map name>`. The map name is entered without the `.bsp` extension.

> [!NOTE]
> **Steam Workshop**
>
> The [Steam Workshop for Fistful of Frags](https://steamcommunity.com/app/265630/workshop/) contains weapon and character skins, models, sounds, HUD tweaks and maps. Skins and sounds are **purely client-side** and are subscribed to by each player individually – they do nothing on the server. There is no server-side integration for Workshop maps: upload the map as a `.bsp` file to the `/fof/maps/` folder.

## Adjust the map rotation

The mapcycle files are **not** located in the `cfg` folder but directly in the game folder:

```text
/fof/mapcycle.txt         <- default rotation
/fof/mapcycle_12.txt      <- rotation for small servers
/fof/mapcycle_32.txt      <- rotation for large servers
/fof/mapcycle_tp.txt      <- Teamplay
```

Each file contains one map name per line, without the `.bsp` extension. Which file is used is defined in `/fof/cfg/server.cfg`:

```text
mapcyclefile "mapcycle.txt"
```

> [!NOTE]
> On top of that the settings `fof_sv_mapcycle_dm`, `fof_sv_mapcycle_dm_12`, `fof_sv_mapcycle_dm_32` and `fof_sv_mapcycle_tp` define which of the four files belongs to which slot count or mode. You save a custom rotation as an additional `.txt` file in the same folder and enter its file name at `mapcyclefile`.

> [!TIP]
> Also add your custom maps to the mapcycle file in use so they show up in the regular rotation instead of only being reachable via `changelevel`.

## Deliver custom maps to your players

Players who do not own a custom map cannot join the server. With a download server (FastDL) they download the files automatically when connecting. Add the following lines to `/fof/cfg/server.cfg`:

```text
sv_allowdownload 1
sv_downloadurl "https://your-domain.com/fastdl/"
```

> [!NOTE]
> The web storage behind `sv_downloadurl` is not part of the game server – you need your own web server or web space where the map files are stored in the same folder structure as on the server. Without FastDL you have to distribute your maps to your players yourself.

## Folder structure at a glance

```text
/fof/addons/metamod/
/fof/addons/sourcemod/
/fof/addons/sourcemod/plugins/     <- .smx plugin files
/fof/addons/sourcemod/configs/     <- configurations, e.g. admin lists
/fof/cfg/                          <- server.cfg and other configurations
/fof/maps/                         <- .bsp map files
/fof/mapcycle.txt                  <- map rotation
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
> If the server answers one of these commands with `Unknown command`, that component was not loaded. In that case check whether you used the Linux package and whether the folders really are located under `/fof/addons/`.

> [!WARNING]
> Always stop your server before uploading files. After a game update Metamod:Source, SourceMod and individual plugins can become incompatible – check whether updates are available in that case.

> [!TIP]
> To learn how to give yourself admin rights with SourceMod afterwards, see [Add Admin](/tutorials/gameserver/fistful-of-frags/add-admin).
