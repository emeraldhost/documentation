---
description: Kick and ban players on a DayZ server
---

# How to Kick and Ban Players on Your DayZ Server

You can kick players using in-game chat commands or permanently ban them via a configuration file.

:::: warning Requirement
You must be an admin on your server. Here you can find a guide on how to [add an admin](add-admin.md).
::::

:::: tip Tip
Here you can find a guide on how to find a player's [SteamID64](../steamid64-find-out.md).
::::

## Kick players via chat command

1. <b>Join the server</b><br>
   Join your DayZ server and log in as admin.

2. <b>Open the chat</b><br>
   Press `Enter` to open the chat.

3. <b>Kick a player</b><br>
   Enter the following command:

   ```
   #kick <SteamID64>
   ```

## Permanently ban players via ban.txt

1. <b>Stop the server</b><br>
   Stop your server via the dashboard.

2. <b>Connect via SFTP</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md).

3. <b>Open ban.txt</b><br>
   Open the file `ban.txt` in the root directory of your server. Create the file if it does not exist.

4. <b>Add player to the ban list</b><br>
   Enter the player's SteamID64 on a new line:

   ```
   76561198012345678
   ```

5. <b>Start the server</b><br>
   Save the file and start your server.

## Ban players via chat command

You can also ban players directly via chat command without manually editing the `ban.txt`:

1. <b>Open the chat</b><br>
   Press `Enter` to open the chat.

2. <b>Ban a player</b><br>
   Enter the following command:

   ```
   #exec ban <name>
   ```

## Command overview

| Command | Description |
|---------|-------------|
| `#kick <SteamID64>` | Kick a player from the server |
| `#exec ban <name>` | Permanently ban a player |
| `#shutdown` | Shut down the server |
