---
description: Change time of day on a Hytale server
---

# How to Change the Time of Day on a Hytale Server

You can change the time of day on your server via command or pause it completely.

## How to Change the Time via Command

1. <b>Open Server Management</b><br>
   Open the management panel of your Hytale server.

2. <b>Enter the Command</b><br>
   Enter the following command in the console:
   ```
   time <value>
   ```

**Examples:**
```
time morning
time noon
time evening
time 12
```

:::: tip Note
Console commands are entered without `/`. In-game with admin rights, you need the `/` (e.g., `/time noon`).
::::

## Available Time Values

| Value | Description |
| ----- | ----------- |
| `morning` | Morning |
| `noon` | Noon |
| `evening` | Evening |
| `0-24` | Numeric value (0 = midnight, 12 = noon) |

## Show Current Time

To display the current world time:

```
time
```

## Pause Game Time

To pause time completely (e.g., for building servers), see [Pause Game Time](pause-game-time.md).
