---
slug: "change-scenario-settings"
language: "en"
title: "How to Change the Scenario Settings on Your Arma Reforger Server"
description: "Change gameplay rules such as time of day, weather, XP, faction limits and Conflict supplies on an Arma Reforger server via the missionHeader"
tags: []
date: "2026-10-02"
visibility: "public"
cta: "gameserver"
product_keys: ["arma-reforger"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Change Scenario Settings"
sort: 17
related: ["gameserver/arma-reforger/change-scenario", "gameserver/arma-reforger/configure-server", "gameserver/arma-reforger/set-up-game-master", "gameserver/arma-reforger/disable-ai"]
---
Every scenario comes with its own basic settings, e.g., the starting time, the weather or the XP multiplier. With the `missionHeader` entry in `config.json`, you override these values for your server. This lets you adjust gameplay rules without changing the scenario itself.

You choose which scenario runs on your server in the dashboard. You can find out how in the guide [Change Scenario](/tutorials/gameserver/arma-reforger/change-scenario).

## How the missionHeader Works

The `missionHeader` is located in `config.json` in the root directory of your server, inside `"game"` → `"gameProperties"`. All values you enter there replace the corresponding values from the scenario's header. Values you do not enter are still taken from the scenario.

> [!NOTE]
> On every server start, the dashboard overwrites the fields from the **Settings** (e.g., Server Name, Scenario ID or Battle-Eye) as well as some fixed values such as `fastValidation`. It leaves the `missionHeader` unchanged, so your entries are kept after a restart. You can find an overview of all entries in `config.json` in the guide [Configure Server](/tutorials/gameserver/arma-reforger/configure-server).

> [!WARNING]
> An entry only takes effect if the scenario or game mode supports it. The Conflict settings further below, for example, only work in Conflict scenarios.

## How to Add the missionHeader

1. **Stop the server**\
   Stop your server via the dashboard.

2. **Connect via SFTP**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection).

3. **Open config.json**\
   Open the file `config.json` in the root directory and find the `"gameProperties"` section inside `"game"`.

