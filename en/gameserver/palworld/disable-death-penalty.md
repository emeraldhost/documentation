---
description: Disable the death penalty on a Palworld server
---

# How to Disable the Death Penalty on Your Palworld Server

You can configure what players lose when they die.

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

4. <b>Adjust death penalty</b><br>
   Find the parameter `DeathPenalty` and set the desired value:

   ```
   DeathPenalty=None
   ```

5. <b>Start the server</b><br>
   Start your server.

**Available values:**

| Value | Description |
|-------|-------------|
| `None` | No loss on death |
| `Item` | Lose items only |
| `ItemAndEquipment` | Lose items and equipment |
| `All` | Lose everything (items, equipment, and Pals) |

:::: info Note
The default value is `All`.
::::
