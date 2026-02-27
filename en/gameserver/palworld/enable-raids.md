---
description: Enable or disable raids on a Palworld server
---

# How to Enable or Disable Raids on Your Palworld Server

You can configure whether enemy invasions on player bases occur.

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

4. <b>Configure raids</b><br>
   Find the parameter `bEnableInvaderEnemy` and set the desired value:

   ```
   bEnableInvaderEnemy=True
   ```

5. <b>Start the server</b><br>
   Start your server.

| Value | Description |
|-------|-------------|
| `True` | Raids enabled (default) |
| `False` | Raids disabled |
