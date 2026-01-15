---
description: Configure item loss on death on a Hytale server
---

# How to Configure Item Loss on Death on a Hytale Server

You can configure whether and how many items players lose when they die. This setting is configured per world.

:::: tip Note
Stop your server before making changes to configuration files, otherwise they will be overwritten by the server.
::::

## How to Configure Item Loss

1. <b>Stop the Server</b><br>
   Stop your server via the management panel.

2. <b>Open the World Configuration</b><br>
   Connect to your server via [SFTP](../sftp-verbindung-herstellen.md) and navigate to:
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

4. <b>Start the Server</b><br>
   Start your server for the changes to take effect.

:::: warning Warning
The `Death` block does not exist by default in the config.json and must be added manually.
::::

## Available Settings

| Setting | Description |
| ------- | ----------- |
| `ItemsLossMode` | `"None"` = keep items, `"All"` = lose all items, `"Configured"` = use percentages |
| `ItemsAmountLossPercentage` | Percentage of items lost (0.0-100.0) |
| `ItemsDurabilityLossPercentage` | Percentage of durability lost (0.0-100.0) |

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

:::: tip Note
With `ItemsLossMode: "None"` or `"All"`, the percentage settings are ignored. Use `"Configured"` to apply the percentages.
::::
