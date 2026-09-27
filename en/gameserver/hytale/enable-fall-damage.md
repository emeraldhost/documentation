---
description: Enable or disable fall damage on a Hytale server
---

# How to Enable Fall Damage on a Hytale Server

Fall damage determines whether players and NPCs take damage when falling from great heights. This setting is configured per world in the world configuration.

:::: info Note
Stop your server before making changes to configuration files, otherwise they will be overwritten by the server.
::::

## How to Enable or Disable Fall Damage via Configuration

1. <b>Stop the Server</b><br>
   Stop your server via the dashboard.

2. <b>Open the World Configuration</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md) and navigate to:
   ```
   /universe/worlds/<worldname>/config.json
   ```
   Replace `<worldname>` with the name of your world (e.g., `default`). Each world has its own `config.json`. If you have several worlds, change the setting in each world separately.

3. <b>Change the Fall Damage Setting</b><br>
   Find the `IsFallDamageEnabled` setting and change the value:
   ```json
   "IsFallDamageEnabled": true
   ```
   - `true` - Fall damage enabled (default)
   - `false` - Fall damage disabled

   :::: tip Tip
   Check the file with a JSON formatter like [JSONLint](https://jsonlint.com/) after editing — a single missing or extra comma is enough to stop the server from loading the world configuration.
   ::::

4. <b>Start the Server</b><br>
   Start your server for the changes to take effect.

:::: info Note
There is no command for fall damage, neither under `/world config` nor under `/world settings`. You can only change it in the world configuration.
::::

:::: tip Tip
Disabling fall damage is especially useful for building servers or creative worlds where players can build without risk.
::::
