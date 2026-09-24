---
description: Add an admin on a Valheim server
---

# How to Add an Admin on Your Valheim Server

You can add admins via the `adminlist.txt` file. Each admin is identified by their player ID.

## Find the Player ID

The player ID has the format `[Platform]_[ID]`, e.g. `V_76561198012345678`. For Steam players, the part after `V_` is the SteamID64. You can find the ID in two ways:

- In the in-game player list, which you open with `F2` while the player is on the server.
- In the server log, i.e. in the console of your dashboard, when the player connects. Without crossplay, the log shows only the SteamID64 without a prefix for Steam players.

This applies to all platforms, including crossplay players on Xbox, PlayStation 5 or Nintendo Switch 2.

## Add the Admin

1. <b>Stop the server</b><br>
   Stop your server via the dashboard.

2. <b>Connect via SFTP</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md).

3. <b>Open adminlist.txt</b><br>
   Open the file `adminlist.txt` in the following directory:

   ```
   /.config/unity3d/IronGate/Valheim/adminlist.txt
   ```

   The server creates this file automatically on its first start.

4. <b>Add the player ID</b><br>
   Enter the player ID of the player who should become admin. Add one ID per line and copy it exactly as it appears in the player list (`F2`) or in the server log, including the prefix and upper and lower case:

   ```
   V_76561198012345678
   V_76561198087654321
   ```

5. <b>Start the server</b><br>
   Save the file and start your server.

:::: info Note
For Steam players, older entries still work, i.e. the form `Steam_76561198012345678` or the plain [SteamID64](../steamid64-find-out.md). Crossplay players do not have a SteamID64, so for them you always need the ID from the player list or the server log.
::::

:::: info Note
The safest way to apply changes to `adminlist.txt` is to restart your server.
::::
