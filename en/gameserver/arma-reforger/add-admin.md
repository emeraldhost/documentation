---
description: Add another admin to an Arma Reforger server
---

# How to Add an Admin to Your Arma Reforger Server

You can add other players as admins by entering their SteamID64 in the `config.json` file.

:::: tip Tip
Here you can find a guide on how to find your [SteamID64](../steamid64-find-out.md).
::::

1. <b>Stop the server</b><br>
   Stop your server via the dashboard.

2. <b>Connect via SFTP</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md).

3. <b>Open config.json</b><br>
   Open the file `config.json` and find the `"admins"` entry in the `"game"` section.

4. <b>Add SteamID64 to the admins list</b><br>
   Enter the SteamID64 of the player who should become admin:

   ```json
   "game": {
     "admins": [
       "76561198012345678",
       "76561198087654321"
     ]
   }
   ```

   Add one SteamID64 per entry. Make sure the entries are separated by commas.

5. <b>Start the server</b><br>
   Save the file and start your server.

:::: info Note
Changes to `config.json` only take effect after a server restart. Players added here receive permanent admin rights and do not need to log in with a password.
::::
