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
   Add one entry per admin to the `adminList` array. The example shows two entries – they are separated by a comma; with only one admin, the second entry including its comma is omitted:

   ```json
   { "index": 1, "privileges": 2, "name": "YourCharacterName", "steamId": 76561198012345678 },
   { "index": 2, "privileges": 1, "name": "SecondCharacterName", "steamId": 76561198087654321 }
   ```

   | Field | Description |
   |-------|-------------|
   | `index` | Sequential number |
   | `privileges` | `2` = full admin, `1` = limited admin |
   | `name` | Your in-game character name |
   | `steamId` | Your SteamID64 |

   :::: tip Tip
   Check the file with a JSON formatter like [JSONLint](https://jsonlint.com/) after editing – a single missing or extra comma is enough to stop the server from applying the admin list.
   ::::

5. <b>Start the server</b><br>
   Save the file and start your server.

## Remove admin

To remove an admin, delete the corresponding entry from `Admins.json` and restart the server.
