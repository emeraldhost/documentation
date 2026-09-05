---
slug: "add-savegame"
language: "en"
title: "How to Add a Savegame to Your Mindustry Server"
description: "Add a savegame to a Mindustry server"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["mindustry"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Add Savegame"
sort: 3
related: ["gameserver/mindustry/add-admin", "gameserver/mindustry/add-mods", "gameserver/mindustry/create-backup", "gameserver/mindustry/download-savegame"]
---

In Mindustry a save is a single file with the extension `.msav`. Your server reads it from the folder `/config/saves/`.

> [!NOTE]
> There is **no world name field** in any configuration. The so-called slot is simply the file name without the `.msav` extension. So the file `myworld.msav` is loaded with the command `load myworld`.

## Upload the savegame

1. **Stop the server**\
   Stop your server via the dashboard. If a game is running, the server might otherwise overwrite your file with an auto-save.

2. **Connect via SFTP**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection).

3. **Open the directory**\
   Change into the following directory:

   ```text
   /config/saves/
   ```

   > [!NOTE]
   > If the folder does not exist yet, create it. The spelling must be exactly `config/saves` – your server runs on Linux and is case sensitive.

4. **Upload the file**\
   Upload your `.msav` file directly into this folder. Do not create subfolders – the server only reads files that sit directly in the folder.

   > [!TIP]
   > Use a short file name without spaces, for example `myworld.msav`. You will later use that name without the extension as the slot.

5. **Start the server**\
   Start your server via the dashboard.

6. **Open the console**\
   Open the **console** of your server in the dashboard.

7. **List the saves**\
   Check whether your save was detected:

   ```text
   saves
   ```

   The server lists all slots it found, without the extension.

8. **Load the save**\
   If a game is already running, end it first with `stop`. Then load your save:

   ```text
   load myworld
   ```

   Your server then hosts the loaded state and players can join.

> [!WARNING]
> **Caution**
>
> Loading a different save replaces the running game. Create a [backup](/tutorials/gameserver/mindustry/create-backup) first or download the current state in case you want to switch back.

> [!IMPORTANT]
> If the server reports `No (valid) save data found for slot.`, either the slot name is wrong or the file is damaged or was uploaded incompletely. Check the spelling with `saves` and re-upload the file if in doubt.

## Load a save automatically on startup

To make your server load the same save on its own after a restart, store a startup command in the **console**:

```text
config startCommands load myworld
```

> [!WARNING]
> **Caution**
>
> Do **not** put the command in quotation marks. Mindustry stores everything after the setting name literally – quotation marks would be saved along with it and the startup command would fail on the next start.

> [!NOTE]
> Separate multiple startup commands with a comma, for example `config startCommands load myworld,pause off`. The setting is saved immediately and applies from the next server start onwards.

## Find your local savegame

Your singleplayer saves are stored on your PC in the Mindustry data directory:

| System | Path |
|--------|------|
| Windows | `%AppData%\Mindustry\saves\` |
| Linux | `~/.local/share/Mindustry/saves/` |
| macOS | `~/Library/Application Support/Mindustry/saves/` |

> [!WARNING]
> **Steam version**
>
> The Steam version places its data directory **inside the game folder**. You will find the saves there under `saves/saves/` within your Mindustry installation folder, not in the paths listed above.

> [!IMPORTANT]
> Server saves and singleplayer saves use the same `.msav` format. Whether a singleplayer save can be continued on a dedicated server one to one is, however, not officially documented. Always work with copies and create a [backup](/tutorials/gameserver/mindustry/create-backup) beforehand.

## Add a custom map

Maps are not saves but a separate file type – they live in a different folder, although they also use the `.msav` extension.

1. **Upload the map**\
   Upload the `.msav` file of your map via [SFTP](/tutorials/gameserver/establish-sftp-connection) into the following directory:

   ```text
   /config/maps/
   ```

2. **Reload the maps**\
   Enter the following in the **console** of your dashboard:

   ```text
   reloadmaps
   ```

3. **Check the map**\
   List all custom maps:

   ```text
   maps custom
   ```

4. **Start the map**\
   End any running game with `stop` and then start your map:

   ```text
   host my_map
   ```

   > [!NOTE]
   > Spaces in the map name may be written as underscores, and the map name is not case sensitive. If the server reports `No map with name '...' found.`, check the name with `maps custom`.

> [!WARNING]
> **Caution**
>
> Starting a map with `host` begins a new game. Your previous progress is only kept if you saved it beforehand with `save <slot>`.
