---
description: Spawn a bus at a stop on a The Bus server
---

# How to Spawn a Bus on a The Bus Server

You can spawn a bus at a bus stop by command or remove uncontrolled buses from the map.

## How to spawn a bus

Enter the following command in the in-game chat:

```
/spawnBus
```

The bus is automatically placed at a bus stop. The command can be used multiple times to spawn additional buses.

:::: info Note
The bus model depends on the currently active fleet. You can change the fleet with `/fleet`.
::::

## Remove uncontrolled buses

To remove all buses that are **not currently controlled by a player**:

```
/clearBusses
```

This includes buses spawned via `/spawnBus` that no player has entered, or buses that players have left.

:::: tip Tip
Use `/clearBusses` when too many unused buses are on the map and it affects visibility or performance.
::::

## All commands

| Command | Description |
|---------|-------------|
| `/spawnBus` | Spawn a bus at a bus stop |
| `/clearBusses` | Remove all uncontrolled buses |

:::: tip Tip
These commands require Owner or Admin permissions.
::::
