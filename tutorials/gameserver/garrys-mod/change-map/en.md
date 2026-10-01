---
slug: "change-map"
language: "en"
title: "How to Change the Map on Your Garry's Mod Server"
description: "Change the map on a Garry's Mod server, use Workshop maps and upload your own maps"
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
short_title: "Change Map"
sort: 7
related: ["gameserver/garrys-mod/change-gamemode", "gameserver/garrys-mod/add-mods", "gameserver/garrys-mod/set-up-fastdl", "gameserver/garrys-mod/set-up-ttt"]
---
You set the map your server starts with in your server's settings. By default it is `gm_flatgrass`. Besides the included maps `gm_flatgrass` and `gm_construct` you can use maps from the Steam Workshop or upload your own maps via SFTP.

> [!IMPORTANT]
> Always enter the **file name of the `.bsp` file without the extension** as the map, not the title from the Steam Workshop. For the file `rp_downtown_v4c_v2.bsp` the map name is `rp_downtown_v4c_v2`.

## Set the start map in the settings

1. **Open the dashboard**\
   Open the dashboard of your server.

2. **Open the settings**\
   Navigate to the **Settings**.

3. **Enter the map**\
   Enter the name of the map in the **Map** field, for example `gm_construct`. The server then starts with the parameter:

   ```text
   +map gm_construct
   ```

   > [!NOTE]
   > The field only accepts letters, numbers, hyphens (`-`) and underscores (`_`). Spaces, dots or the `.bsp` extension are not allowed.

4. **Restart the server**\
   Save the setting and restart your server.

## Change the map while the server is running

You can change the map without a restart directly through the console.

1. **Open the dashboard**\
   Open the dashboard of your server.

2. **Enter the command**\
   Enter the following command in your server's console:

   ```text
   changelevel <map>
   ```

   Replace `<map>` with the name of the map, for example `changelevel gm_construct`.

> [!NOTE]
> A change via `changelevel` only lasts until the next restart. After that the server starts with the map from the **Map** field again. If the map does not exist on the server, the command fails and the server stays on the current map.

## Use a map from the Steam Workshop

The server downloads Workshop maps through your Workshop collection. A Workshop map that is not in the collection is neither downloaded by the server nor distributed to the players.

1. **Add the map to the collection**\
   In the [Steam Workshop for Garry's Mod](https://steamcommunity.com/app/4000/workshop/), add the map to the collection whose ID is entered in the **Workshop ID** field. To learn how to set up a collection, see [Add mods](/tutorials/gameserver/garrys-mod/add-mods).

2. **Find the map name**\
   Find out the `.bsp` name of the map (see the [next section](#find-the-bsp-name-of-a-workshop-map)).

3. **Enter the map**\
   Enter the `.bsp` name in the **Map** field in the **Settings**.

4. **Restart the server**\
   Save the setting and restart your server. The server downloads the collection on startup and then starts with the map.

> [!TIP]
> If your server is running a map that is also in your server's collection, the map is automatically marked for download by the players. The console then shows the message "Making workshop map available for client download". So you do **not** need a `resource.AddWorkshop` entry for the map (see [Add mods](/tutorials/gameserver/garrys-mod/add-mods#force-players-to-download-the-addons)).

## Find the .bsp name of a Workshop map

The title in the Steam Workshop often differs from the actual map name. This is how you find the exact name:

1. **Check the Workshop description**\
   Open the map's page in the [Steam Workshop for Garry's Mod](https://steamcommunity.com/app/4000/workshop/). Many creators state the map name in the description. If you find it there, you can skip the following steps.

2. **Extract the addon file**\
   If the name is not in the description, extract the map's addon file. Workshop addons usually come as a `.gma` file. You extract a `.gma` file with `gmad.exe` from your local game installation under `…\GarrysMod\bin\`:

   ```text
   gmad.exe extract -file "<path to file>.gma"
   ```

3. **Find the map file**\
   In the extracted folder you will find the map in the `maps/` subfolder. The file name without the `.bsp` extension is the name you enter in the **Map** field or use with `changelevel`.

> [!WARNING]
> The server runs on Linux and file names there are **case-sensitive**. Therefore copy the map name exactly as it appears in the file.

## Upload your own map via SFTP

Maps that do not come from the Workshop are uploaded to the server as a `.bsp` file.

1. **Stop the server**\
   Stop your server via the dashboard.

2. **Connect via SFTP**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection).

3. **Upload the map**\
   Upload the `.bsp` file to the following directory:

   ```text
   /garrysmod/maps/
   ```

   Example: `/garrysmod/maps/gm_examplemap.bsp`

4. **Enter the map**\
   Enter the file name without `.bsp` in the **Map** field in the **Settings**, in this example `gm_examplemap`.

5. **Start the server**\
   Save the setting and start your server.

> [!IMPORTANT]
> A map uploaded via SFTP only exists on the server. Players need the map as well to be able to join. If the map is also available in the Steam Workshop, use your collection instead of the SFTP upload (see [Use a map from the Steam Workshop](#use-a-map-from-the-steam-workshop)). For a map that is not on the Workshop, set up [FastDL](/tutorials/gameserver/garrys-mod/set-up-fastdl) so that players can download it.

## Choose a map that matches the gamemode

Many gamemodes are designed for specific maps. The prefix of the map name tells you which gamemode a map is intended for:

| Prefix | Gamemode |
| ------ | -------- |
| `gm_` | Sandbox |
| `rp_` | Roleplay, e.g. DarkRP |
| `ttt_` | Trouble in Terrorist Town |
| `ph_` | Prop Hunt |

The prefixes are a convention, not a fixed rule. A gamemode will still start on an unsuitable map, but it will lack things like spawn points or weapon placements there. The default map `gm_flatgrass` is only suitable for Sandbox. When you [change the gamemode](/tutorials/gameserver/garrys-mod/change-gamemode), adjust the **Map** field as well.
