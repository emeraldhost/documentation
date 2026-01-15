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

2. <b>Open Server Management</b><br>
   Open the management panel of your Hytale server.

3. <b>Enter the Command</b><br>
   Enter the following command in the console:
   ```
   gamemode <adventure/creative> <playername>
   ```

:::: tip Note
The player must be online on the server.
::::

4. <b>In-Game</b><br>
   The command can also be used by admins directly in-game:
   ```
   /gamemode <adventure/creative> <playername>
   ```

## How to Change the Default Gamemode

:::: tip Note
This method only changes the gamemode for new players. Existing players need to be changed via command.
::::

1. <b>Stop the Server</b><br>
   Stop your server via the management panel.

2. <b>Open the Configuration File</b><br>
   Connect to your server via [SFTP](../sftp-verbindung-herstellen.md) and open the `config.json` file in the root directory.

3. <b>Change the Gamemode</b><br>
   Find `GameMode` and change the value to `Creative` or `Adventure`.

4. <b>Start the Server</b><br>
   Start your server.

## How to Change the Default Gamemode for Uploaded Worlds

:::: tip Note
This method only changes the gamemode for new players. Existing players need to be changed via command.
::::

1. <b>Stop the Server</b><br>
   Stop your server via the management panel.

2. <b>Open the World Configuration</b><br>
   Connect to your server via [SFTP](../sftp-verbindung-herstellen.md) and navigate to:
   ```
   /universe/worlds/default/
   ```

3. <b>Open config.json</b><br>
   Open the `config.json` file in this folder.

4. <b>Change the Gamemode</b><br>
   Find `GameMode` and change the value to `Creative` or `Adventure`.

5. <b>Start the Server</b><br>
   Start your server.
