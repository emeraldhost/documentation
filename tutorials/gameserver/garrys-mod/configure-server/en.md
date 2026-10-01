---
slug: "configure-server"
language: "en"
title: "How to Configure Your Garry's Mod Server"
description: "Configure a Garry's Mod server via the server.cfg"
tags: []
date: "2026-10-01"
visibility: "public"
cta: "gameserver"
product_keys: ["garrys-mod"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Configure Server"
sort: 12
related: ["gameserver/garrys-mod/set-gsl-token", "gameserver/garrys-mod/set-up-loading-screen", "gameserver/garrys-mod/change-tickrate", "gameserver/garrys-mod/set-up-fastdl"]
---
You set the most important settings of your server in the `server.cfg` file. There you decide, for example, how many props a player may spawn, whether noclip is allowed or whether players can damage each other.

## When the server.cfg is executed

The server executes the `server.cfg` on startup and **again on every map change**. All values from the file are set again each time.

> [!WARNING]
> If you only change a value via the **console** in the dashboard and the same value is in the `server.cfg`, your change is overwritten at the next map change or restart. Always put settings that should apply permanently into the `server.cfg`.

## Structure of the server.cfg

Your server comes with a prepared `server.cfg`. It is divided into the following sections:

| Section | Content |
|---------|---------|
| Header | Basic settings, including `sv_loadingurl` for the [loading screen](/tutorials/gameserver/garrys-mod/set-up-loading-screen) and `sv_downloadurl` for [FastDL](/tutorials/gameserver/garrys-mod/set-up-fastdl) |
| `// Steam Server List Settings` | Settings for the server list, including `sv_region "255"` and the commented-out line `// sv_location "eu"`. Leave `sv_region` unchanged. |
| `// Server Limits` | Sandbox limits such as `sbox_maxprops`, plus `sbox_godmode` and `sbox_noclip` |
| `// Network Settings` | Network settings such as `sv_minrate` and `sv_maxrate` |
| `// Execute Ban Files` | Loads the ban lists `banned_ip.cfg` and `banned_user.cfg` |
| `// Add custom lines under here` | Space for your own settings |

> [!IMPORTANT]
> Leave the `// Network Settings` and `// Execute Ban Files` sections unchanged. Without the `exec` lines, your server's ban lists are no longer loaded.

## Edit the server.cfg

1. **Stop the server**\
   Stop your server via the dashboard.

2. **Connect via SFTP**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection) or use the **file browser** in the dashboard.

3. **Open server.cfg**\
   Open the file `server.cfg` at:

   ```text
   /garrysmod/cfg/server.cfg
   ```

4. **Adjust existing values**\
   If a setting is already in the file, e.g. `sbox_maxprops`, change the value directly in that line. This way each setting appears only once in the file.

5. **Add new settings**\
   Add settings that are not yet in the file below the line `// Add custom lines under here` – one setting per line.

   > [!TIP]
   > **Example**
   >
   > ```text
   > // Add custom lines under here
   > sbox_playershurtplayers 0
   > physgun_limited 1
   > sv_allowcslua 0
   > ```

   Do not add the country flag here as a new line. You can find out how to set it in the "Set the country flag" section below.

6. **Start the server**\
   Save the file and start your server.

## Sandbox settings

The following settings come from the **Sandbox** gamemode. They only take effect in Sandbox and in gamemodes based on Sandbox. You choose which gamemode your server uses in the **Gamemode** field – see [Change Gamemode](/tutorials/gameserver/garrys-mod/change-gamemode).

| Setting | Description | Our server.cfg | Gamemode default |
|---------|-------------|----------------|------------------|
| `sbox_noclip` | Players may use noclip (0 = off, 1 = on) | `0` | `1` |
| `sbox_godmode` | All players are invincible (0 = off, 1 = on) | `0` | `0` |
| `sbox_playershurtplayers` | Players can damage each other, i.e. PvP (0 = off, 1 = on) | – | `1` |
| `physgun_limited` | The physgun can no longer pick up certain map entities, e.g. doors, fixed map props and other map entities (0 = off, 1 = on) | – | `0` |

