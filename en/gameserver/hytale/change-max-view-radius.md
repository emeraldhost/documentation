---
description: Change Max View Radius on a Hytale server
---

# How to Change the Max View Radius on a Hytale Server

The view radius determines how many chunks are loaded around a player. A higher value means greater visibility, but also higher server load.

:::: tip Note
Stop your server before making changes to configuration files, otherwise they will be overwritten by the server.
::::

## How to Change the Max View Radius

1. <b>Stop the Server</b><br>
   Stop your server via the management panel.

2. <b>Open the Configuration File</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md) and open the `config.json` file in the root directory.

3. <b>Adjust MaxViewRadius</b><br>
   Find the `MaxViewRadius` setting and change the value:
   ```json
   "MaxViewRadius": 16
   ```

4. <b>Start the Server</b><br>
   Start your server for the changes to take effect.

## Recommended Values

| Value | Description |
| ----- | ----------- |
| 32 | Default - high server load |
| 16 | Recommended - good balance between visibility and performance |
| 10 | Low - for servers with many players or limited RAM |

:::: warning Warning
A view radius that is too low can negatively affect the player experience, as players will see their surroundings late. A value below 10 is not recommended.
::::
