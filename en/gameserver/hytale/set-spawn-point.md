---
description: Set spawn point on a Hytale server
---

# How to Set the Spawn Point on a Hytale Server

The spawn point determines where new players or players after death appear.

## Teleport to Spawn

To teleport to the current spawn point:

```
spawn
```

:::: tip Note
Console commands are entered without `/`. In-game with admin rights, you need the `/` (e.g., `/spawn`).
::::

## Set Spawn Point

:::: warning Note
Hytale does not have a built-in `/setspawn` command. You can set the spawn point with the **HyCommands Mod**.
::::

## How to Install the HyCommands Mod

The HyCommands Mod by NightBeamStudio is a comprehensive server utility for Hytale. It adds useful commands like `/setspawn`, `/sethome`, `/home`, and `/warp`.

### Download

The mod can be downloaded here: [HyCommands on CurseForge](https://www.curseforge.com/hytale/mods/hycommands)

### Installation

1. <b>Stop the Server</b><br>
   Stop your server via the management panel.

2. <b>Download the Mod</b><br>
   Download the .jar file of the HyCommands Mod from CurseForge.

3. <b>Upload the Mod</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md) and upload the .jar file to the `mods/` folder.

4. <b>Start the Server</b><br>
   Start your server.

### Set Spawn Point (with HyCommands)

With HyCommands, you can set the spawn as admin in-game:

```
/setspawn
```

The spawn point will be set to your current position.

## Configure Respawn Behavior

You can adjust the respawn behavior after death in the world configuration:

1. Open `/universe/worlds/<worldname>/config.json`
2. In the `Death` block you'll find `RespawnController`:

```json
"Death": {
  "RespawnController": {
    "Type": "HomeOrSpawnPoint"
  }
}
```

**Available Respawn Types:**
- `HomeOrSpawnPoint` - Respawn at home or spawn point
- `SpawnPoint` - Only at spawn point

:::: tip Note
For more spawn options, see also [Create New World](create-new-world.md) - new worlds have their own spawn point.
::::