> [!NOTE]
> Our `server.cfg` sets `sbox_noclip` to `0`, although the Sandbox gamemode allows noclip by default. Noclip is therefore **disabled** on your server at first. To allow noclip, change the line to `sbox_noclip 1`.

## Sandbox limits

The `sbox_max*` settings define how many objects of one type **a single player** may have at the same time. Our `server.cfg` sets some values that differ from the gamemode:

| Setting | Limits | Our server.cfg | Gamemode default |
|---------|--------|----------------|------------------|
| `sbox_maxprops` | Props | `100` | `200` |
| `sbox_maxragdolls` | Ragdolls | `5` | `10` |
| `sbox_maxnpcs` | NPCs | `10` | `10` |
| `sbox_maxballoons` | Balloons | `10` | `100` |
| `sbox_maxeffects` | Effects | `10` | `200` |
| `sbox_maxdynamite` | Dynamite | `10` | `10` |
| `sbox_maxlamps` | Lamps | `10` | `3` |
| `sbox_maxthrusters` | Thrusters | `10` | `50` |
| `sbox_maxwheels` | Wheels | `10` | `50` |
| `sbox_maxhoverballs` | Hoverballs | `10` | `50` |
| `sbox_maxvehicles` | Vehicles | `20` | `4` |
| `sbox_maxbuttons` | Buttons | `10` | `50` |
| `sbox_maxsents` | Scripted entities | `20` | `100` |
| `sbox_maxemitters` | Emitters | `5` | `20` |
| `sbox_maxcameras` | Cameras | – | `10` |
| `sbox_maxlights` | Lights | – | `5` |
| `sbox_maxconstraints` | Constraints | – | `2000` |
| `sbox_maxropeconstraints` | Rope constraints | – | `1000` |

Settings marked "–" are not in our `server.cfg`. The gamemode default applies to them until you add them below `// Add custom lines under here`.

> [!NOTE]
> You can also change the Sandbox settings and Sandbox limits directly in-game via **Q menu > Utilities > Admin**. If the values are in your `server.cfg`, they are overwritten again at the next map change. Make permanent changes in the `server.cfg`.

## Other server settings

| Setting | Description | Example |
|---------|-------------|---------|
| `sv_alltalk` | Voice chat: with `0` only players on the same team hear each other, with `1` everyone hears everyone, with `2` everyone hears everyone depending on distance | `1` |
| `sv_allowcslua` | Allows players to run their own client-side Lua code (0 = off, 1 = on) | `0` |
| `sv_kickerrornum` | Disconnects players who exceed this number of client-side Lua errors. `0` disables the feature | `0` |
| `sv_location` | Country flag of your server in the server browser | `"de"` |

> [!IMPORTANT]
> Keep `sv_allowcslua` at `0`. With `1`, players can run their own Lua code on their computer, which makes cheating much easier. It is best to add `sv_allowcslua 0` to your `server.cfg` explicitly.

> [!NOTE]
> The `sv_alltalk` behavior comes from the base gamemode. Gamemodes can handle voice chat themselves, so `sv_alltalk` may work differently or not at all there.

## Set the country flag

With `sv_location`, the server browser shows a country flag next to your server.

1. **Open server.cfg**\
   Open the file `/garrysmod/cfg/server.cfg` via [SFTP](/tutorials/gameserver/establish-sftp-connection) or the **file browser** in the dashboard.

2. **Enable the line**\
   In the `// Steam Server List Settings` section, find the line `// sv_location "eu"`. Remove the two slashes at the beginning and replace `eu` with the country code of your choice:

   ```text
   sv_location "de"
   ```

   Use the two-letter ISO 3166-1 alpha-2 code in lowercase, e.g. `de` for Germany, `at` for Austria or `ch` for Switzerland. For the flag of the European Union, use `eu`.

3. **Restart the server**\
   Save the file and restart your server.
