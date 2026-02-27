---
description: Change player damage multiplier on a Palworld server
---

# How to Change Player Damage on Your Palworld Server

You can adjust how much damage players deal and take.

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

4. <b>Adjust player damage</b><br>
   **Player attack strength:**

   ```
   PlayerDamageRateAttack=1.000000
   ```

   **Player defense:**

   ```
   PlayerDamageRateDefense=1.000000
   ```

5. <b>Start the server</b><br>
   Start your server.

**Examples:**

| Value | Description |
|-------|-------------|
| `0.5` | Half damage / half defense |
| `1.0` | Default |
| `2.0` | Double damage / double defense |

## All parameters

| Parameter | Default | Description |
|-----------|---------|-------------|
| `PlayerDamageRateAttack` | `1.0` | Player attack strength |
| `PlayerDamageRateDefense` | `1.0` | Player defense |
