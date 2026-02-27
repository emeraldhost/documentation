---
description: Change HP regeneration on a Palworld server
---

# How to Change HP Regeneration on Your Palworld Server

You can adjust how quickly players and Pals regenerate health.

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

4. <b>Adjust HP regeneration</b><br>
   **Player regeneration:**

   ```
   PlayerAutoHPRegeneRate=1.000000
   ```

   **Player regeneration while sleeping:**

   ```
   PlayerAutoHpRegeneRateInSleep=1.000000
   ```

   **Pal regeneration:**

   ```
   PalAutoHPRegeneRate=1.000000
   ```

   **Pal regeneration while sleeping:**

   ```
   PalAutoHpRegeneRateInSleep=1.000000
   ```

5. <b>Start the server</b><br>
   Start your server.

**Examples:**

| Value | Description |
|-------|-------------|
| `0.5` | Slower regeneration |
| `1.0` | Default |
| `2.0` | Double regeneration |
| `5.0` | 5x regeneration |
