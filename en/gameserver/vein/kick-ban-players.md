---
description: Kick and ban players on a VEIN server
---

# How to Kick and Ban Players on Your VEIN Server

You can permanently ban players from your server using the `Game.ini`.

## Ban a player

1. <b>Stop the server</b><br>
   Stop your server via the dashboard.

2. <b>Connect via SFTP</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md).

3. <b>Open Game.ini</b><br>
   Open the file `Game.ini` and find the section:

   ```
   [/Script/Vein.VeinGameStateBase]
   ```

4. <b>Add BannedPlayers</b><br>
   Add a new line for each banned player:

   ```
   BannedPlayers=<SteamID64>
   ```

   Example:

   ```
   [/Script/Vein.VeinGameStateBase]
   BannedPlayers=76561198000000001
   BannedPlayers=76561198000000002
   ```

5. <b>Start the server</b><br>
   Start your server.

:::: tip Tip
Here you can find a guide on how to find your [SteamID64](../steamid64-find-out.md).
::::

## Unban a player

Remove the corresponding `BannedPlayers=<SteamID64>` line from the `Game.ini` and restart the server.
