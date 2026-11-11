---
slug: "change-world-settings"
language: "en"
title: "How to Change the World Settings of Your Stormforge Server"
description: "Adjust difficulty, death penalty, storms and multipliers of your Stormforge server in settings.json."
tags: []
date: "2026-11-11"
visibility: "public"
cta: "gameserver"
product_keys: ["stormforge"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Change World Settings"
sort: 5
related: ["gameserver/stormforge/change-world-seed", "gameserver/stormforge/pause-world-when-empty", "gameserver/stormforge/reset-world", "gameserver/stormforge/create-backup"]
---

The world settings of your Stormforge server are stored in the `worldSettings` block of the `settings.json` file in your server's main directory. On a dedicated server, players cannot change the world settings from the in-game menu. You change them in the file and then start the server.

## Change the settings in settings.json

1. **Stop the server**\
   Stop your server via the dashboard. Only edit the file while the server is stopped, because the running server rewrites it itself.

2. **Open settings.json**\
   Open the [File Manager](/tutorials/gameserver/use-file-browser) in the dashboard and choose **Edit** in the menu (⋮) next to the `settings.json` file. Alternatively, edit the file via [SFTP](/tutorials/gameserver/establish-sftp-connection):

   ```text
   /settings.json
   ```

3. **Adjust values**\
   Change the desired values in the `worldSettings` block (see the table below). Text values are written in quotes, numbers without. Decimal numbers use a dot, for example `0.5`.

4. **Save and start the server**\
   Save the file and start your server.

## Editable values

| Key | Meaning | Valid values | Default |
| --- | --- | --- | --- |
| `combatDifficulty` | Combat difficulty. The game does not document what the individual levels change. | `Easy`, `Casual`, `Normal`, `Hard` | `Normal` |
| `deathPenalty` | What happens to your items when you die. `KeepAll`: you keep everything. `DropRecoverable`: you drop them and can recover them, the game leaves a bag for that. `LoseAll`: you lose everything. | `KeepAll`, `DropRecoverable`, `LoseAll` | `DropRecoverable` |
| `movingStormsDifficulty` | The chaos storms that sweep across the map and can hit your base. `Off` disables them, `Normal` is the standard. The game does not document what the remaining levels change. | `Off`, `Easy`, `Normal`, `Medium`, `Hard` | `Normal` |
| `enemyHealthScale` | Multiplier for enemy health. `1` is the standard, a smaller value means less health. | Number, e.g. `0.5` to `1.5` | `1` |
| `resourceRate` | Multiplier for the resource rate. `1` is the standard. | Number | `1` |
| `durabilityLossScale` | Multiplier for the durability loss of your equipment. `1` is the standard. | Number | `1` |
| `worldPreset` | Difficulty preset. The game does not document what the individual presets change. | `Easy`, `Casual`, `Normal`, `Hard`, `Custom` | `Normal` |

The seed in the same block is covered in [Change World Seed](/tutorials/gameserver/stormforge/change-world-seed). Whether the world pauses without players is set with a separate key outside of `worldSettings`, see [Pause World When Empty](/tutorials/gameserver/stormforge/pause-world-when-empty).

## Example

Two values are changed in this excerpt of `settings.json`: you keep all items when you die (`deathPenalty`), and enemies have less health (`enemyHealthScale`).

```json
"worldSettings": {
    "seed": "",
    "name": "",
    "combatDifficulty": "Normal",
    "deathPenalty": "KeepAll",
    "resourceRate": 1,
    "worldPreset": "Normal",
    "enemyHealthScale": 0.5,
    "movingStormsDifficulty": "Normal",
    "durabilityLossScale": 1
},
```

> [!WARNING]
> **Invalid values prevent the start**\
> The server stops immediately on an unknown key, a misspelled text value, an empty file or invalid JSON. EmeraldHost catches part of this at start: unknown keys are removed automatically. A file that is not valid JSON is kept as `settings.json.invalid-<date>`, and a new `settings.json` with default values and your values from the dashboard is created. A wrong value such as `"combatDifficulty": "Hart"` is not repaired: the server will not start in that case. So write the values exactly as shown in the table.

## Effect on an existing world

`combatDifficulty`, `enemyHealthScale`, `deathPenalty` and `movingStormsDifficulty` also apply to your existing world after the restart. The seed only affects a newly generated world. For `resourceRate`, `durabilityLossScale` and `worldPreset`, check in the game after the restart whether the change is active.

## Values that are overwritten on every start

EmeraldHost writes these keys into `settings.json` again on every start. Manual changes to them are lost, so change them in the **Config Editor** of the dashboard instead:

| Key | Source |
| --- | --- |
| `worldSettings.name` | Field **Weltname** (world name) in the Config Editor |
| `serverName` | Field **Server Name**, see [Change Server Name](/tutorials/gameserver/stormforge/change-server-name) |
| `password` | Field **Server Passwort** (server password), see [Set Server Password](/tutorials/gameserver/stormforge/set-server-password) |
| `maxPlayers` | Field **Maximale Spieler** (maximum players), see [Change Max Players](/tutorials/gameserver/stormforge/change-max-players) |
| `port` | Game Port of your server from the dashboard |
| `localOnly`, `savesDirectory` | Fixed values (`false` and `saves`) |

`worldPrefabID` is managed as well. This key defines which world is loaded. Only change it if you want to load a different world, see [Add Savegame](/tutorials/gameserver/stormforge/add-savegame). Leave all other keys that are not mentioned here unchanged.
