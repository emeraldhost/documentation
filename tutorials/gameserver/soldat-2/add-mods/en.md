---
slug: "add-mods"
language: "en"
title: "How to Add Mods to Your Soldat 2 Server"
description: "Add mods, custom maps and scripts to a Soldat 2 server"
tags: []
date: "2026-07-31"
visibility: "public"
cta: "gameserver"
product_keys: ["soldat-2"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Add Mods"
sort: 2
related: ["gameserver/soldat-2/add-admin", "gameserver/soldat-2/create-backup", "gameserver/soldat-2/join-server", "gameserver/soldat-2/kick-ban-players"]
---

Soldat 2 has no workshop and no mod package format. Instead, practically everything that makes up the game exists as an individual file inside the server directory – maps, game modes, modifiers, map cycles and scripts. You upload them via [SFTP](/tutorials/gameserver/establish-sftp-connection) and hook them up through the configuration or the console.

> [!WARNING]
> Whether custom maps, modifiers and scripts are transferred to your players automatically is not documented. To be safe, also hand the files you upload to the server directly to your players – that way everyone is on the same state.

## The folder structure

All folders are located in the main directory of your server:

| Folder | Contents |
|--------|----------|
| `Levels/` | Maps as JSON files, each inside its own subfolder |
| `Modifiers/Custom/` | Modifiers – change objects, weapon values and gameplay parameters |
| `Rules/Custom/` | Game modes and round rules |
| `Scripts/Custom/` | Custom C# scripts |
| `Cycles/Custom/` | Map cycles |

> [!NOTE]
> Maps in Soldat 2 are `.json` files – not `.pms` files like in the first Soldat. Files from the predecessor do not work here.

## Add custom maps

1. **Download the map**\
   Download the map you want. A large collection can be found at `tms2.jrgp.org`.

2. **Stop the server**\
   Stop your server via the **dashboard**.

3. **Upload the map**\
   Upload the map into a subfolder of `Levels/` via [SFTP](/tutorials/gameserver/establish-sftp-connection), keeping the structure it ships with:

   ```text
   Levels/<folder>/<mapname>.json
   ```

4. **Start the server**\
   Start your server.

5. **Load the map**\
   Open the console in the game and load the map with a game mode – the game mode is named exactly like the matching file in `Rules/`:

   ```text
   rcon loadmap dm_epitaph Deathmatch
   ```

> [!WARNING]
> The map name is given **without a path and without the `.json` extension**. The spelling is case sensitive – on your Linux server that matters. `rcon listmaps` shows which maps the server knows about.

## Add modifiers

Modifiers are the quickest way to change the gameplay: they override the values of objects, weapons and gameplay parameters.

1. **Stop the server**\
   Stop your server via the **dashboard**.

2. **Look at the reference file**\
   Open the file `Modifiers/_default.json` via [SFTP](/tutorials/gameserver/establish-sftp-connection). It contains all default values and serves as a reference – **do not edit it**.

3. **Create your own modifier**\
   Create a new file:

   ```text
   Modifiers/Custom/MyModifier.json
   ```

4. **Enter your values**\
   Only enter the values you want to change. The parameters live in the `"Objects"` section. Everything you leave out keeps its default value.

5. **Start the server**\
   Save the file and start your server.

6. **Enable the modifier**\
   Open the console and enable the modifier by its file name without `.json`:

   ```text
   rcon addmodifier MyModifier
   rcon restart
   ```

> [!NOTE]
> **Extend lists instead of replacing them**
>
> For values that contain a list you can add or remove single entries instead of rewriting the whole list: a leading `+` adds an entry, a `-` removes it.

> [!WARNING]
> `rcon addmodifier` only takes effect after a `rcon restart` of the round. Use `rcon removemodifier <name>` to turn a modifier off again.

## Custom game modes through rule files

Game modes and round rules are JSON files inside `Rules/Custom/`. They control, for example, how long a round lasts and how many points are needed to win:

| Key | Meaning |
|-----|---------|
| `Match.MatchSecs` | Round duration in seconds |
| `Match.ScoreLimit` | Score limit at which the round ends |
| `GameScript` | Name of the C# script loaded for this game mode |

1. **Stop the server**\
   Stop your server via the **dashboard**.

2. **Create a rule file**\
   Copy an existing file from `Rules/` as a template and save it under a new name:

   ```text
   Rules/Custom/MyMode.json
   ```

3. **Adjust the values**\
   Change the values you want.

4. **Reference the mode**\
   For your mode to be played, enter its file name without `.json` under `"Rules"` in your map rotation – see [Set up a map rotation](#set-up-a-map-rotation).

5. **Start the server**\
   Save the file and start your server.

> [!TIP]
> You can also test individual rule values while the server is running, without stopping it:
>
> ```text
> rcon set Match.MinimumPlayers 4
> ```
>
> Such changes only apply to the running session.

## Add custom scripts

For custom game logic, Soldat 2 ships a C# scripting system.

1. **Stop the server**\
   Stop your server via the **dashboard**.

2. **Upload the script**\
   Upload your `.cs` file via [SFTP](/tutorials/gameserver/establish-sftp-connection):

   ```text
   Scripts/Custom/MyScript.cs
   ```

3. **Hook up the script**\
   Reference the script through the `GameScript` key in a rule file inside `Rules/Custom/`. Alternatively you can load it through a modifier.

4. **Start the server**\
   Start your server and check the server console in the **dashboard** to see whether the script compiled without errors.

> [!TIP]
> When you change a script you do not have to restart the server. The following command recompiles all scripts:
>
> ```text
> rcon reload
> ```

> [!IMPORTANT]
> Scripts run with the permissions of your server. Only install scripts from sources you trust.

## Set up a map rotation

A map rotation is defined in a cycle file. The server works through the rounds listed in it one after another.

1. **Stop the server**\
   Stop your server via the **dashboard**.

2. **Create a cycle file**\
   Copy an existing file from `Cycles/` as a template and save it under a new name:

   ```text
   Cycles/Custom/MyRotation.json
   ```

3. **Add the rounds**\
   Every round consists of a game mode (`"Rules"`) and a map (`"Level"`) – both **without a file extension**:

   ```text
   [{
     "Rules": "Deathmatch",
     "Level": "dm_epitaph"
   }]
   ```

4. **Enable the rotation**\
   Enter the following values into the `autoconfig.ini`:

   ```text
   GamesCycleFile=Cycles/Custom/MyRotation.json
   UseLobby=False
   AllowVoting=False
   ```

5. **Start the server**\
   Save the file and start your server.

> [!WARNING]
> Without `UseLobby=False` and `AllowVoting=False` the lobby and player voting override your rotation – the server then jumps to maps other than the ones in your cycle file.

> [!TIP]
> A rotation can also be loaded while the server is running:
>
> ```text
> rcon loadcycle Cycles/Custom/MyRotation.json
> ```

## Commands while the server is running

| Command | Description |
|---------|-------------|
| `rcon listmaps` | Show available maps |
| `rcon loadmap <mapname> <gamemode>` | Load a map with a game mode |
| `rcon nextmap` | Switch to the next map |
| `rcon addmodifier <name>` | Enable a modifier |
| `rcon removemodifier <name>` | Disable a modifier |
| `rcon restart` | Restart the round – required for a modifier to take effect |
| `rcon loadcycle <file>` | Load a map cycle |
| `rcon reload` | Recompile the scripts |

## Editing the autoconfig.ini

> [!IMPORTANT]
> The `autoconfig.ini` is completely rewritten when the server **stops**. Any change you write into the file while the server is running is lost in the process. Only edit the file while the server is stopped.

> [!WARNING]
> The values `Name`, `Port`, `WebSocketsPort`, `WebSocketsRconPort`, `RconPassword`, `MaxPlayers`, `GreetMessage`, `AdminPlayfabId` and `ServerPassword` are written from the **dashboard** into the `autoconfig.ini` on **every server start**. These values therefore belong in the dashboard, not in the file.

> [!TIP]
> Back up your configuration and your custom content before making larger changes: [Create Backup](/tutorials/gameserver/soldat-2/create-backup).
