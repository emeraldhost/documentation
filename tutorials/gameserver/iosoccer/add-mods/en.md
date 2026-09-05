---
slug: "add-mods"
language: "en"
title: "How to Add Mods to Your IOSoccer Server"
description: "Add mods and plugins to an IOSoccer server"
tags: []
date: "2026-07-31"
visibility: "public"
cta: "gameserver"
product_keys: ["iosoccer"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Add Mods"
sort: 2
related: ["gameserver/iosoccer/add-admin", "gameserver/iosoccer/create-backup", "gameserver/iosoccer/join-server", "gameserver/iosoccer/kick-ban-players"]
---

Plugins on an IOSoccer server run through **Metamod:Source** and **SourceMod**. You need **both**: Metamod:Source hooks into the Source Engine, and SourceMod builds on top of it to provide the plugin environment and the admin features. SourceMod officially supports IOSoccer and already ships the matching game data for the Linux server.

> [!IMPORTANT]
> Your server runs on Linux. Always download the **Linux package** (`.tar.gz`) of Metamod:Source and SourceMod – the `.zip` package is the Windows build and will not work.

> [!NOTE]
> Your players do not have to install anything. Plugins are executed server-side only, no downloads are required on the player's side.

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
   /iosoccer/
   ```

   Afterwards the folder `/iosoccer/addons/metamod/` exists.

5. **Start the server**\
   Start your server and check in the server console with `meta version` whether Metamod:Source was loaded.

> [!WARNING]
> **Metamod is not loading?**
>
> If the server answers `meta version` with `Unknown command`, you can load Metamod:Source through the `gameinfo.txt` instead. Open the file `/iosoccer/gameinfo.txt` and add the following as the first line inside the `SearchPaths` block:
>
> ```text
> GameBin	|gameinfo_path|addons/metamod/bin
> ```
>
> Restart the server afterwards.

## Install SourceMod

1. **Download SourceMod**\
   Download the current stable version of [SourceMod](https://www.sourcemod.net/downloads.php) as a **Linux** package (`.tar.gz`).

   > [!NOTE]
   > SourceMod ships its own game data for IOSoccer. Always use the current stable branch – it contains the most recent game data for the game.

2. **Stop the server**\
   Stop your server via the dashboard.

3. **Upload the files**\
   Extract the archive and upload the `addons` and `cfg` folders it contains via [SFTP](/tutorials/gameserver/establish-sftp-connection) to the following directory:

   ```text
   /iosoccer/
   ```

   Existing folders are merged, not replaced. Afterwards the folder `/iosoccer/addons/sourcemod/` exists.

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
   /iosoccer/addons/sourcemod/plugins/
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
   /iosoccer/maps/
   ```

4. **Load the map**\
   Start your server and switch to the new map in the server console with `changelevel <map name>`. The map name is entered without the `.bsp` extension. The command `maps *` lists every installed map.

> [!NOTE]
> There is no Steam Workshop for IOSoccer. Custom maps are therefore always uploaded as `.bsp` files to the `/iosoccer/maps/` folder.

## Adjust the map rotation

The map rotation is a text file with one map name per line, each without the `.bsp` extension:

```text
/iosoccer/mapcycle.txt
```

Which file is used is defined in `/iosoccer/cfg/server.cfg`:

```text
mapcyclefile "mapcycle.txt"
```

> [!NOTE]
> The mapcycle file sits directly in the game folder `/iosoccer/` and **not** in the `cfg` subfolder. The server only looks for it there – a file under `/iosoccer/cfg/` is not read.

> [!TIP]
> Also add your custom maps to the mapcycle file in use so they show up in the regular rotation instead of being reachable only through `changelevel`.

> [!NOTE]
> Which map your server starts on is defined by the **Map** field in the **dashboard** – that value is passed on every start. The mapcycle file only determines which map comes next afterwards.

## Deliver custom maps to players

Players who do not own a custom map cannot join the server. With a download server (FastDL) they download the files automatically when connecting. Add the following lines to `/iosoccer/cfg/server.cfg`:

```text
sv_allowdownload 1
sv_downloadurl "https://your-domain.com/fastdl/"
```

> [!NOTE]
> The web storage behind `sv_downloadurl` is not part of the game server – you need your own web server or web space where the map files are stored in the same folder structure as on the server. Without FastDL you have to distribute your maps to your players yourself.

## Set kits and team names

You set up the two teams of a match through server settings – no plugins required:

| Setting | Meaning |
|---------|---------|
| `mp_teamkits <home> <away>` | Sets the kits of both teams. The first value applies to the home team, the second to the away team. Instead of a number you can also search for a team name, for example `mp_teamkits barcelona`. |
| `mp_teamnames` | Overrides the team names, for example `mp_teamnames "FCB:FC Barcelona,RMA:Real Madrid"` |

## Client-side mods

> [!WARNING]
> The well-known IOSoccer community mods – custom balls, goal nets, keeper gloves, boots, skyboxes or HUD and chat tweaks – are **client-side only**. Every player installs them into their own local Steam game directory, and they cannot be distributed through the server. On the server they have no effect.

## Folder structure at a glance

```text
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

> [!WARNING]
> If the server answers one of these commands with `Unknown command`, that component was not loaded. In that case check whether you used the Linux package and whether the folders really are located under `/iosoccer/addons/`.

> [!WARNING]
> Always stop your server before uploading files. After a game update Metamod:Source, SourceMod and individual plugins can become incompatible – check whether updates are available in that case.

> [!TIP]
> To learn how to give yourself admin rights with SourceMod afterwards, see [Add Admin](/tutorials/gameserver/iosoccer/add-admin).
