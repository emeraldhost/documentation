---
description: "Configure the kill feed on an Insurgency: Sandstorm server"
---

# How to Configure the Kill Feed on Your Insurgency: Sandstorm Server

The kill feed shows who eliminated whom. You can enable, disable or customize it — for example for a more competitive feel by showing less information.

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
   bKillFeed=False
   bKillFeedSpectator=True
   bKillerInfo=True
   bKillerInfoRevealDistance=False
   ```

   | Setting | Default | Description |
   |---------|---------|-------------|
   | `bKillFeed` | `False` | Enables the kill feed when set to `True` |
   | `bKillFeedSpectator` | `True` | Kill feed for dedicated spectators and replays only |
   | `bKillerInfo` | `True` | Shows the victim information such as the killer and weapon |
   | `bKillerInfoRevealDistance` | `False` | Also reveals the distance of the kill to the victim |

5. <b>Start the server</b><br>
   Save the file and start your server.

:::: warning Warning
Only edit `Game.ini` while the server is stopped. Changes to a running instance are overwritten on shutdown.
::::
