---
description: Kick and ban players on a Don’t Starve Together server
---

# How to Kick and Ban Players on Your Don’t Starve Together Server

Don’t Starve Together comes with built-in kick and ban functions. You can use them conveniently through the in-game player list, run them as console commands or edit the ban list directly on the server.

:::: info Note
You need admin rights to kick or ban players. See [Add Admin](add-admin.md).
::::

## Via the in-game player list

1. <b>Join the server</b><br>
   Join your server as an admin.

2. <b>Open the player list</b><br>
   Hold down the `TAB` key to show the player list.

3. <b>Kick a player</b><br>
   Click the shoe icon next to the player to remove them from the server.

4. <b>Ban a player</b><br>
   Click the hammer icon next to the player to ban them permanently.

## Via the console

1. <b>Open the console</b><br>
   Press `~` in game to open the console.

2. <b>List the players</b><br>
   Show all players together with their Klei user ID:

   ```
   c_listallplayers()
   ```

3. <b>Kick a player</b><br>
   The player is removed from the server but can rejoin:

   ```
   TheNet:Kick("KU_xxxxxxxx")
   ```

4. <b>Ban a player</b><br>
   The player is permanently banned:

   ```
   TheNet:Ban("KU_xxxxxxxx")
   ```

5. <b>Ban for a limited time</b><br>
   The second value is the duration in seconds — `120` therefore equals two minutes:

   ```
   TheNet:BanForTime("KU_xxxxxxxx", 120)
   ```

## Edit the ban list

All bans are stored in the `blocklist.txt` file in the cluster folder. If you ban a player in game, their Klei user ID is added there automatically. You can also edit the file yourself.

1. <b>Stop the server</b><br>
   Stop your server via the dashboard.

2. <b>Connect via SFTP</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md) or use the file browser in the dashboard.

3. <b>Open blocklist.txt</b><br>
   Navigate to the folder that contains the `cluster.ini` file and open this file:

   ```
   <cluster folder>/blocklist.txt
   ```

4. <b>Adjust the entries</b><br>
   Add exactly one Klei user ID per line — without commas and without quotation marks. To unban someone, remove the corresponding line:

   ```
   KU_xxxxxxxx
   KU_yyyyyyyy
   ```

5. <b>Start the server</b><br>
   Save the file and start your server. The server only reloads the `blocklist.txt` on startup.

:::: warning Warning
Only edit the `blocklist.txt` while the server is stopped. If the server is running it can overwrite the file and your changes will be lost.
::::

:::: tip Find the Klei user ID
The guide [Add Admin](add-admin.md) explains how to find the `KU_` ID of a player.
::::

## All commands

| Command | Description |
|---------|-------------|
| `c_listallplayers()` | List all players with their user ID |
| `TheNet:Kick("KU_xxxxxxxx")` | Kick a player |
| `TheNet:Ban("KU_xxxxxxxx")` | Permanently ban a player |
| `TheNet:BanForTime("KU_xxxxxxxx", 120)` | Ban a player for 120 seconds |
| `c_announce("text")` | Send a message to all players |
| `c_save()` | Save the world immediately |
