---
slug: "set-up-ttt"
language: "en"
title: "How to Set Up TTT on Your Garry's Mod Server"
description: "Set up Trouble in Terrorist Town (TTT) on a Garry's Mod server"
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
short_title: "Set Up TTT"
sort: 10
related: ["gameserver/garrys-mod/change-gamemode", "gameserver/garrys-mod/change-map", "gameserver/garrys-mod/configure-server", "gameserver/garrys-mod/add-mods"]
---
**Trouble in Terrorist Town** (TTT) is already included in Garry's Mod. You do not have to install the gamemode. You only need to select it, set a suitable TTT map and configure the rounds the way you want.

## Add a TTT map to the collection

You can recognize TTT maps by the `ttt_` prefix in their name. Your server's default map `gm_flatgrass` is a Sandbox map and not built for TTT – it lacks the spawn and weapon points TTT needs. You therefore need at least one TTT map from the Steam Workshop.

1. **Search for a map in the Workshop**\
   Search for `ttt_` in the [Steam Workshop for Garry's Mod](https://steamcommunity.com/app/4000/workshop/) to find TTT maps. One very popular map, for example, is [ttt_minecraft_b5](https://steamcommunity.com/sharedfiles/filedetails/?id=159321088) with the ID `159321088`.

2. **Add the map to the collection**\
   Add the map to your server's Workshop collection. How to create a collection and enter it in the **Workshop ID** field is explained in the guide [Add mods](/tutorials/gameserver/garrys-mod/add-mods).

   > [!NOTE]
   > If the current map is in your server's collection, players download it automatically when they join. A Workshop map that is not in the collection is neither present on the server nor distributed to the players.

3. **Find out the map name**\
   For the settings you need the name of the map's `.bsp` file, not its title in the Workshop. It is often shown in the title or the description of the map. The map with the ID `159321088`, for example, is called `ttt_minecraft_b5`.

## Set the gamemode and map

1. **Open the dashboard**\
   Open the dashboard of your server.

2. **Open the settings**\
   Navigate to the **Settings**.

3. **Enter the gamemode**\
   Enter the following value in the **Gamemode** field:

   ```text
   terrortown
   ```

   > [!WARNING]
   > In the game the gamemode is called "Trouble in Terrorist Town", but its folder name is `terrortown`. Only the folder name works in the **Gamemode** field.

4. **Enter the map**\
   Enter the name of your TTT map in the **Map** field, for example:

   ```text
   ttt_minecraft_b5
   ```

5. **Restart the server**\
   Save the setting and restart your server. Your server now starts with TTT on the map you set.

> [!NOTE]
> A round only starts once enough players are on the server. By default that is **2** players. You can change this value with `ttt_minimum_players`.

How to change the gamemode in general is explained in the guide [Change gamemode](/tutorials/gameserver/garrys-mod/change-gamemode). More about changing the map can be found under [Change map](/tutorials/gameserver/garrys-mod/change-map).

## Configure TTT

You set the TTT settings through ConVars in the `server.cfg`.

1. **Open the file**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection) and open the following file:

   ```text
   /garrysmod/cfg/server.cfg
   ```

2. **Add the settings**\
   Add your TTT settings below the line `// Add custom lines under here` – one setting per line. You can find the available settings in the tables below.

   > [!TIP]
   > **Example**
   >
   > ```text
   > // Add custom lines under here
   > ttt_round_limit 8
   > ttt_time_limit_minutes 90
   > ttt_preptime_seconds 20
   > ttt_minimum_players 4
   > ttt_detective_min_players 6
   > ```

3. **Restart the server**\
   Save the file and restart your server.

> [!NOTE]
> Settings you do not add keep their default value from the tables. The `ttt_` settings only take effect while the `terrortown` gamemode is active.

### Rounds and map change

| Setting | Description | Default |
| ------- | ----------- | ------- |
| `ttt_preptime_seconds` | Length of the preparation phase in seconds before the roles are assigned | `30` |
| `ttt_firstpreptime` | Length of the preparation phase only for the first round after a map loads | `60` |
| `ttt_posttime_seconds` | Time in seconds after a round has ended before the next preparation phase begins | `30` |
| `ttt_haste` | Haste mode: the round time starts short and is extended with every death (`1` = on, `0` = off) | `1` |
| `ttt_haste_starting_minutes` | Initial round time in minutes in haste mode | `5` |
| `ttt_haste_minutes_per_death` | Minutes added to the round time per death in haste mode | `0.5` |
| `ttt_roundtime_minutes` | Round time in minutes when haste mode is off | `10` |
| `ttt_round_limit` | Maximum number of rounds until the map is switched | `6` |
| `ttt_time_limit_minutes` | Maximum time in minutes until the map is switched | `75` |
| `ttt_minimum_players` | Number of players that must be on the server before a round begins | `2` |

> [!WARNING]
> Haste mode is enabled by default. As long as `ttt_haste` is set to `1`, `ttt_roundtime_minutes` has no effect. If you want a fixed round time, set `ttt_haste 0`.

