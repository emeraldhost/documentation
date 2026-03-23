---
description: Enable whitelist on a VEIN server
---

# How to Enable the Whitelist on Your VEIN Server

With the whitelist you can restrict access to your server to specific players.

:::: tip Tip
Here you can find a guide on how to find your [SteamID64](../steamid64-find-out.md).
::::

1. <b>Stop the server</b><br>
   Stop your server via the dashboard.

2. <b>Connect via SFTP</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md).

3. <b>Open Game.ini</b><br>
   Open the file `Game.ini` at:

   ```
   /Vein/Saved/Config/LinuxServer/Game.ini
   ```

4. <b>Add players to whitelist</b><br>
   Add the section `[/Script/Vein.VeinGameStateBase]` (if not already present) and enter the SteamID64 of each player:

   ```ini
   [/Script/Vein.VeinGameStateBase]
   WhitelistedPlayers=76561198012345678
   WhitelistedPlayers=76561198087654321
   ```

5. <b>Start the server</b><br>
   Save the file and start your server.

:::: danger Important
As soon as you add a player to the whitelist, **only listed players** can join the server. Make sure to add your own SteamID64 as well!
::::
