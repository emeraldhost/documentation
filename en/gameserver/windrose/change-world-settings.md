---
description: Change world settings on a Windrose server
---

# How to Change the World Settings on Your Windrose Server

World settings are stored in the `WorldDescription.json` file inside your server's world folder. You can set difficulty via a preset (`Easy`, `Medium`, `Hard`) or via custom values (`Custom`).

:::: tip Recommended
The easiest way is to set up the world in-game and copy the file to your server — see [Configure settings in-game](#configure-settings-in-game-and-transfer). This way you don't have to write the verbose JSON format by hand.
::::

## Configure settings in-game and transfer

The easiest way: create a world in Windrose with your desired settings and copy the finished file to your server.

1. <b>Create world in-game</b><br>
   Launch Windrose and create a new world with the desired settings (preset or custom).

2. <b>Find the local world file</b><br>
   Open the folder of your world on your PC:

   ```
   %LOCALAPPDATA%\R5\Saved\SaveProfiles\Default\RocksDB_v2\<GameVersion>\Worlds\<WorldID>\
   ```

3. <b>Stop the server</b><br>
   Stop your server via the dashboard.

4. <b>Connect via SFTP</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md).

5. <b>Copy WorldDescription.json</b><br>
   Copy your local `WorldDescription.json` into your server's world folder:

   ```
   /R5/Saved/SaveProfiles/Default/RocksDB_v2/<GameVersion>/Worlds/<WorldID>/WorldDescription.json
   ```

6. <b>Adjust the island ID</b><br>
   Set the [island ID](set-island-id.md) in the dashboard to the value of the copied world so your server loads it.

7. <b>Start the server</b><br>
   Start your server.

## Edit the file directly on the server

If you prefer editing the file manually:

1. <b>Stop the server</b><br>
   Stop your server via the dashboard.

2. <b>Connect via SFTP</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md).

3. <b>Open WorldDescription.json</b><br>
   Open the file inside the world folder:

   ```
   /R5/Saved/SaveProfiles/Default/RocksDB_v2/<GameVersion>/Worlds/<WorldID>/WorldDescription.json
   ```

4. <b>Adjust values</b><br>
   Adjust `WorldPresetType` and/or the individual `WorldSettings` parameters (see tables below).

5. <b>Start the server</b><br>
   Save the file and start your server.

:::: info Note
You don't have to set `WorldPresetType` to `Custom` manually. As soon as you enter custom values in `WorldSettings` and restart the server, the server automatically switches `WorldPresetType` to `Custom` on the next launch.
::::

## General fields

| Field | Description | Values |
|-------|-------------|--------|
| `IslandId` | Unique ID of the world — must match the folder name and the value in `WorldSettings.json` | Alphanumeric string |
| `WorldName` | Displayed name of the world | Any text |
| `WorldPresetType` | Difficulty preset | `Easy`, `Medium`, `Hard`, `Custom` |

## WorldSettings parameters (only for `Custom`)

:::: warning Warning
`WorldSettings` are only evaluated if `WorldPresetType` is set to `Custom`. For the presets `Easy`, `Medium` and `Hard`, `WorldSettings` should stay empty — the server uses the preset values.
::::

### Bool parameters

| Parameter | Description | Default |
|-----------|-------------|---------|
| `Coop.SharedQuests` | Quests are automatically completed for all active co-op players when one player finishes them | `true` |
| `EasyExplore` | Known in-game as **"Immersive Exploration"**. When enabled, point-of-interest markers are **hidden** — exploration becomes **harder**. The parameter name is misleading. | `false` |

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

:::: warning Warning
Do not change `IslandId` — the value must match the folder name and the `IslandId` in `WorldSettings.json`. To load a different world, see [Set Island ID](set-island-id.md).
::::
