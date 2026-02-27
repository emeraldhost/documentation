---
description: Adjust hunger and stamina on a Palworld server
---

# How to Adjust Hunger and Stamina on Your Palworld Server

You can configure how quickly hunger and stamina deplete for players and Pals.

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

4. <b>Adjust values</b><br>
   **Player hunger:**

   ```
   PlayerStomachDecreaceRate=1.000000
   ```

   **Player stamina:**

   ```
   PlayerStaminaDecreaceRate=1.000000
   ```

   **Pal hunger:**

   ```
   PalStomachDecreaceRate=1.000000
   ```

   **Pal stamina:**

   ```
   PalStaminaDecreaceRate=1.000000
   ```

5. <b>Start the server</b><br>
   Start your server.

**Examples:**

| Value | Description |
|-------|-------------|
| `0.5` | Slower depletion (easier) |
| `1.0` | Default |
| `2.0` | Faster depletion (harder) |

:::: info Note
The spelling `Decreace` in the parameter name is intentional and must be used exactly as shown.
::::
