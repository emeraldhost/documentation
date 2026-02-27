---
description: Change the day/night speed on a Palworld server
---

# How to Change the Day/Night Speed on Your Palworld Server

You can adjust the speed of the day-night cycle separately for day and night.

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

4. <b>Adjust speed</b><br>
   Find the parameters `DayTimeSpeedRate` and `NightTimeSpeedRate`:

   ```
   DayTimeSpeedRate=1.000000
   NightTimeSpeedRate=1.000000
   ```

5. <b>Start the server</b><br>
   Start your server.

**Examples:**

| Value | Description |
|-------|-------------|
| `0.5` | Twice as long day/night |
| `1.0` | Default |
| `2.0` | Half as long day/night |

:::: tip Tip
A lower value means longer days/nights, a higher value means shorter ones.
::::