4. **Add the missionHeader**\
   Add the `"missionHeader"` entry with the desired settings inside `"gameProperties"`. Put a comma after the previous entry. If there already is a `"missionHeader"`, add the settings there.

   > [!TIP]
   > **Example**
   >
   > ```json
   > "gameProperties": {
   >   "missionHeader": {
   >     "m_sName": "My Conflict Server",
   >     "m_sDetails": "No teamkilling, no spawn camping. Have fun!",
   >     "m_bOverrideScenarioTimeAndWeather": true,
   >     "m_iStartingHours": 7,
   >     "m_iStartingMinutes": 30,
   >     "m_fDayTimeAcceleration": 2,
   >     "m_fNightTimeAcceleration": 6,
   >     "m_bRandomStartingWeather": true,
   >     "m_fXpMultiplier": 2
   >   }
   > }
   > ```

   Leave the other entries in `"gameProperties"` unchanged.

   > [!TIP]
   > Check the file with a JSON formatter like [JSONLint](https://jsonlint.com/) after editing – a single missing or extra comma is enough to prevent the server from starting.

5. **Start the server**\
   Save the file and start your server.

## General Settings

These entries apply to all scenarios, as long as the scenario supports them:

| Entry | Description |
|-------|-------------|
| `m_sName` | Displayed name of the scenario |
| `m_sDetails` | Detailed description of the scenario, e.g., your server rules |
| `m_bOverrideScenarioTimeAndWeather` | `true` = the scenario uses the time of day and weather from the `missionHeader`, if it allows it |
| `m_iStartingHours` | Starting time: hour |
| `m_iStartingMinutes` | Starting time: minute |
| `m_bRandomStartingDaytime` | `true` = random starting time (overrides `m_iStartingHours` and `m_iStartingMinutes`) |
| `m_fDayTimeAcceleration` | Time acceleration during the day (`1` = 100%, `2` = 200% etc.) |
| `m_fNightTimeAcceleration` | Time acceleration during the night (`1` = 100%, `2` = 200% etc.) |
| `m_bRandomStartingWeather` | `true` = random weather on start |
| `m_bRandomWeatherChanges` | `true` = the weather can change during gameplay |
| `m_fXpMultiplier` | XP multiplier for players, if the game mode uses XP (`1` = default) |
| `m_bMapMarkerEnableDeleteByAnyone` | `true` = map markers can be deleted by anyone in the faction, `false` = only by the player who placed them |
| `m_iMapMarkerLimitPerPlayer` | How many map markers a player can have at the same time |
| `m_aFactionLimits` | Maximum number of players per faction (from version 1.7, see below) |
| `m_sMagazineRepackingRulesOverride` | Rules for repacking magazines, e.g., `"CAN_WITH_SAME_CALIBER"` (from version 1.9) |
| `m_sHydrationRulesOverride` | Rules for hydration (drinking), e.g., `"DISABLED"` (from version 1.9) |

> [!NOTE]
> Time and weather settings only take effect if the scenario allows its time of day and weather to be overridden.

### Set Faction Limits

With `m_aFactionLimits`, you set how many players can join a faction at most. Each faction is specified by its faction key, e.g., `US`, `USSR` or `FIA`:

```json
"missionHeader": {
  "m_aFactionLimits": [
    {
      "m_sFactionKey": "US",
      "m_iFactionLimit": 20
    },
    {
      "m_sFactionKey": "USSR",
      "m_iFactionLimit": 20
    },
    {
      "m_sFactionKey": "FIA",
      "m_iFactionLimit": 0
    }
  ]
}
```

| Value of `m_iFactionLimit` | Meaning |
|----------------------------|---------|
| `0` | Faction is disabled |
| `-1` | No limit |
| greater than `0` | Maximum number of players in this faction |

## Conflict Settings

These entries only work in Conflict scenarios. For the numeric entries, `-1` means that the scenario's default value is used.

| Entry | Description |
|-------|-------------|
| `m_iControlPointsCap` | How many control points are required to win |
| `m_fVictoryTimeout` | How long a faction needs to hold a control point, in seconds |
| `m_iStartingHQSupplies` | How many supplies the main HQ starts with |
| `m_iMinimumBaseSupplies` | Minimum starting supplies in small bases |
| `m_iMaximumBaseSupplies` | Maximum starting supplies in small bases |
| `m_bIgnoreMinimumVehicleRank` | `true` = no rank requirement for spawning vehicles |
| `m_fSupplyOffloadAssistanceReward` | Share of XP for players who unload supplies they did not load themselves |

> [!TIP]
> **Example**
>
> ```json
> "missionHeader": {
>   "m_iStartingHQSupplies": 5000,
>   "m_iMinimumBaseSupplies": 500,
>   "m_iMaximumBaseSupplies": 2000,
>   "m_bIgnoreMinimumVehicleRank": true
> }
> ```

> [!NOTE]
> There is also the entry `m_aCampaignCustomBaseList`, which lets you adjust individual bases. It requires the names of the bases as they are set in the scenario's World Editor. Most servers do not need this entry.

## Saving and Automatic Saves

You set how often the server saves the game state automatically with the `"persistence"` entry. It is also located inside `"gameProperties"`, but outside the `missionHeader`. Follow the steps under [How to Add the missionHeader](#how-to-add-the-missionheader): stop the server, edit `config.json` via SFTP, start the server.

```json
"gameProperties": {
  "persistence": {
    "autoSaveInterval": 15,
    "saveRetention": 5
  }
}
```

Leave the other entries in `"gameProperties"` unchanged.

| Entry | Description |
|-------|-------------|
| `autoSaveInterval` | Interval between automatic saves in minutes (`0` to `60`, default `10`, `0` = disabled) |
| `saveRetention` | How many save points are kept for the current scenario (`1` to `128`, default `10`) |

If you want to disable saving completely, set the `m_eSaveTypes` entry in the `missionHeader` to `0`:

```json
"missionHeader": {
  "m_eSaveTypes": 0
}
```

> [!WARNING]
> With `"m_eSaveTypes": 0`, saving is disabled completely – the server does not create new save points and does not continue the progress after a restart. Create a [backup](/tutorials/gameserver/create-backup) before making such changes.
