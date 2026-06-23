---
description: "Configure player voting on an Insurgency: Sandstorm server"
---

# How to Configure Player Voting on Your Insurgency: Sandstorm Server

Player voting lets your server self-moderate: players can kick problematic players by vote — ideal if you don't want to use fixed admins.

1. <b>Stop the server</b><br>
   Stop your server via the dashboard.

2. <b>Connect via SFTP</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md).

3. <b>Open Game.ini</b><br>
   The `Game.ini` file is located in the `Insurgency/Saved/Config/LinuxServer/` directory. Open it.

4. <b>Enable voting</b><br>
   Add the following section:

   ```ini
   [/Script/Insurgency.TeamInfo]
   bVotingEnabled=True
   TeamVoteIssues=/Script/Insurgency.VoteIssueKick
   ```

5. <b>Adjust vote kick (optional)</b><br>
   For detailed settings, add the following section:

   ```ini
   [/Script/Insurgency.VoteIssueKick]
   MinimumPlayersRequired=3
   bRequiresMinimumToStart=True
   MinimumPlayerRatio=0.25
   VotePassRatio=0.75
   MinimumYesNoDifference=2
   VoteTimeout=90
   bCanTargetEnemies=false
   IdleVoteBanDuration=-1
   DefaultVoteBanDuration=120
   ```

   | Setting | Default | Description |
   |---------|---------|-------------|
   | `MinimumPlayersRequired` | `3` | Number of players needed to start a vote |
   | `bRequiresMinimumToStart` | `True` | Whether the minimum number is required before a vote begins |
   | `MinimumPlayerRatio` | `0.25` | Minimum team ratio required to start a vote |
   | `VotePassRatio` | `0.75` | Ratio of "yes" votes required for it to pass |
   | `MinimumYesNoDifference` | `2` | Lead of "yes" over "no" votes required to pass |
   | `VoteTimeout` | `90` | Time in seconds before a vote can be called again |
   | `bCanTargetEnemies` | `false` | Whether enemy players can be targeted by a vote |
   | `IdleVoteBanDuration` | `-1` | Ban duration when voting against idle players. `-1` = kick only |
   | `DefaultVoteBanDuration` | `120` | Ban duration in seconds |

6. <b>Start the server</b><br>
   Save the file and start your server.

:::: warning Warning
Only edit `Game.ini` while the server is stopped. Changes to a running instance are overwritten on shutdown.
::::
