---
description: Enable or disable PvP on a Hytale server
---

# How to Enable PvP on a Hytale Server

PvP (Player versus Player) allows players to fight against each other. This setting is configured per world and is disabled by default.

:::: info Note
Stop your server before making changes to configuration files, otherwise they will be overwritten by the server.
::::

## How to Enable or Disable PvP via Configuration

1. <b>Stop the Server</b><br>
   Stop your server via the dashboard.

2. <b>Open the World Configuration</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md) and navigate to:
   ```
   /universe/worlds/<worldname>/config.json
   ```
   Replace `<worldname>` with the name of your world (e.g., `default`).

3. <b>Change the PvP Setting</b><br>
   Find the `IsPvpEnabled` setting and change the value:
   ```json
   "IsPvpEnabled": true
   ```
   - `true` - PvP enabled
   - `false` - PvP disabled (default)

   :::: tip Tip
   Check the file with a JSON formatter like [JSONLint](https://jsonlint.com/) after editing — a single missing or extra comma is enough to stop the server from loading the world configuration.
   ::::

4. <b>Start the Server</b><br>
   Start your server for the changes to take effect.

## How to Enable PvP via Command

With a command, you can toggle PvP while the server is running. The change takes effect immediately and is saved in the world configuration, so no restart is needed.

1. <b>Open the Dashboard</b><br>
   Open the dashboard of your Hytale server.

2. <b>Enter the Command</b><br>
   Enter the following command in the console:
   ```
   world config pvp true --world default
   ```
   Replace `default` with the name of your world. To disable PvP, use `false`:
   ```
   world config pvp false --world default
   ```
   The console currently replies with `PvP disabled for default` in both cases, even when you enable PvP. The setting is still saved correctly. To see the actual state, use `world settings pvp --world default`, e.g., `PvP in world "default" is currently true`.

Admins can also toggle PvP directly in-game. Without `--world`, the command applies to the world you are currently in:

```
/world config pvp true
```

:::: info Note
Console commands are entered without `/` and need the `--world` option, otherwise the server replies with `Sender must be a player or provide the --world option!`. In-game, you need the `/` and admin rights, see [Add Admin](add-admin.md).
::::

:::: tip Tip
Alternatively, `world settings pvp set true --world default` also works. This command reports the new value correctly, e.g., `PvP in world "default" set to "true" (was "false")`.
::::
