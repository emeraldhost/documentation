---
description: Kick and ban players on a V Rising server
---

# How to Kick and Ban Players on Your V Rising Server

You can permanently ban players from your server using the `banlist.txt`. There is no in-game kick command available.

:::: info Note
You need admin rights to ban players. See [Add Admin](add-admin.md).
::::

## Ban a player

1. <b>Stop the server</b><br>
   Stop your server via the dashboard.

2. <b>Connect via SFTP</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md).

3. <b>Open banlist.txt</b><br>
   Open the file `banlist.txt` at:

   ```
   /save-data/Settings/banlist.txt
   ```

4. <b>Add SteamID64</b><br>
   Add the player's SteamID64 on a new line. Each line contains one SteamID64.

5. <b>Start the server</b><br>
   Start your server.

:::: tip Tip
Here you can find a guide on how to find your [SteamID64](../steamid64-find-out.md).
::::

## Unban a player

Remove the corresponding SteamID64 from the `banlist.txt` and restart the server.
