---
description: Configure item loss on death on a Hytale server
---

# How to Configure Item Loss on Death on a Hytale Server

You can configure whether and how many items players lose when they die. This setting is configured per world.

By default, every world uses the `Default` gameplay rules (setting `"GameplayConfig": "Default"`). With these rules, players drop 50% of each item stack at the place of death, but at least one item. This only applies to items that can be dropped on death, for example ingredients, ores and food. Weapons, armor, tools and blocks like stone or wood stay in the inventory. In addition, the durability of the items drops by 10%.

:::: info Note
Stop your server before making changes to configuration files, otherwise they will be overwritten by the server.
::::

## How to Configure Item Loss

1. <b>Stop the Server</b><br>
   Stop your server via the dashboard.

2. <b>Open the World Configuration</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md) and navigate to:
   ```
   /universe/worlds/<worldname>/config.json
   ```
   Replace `<worldname>` with the name of your world (e.g., `default`).

3. <b>Add Death Block</b><br>
   Find the `"GameplayConfig"` line and add the `Death` block below it:
   ```json
   "Death": {
     "RespawnController": {
       "Type": "HomeOrSpawnPoint"
     },
     "ItemsLossMode": "None",
     "ItemsAmountLossPercentage": 0.0,
     "ItemsDurabilityLossPercentage": 0.0
   }
   ```
   Since more settings follow, the line `"GameplayConfig": "Default",` must end with a comma, and there must also be a comma after the last closing bracket `}` of the `Death` block.

   :::: tip Tip
   Check the file with a JSON formatter like [JSONLint](https://jsonlint.com/) after editing — a single missing or extra comma is enough to stop the server from loading the world configuration.
   ::::

4. <b>Start the Server</b><br>
   Start your server for the changes to take effect.

:::: warning Warning
The `Death` block does not exist by default in the config.json and must be added manually. Once it is present, it fully replaces the death settings of the gameplay rules. Therefore, always specify all settings, as shown in the examples below.
::::

## Available Settings

| Setting | Description |
| ------- | ----------- |
| `RespawnController` | Where players reappear after death: `"HomeOrSpawnPoint"` = the player's own respawn point, otherwise the world spawn point (default), `"WorldSpawnPoint"` = always at the world spawn point |
| `ItemsLossMode` | `"None"` = keep items, `"All"` = drop all items, `"Configured"` = use the percentage from `ItemsAmountLossPercentage` |
| `ItemsAmountLossPercentage` | Percentage of each item stack dropped on death (0.0-100.0). With any value above `0.0`, at least one item per stack is dropped. Only applies with `"Configured"` and only to items that can be dropped on death (e.g., ingredients, ores, food) |
| `ItemsDurabilityLossPercentage` | Percentage of durability items lose on death (0.0-100.0). Applies in every mode |

## Examples

**Keep all items (relaxed):**
```json
"Death": {
  "RespawnController": {
    "Type": "HomeOrSpawnPoint"
  },
  "ItemsLossMode": "None",
  "ItemsAmountLossPercentage": 0.0,
  "ItemsDurabilityLossPercentage": 0.0
}
```

**Lose all items (hardcore):**
```json
"Death": {
  "RespawnController": {
    "Type": "HomeOrSpawnPoint"
  },
  "ItemsLossMode": "All",
  "ItemsAmountLossPercentage": 100.0,
  "ItemsDurabilityLossPercentage": 0.0
}
```

**Lose 50% of items (balanced):**
```json
"Death": {
  "RespawnController": {
    "Type": "HomeOrSpawnPoint"
  },
  "ItemsLossMode": "Configured",
  "ItemsAmountLossPercentage": 50.0,
  "ItemsDurabilityLossPercentage": 25.0
}
```

:::: info Note
With `ItemsLossMode: "None"` or `"All"`, `ItemsAmountLossPercentage` is ignored. Use `"Configured"` to apply the percentage. `ItemsDurabilityLossPercentage`, on the other hand, applies in every mode. If durability should stay unchanged on death, set the value to `0.0`.
::::

:::: tip Tip
Players in Creative mode lose neither items nor durability on death. To return to the default values, remove the `Death` block from the config.json again.
::::
