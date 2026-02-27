---
description: Change the Pal capture rate on a Palworld server
---

# How to Change the Pal Capture Rate on Your Palworld Server

You can adjust the capture chance multiplier for catching Pals.

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

4. <b>Adjust capture rate</b><br>
   Find the parameter `PalCaptureRate` and adjust the value:

   ```
   PalCaptureRate=1.000000
   ```

5. <b>Start the server</b><br>
   Start your server.

**Examples:**

| Value | Description |
|-------|-------------|
| `0.5` | Harder to catch |
| `1.0` | Default |
| `2.0` | Double catch chance |
