---
description: Change the Pal spawn rate on a Palworld server
---

# How to Change the Pal Spawn Rate on Your Palworld Server

You can adjust how many Pals spawn on the map.

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

4. <b>Adjust spawn rate</b><br>
   Find the parameter `PalSpawnNumRate` and adjust the value:

   ```
   PalSpawnNumRate=1.000000
   ```

5. <b>Start the server</b><br>
   Start your server.

**Examples:**

| Value | Description |
|-------|-------------|
| `0.5` | Fewer Pals |
| `1.0` | Default |
| `2.0` | Twice as many Pals |

:::: warning Warning
High values can affect server performance.
::::
