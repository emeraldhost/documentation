---
slug: "adjust-difficulty"
language: "en"
title: "How to Adjust the Difficulty on Your Enshrouded Server"
description: "Adjust the difficulty on an Enshrouded server"
tags: []
date: "2026-04-15"
visibility: "public"
cta: "gameserver"
product_keys: ["enshrouded"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Adjust Difficulty"
sort: 3
related: ["gameserver/enshrouded/add-admin", "gameserver/enshrouded/add-savegame", "gameserver/enshrouded/change-server-password", "gameserver/enshrouded/control-automatic-updates"]
---

Enshrouded offers five predefined difficulty presets as well as a **Custom** mode that lets you configure every individual game setting.

## Choose a preset

1. **Open dashboard**\
   Open the dashboard of your server.

2. **Open settings**\
   Navigate to the **Settings**.

3. **Select difficulty**\
   Enter the desired value in the **Game Settings Preset** field:

   | Value | Description |
   |-------|-------------|
   | `Default` | Balanced standard experience |
   | `Relaxed` | Fewer enemies, more resources |
   | `Hard` | More and tougher enemies |
   | `Survival` | Additional survival mechanics (hunger, harsher penalties) |
   | `Custom` | All values freely configurable (see below) |

4. **Restart the server**\
   Save the setting and restart your server.

## Configure custom mode

If you set `Game Settings Preset` to `Custom`, you can adjust every value individually via the `enshrouded_server.json` file.

1. **Stop the server**\
   Stop your server via the dashboard.

2. **Connect via SFTP**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection).

3. **Open enshrouded_server.json**\
   Open the file `enshrouded_server.json` in the root directory and adjust the values under the `gameSettings` section.

4. **Start the server**\
   Save the file and start your server.

> [!WARNING]
> Changes in `enshrouded_server.json` will be overwritten if the server is running when saving. Always stop the server before editing.

### Player settings

| Parameter | Range | Description |
|-----------|-------|-------------|
| `playerHealthFactor` | `0.25` – `4.0` | Player health multiplier |
| `playerManaFactor` | `0.25` – `4.0` | Mana multiplier |
| `playerStaminaFactor` | `0.25` – `4.0` | Stamina multiplier |
| `playerBodyHeatFactor` | `0.5` – `2.0` | Body heat multiplier |
| `enableDurability` | `true` / `false` | Equipment can break |
| `enableStarvingDebuff` | `true` / `false` | Starvation debuff when hungry |
| `foodBuffDurationFactor` | Float | Duration of food buffs |
| `fromHungerToStarving` | Nanoseconds | Time before hunger becomes starvation |

### World and enemy settings

| Parameter | Range | Description |
|-----------|-------|-------------|
| `shroudTimeFactor` | Float | Time players can stay in the Shroud |
| `weatherFrequency` | Float | Frequency of weather changes |
| `dayTimeDuration` | Nanoseconds | Length of day |
| `nightTimeDuration` | Nanoseconds | Length of night |
| `enemyHealthFactor` | Float | Enemy health |
| `enemyDamageFactor` | Float | Enemy damage |
| `enemyStaminaFactor` | Float | Enemy stamina |
| `enemyPerceptionRangeFactor` | Float | Enemy perception range |
| `bossHealthFactor` | Float | Boss health |
| `bossDamageFactor` | Float | Boss damage |
| `randomSpawnerAmount` | Float | Number of spawning enemies |
| `aggroPoolAmount` | Float | Enemy aggro pool |
| `threatBonus` | Float | Global threat level |
| `pacifyAllEnemies` | `true` / `false` | Enemies only attack when provoked |

### Resources and progression

| Parameter | Range | Description |
|-----------|-------|-------------|
| `miningDamageFactor` | Float | Mining effectiveness |
| `plantGrowthSpeedFactor` | Float | Plant growth rate |
| `resourceDropStackAmountFactor` | Float | Amount of gathered resources |
| `factoryProductionSpeedFactor` | Float | Factory production speed |
| `experienceCombatFactor` | Float | XP multiplier for combat |
| `experienceMiningFactor` | Float | XP multiplier for mining |
| `experienceExplorationQuestsFactor` | Float | XP multiplier for quests |
| `perkCostFactor` | Float | Resource cost for perks |
| `perkUpgradeRecyclingFactor` | `0.0` – `1.0` | Return when recycling perks |

### Miscellaneous

| Parameter | Values | Description |
|-----------|--------|-------------|
| `tombstoneMode` | `AddBackpackMaterials` etc. | Death behavior |
| `enableGliderTurbulences` | `true` / `false` | Turbulences while gliding |
| `tamingStartleRepercussion` | String | Penalty for startling tamed creatures |
| `curseModifier` | Float | Intensity of curse effects |

> [!TIP]
> Validate your JSON file for syntax errors before starting the server – a single missing comma can cause the server to discard your settings.
