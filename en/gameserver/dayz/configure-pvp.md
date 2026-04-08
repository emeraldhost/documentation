---
description: Configure PvP and PvE on a DayZ server
---

# How to Configure PvP and PvE on Your DayZ Server

You can adjust friendly fire and damage between players via the `serverDZ.cfg`.

1. <b>Stop the server</b><br>
   Stop your server via the dashboard.

2. <b>Connect via SFTP</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md).

3. <b>Open serverDZ.cfg</b><br>
   Open the file `serverDZ.cfg` in the root directory of your server.

4. <b>Adjust settings</b><br>
   Find and adjust the following values:

   ```
   enableCfgGameplayFile = 1;
   disableDamageSystem = 0;
   ```

   | Setting | Description | Values |
   |---------|-------------|--------|
   | `disableDamageSystem` | Damage system (PvP) | `0` = enabled, `1` = disabled |
   | `enableCfgGameplayFile` | Extended gameplay configuration | `0` = off, `1` = on |

5. <b>Start the server</b><br>
   Save the file and start your server.

:::: tip Tip
For a pure **PvE server**, set `disableDamageSystem = 1`. Players will then not be able to damage each other.
::::

:::: info Note
Extended gameplay settings such as mechanics, movement and more can be configured in the `cfggameplay.json` once `enableCfgGameplayFile = 1` is set.
::::
