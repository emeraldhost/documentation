---
slug: "change-world-settings"
language: "en"
title: "How to Change the World Settings on Your Space Engineers Server"
description: "Change world settings such as multipliers, meteors, NPCs and sync distance on a Space Engineers server"
tags: []
date: "2026-09-27"
visibility: "public"
cta: "gameserver"
product_keys: ["space-engineers"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Change World Settings"
sort: 17
related: ["gameserver/space-engineers/change-block-limits", "gameserver/space-engineers/configure-trash-removal", "gameserver/space-engineers/enable-experimental-mode", "gameserver/space-engineers/restore-automatic-backup"]
---
Many settings of your world are not available as a field in the dashboard – for example the inventory size, the speed of assemblers and refineries, meteors, NPC ships or the sync distance. You change these settings directly in your world's `Sandbox_config.sbc` file.

> [!NOTE]
> Only the file `/config/Saves/World/Sandbox_config.sbc` applies to your world. When loading, the server uses it to replace the settings from `Sandbox.sbc` – so you do not need to change that file as well.
>
> Do **not** edit the `<SessionSettings>` block in `SpaceEngineers-Dedicated.cfg`. The server only uses this block when it creates a new world. That does not happen on your server, because it always loads the existing world **World**. For the same reason, you do not need to delete a `LastSession.sbl` file either.

## Change these values in the dashboard

> [!WARNING]
> Some values are also stored in `Sandbox_config.sbc`, but the dashboard overwrites them on every start with the values from the **Settings**. Therefore, only change them there:
>
> | Key in the file | Dashboard field | Guide |
> | --- | --- | --- |
> | `GameMode` | **Game Mode** | [Change Game Mode](/tutorials/gameserver/space-engineers/change-game-mode) |
> | `MaxPlayers` | **Max Players** | [Change Maximum Players](/tutorials/gameserver/space-engineers/change-max-players) |
> | `EnableSaving`, `AutoSaveInMinutes` | **Automatic Backup**, **Automatic Backup Interval** | [Set Up Automatic Backups](/tutorials/gameserver/space-engineers/configure-automatic-backups) |
> | `ExperimentalMode` | **Experimental Mode** | [Enable Experimental Mode](/tutorials/gameserver/space-engineers/enable-experimental-mode) |
> | `EnableIngameScripts` | **In-Game Scripts** | [Allow In-Game Scripts](/tutorials/gameserver/space-engineers/enable-ingame-scripts) |

## Change the world settings

> [!WARNING]
> Stop your server before editing the file. The server completely rewrites `Sandbox_config.sbc` every time it saves and overwrites any changes you made while it was running.

1. **Stop the server**\
   Stop your server via the dashboard.

2. **Connect via SFTP**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection), or use the file browser in the dashboard.

3. **Save a copy of the file**\
   Download a copy of the `Sandbox_config.sbc` file from your world folder `/config/Saves/World/`. This copy lets you restore the previous state if something goes wrong while editing. You can also create a [backup](/tutorials/gameserver/create-backup) of the entire world.

4. **Open the file**\
   In your world folder `/config/Saves/World/` open the file `Sandbox_config.sbc`.

5. **Change the value**\
   All world settings are in the `<Settings xsi:type="MyObjectBuilder_SessionSettings">` block. Look for the setting you want from the tables below and only change the value between the tags. For example, to increase the players' inventory size from `3` to `10`, change this line:

   ```xml
   <InventorySizeMultiplier>10</InventorySizeMultiplier>
   ```

   - Switches only accept `true` (on) and `false` (off) – always in lowercase.
   - Write decimal numbers with a dot, for example `0.5`.
   - Write option values such as `NORMAL` exactly as shown in the table, in capital letters.

6. **Start the server**\
   Save the file and start your server.

