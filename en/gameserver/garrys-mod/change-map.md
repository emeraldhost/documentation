---
description: Change the map on a Garry's Mod server, use Workshop maps and upload your own maps
---

# How to Change the Map on Your Garry's Mod Server

You set the map your server starts with in your server's settings. By default it is `gm_flatgrass`. Besides the included maps `gm_flatgrass` and `gm_construct` you can use maps from the Steam Workshop or upload your own maps via SFTP.

:::: danger Important
Always enter the **file name of the `.bsp` file without the extension** as the map, not the title from the Steam Workshop. For the file `rp_downtown_v4c_v2.bsp` the map name is `rp_downtown_v4c_v2`.
::::

## Set the start map in the settings

1. <b>Open the dashboard</b><br>
   Open the dashboard of your server.

2. <b>Open the settings</b><br>
   Navigate to the **Settings**.

3. <b>Enter the map</b><br>
   Enter the name of the map in the **Map** field, for example `gm_construct`. The server then starts with the parameter:

   ```
   +map gm_construct
   ```

   :::: info Note
   The field only accepts letters, numbers, hyphens (`-`) and underscores (`_`). Spaces, dots or the `.bsp` extension are not allowed.
   ::::

4. <b>Restart the server</b><br>
   Save the setting and restart your server.

## Change the map while the server is running

You can change the map without a restart directly through the console.

1. <b>Open the dashboard</b><br>
   Open the dashboard of your server.

2. <b>Enter the command</b><br>
   Enter the following command in your server's console:

   ```
   changelevel <map>
   ```

   Replace `<map>` with the name of the map, for example `changelevel gm_construct`.

:::: info Note
A change via `changelevel` only lasts until the next restart. After that the server starts with the map from the **Map** field again. If the map does not exist on the server, the command fails and the server stays on the current map.
::::

## Use a map from the Steam Workshop

The server downloads Workshop maps through your Workshop collection. A Workshop map that is not in the collection is neither downloaded by the server nor distributed to the players.

1. <b>Add the map to the collection</b><br>
   In the [Steam Workshop for Garry's Mod](https://steamcommunity.com/app/4000/workshop/), add the map to the collection whose ID is entered in the **Workshop ID** field. To learn how to set up a collection, see [Add mods](add-mods.md).

2. <b>Find the map name</b><br>
   Find out the `.bsp` name of the map (see the [next section](#find-the-bsp-name-of-a-workshop-map)).

3. <b>Enter the map</b><br>
   Enter the `.bsp` name in the **Map** field in the **Settings**.

4. <b>Restart the server</b><br>
   Save the setting and restart your server. The server downloads the collection on startup and then starts with the map.

:::: tip Tip
If your server is running a map that is also in your server's collection, the map is automatically marked for download by the players. The console then shows the message "Making workshop map available for client download". So you do **not** need a `resource.AddWorkshop` entry for the map (see [Add mods](add-mods.md#force-players-to-download-the-addons)).
::::

## Find the .bsp name of a Workshop map

The title in the Steam Workshop often differs from the actual map name. This is how you find the exact name:

1. <b>Check the Workshop description</b><br>
   Open the map's page in the [Steam Workshop for Garry's Mod](https://steamcommunity.com/app/4000/workshop/). Many creators state the map name in the description. If you find it there, you can skip the following steps.

2. <b>Extract the addon file</b><br>
   If the name is not in the description, extract the map's addon file. Workshop addons usually come as a `.gma` file. You extract a `.gma` file with `gmad.exe` from your local game installation under `…\GarrysMod\bin\`:

   ```
   gmad.exe extract -file "<path to file>.gma"
   ```

3. <b>Find the map file</b><br>
   In the extracted folder you will find the map in the `maps/` subfolder. The file name without the `.bsp` extension is the name you enter in the **Map** field or use with `changelevel`.

:::: warning Warning
The server runs on Linux and file names there are **case-sensitive**. Therefore copy the map name exactly as it appears in the file.
::::

## Upload your own map via SFTP

Maps that do not come from the Workshop are uploaded to the server as a `.bsp` file.

1. <b>Stop the server</b><br>
   Stop your server via the dashboard.

2. <b>Connect via SFTP</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md).

3. <b>Upload the map</b><br>
   Upload the `.bsp` file to the following directory:

   ```
   /garrysmod/maps/
   ```

   Example: `/garrysmod/maps/gm_examplemap.bsp`

4. <b>Enter the map</b><br>
   Enter the file name without `.bsp` in the **Map** field in the **Settings**, in this example `gm_examplemap`.

5. <b>Start the server</b><br>
   Save the setting and start your server.

:::: danger Important
A map uploaded via SFTP only exists on the server. Players need the map as well to be able to join. If the map is also available in the Steam Workshop, use your collection instead of the SFTP upload (see [Use a map from the Steam Workshop](#use-a-map-from-the-steam-workshop)). For a map that is not on the Workshop, set up [FastDL](set-up-fastdl.md) so that players can download it.
::::

## Choose a map that matches the gamemode

Many gamemodes are designed for specific maps. The prefix of the map name tells you which gamemode a map is intended for:

| Prefix | Gamemode |
| ------ | -------- |
| `gm_` | Sandbox |
| `rp_` | Roleplay, e.g. DarkRP |
| `ttt_` | Trouble in Terrorist Town |
| `ph_` | Prop Hunt |

The prefixes are a convention, not a fixed rule. A gamemode will still start on an unsuitable map, but it will lack things like spawn points or weapon placements there. The default map `gm_flatgrass` is only suitable for Sandbox. When you [change the gamemode](change-gamemode.md), adjust the **Map** field as well.
