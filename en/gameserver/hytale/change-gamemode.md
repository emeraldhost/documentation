---
description: Change gamemode on a Hytale server
---

# How to Change the Gamemode on a Hytale Server

## Available Gamemodes

| Gamemode | Description |
| -------- | ----------- |
| Adventure | Survive in the wild, gather resources and face enemies |
| Creative | Build without limits with unlimited resources and no damage |

## How to Change a Player's Gamemode

1. <b>Start the Server</b><br>
   Make sure your server is running.

2. <b>Open dashboard</b><br>
   Open the dashboard of your Hytale server.

3. <b>Enter the Command</b><br>
   Enter the following command in the console:
   ```
   gamemode <adventure/creative> <playername>
   ```

:::: info Note
The player must be online on the server. Instead of `adventure` and `creative` you can also use the short forms `a` and `c`, and `gm` instead of `gamemode` (e.g., `gm c playername`).
::::

4. <b>In-Game</b><br>
   The command can also be used by admins directly in-game:
   ```
   /gamemode <adventure/creative> <playername>
   ```
   If you leave out the player name, you change your own gamemode (e.g., `/gamemode creative`).

## How to Change the Default Gamemode

:::: info Note
This method only changes the gamemode for new players. Existing players need to be changed via command.
::::

1. <b>Stop the Server</b><br>
   Stop your server via the dashboard.

2. <b>Open the Configuration File</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md) and open the `config.json` file in the root directory.

3. <b>Change the Gamemode</b><br>
   Find `GameMode` in the `Defaults` section and change the value to `Creative` or `Adventure`:
   ```json
   "GameMode": "Creative",
   ```

4. <b>Start the Server</b><br>
   Start your server.

## How to Change the Default Gamemode for Uploaded Worlds

:::: info Note
This method only changes the gamemode for new players. Existing players need to be changed via command. If a gamemode is set in the world, it takes precedence over the default gamemode from the `config.json` in the root directory.
::::

1. <b>Stop the Server</b><br>
   Stop your server via the dashboard.

2. <b>Open the World Configuration</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md) and navigate to:
   ```
   /universe/worlds/default/
   ```
   Replace `default` with the name of your world if it is named differently.

3. <b>Open config.json</b><br>
   Open the `config.json` file in this folder.

4. <b>Change the Gamemode</b><br>
   Find `GameMode` and change the value to `Creative` or `Adventure`. New worlds do not contain this entry by default. In that case, add it on a new line, e.g., directly above `"IsSpawningNPC"`:
   ```json
   "GameMode": "Creative",
   ```

   :::: tip Tip
   Check the file with a JSON formatter like [JSONLint](https://jsonlint.com/) after editing — a single missing or extra comma is enough to stop the server from loading the world configuration.
   ::::

5. <b>Start the Server</b><br>
   Start your server.

:::: tip Tip
Alternatively, you can set a world's gamemode via the console while the server is running, e.g., `world settings gamemode set creative --world default`. Use `world settings gamemode reset --world default` to reset it.
::::
