---
description: Add and remove admin on a Core Keeper server
---

# How to Add an Admin to Your Core Keeper Server

You can manage admins via the `Admins.json` file.

:::: tip Tip
Here you can find a guide on how to find your [SteamID64](../steamid64-find-out.md).
::::

## Add admin

1. <b>Stop the server</b><br>
   Stop your server via the dashboard.

2. <b>Connect via SFTP</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md).

3. <b>Open Admins.json</b><br>
   Open the file `Admins.json` at:

   ```
   /.config/unity3d/Pugstorm/CoreKeeper/DedicatedServer/Admins.json
   ```

4. <b>Add admin</b><br>
   Add a new entry in the `adminList` array:

   ```json
   { "index": 1, "privileges": 2, "name": "YourCharacterName", "steamId": 76561198012345678 }
   ```

   | Field | Description |
   |-------|-------------|
   | `index` | Sequential number |
   | `privileges` | `2` = full admin, `1` = limited admin |
   | `name` | Your in-game character name |
   | `steamId` | Your SteamID64 |

5. <b>Start the server</b><br>
   Save the file and start your server.

## Remove admin

To remove an admin, delete the corresponding entry from `Admins.json` and restart the server.
