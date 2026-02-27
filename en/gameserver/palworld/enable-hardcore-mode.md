---
description: Enable hardcore mode on a Palworld server
---

# How to Enable Hardcore Mode on Your Palworld Server

In hardcore mode, players cannot respawn and Pals are permanently lost on death.

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

4. <b>Enable hardcore mode</b><br>
   Find the following parameters and set them to `True`:

   ```
   bHardcore=True
   bPalLost=True
   ```

5. <b>Start the server</b><br>
   Start your server.

## All parameters

| Parameter | Default | Description |
|-----------|---------|-------------|
| `bHardcore` | `False` | Players cannot respawn |
| `bPalLost` | `False` | Pals are permanently lost on death |

:::: tip Tip
You can enable the parameters individually, e.g. only `bPalLost=True` without hardcore mode.
::::
