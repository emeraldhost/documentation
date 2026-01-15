---
description: Disable NPCs on a Hytale server
---

# How to Disable NPCs on a Hytale Server

You can disable NPC spawning (creatures, monsters, animals) per world. This is useful for pure building servers or PvP arenas.

:::: tip Note
Stop your server before making changes to configuration files, otherwise they will be overwritten by the server.
::::

## How to Disable NPCs via Configuration

1. <b>Stop the Server</b><br>
   Stop your server via the management panel.

2. <b>Open the World Configuration</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md) and navigate to:
   ```
   /universe/worlds/<worldname>/config.json
   ```
   Replace `<worldname>` with the name of your world (e.g., `default`).

3. <b>Change NPC Spawning</b><br>
   Find the `IsSpawningNPC` setting and change the value:
   ```json
   "IsSpawningNPC": false
   ```
   - `true` - NPCs spawn (default)
   - `false` - No NPCs spawn

4. <b>Start the Server</b><br>
   Start your server for the changes to take effect.

## How to Disable NPCs via Command

Admins can also control NPC spawning in-game:

```
/spawning
```

Use `/spawning -help` for available options.

:::: tip Note
Console commands are entered without `/`. In-game with admin rights, you need the `/`.
::::

## Remove Already Spawned NPCs

To remove all NPCs in an area, you can use the kill command or reload the world.

:::: tip Note
Disabling NPCs only affects future spawning. Already existing NPCs will remain.
::::
