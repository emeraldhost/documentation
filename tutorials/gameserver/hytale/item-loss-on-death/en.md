---
slug: "item-loss-on-death"
language: "en"
title: "How to Configure Item Loss on Death on a Hytale Server"
description: "Configure item loss on death on a Hytale server"
tags: []
date: "2026-01-15"
visibility: "public"
updated: "2026-08-29"
cta: "gameserver"
product_keys: ["hytale"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Item Loss on Death"
sort: 18
related: ["gameserver/hytale/improve-performance", "gameserver/hytale/add-mods", "gameserver/hytale/join-server", "gameserver/hytale/kick-ban-players"]
---

You can configure whether and how many items players lose when they die. This setting is configured per world.

> [!TIP]
> **Note**
>
> Stop your server before making changes to configuration files, otherwise they will be overwritten by the server.

## How to Configure Item Loss

1. **Stop the Server**\
   Stop your server via the dashboard.

2. **Open the World Configuration**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection) and navigate to:

   ```text
   /universe/worlds/<worldname>/config.json
   ```

   Replace `<worldname>` with the name of your world (e.g., `default`).

3. **Add Death Block**\
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

   > [!TIP]
   > Check the file with a JSON formatter like [JSONLint](https://jsonlint.com/) after editing – a single missing or extra comma is enough to stop the server from loading the world configuration.

4. **Start the Server**\
   Start your server for the changes to take effect.

> [!WARNING]
> The `Death` block does not exist by default in the config.json and must be added manually.

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

> [!TIP]
> **Note**
>
> With `ItemsLossMode: "None"` or `"All"`, the percentage settings are ignored. Use `"Configured"` to apply the percentages.
