---
description: Change the egg hatching time on a Palworld server
---

# How to Change the Egg Hatching Time on Your Palworld Server

You can adjust the time it takes for Pal eggs to hatch.

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

4. <b>Adjust hatching time</b><br>
   Find the parameter `PalEggDefaultHatchingTime` and adjust the value:

   ```
   PalEggDefaultHatchingTime=72.000000
   ```

   The value is in **hours**.

5. <b>Start the server</b><br>
   Start your server.

**Examples:**

| Value | Description |
|-------|-------------|
| `0` | Instant hatching |
| `1.0` | 1 hour |
| `24.0` | 1 day |
| `72.0` | 3 days (default) |
