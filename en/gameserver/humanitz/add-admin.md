---
description: Add an admin to a HumanitZ server
---

# How to Add an Admin to Your HumanitZ Server

HumanitZ works with an **admin password**: you store it in the configuration file of your server, and whoever enters it in the game with a chat command gets admin rights. There is currently no working admin list based on SteamIDs.

:::: warning Warning
Everyone who knows the admin password has full admin rights on your server. Only share it with people you trust and use a different password than your server and RCON password.
::::

:::: info Project folder
All paths in this guide start with the project folder `HumanitZServer`. If your server still runs a version older than HumanitZ 1.0, that folder is called `TSSGame` instead. Check via SFTP which of the two folders exists on your server and adjust the paths accordingly.
::::

## Set the admin password

1. <b>Stop the server</b><br>
   Stop your server via the dashboard. The configuration file is only read on server start.

2. <b>Connect via SFTP</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md).

3. <b>Open the configuration file</b><br>
   Open the following file:

   ```
   /HumanitZServer/GameServerSettings.ini
   ```

4. <b>Enter the password</b><br>
   Enter the admin password you want in the `[Host Settings]` section:

   ```ini
   [Host Settings]
   AdminPass="YourAdminPassword"
   ```

5. <b>Start the server</b><br>
   Save the file and start your server.

:::: info Note
If the dashboard of your server offers a dedicated field for the admin password, prefer that field – values from the dashboard can be written back into the configuration file on start.
::::

## Unlock admin rights in the game

1. <b>Join the server</b><br>
   Join your server. How to do that is described in [Join Server](join-server.md).

2. <b>Open the chat</b><br>
   Open the chat in the game.

3. <b>Enter the command</b><br>
   Enter the following command with your admin password:

   ```
   /AdminAccess YourAdminPassword
   ```

4. <b>Use admin commands</b><br>
   From now on the admin commands are available to you.

:::: info Note
The unlock applies to the current session. After a lost connection or a server restart you enter the command again.
::::

## Admin command overview

| Command | Description |
|---------|-------------|
| `/AdminAccess <password>` | Unlock admin rights |
| `/admintag` | Show or hide the admin tag in the chat |
| `/adminw` | Opens an admin interface for spawning items and changing some game settings |
| `/SuperAdmin` | Toggles free flight mode – while it is active you are invisible to other players |
| `/god` | Turn invulnerability on or off |
| `/SaveGame` | Saves the current savegame |
| `/Shutdown <seconds>` | Shuts the server down after the given time |

:::: warning Warning
`/Shutdown` terminates the server process. Whether your server starts up again automatically afterwards depends on the settings in the dashboard – if in doubt, start it manually there.
::::

## AdminList.txt

The project folder can additionally contain a file `AdminList.txt` with one SteamID64 (NET ID) per line:

```
/HumanitZServer/AdminList.txt
```

:::: danger Important
According to the official documentation this file **currently has no function** – it is explicitly marked as not working there. Therefore grant admin rights exclusively through `AdminPass` and `/AdminAccess`.
::::

:::: tip Tip
Here you can find a guide on how to find a [SteamID64](../steamid64-find-out.md). The IDs of players who already joined your server can also be found in the file `/HumanitZServer/PlayerIDMapped.txt`, which maps the ID to the player name.
::::

:::: tip Tip
To learn how to remove players from your server, see [Kick & Ban Players](kick-ban-players.md).
::::
