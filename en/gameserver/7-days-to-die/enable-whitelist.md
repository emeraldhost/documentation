---
description: Enable whitelist on a 7 Days to Die server
---

# How to Enable the Whitelist on Your 7 Days to Die Server

With the whitelist you can restrict access to your server to specific players.

:::: tip Tip
Here you can find a guide on how to find your [SteamID64](../steamid64-find-out.md).
::::

## Set up whitelist via serveradmin.xml

1. <b>Stop the server</b><br>
   Stop your server via the dashboard.

2. <b>Connect via SFTP</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md).

3. <b>Open serveradmin.xml</b><br>
   Open the file `serveradmin.xml` in the directory:

   ```
   /Saves/serveradmin.xml
   ```

4. <b>Add players to whitelist</b><br>
   Add entries for each player in the `<whitelist>` section:

   ```xml
   <whitelist>
     <user platform="Steam" userid="76561198012345678" name="Player1" />
     <user platform="Steam" userid="76561198087654321" name="Player2" />
   </whitelist>
   ```

5. <b>Start the server</b><br>
   Save the file and start your server.

:::: info Note
As soon as **one player** is added to the whitelist, only listed players can join the server. Admins can always join regardless of the whitelist.
::::

## Manage whitelist via console command

If you are already an admin, you can also manage the whitelist in-game. Press `F1` to open the console:

| Command | Description |
|---------|-------------|
| `whitelist add <SteamID64>` | Add a player to the whitelist |
| `whitelist remove <SteamID64>` | Remove a player from the whitelist |
| `whitelist list` | Show all players on the whitelist |
