---
description: Enable or disable PvP on a Hytale server
---

# How to Enable PvP on a Hytale Server

PvP (Player versus Player) allows players to fight against each other. This setting is configured per world.

:::: tip Note
Stop your server before making changes to configuration files, otherwise they will be overwritten by the server.
::::

## How to Enable or Disable PvP via Configuration

1. <b>Stop the Server</b><br>
   Stop your server via the management panel.

2. <b>Open the World Configuration</b><br>
   Connect to your server via [SFTP](../sftp-verbindung-herstellen.md) and navigate to:
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
   - `false` - PvP disabled

4. <b>Start the Server</b><br>
   Start your server for the changes to take effect.

## How to Enable PvP via Command

Admins can also enable or disable PvP directly in-game:

```
/world config pvp true
```

To disable PvP:

```
/world config pvp false
```

:::: tip Note
The command requires admin rights and only affects the current world.
::::
