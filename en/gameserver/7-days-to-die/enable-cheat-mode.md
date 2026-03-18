---
description: Enable cheat mode on a 7 Days to Die server
---

# How to Enable Cheat Mode on Your 7 Days to Die Server

Cheat mode gives you access to the creative menu and debug options.

## Cheat mode for all players

:::: warning Warning
This setting enables cheat mode for **all players** on the server.
::::

1. <b>Stop the server</b><br>
   Stop your server via the dashboard.

2. <b>Connect via SFTP</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md).

3. <b>Open serverconfig.xml</b><br>
   Open the file `serverconfig.xml` in the root directory of your server.

4. <b>Enable cheat mode</b><br>
   Find the following line and set the value to `true`:

   ```xml
   <property name="BuildCreate" value="true"/>
   ```

5. <b>Start the server</b><br>
   Save the file and start your server.

In-game you can now open the creative menu with `U`.

## Cheat mode for admins only

If you only want cheat mode **for admins**, leave `BuildCreate` set to `false` and use console commands instead. You need permission level `0` for this (see [Add Admin](add-admin.md)).

Press `F1` to open the console:

| Command | Description |
|---------|-------------|
| `cm` | Enable creative menu (open with `U`) |
| `dm` | Enable debug mode |

### Debug mode features

After entering `dm`, the following options are available via `Esc`:

- **God Mode** — Invulnerability
- **Fly Mode** — Flying (toggle with `H`)
- **Invisibility** — Invisible to zombies and players
