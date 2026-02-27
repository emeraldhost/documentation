---
description: Change guild settings on a Palworld server
---

# How to Change Guild Settings on Your Palworld Server

You can adjust the maximum number of guild members, bases, and workers.

:::: warning Warning
Make sure your server is stopped before editing the config file. Changes to the `PalWorldSettings.ini` will otherwise be overwritten by the game.
::::

1. <b>Stop the server</b><br>
   Stop your server via the dashboard.

2. <b>Connect via SFTP</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md).

3. <b>Open config file</b><br>
   Open the file `PalWorldSettings.ini` at:

   ```
   /Pal/Saved/Config/LinuxServer/PalWorldSettings.ini
   ```

4. <b>Adjust guild settings</b><br>
   **Maximum players per guild:**

   ```
   GuildPlayerMaxNum=20
   ```

   **Maximum bases per guild:**

   ```
   BaseCampMaxNumInGuild=4
   ```

   **Maximum workers per base:**

   ```
   BaseCampWorkerMaxNum=15
   ```

5. <b>Start the server</b><br>
   Start your server.

## All parameters

| Parameter | Default | Description |
|-----------|---------|-------------|
| `GuildPlayerMaxNum` | `20` | Maximum players per guild |
| `BaseCampMaxNumInGuild` | `4` | Maximum bases per guild |
| `BaseCampWorkerMaxNum` | `15` | Maximum workers per base |

:::: warning Warning
High values for `BaseCampWorkerMaxNum` can affect server performance.
::::
