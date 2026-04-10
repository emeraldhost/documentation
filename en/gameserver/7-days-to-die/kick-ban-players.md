---
description: Kick and ban players on a 7 Days to Die server
---

# How to Kick and Ban Players on Your 7 Days to Die Server

You can kick and ban players using console commands or by editing the `serveradmin.xml` file.

:::: warning Requirement
You must be an admin on your server. Here you can find a guide on how to [add an admin](add-admin.md).
::::

## Kick or ban players via console command

1. <b>Join the server</b><br>
   Join your 7 Days to Die server.

2. <b>Open the console</b><br>
   Press `F1` to open the console.

3. <b>List players</b><br>
   Enter the command `listplayers` to display all connected players.

4. <b>Kick or ban a player</b><br>
   Use one of the following commands:

   ```
   kick <Name>
   ```

   ```
   ban add <Name> <Duration> <Unit> [Reason]
   ```

   Example:
   ```
   ban add PlayerName 1 year cheating
   ```

## Ban players via serveradmin.xml

1. <b>Stop the server</b><br>
   Stop your server via the dashboard.

2. <b>Connect via SFTP</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md).

3. <b>Open serveradmin.xml</b><br>
   Open the file `serveradmin.xml` in the directory:

   ```
   /Saves/serveradmin.xml
   ```

4. <b>Add player to the blacklist</b><br>
   Add a new entry in the `<blacklist>` section:

   ```xml
   <blacklist>
     <blacklisted platform="Steam" userid="PLAYER_STEAMID64" name="PlayerName"
       unbandate="" reason="Reason" />
   </blacklist>
   ```

:::: tip Tip
Here you can find a guide on how to find a player's [SteamID64](../steamid64-find-out.md).
::::

5. <b>Start the server</b><br>
   Save the file and start your server.

## Command overview

| Command | Description |
|---------|-------------|
| `listplayers` | List all connected players |
| `kick <Name>` | Kick a player from the server |
| `ban add <Name> <Duration> <Unit> [Reason]` | Ban a player (e.g. `ban add PlayerName 1 year cheating`) |
| `ban remove <Name>` | Unban a player |
