---
description: Change world settings on a Windrose server
---

# How to Change the World Settings on Your Windrose Server

World settings are configured in the `WorldDescription.json` file. There you can adjust difficulty levels, multipliers and other parameters.

1. <b>Stop the server</b><br>
   Stop your server via the dashboard.

2. <b>Connect via SFTP</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md).

3. <b>Open WorldDescription.json</b><br>
   Open the `WorldDescription.json` file inside your world's directory:

   ```
   /R5/Saved/SaveProfiles/Default/RocksDB/<GameVersion>/Worlds/<WorldID>/WorldDescription.json
   ```

4. <b>Adjust settings</b><br>
   Adjust the desired values (see tables below).

5. <b>Start the server</b><br>
   Save the file and start your server.

## General fields

| Field | Description | Values |
|-------|-------------|--------|
| `IslandId` | Unique world ID. Must match the folder name. | Alphanumeric string |
| `WorldName` | Displayed name of the world | Any text |
| `WorldPresetType` | Preset difficulty level | `Easy`, `Medium`, `Hard`, `Custom` |

## WorldSettings

### Boolean parameters

| Parameter | Description | Default |
|-----------|-------------|---------|
| `CoopQuests` | Enable co-op quests | `true` |
| `EasyExplore` | Easier exploration | `false` |

### Float parameters (multipliers)

| Parameter | Description | Range |
|-----------|-------------|-------|
| `MobHealthMultiplier` | Mob health | `0.2` – `5.0` |
| `MobDamageMultiplier` | Mob damage | `0.2` – `5.0` |
| `ShipHealthMultiplier` | Ship health | `0.4` – `5.0` |
| `ShipDamageMultiplier` | Ship damage | `0.2` – `2.5` |
| `BoardingDifficultyMultiplier` | Boarding difficulty | `0.2` – `5.0` |
| `Coop_StatsCorrectionModifier` | Co-op stats adjustment | `0.0` – `2.0` |
| `Coop_ShipStatsCorrectionModifier` | Co-op ship stats adjustment | `0.0` – `2.0` |

### Tag parameters

| Parameter | Description | Values |
|-----------|-------------|--------|
| `CombatDifficulty` | Combat difficulty | `Easy`, `Normal`, `Hard` |

:::: warning Warning
Do not change the `IslandId` value if you want to keep using the world. The value must match the name of the world folder.
::::

:::: tip Tip
If you set `WorldPresetType` to `Custom`, you can freely adjust the individual parameters.
::::