### Traitors and detectives

| Setting | Description | Default |
| ------- | ----------- | ------- |
| `ttt_traitor_pct` | Share of players that become traitors (`0.25` = 25%) | `0.25` |
| `ttt_traitor_max` | Maximum number of traitors | `32` |
| `ttt_detective_pct` | Share of players that become detectives (`0.13` = 13%) | `0.13` |
| `ttt_detective_max` | Maximum number of detectives | `32` |
| `ttt_detective_min_players` | Minimum number of players before there are detectives | `8` |
| `ttt_detective_karma_min` | Minimum karma a player needs to become a detective | `600` |

> [!TIP]
> **Example**
>
> The number is rounded down, but there is always at least one traitor. With 12 players and the default values that makes 3 traitors (12 × 0.25) and 1 detective (12 × 0.13 = 1.56). With fewer than 8 players there are no detectives.

### Karma

The karma system punishes players who hurt or kill members of their own team. If a player's karma is below 1000, they deal less damage.

| Setting | Description | Default |
| ------- | ----------- | ------- |
| `ttt_karma` | Enable the karma system (`1` = on, `0` = off) | `1` |
| `ttt_karma_strict` | Damage drops faster the lower the karma is | `1` |
| `ttt_karma_starting` | Karma players start with | `1000` |
| `ttt_karma_max` | Highest karma that can be reached | `1000` |
| `ttt_karma_persist` | Save karma permanently so it is kept across map changes and server restarts | `0` |
| `ttt_karma_low_autokick` | Automatically kick players with too little karma at the end of a round | `1` |
| `ttt_karma_low_amount` | Karma threshold at which players get kicked | `450` |
| `ttt_karma_low_ban` | Also ban kicked players | `1` |
| `ttt_karma_low_ban_minutes` | Length of this ban in minutes (`0` = permanent) | `60` |

> [!WARNING]
> With the default values, players whose karma is 450 or lower at the end of a round are automatically banned for 60 minutes. If you only want to kick them, set `ttt_karma_low_ban 0`. How to lift a ban is explained under [Kick and ban players](/tutorials/gameserver/garrys-mod/kick-ban-players).

## How TTT changes the map

TTT changes the map by itself. At the end of every round the gamemode checks whether the round limit (`ttt_round_limit`) or the time limit (`ttt_time_limit_minutes`) has been reached. If one of them has been reached, the server loads the next map 15 seconds later. The time limit is only checked at the end of a round, so a running round is not interrupted.

Which map is loaded next is determined by the server's map rotation. TTT has no built-in map vote. If you want to decide yourself which maps are up for selection and let your players vote on the next map, use an addon such as [MapVote](#set-up-a-map-vote-with-mapvote).

> [!NOTE]
> After a restart your server always starts again with the map from the **Map** field in the **Settings**.

## Set up a map vote with MapVote

The [MapVote](https://steamcommunity.com/sharedfiles/filedetails/?id=151583504) addon replaces TTT's automatic map change with a vote. Once the round or time limit has been reached, the players choose the next map from the TTT maps on your server. By default, the current map and recently played maps are not up for selection. You do not have to edit any files of the gamemode for this.

1. **Add MapVote**\
   Add MapVote with the ID `151583504` to your Workshop collection.

2. **Add more maps**\
   Only maps that are present on your server can be voted for. So add every TTT map that should be up for selection to your collection as well. Since the current and the most recently played maps are excluded, you should add several TTT maps so that enough maps are up for selection.

3. **Restart the server**\
   Restart your server. On the first start MapVote creates its configuration file.

4. **Adjust the configuration (optional)**\
   Stop your server before you edit the file and start it again afterwards. You can find the MapVote settings via [SFTP](/tutorials/gameserver/establish-sftp-connection) in the following file:

   ```text
   /garrysmod/data/mapvote/config.txt
   ```

   The file contains the settings from the table below, for example:

   ```json
   {"MapLimit":24,"TimeLimit":28,"AllowCurrentMap":false,"EnableCooldown":true,"MapsBeforeRevote":3,"RTVPlayerCount":3,"MapPrefixes":["ttt_"],"AutoGamemode":false}
   ```

| Setting | Description |
| ------- | ----------- |
| `RTVPlayerCount` | Minimum number of players for "Rock the Vote" to work |
| `MapLimit` | Number of maps shown in the vote |
| `TimeLimit` | Length of the vote in seconds |
| `AllowCurrentMap` | Allow the current map in the vote (`true` / `false`) |
| `MapPrefixes` | Prefixes of the maps that appear in the vote |
| `EnableCooldown` | Take recently played maps out of the vote for a while (`true` / `false`) |
| `MapsBeforeRevote` | Number of maps that have to be played before a map can be voted for again |
| `AutoGamemode` | Switch to the gamemode that matches the chosen map (`true` / `false`) |

> [!TIP]
> Players can request a map vote early by typing `rtv`, `!rtv` or `/rtv` in the chat ("Rock the Vote"). In TTT the vote then only takes place at the end of the current round.
