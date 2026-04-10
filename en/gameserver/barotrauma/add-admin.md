---
description: Add an admin on a Barotrauma server
---

# How to Add an Admin on Your Barotrauma Server

You can add admins via the `clientpermissions.xml` file to grant players permissions on your server.

:::: tip Tip
Here you can find a guide on how to find your [SteamID64](../steamid64-find-out.md).
::::

1. <b>Stop the server</b><br>
   Stop your server via the dashboard.

2. <b>Connect via SFTP</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md).

3. <b>Edit clientpermissions.xml</b><br>
   Open the file `clientpermissions.xml` in the following directory:

   ```
   /config/clientpermissions.xml
   ```

   Add a new entry for the player:

   ```xml
   <Client
     name="PlayerName"
     steamid="YOUR_STEAMID64"
     permissions="All"
   />
   ```

4. <b>Start the server</b><br>
   Save the file and start your server.

:::: info Note
With `permissions="All"` the player receives all available permissions. You can also grant individual permissions such as `ManageRound,Kick,Ban,ConsoleCommands`.
::::
