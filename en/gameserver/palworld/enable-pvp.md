---
description: Enable PvP on a Palworld server
---

# How to Enable PvP on Your Palworld Server

You can enable PvP mode so that players can fight each other.

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

4. <b>Enable PvP</b><br>
   Find the parameter `bIsPvP` and set it to `True`:

   ```
   bIsPvP=True
   ```

5. <b>Start the server</b><br>
   Start your server.

## Additional PvP settings

| Parameter | Default | Description |
|-----------|---------|-------------|
| `bEnablePlayerToPlayerDamage` | `False` | Players can damage each other |
| `bEnableFriendlyFire` | `False` | Guild members can damage each other |
| `bCanPickupOtherGuildDeathPenaltyDrop` | `False` | Other guilds can pick up death drops |
