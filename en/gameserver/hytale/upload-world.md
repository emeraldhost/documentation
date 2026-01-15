---
description: Upload singleplayer world to a Hytale server
---

# How to Upload a Singleplayer World to Your Hytale Server

You can transfer your singleplayer world to your server and continue playing with friends.

## How to Find Your World Files

### Method 1: Via Hytale

1. <b>Open Hytale</b><br>
   Open Hytale and go to "Worlds".

2. <b>Open Folder</b><br>
   Right-click on your world and select "Open Folder".

3. <b>Copy World Folder</b><br>
   Navigate to `universe/worlds/` - here you'll find your world folders. Copy the desired world folder.

### Method 2: Manually

You can find your Hytale save files here:

| Operating System | Path |
| ---------------- | ---- |
| Windows | `%appdata%\Hytale\Saves` |
| Linux | `$XDG_DATA_HOME/Hytale/Saves` |
| macOS | `~/Application Support/Hytale/Saves` |

Navigate to `universe/worlds/` within your save to find the world folders.

## How to Upload the World

:::: tip Note
Stop your server before uploading files, otherwise they will be overwritten by the server.
::::

1. <b>Stop the Server</b><br>
   Stop your server via the management panel.

2. <b>Connect via SFTP</b><br>
   Connect to your server via [SFTP](../sftp-verbindung-herstellen.md).

3. <b>Upload World Folder</b><br>
   Upload the copied world folder to the following directory:
   ```
   /universe/worlds/
   ```

4. <b>Start the Server</b><br>
   Start your server.

## How to Activate the World

After uploading, you need to load the world and set it as default.

### Via Console

1. <b>Load the World</b><br>
   Enter the following command in the console:
   ```
   world load <worldname>
   ```
   Replace `<worldname>` with the name of the uploaded folder.

2. <b>Set as Default</b><br>
   To make players automatically spawn in this world when joining:
   ```
   world setdefault <worldname>
   ```

:::: tip Note
Console commands are entered without `/`. In-game with admin rights, you need the `/` (e.g., `/world load <worldname>`).
::::

### Via Configuration

You can also set the default world manually in the server configuration:

1. <b>Stop the Server</b><br>
   Stop your server via the management panel.

2. <b>Open config.json</b><br>
   Open the `config.json` in the root directory of your server.

3. <b>Change Default World</b><br>
   Find the `Defaults` block and change the `World` value:
   ```json
   "Defaults": {
     "World": "myworld",
     "GameMode": "Adventure"
   }
   ```

4. <b>Start the Server</b><br>
   Start your server.

## Transfer Player Data

If you also want to transfer your player progress (inventory, position, etc.):

1. Copy the contents of the `players/` folder from your singleplayer save.
2. Upload it to the `players/` folder on the server.

:::: warning Warning
Only upload the world folders, not the entire `universe/` folder - otherwise existing server worlds will be overwritten.
::::
