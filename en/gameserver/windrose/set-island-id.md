---
description: Set the island ID on a Windrose server
---

# How to Set the Island ID on Your Windrose Server

The island ID determines which world your server loads on startup. If no island ID is set, the server automatically loads the most recent save. If you want to continue with a specific older world, you can enter its island ID here.

## Find the island ID

1. <b>Connect via SFTP</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md).

2. <b>Open the worlds directory</b><br>
   Navigate to the following directory. Each saved world has its own folder here:

   ```
   /R5/Saved/SaveProfiles/Default/RocksDB_v2/<GameVersion>/Worlds/
   ```

   :::: info Note
   `<GameVersion>` is the game version the world was created with — e.g. `0.10.0`. If you see multiple versions, open the correct one.
   ::::

3. <b>Identify the island ID</b><br>
   The folder name of each world **is** the island ID. Example:

   ```
   /R5/Saved/SaveProfiles/Default/RocksDB_v2/0.10.0/Worlds/A1b2C3d4E5
   ```

   In this example the island ID is `A1b2C3d4E5`.

4. <b>Match the world (optional)</b><br>
   To make sure you assign the correct folder to the correct world, open the `WorldDescription.json` file inside the world folder. The display name is shown under the `WorldName` field.

## Set the island ID in the dashboard

1. <b>Open dashboard</b><br>
   Open the dashboard of your server.

2. <b>Open settings</b><br>
   Navigate to the **Settings**.

3. <b>Set island ID</b><br>
   Enter the island ID from the world folder in the **Island ID** field and save the setting.

4. <b>Restart the server</b><br>
   Restart your server for the change to take effect.

:::: tip Tip
If your server suddenly loads a new, empty world after an update, the original world is usually still saved under `/R5/Saved/SaveProfiles/Default/RocksDB_v2/<GameVersion>/Worlds/`. Enter that world's island ID in the settings to load it again.
::::
