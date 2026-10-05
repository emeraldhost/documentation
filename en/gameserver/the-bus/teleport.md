---
description: Teleport players on a The Bus server with a command
---

# How to Teleport Players on a The Bus Server

You can teleport players on your server to specific coordinates with a **command** in the in-game chat.

:::: info Note
These commands require Owner or Admin permissions – see [Add Admin](add-admin.md). Enter them in the in-game chat. On our servers, the console in the dashboard only shows the server output and does not accept commands.
::::

## How to Teleport a Player

1. <b>Open the in-game chat</b><br>
   [Join your server](join-server.md) and open the in-game chat.

2. <b>Find the player name</b><br>
   Use the following command to show all players on the server:

   ```
   /list
   ```

3. <b>Teleport the player</b><br>
   Enter the following command and replace `<player>` with the player's name and `<x>`, `<y>` and `<z>` with the target coordinates:

   ```
   /tp <player> <x> <y> <z>
   ```

## How to Teleport a Player Directionally

With `/tpd`, you teleport a player directionally (listed in the server's command list as "teleport player directional"):

```
/tpd <player> <x> <y> <z>
```

:::: tip Tip
How the server interprets the values for `/tpd` is not officially documented. Try the command with small values first. Use `/commands` to show all available commands.
::::

## Command Overview

| Command | Description |
|---------|-------------|
| `/tp <player> <x> <y> <z>` | Teleport player to the coordinates |
| `/tpd <player> <x> <y> <z>` | Teleport player directionally |

For more commands, see [Configure Server](configure-server.md).
