---
slug: "setup-coop-server"
language: "en"
title: "How to Set Up a Co-Op Server on Your Insurgency: Sandstorm Server"
description: "Set up a co-op server on an Insurgency: Sandstorm server"
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
short_title: "Set Up Co-Op Server"
sort: 21
related: ["gameserver/insurgency-sandstorm/set-map-cycle", "gameserver/insurgency-sandstorm/set-server-password", "gameserver/insurgency-sandstorm/team-kill-settings", "gameserver/insurgency-sandstorm/use-rcon"]
---

In co-op mode (e.g. **Checkpoint**) you play together with other players against AI enemies. To do this you set a co-op scenario and adjust the bot and mode settings in `Game.ini`.

## Step 1: Set the co-op scenario

1. **Open dashboard**\
   Open the dashboard of your server and navigate to the **Settings**.

2. **Set scenario and map**\
   In the **Scenario Name** field, enter a checkpoint scenario, e.g.:

   ```text
   Scenario_Refinery_Checkpoint_Security
   ```

   Set the matching map in the **Map** field (here `Refinery`). A full list can be found in [Change Scenario](/tutorials/gameserver/insurgency-sandstorm/change-scenario).

## Step 2: Adjust the co-op settings

1. **Stop the server**\
   Stop your server via the dashboard.

2. **Connect via SFTP**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection).

3. **Open Game.ini**\
   The `Game.ini` file is located in the `Insurgency/Saved/Config/LinuxServer/` directory. Open it.

4. **Add the co-op settings**\
   Add the following section and adjust the values:

   ```ini
   [/Script/Insurgency.INSCoopMode]
   AIDifficulty=1
   bUseVehicleInsertion=True
   MinimumEnemies=5
   MaximumEnemies=40
   bBots=True
   FriendlyBotQuota=8
   MaxPlayersToScaleEnemyCount=8
   ```

   | Setting | Default | Description |
   |---------|---------|-------------|
   | `AIDifficulty` | `1` | AI difficulty from easy (`0`) to hard (`1`) |
   | `bUseVehicleInsertion` | `True` | Enemies arrive by vehicle |
   | `MinimumEnemies` | `5` | Minimum number of enemy bots |
   | `MaximumEnemies` | `40` | Maximum number of enemy bots |
   | `bBots` | `True` | Enables AI bots in co-op mode |
   | `FriendlyBotQuota` | `8` | Fills the player team with bots |
   | `MaxPlayersToScaleEnemyCount` | `8` | Scales the enemy count to the player/bot count |

5. **Adjust checkpoint settings (optional)**\
   For the Checkpoint mode you can additionally use the following section:

   ```ini
   [/Script/Insurgency.INSCheckpointGameMode]
   DefendTimer=90
   DefendTimerFinal=180
   RetreatTimer=10
   RespawnDPR=0.1
   RespawnDelay=20
   PostCaptureRushTimer=30
   bForceSoloWaves=True
   ```

   | Setting | Default | Description |
   |---------|---------|-------------|
   | `DefendTimer` | `90` | Time to defend against the counterattack |
   | `DefendTimerFinal` | `180` | Extension of the counterattack on the final point |
   | `RetreatTimer` | `10` | Time before bots retreat after a counterattack |
   | `RespawnDPR` | `0.1` | "Dead player ratio" before the bot team respawns |
   | `RespawnDelay` | `20` | Bot respawn delay |
   | `PostCaptureRushTimer` | `30` | Time bots rush the cache after destruction |
   | `bForceSoloWaves` | `True` | Enables the reinforcement waves system from local play |

6. **Start the server**\
   Save the file and start your server.

> [!TIP]
> You can find more bot settings in [Add Bots](/tutorials/gameserver/insurgency-sandstorm/add-bots).
