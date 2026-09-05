---
slug: "add-savegame"
language: "en"
title: "How to Add a Savegame to Your Colony Survival Server"
description: "Add a savegame to a Colony Survival server"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["colony-survival"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Add Savegame"
sort: 3
related: ["gameserver/colony-survival/add-admin", "gameserver/colony-survival/add-mods", "gameserver/colony-survival/create-backup", "gameserver/colony-survival/download-savegame"]
---

A save in Colony Survival is **a complete folder**, not a single file. Every world lives in its own subfolder inside the savegame directory of your server, and the name of that folder decides which world is loaded.

```text
/gamedata/savegames/<worldname>/
```

> [!IMPORTANT]
> The folder name has to match the value you enter in the **World Name** field in the **dashboard** exactly – including upper and lower case. If the server does not find a matching folder, it creates a new, empty world instead.

## Files of a savegame

| File | Content |
|------|---------|
| `world.sqlite3` | The actual world as a SQLite database – terrain, buildings, colonies and settlers |
| `world.sqlite3-wal` | Write-ahead log of the database (not always present) |
| `world.sqlite3-shm` | Shared memory file of the write-ahead log (not always present) |
| `worldconfig.json` | Display name of the world, world type and the list of enabled mods |
| `permissionusers.json` | Optional: player permissions for this world |
| `permissiongroups.json` | Optional: custom permission groups for this world |

> [!NOTE]
> If the world comes from an older game version, it may still contain a `regions/` folder and a `settings_readonly.json` file instead of `world.sqlite3`. In that case upload the complete folder as well – the server converts the world while loading it. Very old worlds (from before version 0.9) can no longer be loaded.

## Upload the savegame

1. **Stop the server**\
   Stop your server via the dashboard. While the server is running it constantly writes to the database and locks the savegame directory.

2. **Connect via SFTP**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection).

3. **Open the directory**\
   Navigate to the following directory:

   ```text
   /gamedata/savegames/
   ```

   > [!NOTE]
   > If the folder does not exist yet, start your server once so the folder structure is created. Afterwards stop it again.

4. **Secure the current save**\
   Create a [backup](/tutorials/gameserver/colony-survival/create-backup) or download the existing world folder in case you want to switch back later.

5. **Upload the world folder**\
   Upload the complete folder of your world including all files into this directory. Use a distinctive folder name without spaces or special characters, for example `MyWorld`.

   > [!WARNING]
   > If a folder with the same name already exists, delete it beforehand or rename your uploaded folder. Never mix the files of two worlds in one folder.

6. **Enter the World Name**\
   Open the **dashboard**, go to the **settings** and enter exactly the folder name from step 5 into the **World Name** field.

7. **Start the server**\
   Start your server. Your uploaded world is now loaded on startup.

> [!TIP]
> Check the console in the dashboard after starting. If the server loads the intended world, its name shows up there. If it creates a new world instead, the folder name does not match the **World Name** field.

## Move a world from another server

Switching worlds works most reliably when both of them come from a dedicated server – for example when moving to another host. Download the complete world folder there and then follow the steps above.

> [!WARNING]
> **Do not forget the mods**
>
> The file `worldconfig.json` stores which mods are enabled for this world. If those mods are missing on the new server, the world can fail to load properly. Upload the matching mods as well: [Add Mods](/tutorials/gameserver/colony-survival/add-mods).

## Find your local savegame

If you hosted a co-op world on your PC and want to move it to the server, you can find it in the installation folder of the game:

```text
...\Steam\steamapps\common\Colony Survival\gamedata\savegames\
```

If Steam Cloud synchronisation is enabled, your worlds are stored here instead:

```text
...\Steam\steamapps\common\Colony Survival\gamedata\savegames\_cloud\<SteamAccountID>\
```

> [!CAUTION]
> **Single player worlds**
>
> Only transfer worlds you have already used in multiplayer. A pure single player world is marked as such in the game and has to be converted in the client first – whether a dedicated server loads it without that conversion is not documented. Always work with copies only.
