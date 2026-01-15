---
description: Change weather on a Hytale server
---

# How to Change the Weather on a Hytale Server

You can change the weather on your server via command. Weather is set per zone and with intensity.

## How to Change the Weather via Command

1. <b>Open Server Management</b><br>
   Open the management panel of your Hytale server.

2. <b>Enter the Command</b><br>
   Enter the following command in the console:
   ```
   weather set <Zone_Weather_Intensity>
   ```

**Examples:**
```
weather set Zone1_Clear_Light
weather set Zone1_Cloudy_Medium
weather set Zone1_Rainy_Heavy
```

:::: tip Note
Console commands are entered without `/`. In-game with admin rights, you need the `/` (e.g., `/weather set Zone1_Clear_Light`).
::::

## Weather Format

Weather is specified in the format `Zone_Weather_Intensity`:

**Weather Types:**
- `Clear` - Clear/Sunny
- `Cloudy` - Cloudy
- `Rainy` - Rainy
- `Stormy` - Stormy

**Intensities:**
- `Light` - Light
- `Medium` - Medium
- `Heavy` - Heavy

## Show Current Weather

To display the current weather:

```
weather get
```

## Reset Weather

To reset the weather to default:

```
weather reset
```

## All Weather Commands

| Command | Description |
| ------- | ----------- |
| `weather set <weather> [--world=?]` | Set weather |
| `weather get [--world=?]` | Show current weather |
| `weather reset [--world=?]` | Reset weather |

:::: tip Note
Use `--world=<name>` to change the weather for a specific world. Without this option, the current world is used.
::::
