---
description: Change work speed on a Palworld server
---

# How to Change the Work Speed on Your Palworld Server

You can adjust how fast Pals work at workstations.

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

4. <b>Adjust work speed</b><br>
   Find the parameter `WorkSpeedRate` and adjust the value:

   ```
   WorkSpeedRate=1.000000
   ```

5. <b>Start the server</b><br>
   Start your server.

**Examples:**

| Value | Description |
|-------|-------------|
| `0.5` | Half work speed |
| `1.0` | Default |
| `2.0` | Double work speed |
| `5.0` | 5x work speed |
