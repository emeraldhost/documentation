---
slug: "change-gamemode-settings"
language: "en"
title: "How to Change the Game Mode Settings on Your Insurgency: Sandstorm Server"
description: "Change the game mode settings on an Insurgency: Sandstorm server"
tags: []
date: "2026-06-23"
visibility: "public"
cta: "gameserver"
product_keys: ["insurgency-sandstorm"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Change Gamemode Settings"
sort: 6
related: ["gameserver/insurgency-sandstorm/add-mutators", "gameserver/insurgency-sandstorm/additional-parameters", "gameserver/insurgency-sandstorm/change-map", "gameserver/insurgency-sandstorm/change-max-players"]
---

Each game mode in Insurgency: Sandstorm has its own settings – for example round count, round duration, wave size or supply points. These are configured in `Game.ini`.

1. **Stop the server**\
   Stop your server via the dashboard.

2. **Connect via SFTP**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection).

3. **Open Game.ini**\
   The `Game.ini` file is located in the `Insurgency/Saved/Config/LinuxServer/` directory. Open it.

4. **Add the section and settings**\
   Add the appropriate section (header in square brackets) and list the desired settings below it – each on its own line.

5. **Start the server**\
   Save the file and start your server.

> [!WARNING]
> Only edit `Game.ini` while the server is stopped. Make sure each value is placed under the **correct** section header.

## General settings

These values apply across all modes.

### `[/Script/Insurgency.INSGameMode]`

| Setting | Default | Description |
|---------|---------|-------------|
| `ObjectiveCaptureTime` | varies | How long it takes to capture a territorial objective |
| `ObjectiveResetTime` | `-1` | How long progress decays with no one on the point (`-1` disables) |
| `ObjectiveSpeedup` | `0.25` | Additional capture speed-up per player on the point |
| `ObjectiveMaxSpeedupPlayers` | `4` | Maximum players taken into account for the speed-up |

### `[/Script/Insurgency.INSMultiplayerMode]`

| Setting | Default | Description |
|---------|---------|-------------|
| `MinimumPlayers` | `1` | Minimum players per team to start the game |
| `RoundLimit` | varies | Maximum number of rounds |
| `WinLimit` | varies | Rounds required for victory |
| `GameTimeLimit` | `-1` | Maximum game duration (`-1` disables) |
| `PreRoundTime` | `10` | "Freeze time" at the start of a round |
| `RoundTime` | varies | Round duration |
| `OverTime` | `60` | Extension when an objective is contested at round end |
| `bAllowPlayerTeamSelect` | `True` | Allows players to switch teams |
| `bBots` | `False` | Enables bots in versus modes |
| `BotQuota` | varies | Number of bots per team |
| `InitialSupply` | `15` | Starting supply points |
| `MaximumSupply` | `15` | Maximum earnable supply points |

## Mode-specific sections

Each game mode has its own section with additional settings:

| Game mode | Section header |
|-----------|----------------|
| Push | `[/Script/Insurgency.INSPushGameMode]` |
| Frontline | `[/Script/Insurgency.INSFrontlineGameMode]` |
| Skirmish | `[/Script/Insurgency.INSSkirmishGameMode]` |
| Survival | `[/Script/Insurgency.INSSurvivalGameMode]` |
| Outpost | `[/Script/Insurgency.INSOutpostGameMode]` |
| Checkpoint (co-op) | `[/Script/Insurgency.INSCheckpointGameMode]` |
| Co-op general | `[/Script/Insurgency.INSCoopMode]` |
| Defusal | `[/Script/Insurgency.INSDefuseGameMode]` |

> [!NOTE]
> A full overview of all mode-specific settings with default values can be found in the official [Server Admin Guide](https://mod.io/g/insurgencysandstorm/r/server-admin-guide). For co-op servers see [Set Up a Co-Op Server](/tutorials/gameserver/insurgency-sandstorm/setup-coop-server), for bot settings see [Add Bots](/tutorials/gameserver/insurgency-sandstorm/add-bots).
