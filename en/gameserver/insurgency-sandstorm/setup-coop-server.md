---
description: "Set up a co-op server on an Insurgency: Sandstorm server"
---

# How to Set Up a Co-Op Server on Your Insurgency: Sandstorm Server

In co-op mode (e.g. **Checkpoint**) you play together with other players against AI enemies. To do this you set a co-op scenario and adjust the bot and mode settings in `Game.ini`.

## Step 1: Set the co-op scenario

1. <b>Open dashboard</b><br>
   Open the dashboard of your server and navigate to the **Settings**.

2. <b>Set scenario and map</b><br>
   In the **Scenario Name** field, enter a checkpoint scenario, e.g.:

   ```
   Scenario_Refinery_Checkpoint_Security
   ```

   Set the matching map in the **Map** field (here `Refinery`). A full list can be found in [Change Scenario](change-scenario.md).

## Step 2: Adjust the co-op settings

1. <b>Stop the server</b><br>
   Stop your server via the dashboard.

2. <b>Connect via SFTP</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md).

3. <b>Open Game.ini</b><br>
   The `Game.ini` file is located in the `Insurgency/Saved/Config/LinuxServer/` directory. Open it.

4. <b>Add the co-op settings</b><br>
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

   | Setting | Description |
   |---------|-------------|
   | `AIDifficulty` | AI difficulty from easy (`0`) to hard (`1`) |
   | `bUseVehicleInsertion` | Enemies arrive by vehicle |
   | `MinimumEnemies` / `MaximumEnemies` | Minimum/maximum number of enemy bots |
   | `FriendlyBotQuota` | Fills the player team with bots |
   | `MaxPlayersToScaleEnemyCount` | Scales the enemy count to the player/bot count |

5. <b>Adjust checkpoint settings (optional)</b><br>
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

6. <b>Start the server</b><br>
   Save the file and start your server.

:::: tip Tip
You can find more bot settings in [Add Bots](add-bots.md).
::::
