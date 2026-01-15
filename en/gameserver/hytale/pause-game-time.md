---
description: Pause game time on a Hytale server
---

# How to Pause Game Time on a Hytale Server

You can pause the game time so the time of day no longer changes. This is useful for building servers, events, or screenshots with perfect lighting.

:::: tip Note
Stop your server before making changes to configuration files, otherwise they will be overwritten by the server.
::::

## How to Pause Game Time via Configuration

1. <b>Stop the Server</b><br>
   Stop your server via the management panel.

2. <b>Open the World Configuration</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md) and navigate to:
   ```
   /universe/worlds/<worldname>/config.json
   ```
   Replace `<worldname>` with the name of your world (e.g., `default`).

3. <b>Pause Game Time</b><br>
   Find the `IsGameTimePaused` setting and change the value:
   ```json
   "IsGameTimePaused": true
   ```
   - `true` - Game time is paused
   - `false` - Game time runs normally (default)

4. <b>Set Time (optional)</b><br>
   You can also set the current time before pausing:
   ```json
   "GameTime": 12.0
   ```
   (12.0 = noon)

5. <b>Start the Server</b><br>
   Start your server for the changes to take effect.

## Example: Permanent Noon

```json
"IsGameTimePaused": true,
"GameTime": 12.0
```

## Example: Permanent Night

```json
"IsGameTimePaused": true,
"GameTime": 0.0
```

## Change Time via Command

Even with paused time, you can change the time via command:

```
time noon
```

:::: tip Note
Console commands are entered without `/`. In-game with admin rights, you need the `/` (e.g., `/time noon`).
::::

For more time commands, see [Change Time](change-time.md).
