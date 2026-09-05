---
slug: "add-mods"
language: "en"
title: "How to Add Mods to Your Soldat Server"
description: "Add mods, custom maps and scripts to a Soldat server"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["soldat"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Add Mods"
sort: 2
related: ["gameserver/soldat/add-admin", "gameserver/soldat/create-backup", "gameserver/soldat/join-server", "gameserver/soldat/kick-ban-players"]
---

Soldat has two completely different kinds of mods. Classic mods – different gostek graphics, weapon images, sounds and menus – are **purely client-side**: they live in the Soldat folder on the player's PC and are loaded there through a launch parameter. They do not belong on your server.

On the server side you extend your game in three ways:

- **Custom maps** that the server transfers to players automatically
- **Server scripting** (ScriptCore 3) for custom game rules and management features
- **Mod packages** (`.smod`) – this option only exists on OpenSoldat

> [!NOTE]
> **Two server versions**
>
> There are two Soldat server versions with different configuration files. You can tell which one you are running from the file manager or via [SFTP](/tutorials/gameserver/establish-sftp-connection):
>
> | File in the main directory | Version |
> |----------------------------|---------|
> | `soldat.ini` and `server.ini` | classic Soldat server |
> | `configs/server.cfg` | OpenSoldat |

## Add custom maps

Maps are the most practical way to give your server its own character. They come as `.pms` files.

1. **Download the map**\
   Download the map you want. You need the `.pms` file.

2. **Stop the server**\
   Stop your server via the dashboard.

3. **Upload the map**\
   Upload the `.pms` file into the maps folder of your server via [SFTP](/tutorials/gameserver/establish-sftp-connection). On OpenSoldat that is the folder `maps/`.

4. **Add the map to the rotation**\
   Open the file `mapslist.txt` in the main directory of your server and add the map – one map per line:

   ```text
   ctf_Ash
   ctf_Laos
   ctf_Run
   ```

5. **Start the server**\
   Save the file and start your server.

> [!IMPORTANT]
> The map name is entered **without a path and without the `.pms` extension**, but **with the game mode prefix** (for example `ctf_`). The spelling is case sensitive – on your Linux server that matters. If the file is called `ctf_Laos.pms`, the list has to contain exactly `ctf_Laos`.

> [!WARNING]
> **Blank lines** in `mapslist.txt` cause loading errors, and entries for maps that are not present on the server can crash it. After every change, make sure each line matches an existing file.

### Manage maps while the server is running

As a logged-in admin you can also adjust the rotation in the game:

| Command | Description |
|---------|-------------|
| `/addmap <MapName>` | Add a map to the running rotation |
| `/delmap <MapName>` | Remove a map from the rotation |
| `/map <MapName>` | Switch to a specific map immediately |
| `/nextmap` | Switch to the next map |
| `/restart` | Restart the current round |

> [!NOTE]
> `/delmap` can only remove maps that were previously added with `/addmap`. Permanent changes belong in `mapslist.txt`.

## Transfer maps to players automatically

So your friends do not have to install your custom maps themselves, the server sends them on join.

1. **Stop the server**\
   Stop your server via the dashboard.

2. **Set the option**\
   Classic server – in the `[NETWORK]` section of `soldat.ini`:

   ```text
   Allow_Download=1
   ```

   OpenSoldat – in `configs/server.cfg`:

   ```text
   set net_allowdownload 1
   set fileserver_enable 1
   ```

3. **Start the server**\
   Save the file and start your server.

> [!NOTE]
> On the classic server `Allow_Download` is set to `1` out of the box – you only have to check it if downloads do not work. Maps, scenery and textures are transferred over TCP on the **Game Port + 10**. The values that apply to your server are shown in the **dashboard**.

> [!TIP]
> OpenSoldat can alternatively have missing files downloaded from a web address of your own. To do that, set the option `sv_downloadurl` in `configs/server.cfg`.

## Enable server scripting

The actual mod system for Soldat servers is server-side scripting (ScriptCore 3). It lets you build custom game modes, statistics, automation and management commands.

1. **Stop the server**\
   Stop your server via the dashboard.

2. **Turn scripting on**\
   Classic server – in the `[NETWORK]` section of `server.ini`:

   ```text
   Scripting=1
   ```

   OpenSoldat – in `configs/server.cfg`. Scripting is enabled there out of the box, so this entry is just a double check:

   ```text
   set sc_enable 1
   ```

3. **Upload the script**\
   Upload your script into its own subfolder via [SFTP](/tutorials/gameserver/establish-sftp-connection):

   ```text
   scripts/<ScriptName>/
   ```

4. **Create the configuration file**\
   Create the file `sc3.cfg` inside the script folder:

   ```text
   [Config]
   Name=MyScript
   MainFile=main.pas
   Sandboxed=2
   ```

5. **Start the server**\
   Start your server and check the server console to see whether the script compiled without errors.

### Options in sc3.cfg

| Option | Meaning |
|--------|---------|
| `Name` | Mandatory, at most 20 characters – appears in all console output for this script |
| `MainFile` | Entry file of the script, `main.pas` by default |
| `Debug` | Enables additional debug output |
| `Sandboxed` | File access of the script: `0` the whole drive, `1` the server folder, `2` only the script's own data (default) |
| `AllowDlls` | Allows the script to load external libraries |
| `AllowIniEdit` | Allows the script to read and write `soldat.ini` and `server.ini` – only works with `Sandboxed=1` |
| `Gamemod` | Marks the server as a gamemod server in the lobby list |
| `Legacy` | Compatibility mode for older scripts (ScriptCore 2) |

The file also supports the sections `[SearchPaths]` and `[Defines]`.

> [!IMPORTANT]
> Leave `Sandboxed` at `2` whenever possible. With `0` a script may access the entire drive – only install scripts from sources you trust.

> [!TIP]
> **Behaviour on errors**
>
> If a script crashes, `OnScriptCrash` (classic) and `sc_onscriptcrash` (OpenSoldat) decide what happens: recompile, shut down the server, ignore it or disable the script.

## Mod packages on OpenSoldat

Only OpenSoldat can load a mod package on the server side. Mods come as `.smod` files there.

1. **Stop the server**\
   Stop your server via the dashboard.

2. **Upload the mod**\
   Upload the `.smod` file into the folder `mods/` via [SFTP](/tutorials/gameserver/establish-sftp-connection).

3. **Enter the mod**\
   In `configs/server.cfg`, enter the file name **without the `.smod` extension**:

   ```text
   set fs_mod MyMod
   ```

4. **Start the server**\
   Save the file and start your server.

> [!WARNING]
> With `sv_pure` you require all players to use the same `.smod` file as the server. Without this setting players with different files can still join – with it, your friends need the mod file. To let them fetch missing files, you can additionally set `sv_downloadurl`.

## What does not belong on the server

> [!NOTE]
> Classic Soldat mods from the `mods/` folder of the **game** are loaded through the client launch parameter `-mod <name>`. They only change the presentation on the player's PC and cannot be enforced server-side on the classic Soldat server. No mod parameter is documented for the classic server – use custom maps and server scripting there instead.

> [!WARNING]
> Always stop your server before uploading files or editing configuration files. Changes to `mapslist.txt`, `soldat.ini`, `server.ini` and `configs/server.cfg` are only read on server start.

> [!TIP]
> To learn how to give yourself admin rights so you can switch maps and game modes in the game, see [Add Admin](/tutorials/gameserver/soldat/add-admin).
