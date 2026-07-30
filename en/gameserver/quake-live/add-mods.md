---
description: Add mods, Workshop content and custom game modes to a Quake Live server
---

# How to Add Mods to Your Quake Live Server

In Quake Live, additional content comes exclusively from the **Steam Workshop**. Custom rule sets are defined on top of that through so-called **factories** — small JSON files stored on your server.

:::: info Note
Your players do not have to install anything by hand. Quake Live downloads custom content automatically as long as it is hosted on the Steam Workshop. The former download functions over HTTP and UDP have been removed — content that is not on the Workshop will never reach your players.
::::

## Add Workshop content

1. <b>Find the item ID</b><br>
   Open the desired item in the Quake Live Steam Workshop in your browser. The item ID is the number at the end of the address:

   ```
   https://steamcommunity.com/sharedfiles/filedetails/?id=123456789
   ```

   In this example the item ID is `123456789`.

2. <b>Stop the server</b><br>
   Stop your server via the dashboard.

3. <b>Connect via SFTP</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md).

4. <b>Open workshop.txt</b><br>
   Open the following file. If it does not exist yet, create it:

   ```
   /baseq3/workshop.txt
   ```

5. <b>Enter the item IDs</b><br>
   Enter exactly one item ID per line:

   ```
   123456789
   987654321
   ```

6. <b>Start the server</b><br>
   Save the file and start your server. The server downloads every listed item before it finishes initialising.

:::: info Note
You can follow the download progress in the console of your server. If a download fails, that item is skipped and the server starts anyway.
::::

## Add custom maps to the map pool

A downloaded map is only played once it is part of the map pool.

1. <b>Stop the server</b><br>
   Stop your server via the dashboard.

2. <b>Open mappool.txt</b><br>
   Open the following file via [SFTP](../establish-sftp-connection.md):

   ```
   /baseq3/mappool.txt
   ```

3. <b>Add the map</b><br>
   Add one map together with its factory per line, separated by a `|`:

   ```
   campgrounds|ffa
   mymap|ca
   ```

4. <b>Start the server</b><br>
   Save the file and start your server.

:::: info Note
Besides `mappool.txt` the server ships prepared map pools for individual game modes, for example `mappool_ca.txt`, `mappool_ctf.txt`, `mappool_duel.txt`, `mappool_ffa.txt`, `mappool_race.txt` and `mappool_tdm.txt`. Which file is used is controlled by `sv_mapPoolFile` in `/baseq3/server.cfg`.
::::

## Create custom game modes (factories)

In Quake Live, gameplay settings do **not** belong in `server.cfg` — they get overwritten by the factory of the running game mode. Custom rules are therefore defined as a factory.

1. <b>Stop the server</b><br>
   Stop your server via the dashboard.

2. <b>Create the folder</b><br>
   Create the following folder via [SFTP](../establish-sftp-connection.md) if it does not exist yet:

   ```
   /baseq3/scripts/
   ```

3. <b>Create the factory file</b><br>
   Create a file there whose name ends in `.factories`:

   ```
   /baseq3/scripts/mymode.factories
   ```

4. <b>Define the factory</b><br>
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

5. <b>Start the server</b><br>
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

:::: warning Warning
All fields have to be present and of the correct type. If a factory is invalid, the server prints the reason to the console during startup and the factory is not available for play.
::::

:::: tip Tip
Add your own factory together with the matching maps to `mappool.txt`. Only then does it show up in the map vote at the end of a round.
::::

## Folder structure at a glance

```
/baseq3/server.cfg                <- server configuration
/baseq3/workshop.txt              <- item IDs from the Steam Workshop
/baseq3/mappool.txt               <- maps and factories of the map pool
/baseq3/access.txt                <- admins, moderators and bans
/baseq3/scripts/                  <- custom factories (.factories)
```

:::: info Note
The `baseq3` directory sits in the main directory of your server, so the full path is `/home/container/baseq3/`.
::::

:::: warning Warning
Always stop your server before editing or uploading files. `workshop.txt` is only evaluated when the server starts.
::::

:::: info Plugins with minqlx
There is a Python-based plugin framework for Quake Live called minqlx. It requires a purpose-built server environment including a Redis database and therefore does not run on a standard Quake Live server. You do not need it for maps, models or custom game modes — the Steam Workshop and factories cover those.
::::
