---
description: Change weather on a Hytale server
---

# How to Change the Weather on a Hytale Server

You can set the weather on your server via command. The set weather is saved in the world's configuration and stays active until you reset it.

## How to Change the Weather via Command

1. <b>Open dashboard</b><br>
   Open the dashboard of your Hytale server.

2. <b>Enter the Command</b><br>
   Enter the following command in the console:
   ```
   weather set <weather-id> --world <worldname>
   ```
   Replace `<worldname>` with the name of your world (e.g., `default`).

**Examples:**
```
weather set Zone1_Sunny --world default
weather set Zone1_Cloudy_Medium --world default
weather set Zone1_Storm --world default
```

:::: info Note
Console commands are entered without `/` and need the `--world` option, otherwise the server replies with `Sender must be a player or provide the --world option!`. In-game with admin rights, you need the `/` and can leave out `--world`, in which case the command applies to the world you are in (e.g., `/weather set Zone1_Sunny`).
::::

## Weather IDs

The weather ID is the name of a weather type from the game files. Most IDs start with the zone the weather is meant for. A selection:

| Weather ID | Description |
| ---------- | ----------- |
| `Zone1_Sunny` | Sunny |
| `Zone1_Cloudy_Medium` | Cloudy |
| `Zone1_Foggy_Light` | Light fog |
| `Zone1_Rain_Light` | Light rain |
| `Zone1_Rain` | Rain |
| `Zone1_Storm` | Storm |
| `Zone2_Sunny` | Sunny (Zone 2) |
| `Zone2_Sand_Storm` | Sandstorm (Zone 2) |
| `Zone3_Snow` | Snow (Zone 3) |
| `Zone3_Snow_Storm` | Snowstorm (Zone 3) |
| `Blood_Moon` | Blood moon |

:::: info Note
The complete list is in the `Assets.zip` file in your server's root directory, in the `Server/Weathers/` folder and its subfolders (e.g., `Server/Weathers/Zone1/`). The file name without `.json` is the weather ID (e.g., `Zone1_Sunny.json` → `Zone1_Sunny`). Note that the file is several GB in size.
::::

## Show the Set Weather

To display the currently set weather:

```
weather get --world default
```

## Reset Weather

To remove the set weather so the world's normal weather applies again:

```
weather reset --world default
```

## All Weather Commands

| Command | Description |
| ------- | ----------- |
| `weather set <weather-id> [--world <worldname>]` | Set weather |
| `weather get [--world <worldname>]` | Show the set weather |
| `weather reset [--world <worldname>]` | Remove the set weather (alternatively `weather clear`) |
