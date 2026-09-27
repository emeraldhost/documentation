---
description: Change Max View Radius on a Hytale server
---

# How to Change the Max View Radius on a Hytale Server

The max view radius determines the maximum number of chunks loaded around a player. A higher value means greater visibility, but also higher server load.

## How to Change the Max View Radius via Command

1. <b>Open dashboard</b><br>
   Open the dashboard of your Hytale server.

2. <b>Enter the Command</b><br>
   Enter the following command in the console:
   ```
   maxviewradius 16
   ```
   The server applies the new value immediately and saves it to the `config.json`. A restart is not required.

:::: info Note
Console commands are entered without `/`. In-game with admin rights, you need the `/` (e.g., `/maxviewradius 16`).
::::

| Command | Description |
| ------- | ----------- |
| `maxviewradius` | Show the current value |
| `maxviewradius <chunks>` | Set a new value (1 to 32) |
| `maxviewradius reset` | Reset to the default value of 32 |

## How to Change the Max View Radius via Configuration

:::: info Note
Stop your server before making changes to configuration files, otherwise they will be overwritten by the server.
::::

1. <b>Stop the Server</b><br>
   Stop your server via the dashboard.

2. <b>Open the Configuration File</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md) and open the `config.json` file in the root directory.

3. <b>Adjust MaxViewRadius</b><br>
   Find the `MaxViewRadius` setting and change the value:
   ```json
   "MaxViewRadius": 16
   ```

   :::: tip Tip
   Check the file with a JSON formatter like [JSONLint](https://jsonlint.com/) after editing — a single missing or extra comma is enough to stop the server from loading the config.json.
   ::::

4. <b>Start the Server</b><br>
   Start your server for the changes to take effect.

## Recommended Values

| Value | Description |
| ----- | ----------- |
| 32 | Default and maximum - high server load |
| 16 | Good balance between visibility and performance |
| 12 | Recommended by Hytale for performance and gameplay (384 blocks) |
| 10 | Low - for servers with many players or limited RAM |

:::: info Note
The value must be between 1 and 32. The command rejects higher values, and the server automatically sets values outside this range in the `config.json` to the nearest limit on startup (e.g., 64 becomes 32).
::::

:::: warning Warning
A view radius that is too low can negatively affect the player experience, as players will see their surroundings late. A value below 10 is not recommended.
::::
