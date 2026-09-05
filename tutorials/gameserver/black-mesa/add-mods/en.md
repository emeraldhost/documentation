---
slug: "add-mods"
language: "en"
title: "How to Add Mods to Your Black Mesa Server"
description: "Add mods and plugins to a Black Mesa server"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["black-mesa"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Add Mods"
sort: 2
related: ["gameserver/black-mesa/add-admin", "gameserver/black-mesa/create-backup", "gameserver/black-mesa/join-server", "gameserver/black-mesa/kick-ban-players"]
---

Plugins on a Black Mesa server run through **Metamod:Source** and **SourceMod**. You need **both**: Metamod:Source hooks into the Source Engine, and SourceMod builds on top of it to provide the plugin environment and the admin features. Metamod:Source has supported Black Mesa officially since version 1.10.5, and SourceMod builds on top of it.

> [!IMPORTANT]
> Your server runs on Linux. Always download the **Linux package** (`.tar.gz`) of Metamod:Source and SourceMod – the `.zip` package is the Windows build and will not work.

> [!NOTE]
> Your players do not have to install anything for plugins. SourceMod plugins are executed server-side only. Only custom maps and custom content require the matching files on the players' side as well.

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
   /bms/
   ```

   Afterwards the folder `/bms/addons/metamod/` exists.

5. **Start the server**\
   Start your server and check in the server console with `meta version` whether Metamod:Source was loaded.

> [!NOTE]
> You do not have to create your own `metamod.vdf` – the matching file is already part of the package. According to the Metamod documentation a self-made VDF file is only required for Left 4 Dead 1 and third-party mods.

## Install SourceMod

1. **Download SourceMod**\
   Download the current stable version of [SourceMod](https://www.sourcemod.net/downloads.php?branch=stable) (currently the 1.12 branch) as a **Linux** package (`.tar.gz`).

2. **Stop the server**\
   Stop your server via the dashboard.

3. **Upload the files**\
   Extract the archive and upload the `addons` and `cfg` folders it contains via [SFTP](/tutorials/gameserver/establish-sftp-connection) to the following directory:

   ```text
   /bms/
   ```

   Existing folders are merged, not replaced. Afterwards the folder `/bms/addons/sourcemod/` exists.

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
   /bms/addons/sourcemod/plugins/
   ```

4. **Start the server**\
   Start your server and check with `sm plugins list` whether the plugin was loaded.

## Folder structure at a glance

```text
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

> [!WARNING]
> If the server answers one of these commands with `Unknown command`, that component was not loaded. In that case check whether you used the Linux package and whether the folders really are located under `/bms/addons/`.

## Custom maps and custom content

1. **Stop the server**\
   Stop your server via the dashboard.

2. **Upload maps in BSP format**\
   Upload maps that come as a `.bsp` file via [SFTP](/tutorials/gameserver/establish-sftp-connection) to the following directory:

   ```text
   /bms/maps/
   ```

3. **Upload content in VPK format**\
   Maps and custom content that come as a `.vpk` package belong in the addons folder instead. Packages from the Steam Workshop go into the `workshop` subfolder:

   ```text
   /bms/addons/
   /bms/addons/workshop/
   ```

4. **Activate the VPK packages**\
   A VPK package is only loaded once it is listed in the addon list. Open the following file – if it does not exist yet, create it:

   ```text
   /bms/addonlist.txt
   ```

   Add the packages like this (`1` = active, `0` = inactive):

   ```text
   "AddonList"
   {
      "workshop\432070352.vpk"     "1"
      "workshop\432074065.vpk"     "1"
   }
   ```

5. **Add the map to the rotation**\
   Add the map to the following file – one map per line, each without the file extension:

   ```text
   /bms/cfg/mapcycle.txt
   ```

6. **Start the server**\
   Start your server. With `changelevel <map name>` in the server console you switch to a map directly.

> [!NOTE]
> **Official deathmatch maps**
>
> Black Mesa ships with ten official multiplayer maps: `dm_bounce`, `dm_chopper`, `dm_crossfire`, `dm_gasworks`, `dm_lambdabunker`, `dm_power`, `dm_stack`, `dm_stalkyard`, `dm_subtransit` and `dm_undertow`.
>
> You can see which maps actually exist on your server in the `/bms/maps/` folder. Deathmatch maps start with `dm_`, campaign maps with `bm_`.

> [!WARNING]
> The Black Mesa Steam Workshop is **client-side**. Subscribed content only ends up on your PC – for the server you have to upload the files manually to `/bms/addons/workshop/` or `/bms/maps/` and list them in `addonlist.txt`.

> [!IMPORTANT]
> Custom maps also have to be present on your players' machines, otherwise they cannot join. Either every player downloads the map themselves (for example through the Workshop), or you provide the files through your own download server (FastDL).

## Co-op mode with SourceCoop

The multiplayer mode of Black Mesa is a pure deathmatch mode. If you want to play the campaign together, the community plugin [SourceCoop](https://github.com/ampreeT/SourceCoop) exists for exactly that.

1. **Meet the requirements**\
   Metamod:Source and SourceMod have to be installed and working as described above.

2. **Download SourceCoop**\
   Download the current version of the plugin from the GitHub project.

3. **Stop the server**\
   Stop your server via the dashboard.

4. **Upload the files**\
   Upload the contents of the archive (the folders `addons`, `materials` and `models`) via [SFTP](/tutorials/gameserver/establish-sftp-connection) to `/bms/`, following the folder structure it contains. The plugin files end up in `/bms/addons/sourcemod/plugins/`, the map configurations (`.edt` files) in `/bms/addons/sourcemod/data/srccoop/`.

5. **Set the starting map**\
   Add the first map of the campaign you want to `/bms/cfg/mapcycle.txt`, for example `bm_c0a0a`.

6. **Start the server**\
   Start your server and check with `sm plugins list` whether SourceCoop was loaded.

> [!NOTE]
> SourceCoop is a community project and not an official part of Black Mesa. You can find the exact folder structure, the available settings and known limitations in the documentation of the project.

> [!WARNING]
> Always stop your server before uploading files. After a game update Metamod:Source, SourceMod and individual plugins can become incompatible – check whether updates are available in that case.

> [!TIP]
> To learn how to give yourself admin rights with SourceMod afterwards, see [Add Admin](/tutorials/gameserver/black-mesa/add-admin).
