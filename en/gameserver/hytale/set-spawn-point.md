---
description: Set spawn point on a Hytale server
---

# How to Set the Spawn Point on a Hytale Server

The spawn point determines where new players or players after death appear. Every world on your server has its own spawn point.

## Teleport to Spawn

In-game with admin rights, you teleport to the spawn point of the world you are currently in:

```
/spawn
```

Via the console of your dashboard, you can teleport a player who is currently online to spawn:

```
spawn <playername>
```

:::: info Note
Console commands are entered without `/`. In-game with admin rights, you need the `/` (e.g., `/spawn`).
::::

## How to Set the Spawn Point In-Game

1. <b>Take Your Position</b><br>
   Stand in-game at the place where the spawn point should be and look in the direction players should face after spawning.

2. <b>Enter the Command</b><br>
   With admin rights, enter the following command:
   ```
   /spawn set
   ```
   The spawn point of the current world is set to your position. The message "Set spawn to: ..." appears as confirmation.

## How to Set the Spawn Point via the Console

In the console, you specify the world and the coordinates:

```
spawn set --world <worldname> --position <x> <y> <z>
```

Example for the default world `default`:
```
spawn set --world default --position 10 120 10
```

:::: tip Tip
The server saves the new spawn point to the world's `config.json` under `/universe/worlds/<worldname>/` right away. No restart is needed.
::::

## How to Reset the Spawn Point

To restore the original spawn point the world had when it was created, enter in-game:

```
/spawn set default
```

In the console, you also specify the world:

```
spawn set default --world <worldname>
```

## Configure Respawn Behavior

You can adjust where players reappear after death in the world configuration:

1. <b>Stop the Server</b><br>
   Stop your server via the dashboard.

2. <b>Open the World Configuration</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md) and open the file `/universe/worlds/<worldname>/config.json`.

3. <b>Add the Death Block</b><br>
   By default, the file does not contain a `Death` block. Find the line `"GameplayConfig": "Default",` and add the `Death` block below it. Since more settings follow, there must be a comma after the last closing bracket `}` of the `Death` block:
   ```json
   "Death": {
     "RespawnController": {
       "Type": "WorldSpawnPoint"
     },
     "ItemsLossMode": "Configured",
     "ItemsAmountLossPercentage": 50.0,
     "ItemsDurabilityLossPercentage": 10.0
   }
   ```

4. <b>Start the Server</b><br>
   Start your server.

**Available Respawn Types:**
- `HomeOrSpawnPoint` - Respawn at the player's own respawn point, otherwise at the world spawn point (default)
- `WorldSpawnPoint` - Always respawn at the world spawn point

:::: warning Warning
A `Death` block in the world configuration replaces all death settings of this world. If it does not contain the item loss settings, players no longer lose any items on death. The values in the example match the Hytale default. Learn more in [Item Loss on Death](item-loss-on-death.md).
::::

:::: tip Tip
Check the file with a JSON formatter like [JSONLint](https://jsonlint.com/) after editing — a single missing or extra comma is enough to stop the server from loading the world configuration.
::::

:::: info Note
To learn how to create more worlds with their own spawn point, see [Create New World](create-new-world.md).
::::