7. **Check the change**\
   While the world loads, this line must appear in the server console:

   ```text
   Sandbox world configuration file found, overriding checkpoint settings.
   ```

   It shows that the server has applied your `Sandbox_config.sbc`. A little later, the line `Experimental mode reason:` shows whether one of your settings forces experimental mode – if it shows `0`, none does. Learn more under [Forced experimental mode](#forced-experimental-mode).

> [!IMPORTANT]
> If `Sandbox_config.sbc` contains an error – for example a missing opening or closing tag, `True` instead of `true`, a comma instead of a dot or `Normal` instead of `NORMAL` – the server ignores the entire file. The console does not show an error message for this, only the line `Sandbox world configuration file found…` is missing. The server then loads the settings and mods from `Sandbox.sbc` and overwrites `Sandbox_config.sbc` the next time it saves. Your changes – including newly added mods – are lost.
>
> If the line is missing after the start, stop the server, restore your copy of the file and change the values again.

## Multipliers

The **Default** column shows the value of the preinstalled world, the **Selectable in game** column the values the game itself offers in its world settings. A dash means the setting is not available there.

| Key | Meaning | Default | Selectable in game |
| --- | --- | --- | --- |
| `InventorySizeMultiplier` | Inventory size of the players | `3` | `1`, `3`, `5`, `10` |
| `BlocksInventorySizeMultiplier` | Inventory size of blocks such as cargo containers | `1` | `1`, `3`, `5`, `10` |
| `AssemblerSpeedMultiplier` | Speed of the assemblers | `3` | – |
| `AssemblerEfficiencyMultiplier` | Efficiency of the assemblers – the higher, the fewer ingots a component needs | `3` | `1`, `3`, `10` |
| `RefinerySpeedMultiplier` | Speed of the refineries | `3` | `1`, `3`, `10` |
| `WelderSpeedMultiplier` | Welding speed | `2` | `0.5`, `1`, `2`, `5` |
| `GrinderSpeedMultiplier` | Grinding speed | `2` | `0.5`, `1`, `2`, `5` |
| `HackSpeedMultiplier` | Grinding speed of the hand grinder on blocks of enemy or neutral players (hacking) | `0.33` | – |
| `HarvestRatioMultiplier` | Ore yield when drilling | `1` | – |

If you set the multipliers for player inventory, assembler, refinery, welding, grinding or hacking to `0` or less, the server resets them to the default value when loading.

> [!WARNING]
> According to Keen Software House, values beyond the selection in the game are not tested and officially unsupported (*"Values out of the range allowed by the game user interface are not tested and officially unsupported"*, [source](https://www.spaceengineersgame.com/dedicated-servers/)). They can seriously affect the game experience and the performance of your server.

## Players and gameplay

| Key | Meaning | Default |
| --- | --- | --- |
| `Enable3rdPersonView` | Third-person view | `true` |
| `EnableJetpack` | Jetpack | `true` |
| `SpawnWithTools` | Players spawn with tools in their inventory | `true` |
| `AutoHealing` | Automatic healing – only in oxygen environments and while the player is not taking damage | `true` |
| `EnableRespawnShips` | Respawn ships as a spawn point | `true` |
| `EnableAutorespawn` | Automatic respawn at the nearest available respawn point | `true` |
| `EnableCopyPaste` | Copying and pasting ships and stations | `false` |
| `WeaponsEnabled` | Weapons | `true` |
| `ThrusterDamage` | Damage from thrusters | `true` |
| `EnableOxygen` | Oxygen | `true` |
| `EnableOxygenPressurization` | Airtightness of rooms | `true` |
| `EnableContainerDrops` | Drop containers (unknown signals) | `true` |
| `FamilySharing` | Joining with accounts from Steam Family Sharing – with `false`, the server rejects such accounts | `true` |
| `EnableSunRotation` | Sun rotation (day and night) | `true` |
| `SunRotationIntervalMinutes` | Duration of one sun rotation in minutes | approx. `120` (in the file `119.999992`) |

## Meteors and NPCs

| Key | Meaning | Default |
| --- | --- | --- |
| `EnvironmentHostility` | Frequency and intensity of meteor showers: `SAFE` (none), `NORMAL`, `CATACLYSM` or `CATACLYSM_UNREAL` – increasing in this order | `SAFE` |
| `CargoShipsEnabled` | NPC cargo ships | `true` |
| `EnableEncounters` | Random encounters in space | `true` |
| `EnableDrones` | NPC drones | `true` |
| `MaxDrones` | Maximum number of drones at the same time | `5` |
| `EnableWolfs` | Wolves | `false` |
| `EnableSpiders` | Spiders | `false` |

Wolves and spiders do not force experimental mode.

## View and sync distance

| Key | Meaning | Default | Range |
| --- | --- | --- | --- |
| `ViewDistance` | View distance in meters | `15000` | 1000–50000 |
| `SyncDistance` | Distance in meters up to which the server synchronizes ships, stations and objects around a player | `3000` | 1000–20000 |

The server sets values outside these ranges to the nearest limit when loading.

> [!WARNING]
> According to Keen, a high `SyncDistance` can slow down the server drastically. Values above `3000` also force experimental mode.

> [!NOTE]
> If [crossplay](/tutorials/gameserver/space-engineers/enable-crossplay) is enabled on your server, the server limits `SyncDistance` to at most `2000` and `MaxFloatingObjects` to at most `50` when loading, among other things. It also turns `EnableContainerDrops` off.

## Forced experimental mode

> [!WARNING]
> Some settings turn [experimental mode](/tutorials/gameserver/space-engineers/enable-experimental-mode) on when loading – even if it is set to `false` in the dashboard. The server console shows which setting is responsible, for example:
>
> ```text
> Experimental mode reason: ExperimentalMode, SyncDistance
> ```
>
> `ExperimentalMode` is included in the line because the server has turned experimental mode on. What matters are the other names, in the example `SyncDistance`. If your server should run without experimental mode, change these settings so that none of the conditions from the table below applies anymore.

| Setting | Forces experimental mode at |
| --- | --- |
| `SyncDistance` | more than `3000` |
| `SunRotationIntervalMinutes` | `29` or less |
| `MaxFloatingObjects` | more than `100` |
| `TotalBotLimit` | more than `32` |
| `ProceduralDensity` | more than `0.35` |
| `PhysicsIterations` | any value other than `8` |
| `TotalPCU` | more than `600000` |
| `BlockLimitsEnabled` | `NONE` |
| `AdaptiveSimulationQuality` | `false` |
| `EnableSpectator`, `PermanentDeath`, `ResetOwnership`, `EnableSubgridDamage`, `StationVoxelSupport`, `EnableSupergridding` | `true` |
| **Max Players** (dashboard) | more than `16` |
| **In-Game Scripts** (dashboard) | `true` |

In the console, the settings appear under their name from the file. Exceptions: `EnableSupergridding` is shown as `SupergriddingEnabled`, **Max Players** as `MaxPlayers` and **In-Game Scripts** as `EnableIngameScripts`. For more on `TotalPCU` and `BlockLimitsEnabled`, see [Change the block and PCU limits](/tutorials/gameserver/space-engineers/change-block-limits).
