---
description: "Adjust the team kill settings on an Insurgency: Sandstorm server"
---

# How to Adjust the Team Kill Settings on Your Insurgency: Sandstorm Server

The team kill settings determine how strictly killing teammates is punished. Low penalties allow riskier playstyles, while stricter rules discourage intentional team killing.

1. <b>Stop the server</b><br>
   Stop your server via the dashboard.

2. <b>Connect via SFTP</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md).

3. <b>Open Game.ini</b><br>
   The `Game.ini` file is located in the `Insurgency/Saved/Config/LinuxServer/` directory. Open it.

4. <b>Add the settings</b><br>
   Add the following section and adjust the desired values:

   ```ini
   [/Script/Insurgency.INSGameMode]
   TeamKillLimit=3
   TeamKillGrace=0.2
   TeamKillReduceTime=90
   ```

   | Setting | Default | Description |
   |---------|---------|-------------|
   | `TeamKillLimit` | `3` | Number of team kills before a player is kicked |
   | `TeamKillGrace` | `0.2` | "Grace timer" in seconds between team kills — additional kills don't count during this time |
   | `TeamKillReduceTime` | `90` | Time in seconds after which a player's team kill count is reduced by 1 |

5. <b>Start the server</b><br>
   Save the file and start your server.

:::: warning Warning
Only edit `Game.ini` while the server is stopped. Changes to a running instance are overwritten on shutdown.
::::
