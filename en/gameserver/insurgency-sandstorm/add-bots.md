---
description: "Add bots to an Insurgency: Sandstorm server"
---

# How to Add Bots to Your Insurgency: Sandstorm Server

Bots (AI enemies and teammates) are useful for filling co-op modes such as Checkpoint or adjusting the difficulty. The bot settings are configured in the `Game.ini` file.

## Configure bots

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
   bUseVehicleInsertion=True
   MinimumEnemies=5
   MaximumEnemies=40
   bBots=True
   FriendlyBotQuota=8
   ```

   | Setting | Default | Description |
   |---------|---------|-------------|
   | `bUseVehicleInsertion` | `True` | Whether bots spawn in using vehicles |
   | `MinimumEnemies` | `5` | Minimum number of enemy bots |
   | `MaximumEnemies` | `40` | Maximum number of enemy bots |
   | `FriendlyBotQuota` | `8` | Number of friendly bots in co-op modes |

5. <b>Add the versus settings (optional)</b><br>
   For versus game modes, additionally add:

   ```ini
   [/Script/Insurgency.INSMultiplayerMode]
   bBots=True
   BotQuota=5
   ```

   | Setting | Default | Description |
   |---------|---------|-------------|
   | `bBots` | `True` | Enables bots for versus scenarios |
   | `BotQuota` | `5` | Fills each team with bots up to this value |

6. <b>Start the server</b><br>
   Save the file and start your server.

:::: warning Warning
Only edit `Game.ini` while the server is stopped. Changes to a running instance are overwritten on shutdown.
::::
