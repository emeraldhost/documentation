---
description: Add and remove admin on a Barotrauma server
---

# How to Add an Admin to Your Barotrauma Server

You can manage admins via the `clientpermissions.xml` file.

:::: tip Tip
Here you can find a guide on how to find your [SteamID64](../steamid64-find-out.md).
::::

## Add admin

1. <b>Stop the server</b><br>
   Stop your server via the dashboard.

2. <b>Connect via SFTP</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md).

3. <b>Open clientpermissions.xml</b><br>
   Open the file `clientpermissions.xml` at:

   ```
   /config/clientpermissions.xml
   ```

4. <b>Add admin</b><br>
   Add a new entry:

   ```xml
   <Client
     name="PlayerName"
     steamid="YOUR_STEAMID64"
     preset="Admin"
   />
   ```

5. <b>Start the server</b><br>
   Save the file and start your server.

## Remove admin

To remove an admin, delete the corresponding `<Client>` entry from `clientpermissions.xml` and restart the server.

## Available presets

| Preset | Description |
|--------|-------------|
| `Admin` | Full access to all commands and settings |
| `Moderator` | Can kick, ban players and moderate the chat |
| `None` | No special permissions |

:::: info Note
You can also assign custom permissions by using `permissions="ManageRound,Kick,Ban,ConsoleCommands"` instead of a preset.
::::
