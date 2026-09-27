---
description: Change time of day on a Hytale server
---

# How to Change the Time of Day on a Hytale Server

You can change the time of day on your server via command or pause it completely.

## How to Change the Time via Command

1. <b>Open dashboard</b><br>
   Open the dashboard of your Hytale server.

2. <b>Enter the Command</b><br>
   Enter the following command in the console:
   ```
   time <value> --world <worldname>
   ```
   Replace `<worldname>` with the name of your world (e.g., `default`).

**Examples:**
```
time dawn --world default
time noon --world default
time dusk --world default
time set 18 --world default
```

:::: info Note
Console commands are entered without `/` and need the `--world` option, otherwise the server replies with `Sender must be a player or provide the --world option!`. In-game with admin rights, you need the `/` and can leave out `--world`, in which case the command applies to the world you are in (e.g., `/time noon`).
::::

## Available Time Values

| Value | Alternative | Description |
| ----- | ----------- | ----------- |
| `dawn` | `morning`, `day` | Dawn |
| `midday` | `noon` | Noon |
| `dusk` | `night` | Dusk |
| `midnight` | - | Midnight |
| `0-24` | `set 0-24` | Hour as a number (0 = midnight, 12 = noon), e.g., `time 18` or `time set 18` |

## Show Current Time

To display the current world time:

```
time --world default
```

## Pause Game Time

Use `time pause --world default` to stop time. Entering the command again lets it run again. The state is saved in the world's configuration and is kept after a restart. For more options, e.g., a fixed time of day for building servers, see [Pause Game Time](pause-game-time.md).
