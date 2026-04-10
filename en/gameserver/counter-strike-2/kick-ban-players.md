---
description: Kick and ban players on a Counter-Strike 2 server
---

# How to Kick and Ban Players on Your Counter-Strike 2 Server

You can kick and ban players using the server console in the dashboard.

:::: tip Tip
Here you can find a guide on how to find a player's [SteamID64](../steamid64-find-out.md).
::::

## Kick or ban players via the server console

1. <b>Open the server console</b><br>
   Open the console of your server via the dashboard.

2. <b>List players</b><br>
   Enter the command `status` to display all connected players and their SteamID64.

3. <b>Kick or ban a player</b><br>
   Use one of the following commands:

   ```
   kick <Name>
   ```

   ```
   banid <Minutes> <SteamID64>
   ```

:::: info Note
Set the minutes to `0` to permanently ban the player.
::::

## Command overview

| Command | Description |
|---------|-------------|
| `status` | List all connected players |
| `kick <Name>` | Kick a player from the server |
| `banid <Minutes> <SteamID64>` | Ban a player for a specific duration |
| `removeid <SteamID64>` | Unban a player |
