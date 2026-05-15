---
description: Change the world border (worldborder) on a Minecraft Java Edition server
---

# How to Change the World Border on a Minecraft Java Server

The world border is an invisible, square boundary around the center of your world. Players cannot move past it, and chunks outside the border are no longer generated. By default the border is 60,000,000 blocks wide.

:::: info Note
The `/worldborder` command is a **vanilla command** and works on all Java server variants — Vanilla, Paper, Spigot, Purpur, Folia, Forge, Fabric and NeoForge.
::::

## Prerequisite

You need OP rights (at least level 2) to run the `/worldborder` command. See [Grant OP Rights](grant-op-rights.md).

## Set the world border

You can run the command either in the in-game chat or via the server console in the dashboard.

### Set the size

```
/worldborder set <diameter>
```

The value is the **diameter** in blocks, measured from the center. Example — set the border to 1000 blocks (500 blocks in each direction):

```
/worldborder set 1000
```

### Change the size over time

You can also resize the border over a given time in seconds:

```
/worldborder set 1000 60
```

In this example the border shrinks or grows to 1000 blocks over 60 seconds.

### Change the center

```
/worldborder center <X> <Z>
```

Example — set the center to coordinates `100, -200`:

```
/worldborder center 100 -200
```

## Additional options

| Command | Description |
|---------|-------------|
| `/worldborder get` | Show the current size |
| `/worldborder add <blocks> [time]` | Grow or shrink the border relative to the current size |
| `/worldborder warning distance <blocks>` | Distance from the border at which the warning appears (default: 5) |
| `/worldborder warning time <seconds>` | Pre-warning time when the border shrinks (default: 15) |
| `/worldborder damage amount <value>` | Damage per block outside the border (default: 0.2) |
| `/worldborder damage buffer <blocks>` | Buffer outside the border in which no damage is dealt (default: 5) |

## Value range

- **Minimum:** `1` block
- **Maximum:** `59,999,968` blocks

:::: tip Tip
The world border is saved automatically and persists across server restarts. It is set per world — in Paper/Spigot multi-world setups, each world has its own border.
::::
