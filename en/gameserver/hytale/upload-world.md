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

You can find your Hytale saves here:

| Operating System | Path |
| ---------------- | ---- |
| Windows | `%appdata%\Hytale\UserData\Saves` |
| Linux | `$XDG_DATA_HOME/Hytale/UserData/Saves` |
| macOS | `~/Library/Application Support/Hytale/UserData/Saves` |

Every save has its own folder there. Navigate to `universe/worlds/` within your save to find the world folders.

:::: info Note
If you play the pre-release version of Hytale, your saves are not stored under `UserData` but in the `data/pre-release/` folder inside the Hytale folder. Such a world may not open on a server on the `release` patchline. You set your server's patchline in the **dashboard** under **Settings** in the **Hytale Patchline** field.
::::

## How to Upload the World

:::: info Note
Stop your server before uploading files, otherwise they will be overwritten by the server.
::::

1. <b>Stop the Server</b><br>
   Stop your server via the dashboard.

2. <b>Connect via SFTP</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md).

3. <b>Upload World Folder</b><br>
   Upload the copied world folder to the following directory:
   ```
   /universe/worlds/
   ```
   The name of the folder becomes the name of the world.

4. <b>Start the Server</b><br>
   Start your server. On startup, it automatically loads all worlds from `/universe/worlds/`, including your uploaded world.

:::: warning Warning
If the server already has a folder with the same name (the server's default world is called `default`), rename your world folder before uploading. Otherwise you overwrite the files of the existing world.
::::

## How to Set the World as Default

To make players end up in your uploaded world when joining, you need to set it as the default world.

### Via Console

1. <b>Check the World</b><br>
   Enter the following command in the console to show all loaded worlds:
   ```
   world list
   ```
   Your uploaded world should appear here with the name of its folder.

2. <b>Set as Default</b><br>
   To make players automatically spawn in this world when joining:
   ```
   world setdefault <worldname>
   ```
   Replace `<worldname>` with the name of the uploaded folder.

:::: info Note
Console commands are entered without `/`. In-game with admin rights, you need the `/` (e.g., `/world setdefault <worldname>`).
::::

### Via Configuration

You can also set the default world manually in the server configuration:

1. <b>Stop the Server</b><br>
   Stop your server via the dashboard.

2. <b>Open config.json</b><br>
   Open the `config.json` in the root directory of your server.

3. <b>Change Default World</b><br>
   Find the `Defaults` block and change the `World` value. Leave the other entries in the block unchanged:
   ```json
   "Defaults": {
     "World": "myworld",
     "GameMode": "Adventure"
   }
   ```

   :::: tip Tip
   Check the file with a JSON formatter like [JSONLint](https://jsonlint.com/) after editing — a single missing or extra comma is enough to stop the server from loading the configuration.
   ::::

4. <b>Start the Server</b><br>
   Start your server.

:::: info Note
Players who have been on the server before keep joining in the world they were last in. The default world applies to new players and to players whose last world is no longer loaded. With admin rights, you can switch to another world in-game with `/tp world <worldname>`.
::::

## Transfer Player Data

If you also want to transfer your player progress (inventory, position, etc.):

1. Copy the contents of the `universe/players/` folder from your singleplayer save.
2. Upload it to the `/universe/players/` folder on the server while the server is stopped.

:::: warning Warning
Only upload the world folders, not the entire `universe/` folder - otherwise existing server worlds will be overwritten.
::::
