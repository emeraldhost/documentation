---
description: Pause game time on a Hytale server
---

# How to Pause Game Time on a Hytale Server

You can pause the game time so the time of day no longer changes. This is useful for building servers, events, or screenshots with perfect lighting.

:::: info Note
Stop your server before making changes to configuration files, otherwise they will be overwritten by the server.
::::

## How to Pause Game Time via Configuration

1. <b>Stop the Server</b><br>
   Stop your server via the dashboard.

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
   You can also set the current time before pausing. `GameTime` is a timestamp, and the time of day comes after the `T`:
   ```json
   "GameTime": "0001-01-01T12:00:00Z"
   ```
   (`12:00:00` = noon)

   The date before the `T` may be different on your server. Keep your existing date and only change the time.

   :::: tip Tip
   Check the file with a JSON formatter like [JSONLint](https://jsonlint.com/) after editing — a single missing or extra comma is enough to stop the server from loading the world configuration.
   ::::

5. <b>Start the Server</b><br>
   Start your server for the changes to take effect.

## Example: Permanent Noon

```json
"IsGameTimePaused": true,
"GameTime": "0001-01-01T12:00:00Z"
```

## Example: Permanent Night

```json
"IsGameTimePaused": true,
"GameTime": "0001-01-01T00:00:00Z"
```

## How to Pause Game Time via Command

With a command, you can pause the time while the server is running, without stopping it. Enter the following in the console of your dashboard:

```
time pause --world default
```

Replace `default` with the name of your world. The server replies with `Time cycle paused in "default" at ...`. The command toggles: if you enter it again, time continues (`Time cycle resumed ...`).

If you want to set the state explicitly instead of toggling it, use:

```
world settings timepaused set true --world default
```

With `false` instead of `true`, time continues again. In-game, admins use `/time pause` without `--world`, in which case the command applies to the world you are in.

:::: info Note
While game time is paused, players cannot sleep. The game then shows `Sleeping is disabled because game time is paused in this world!`.
::::

## Change Time via Command

Even with paused time, you can change the time via command:

```
time noon --world default
```

:::: info Note
Console commands are entered without `/` and need the `--world` option, otherwise the server replies with `Sender must be a player or provide the --world option!`. In-game with admin rights, you need the `/` and can leave out `--world` (e.g., `/time noon`).
::::

For more time commands, see [Change Time](change-time.md).
