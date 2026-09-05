---
slug: "add-mods"
language: "en"
title: "How to Add Mods to Your Quake Live Server"
description: "Add mods, Workshop content and custom game modes to a Quake Live server"
tags: []
date: "2026-07-30"
visibility: "public"
updated: "2026-08-29"
cta: "gameserver"
product_keys: ["quake-live"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Add Mods"
sort: 2
related: ["gameserver/quake-live/add-admin", "gameserver/quake-live/create-backup", "gameserver/quake-live/join-server", "gameserver/quake-live/kick-ban-players"]
---

In Quake Live, additional content comes exclusively from the **Steam Workshop**. Custom rule sets are defined on top of that through so-called **factories** – small JSON files stored on your server.

> [!NOTE]
> Your players do not have to install anything by hand. Quake Live downloads custom content automatically as long as it is hosted on the Steam Workshop. The former download functions over HTTP and UDP have been removed – content that is not on the Workshop will never reach your players.

## Add Workshop content

1. **Find the item ID**\
   Open the desired item in the Quake Live Steam Workshop in your browser. The item ID is the number at the end of the address:

   ```text
   https://steamcommunity.com/sharedfiles/filedetails/?id=123456789
   ```

   In this example the item ID is `123456789`.

2. **Stop the server**\
   Stop your server via the dashboard.

3. **Connect via SFTP**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection).

4. **Open workshop.txt**\
   Open the following file. If it does not exist yet, create it:

   ```text
   /baseq3/workshop.txt
   ```

5. **Enter the item IDs**\
   Enter exactly one item ID per line:

   ```text
   123456789
   987654321
   ```

6. **Start the server**\
   Save the file and start your server. The server downloads every listed item before it finishes initialising.

> [!NOTE]
> You can follow the download progress in the console of your server. If a download fails, that item is skipped and the server starts anyway.

## Add custom maps to the map pool

A downloaded map is only played once it is part of the map pool.

1. **Stop the server**\
   Stop your server via the dashboard.

2. **Open mappool.txt**\
   Open the following file via [SFTP](/tutorials/gameserver/establish-sftp-connection):

   ```text
   /baseq3/mappool.txt
   ```

3. **Add the map**\
   Add one map together with its factory per line, separated by a `|`:

   ```text
   campgrounds|ffa
   mymap|ca
   ```

4. **Start the server**\
   Save the file and start your server.

> [!NOTE]
> Besides `mappool.txt` the server ships prepared map pools for individual game modes, for example `mappool_ca.txt`, `mappool_ctf.txt`, `mappool_duel.txt`, `mappool_ffa.txt`, `mappool_race.txt` and `mappool_tdm.txt`. Which file is used is controlled by `sv_mapPoolFile` in `/baseq3/server.cfg`.

## Create custom game modes (factories)

In Quake Live, gameplay settings do **not** belong in `server.cfg` – they get overwritten by the factory of the running game mode. Custom rules are therefore defined as a factory.

1. **Stop the server**\
   Stop your server via the dashboard.

2. **Create the folder**\
   Create the following folder via [SFTP](/tutorials/gameserver/establish-sftp-connection) if it does not exist yet:

   ```text
   /baseq3/scripts/
   ```

3. **Create the factory file**\
   Create a file there whose name ends in `.factories`:

   ```text
   /baseq3/scripts/mymode.factories
   ```

4. **Define the factory**\
   The file is a JSON file and contains either a single object or an array of several factories. This is what the bundled InstaGib FFA factory looks like:

   ```json
   {
     "id": "iffa",
     "title": "Instagib FFA",
     "author": "id Software",
     "description": "Railgun and Gauntlet only. One shot, one kill.",
     "basegt": "ffa",
     "cvars": {
       "g_dropCmds": "0",
       "g_spawnArmor": "0",
       "dmflags": "28",
       "g_instagib": "1",
       "g_startingWeapons": "65",
       "timelimit": "15",
       "g_allowKill": "0",
       "fraglimit": "50",
       "g_overtime": "0",
       "g_loadout": "0"
     }
   }
   ```

   > [!TIP]
   > Check the file with a JSON formatter like [JSONLint](https://jsonlint.com/) after editing – a single missing or extra comma is enough to stop the server from loading the factory.

5. **Start the server**\
   Save the file and start your server.

### Fields of a factory

| Field | Meaning |
|-------|---------|
| `id` | Short name used to reference the factory in the map pool or via `callvote` |
| `title` | Display name in the "Start Match" menu |
| `author` | Creator of the factory |
| `description` | Short description shown in the menu |
| `basegt` | Base game type the settings are applied to |
| `cvars` | Object containing the server variables and their values |

Valid values for `basegt`:

| Value | Game mode |
|-------|-----------|
| `ffa` | Free For All |
| `duel` | Duel |
| `race` | Race |
| `tdm` | Team Deathmatch |
| `ca` | Clan Arena |
| `ctf` | Capture the Flag |
| `oneflag` | One Flag CTF |
| `har` | Harvester |
| `ft` | Freeze Tag |
| `dom` | Domination |
| `ad` | Attack & Defend |
| `rr` | Red Rover |

> [!WARNING]
> All fields have to be present and of the correct type. If a factory is invalid, the server prints the reason to the console during startup and the factory is not available for play.

> [!TIP]
> Add your own factory together with the matching maps to `mappool.txt`. Only then does it show up in the map vote at the end of a round.

## Folder structure at a glance

```text
/baseq3/server.cfg                <- server configuration
/baseq3/workshop.txt              <- item IDs from the Steam Workshop
/baseq3/mappool.txt               <- maps and factories of the map pool
/baseq3/access.txt                <- admins, moderators and bans
/baseq3/scripts/                  <- custom factories (.factories)
```

> [!NOTE]
> The `baseq3` directory sits in the main directory of your server, so the full path is `/home/container/baseq3/`.

> [!WARNING]
> Always stop your server before editing or uploading files. `workshop.txt` is only evaluated when the server starts.

> [!NOTE]
> **Plugins with minqlx**
>
> There is a Python-based plugin framework for Quake Live called minqlx. It requires a purpose-built server environment including a Redis database and therefore does not run on a standard Quake Live server. You do not need it for maps, models or custom game modes – the Steam Workshop and factories cover those.
