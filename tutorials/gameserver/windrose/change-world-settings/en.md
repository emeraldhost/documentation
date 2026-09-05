---
slug: "change-world-settings"
language: "en"
title: "How to Change the World Settings on Your Windrose Server"
description: "Change world settings on a Windrose server"
tags: []
date: "2026-04-14"
visibility: "public"
updated: "2026-08-29"
cta: "gameserver"
product_keys: ["windrose"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Change World Settings"
sort: 4
related: ["gameserver/windrose/change-max-players", "gameserver/windrose/change-server-name", "gameserver/windrose/create-backup", "gameserver/windrose/download-savegame"]
---

World settings are stored in the `WorldDescription.json` file inside your server's world folder. You can set difficulty via a preset (`Easy`, `Medium`, `Hard`) or via custom values (`Custom`).

> [!TIP]
> **Recommended**
>
> The easiest way is to set up the world in-game and copy the file to your server – see [Configure settings in-game](#configure-settings-in-game-and-transfer). This way you don't have to write the verbose JSON format by hand.

## Configure settings in-game and transfer

The easiest way: create a world in Windrose with your desired settings and copy the finished file to your server.

1. **Create world in-game**\
   Launch Windrose and create a new world with the desired settings (preset or custom).

2. **Find the local world file**\
   Open the folder of your world on your PC:

   ```text
   %LOCALAPPDATA%\R5\Saved\SaveProfiles\Default\RocksDB_v2\<GameVersion>\Worlds\<WorldID>\
   ```

3. **Stop the server**\
   Stop your server via the dashboard.

4. **Connect via SFTP**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection).

5. **Copy WorldDescription.json**\
   Copy your local `WorldDescription.json` into your server's world folder:

   ```text
   /R5/Saved/SaveProfiles/Default/RocksDB_v2/<GameVersion>/Worlds/<WorldID>/WorldDescription.json
   ```

6. **Adjust the island ID**\
   Set the [island ID](/tutorials/gameserver/windrose/set-island-id) in the dashboard to the value of the copied world so your server loads it.

7. **Start the server**\
   Start your server.

## Edit the file directly on the server

If you prefer editing the file manually:

1. **Stop the server**\
   Stop your server via the dashboard.

2. **Connect via SFTP**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection).

3. **Open WorldDescription.json**\
   Open the file inside the world folder:

   ```text
   /R5/Saved/SaveProfiles/Default/RocksDB_v2/<GameVersion>/Worlds/<WorldID>/WorldDescription.json
   ```

4. **Adjust values**\
   Adjust `WorldPresetType` and/or the individual `WorldSettings` parameters (see tables below).

5. **Start the server**\
   Save the file and start your server.

> [!NOTE]
> You don't have to set `WorldPresetType` to `Custom` manually. As soon as you enter custom values in `WorldSettings` and restart the server, the server automatically switches `WorldPresetType` to `Custom` on the next launch.

## General fields

| Field | Description | Values |
|-------|-------------|--------|
| `IslandId` | Unique ID of the world – must match the folder name and the value in `WorldSettings.json` | Alphanumeric string |
| `WorldName` | Displayed name of the world | Any text |
| `WorldPresetType` | Difficulty preset | `Easy`, `Medium`, `Hard`, `Custom` |

## WorldSettings parameters (only for `Custom`)

> [!WARNING]
> `WorldSettings` are only evaluated if `WorldPresetType` is set to `Custom`. For the presets `Easy`, `Medium` and `Hard`, `WorldSettings` should stay empty – the server uses the preset values.

### Bool parameters

| Parameter | Description | Default |
|-----------|-------------|---------|
| `Coop.SharedQuests` | Quests are automatically completed for all active co-op players when one player finishes them | `true` |
| `EasyExplore` | Known in-game as **"Immersive Exploration"**. When enabled, point-of-interest markers are **hidden** – exploration becomes **harder**. The parameter name is misleading. | `false` |

### Float parameters (multipliers)

| Parameter | Description | Default | Range |
|-----------|-------------|---------|-------|
| `MobHealthMultiplier` | Enemy health | `1.0` | `0.2` – `5.0` |
| `MobDamageMultiplier` | Enemy damage | `1.0` | `0.2` – `5.0` |
| `ShipsHealthMultiplier` | Enemy ship health | `1.0` | `0.4` – `5.0` |
| `ShipsDamageMultiplier` | Enemy ship damage | `1.0` | `0.2` – `2.5` |
| `BoardingDifficultyMultiplier` | Number of enemies to defeat during boarding | `1.0` | `0.2` – `5.0` |
| `Coop.StatsCorrectionModifier` | Scales enemy health and posture loss with the player count | `1.0` | `0.0` – `2.0` |
| `Coop.ShipStatsCorrectionModifier` | Scales enemy ship health with the player count | `0.0` | `0.0` – `2.0` |

### Tag parameters

| Parameter | Description | Default | Values |
|-----------|-------------|---------|--------|
| `CombatDifficulty` | Difficulty of bosses and overall enemy aggressiveness | `Normal` | `Easy`, `Normal`, `Hard` |

## Example: `WorldDescription.json` with Custom preset

Parameters are stored in the file not as plain names, but as `TagName`-style keys. Here is what a full `WorldDescription.json` with a custom preset looks like:

```json
{
    "Version": 1,
    "WorldDescription":
    {
        "islandId": "E24A22C9C8D3448951AFD002162576D5",
        "WorldName": "My World",
        "CreationTime": 6.3910902400911002e+17,
        "WorldPresetType": "Custom",
        "WorldSettings":
        {
            "BoolParameters":
            {
                "{\"TagName\": \"WDS.Parameter.Coop.SharedQuests\"}": true,
                "{\"TagName\": \"WDS.Parameter.EasyExplore\"}": false
            },
            "FloatParameters":
            {
                "{\"TagName\": \"WDS.Parameter.MobHealthMultiplier\"}": 1.0,
                "{\"TagName\": \"WDS.Parameter.MobDamageMultiplier\"}": 1.0,
                "{\"TagName\": \"WDS.Parameter.ShipsHealthMultiplier\"}": 1.0,
                "{\"TagName\": \"WDS.Parameter.ShipsDamageMultiplier\"}": 1.0,
                "{\"TagName\": \"WDS.Parameter.BoardingDifficultyMultiplier\"}": 1.0,
                "{\"TagName\": \"WDS.Parameter.Coop.StatsCorrectionModifier\"}": 1.0,
                "{\"TagName\": \"WDS.Parameter.Coop.ShipStatsCorrectionModifier\"}": 0.0
            },
            "TagParameters":
            {
                "{\"TagName\": \"WDS.Parameter.CombatDifficulty\"}":
                {
                    "TagName": "WDS.Parameter.CombatDifficulty.Normal"
                }
            }
        }
    }
}
```

> [!TIP]
> Check the file with a JSON formatter like [JSONLint](https://jsonlint.com/) after editing – a single missing or extra comma is enough to stop the server from reading the world settings.

> [!WARNING]
> Do not change `IslandId` – the value must match the folder name and the `IslandId` in `WorldSettings.json`. To load a different world, see [Set Island ID](/tutorials/gameserver/windrose/set-island-id).
