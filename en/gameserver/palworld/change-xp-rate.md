---
description: Change the XP rate on a Palworld server
---

# How to Change the XP Rate on Your Palworld Server

You can adjust the experience points multiplier to level up faster or slower.

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

4. <b>Adjust XP rate</b><br>
   Find the parameter `ExpRate` and adjust the value:

   ```
   ExpRate=1.000000
   ```

5. <b>Start the server</b><br>
   Start your server.

**Examples:**

| Value | Description |
|-------|-------------|
| `0.5` | Half XP |
| `1.0` | Default |
| `2.0` | Double XP |
| `5.0` | 5x XP |
