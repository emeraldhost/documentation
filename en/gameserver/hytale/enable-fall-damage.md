---
description: Enable or disable fall damage on a Hytale server
---

# How to Enable Fall Damage on a Hytale Server

Fall damage determines whether players take damage when falling from great heights. This setting is configured per world.

:::: tip Note
Stop your server before making changes to configuration files, otherwise they will be overwritten by the server.
::::

## How to Enable or Disable Fall Damage via Configuration

1. <b>Stop the Server</b><br>
   Stop your server via the management panel.

2. <b>Open the World Configuration</b><br>
   Connect to your server via [SFTP](../sftp-verbindung-herstellen.md) and navigate to:
   ```
   /universe/worlds/<worldname>/config.json
   ```
   Replace `<worldname>` with the name of your world (e.g., `default`).

3. <b>Change the Fall Damage Setting</b><br>
   Find the `IsFallDamageEnabled` setting and change the value:
   ```json
   "IsFallDamageEnabled": true
   ```
   - `true` - Fall damage enabled (default)
   - `false` - Fall damage disabled

4. <b>Start the Server</b><br>
   Start your server for the changes to take effect.

## How to Enable Fall Damage via Command

Admins can also enable or disable fall damage directly in-game:

```
/world config falldamage true
```

To disable fall damage:

```
/world config falldamage false
```

:::: tip Note
Disabling fall damage is especially useful for building servers or creative worlds where players can build without risk.
::::
