---
description: Disable NPCs on a Hytale server
---

# How to Disable NPCs on a Hytale Server

You can disable NPC spawning (creatures, monsters, animals) per world. This is useful for pure building servers or PvP arenas.

:::: info Note
Stop your server before making changes to configuration files, otherwise they will be overwritten by the server.
::::

## How to Disable NPCs via Configuration

1. <b>Stop the Server</b><br>
   Stop your server via the dashboard.

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

   :::: tip Tip
   Check the file with a JSON formatter like [JSONLint](https://jsonlint.com/) after editing — a single missing or extra comma is enough to stop the server from loading the world configuration.
   ::::

4. <b>Start the Server</b><br>
   Start your server for the changes to take effect.

## How to Disable NPCs via Command

With a command, you can toggle NPC spawning while the server is running. The change is saved directly in the world configuration.

1. <b>Open the Dashboard</b><br>
   Open the dashboard of your Hytale server.

2. <b>Enter the Command</b><br>
   Enter the following command in the console:
   ```
   spawning disable --world default
   ```
   Replace `default` with the name of your world. The server confirms with `Spawning disabled for world "default"`. To enable spawning again, use:
   ```
   spawning enable --world default
   ```

Admins can also control NPC spawning in-game. Without `--world`, the command applies to the world you are currently in:

```
/spawning disable
```

Alternatively, `world settings spawningnpc set false --world default` also works. Use `spawning --help` to show all subcommands.

:::: info Note
Console commands are entered without `/` and need the `--world` option, otherwise the server replies with `Sender must be a player or provide the --world option!`. In-game with admin rights, you need the `/`.
::::

## Remove Already Spawned NPCs

Disabling only affects future spawning. Already existing NPCs will remain. To remove the NPCs of a world, enter in the console:

```
npc clean --world default --confirm
```

The `--confirm` flag is required, without it the server does not run the command. In-game, the command is `/npc clean --confirm`.

:::: warning Warning
`npc clean` removes all NPCs that are currently loaded in the world, including peaceful animals. NPCs in areas that are not currently loaded are not affected. This step cannot be undone.
::::

:::: tip Tip
If you want to keep the NPCs but make them stand still, freeze them instead: `world settings freezeallnpcs set true --world default`. Use `false` to undo this. The setting is saved in the world configuration as `IsAllNPCFrozen`.
::::
