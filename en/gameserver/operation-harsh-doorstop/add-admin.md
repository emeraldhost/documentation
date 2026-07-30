---
description: Add an admin to an Operation Harsh Doorstop server
---

# How to Add an Admin to Your Operation Harsh Doorstop Server

Admins are defined through the file `Admins.cfg`. What you enter is the player's **SteamID64** – a 17-digit number starting with `7656`.

:::: tip Tip
Here you can find a guide on how to find your [SteamID64](../steamid64-find-out.md).
::::

:::: info Note
The file `Admins.cfg` is **not** shipped with the server. If it does not exist yet, simply create it yourself.
::::

## Add an admin

1. <b>Stop the server</b><br>
   Stop your server via the dashboard. The admin list is read on server start.

2. <b>Connect via SFTP</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md).

3. <b>Open Admins.cfg</b><br>
   Open the following file. If it does not exist yet, create it in this folder:

   ```
   /HarshDoorstop/Saved/Config/LinuxServer/Admins.cfg
   ```

4. <b>Enter the SteamID64</b><br>
   Enter exactly one SteamID64 per line – no names, no comments and no other characters:

   ```
   76561198012345678
   76561198087654321
   ```

5. <b>Start the server</b><br>
   Save the file and start your server.

:::: info Note
The folder `LinuxServer` is only created after the server has fully started once. If you cannot find it, start the server once and connect via SFTP again afterwards.
::::

## Use admin commands in game

As a listed admin you control the server directly from within the game.

1. <b>Join the server</b><br>
   Join your server – see [Join Server](join-server.md).

2. <b>Open the console</b><br>
   Press the `~` key to open the in-game console.

3. <b>Enter a command with the prefix</b><br>
   In game, every admin command starts with `admin`, for example:

   ```
   admin status
   ```

   ```
   admin servertravel <map name>
   ```

:::: info Note
All RCON commands also work in the in-game console as long as you put the `admin` prefix in front. Without the prefix the command is not executed.
::::

## Manage admins while the server is running

Through an RCON client you can grant admin rights while the server is running. These commands take effect immediately, without stopping the server:

| Command | Description |
|---------|-------------|
| `admin add <name>` | Adds a player as admin by name |
| `admin addid <id#>` | Adds a player as admin by the ID number from `status` |
| `admin remove <name>` | Removes admin rights from a player |
| `admin removeid <id#>` | Removes admin rights by ID number |

:::: tip Tip
The command `status` gives you the ID number and the SteamID64 of every connected player.
::::

:::: warning Caution
Always add permanent admins to `Admins.cfg` as well. Only then do the rights survive a server restart.
::::

## Reload the configuration

If you edited `Admins.cfg` while the server was running, you do not necessarily have to restart it. The following RCON command reloads the configuration files from disk:

```
RELOADSERVERCONFIG
```

Among others it refreshes `Admins.cfg`, `Bans.cfg` and `MapCycle.cfg`.

:::: info Custom file name
By default the admin file is called `Admins.cfg`. The startup parameter `-AdminList=FileName.cfg` lets you use a different file name. You usually do not need this – stick with the default.
::::

:::: tip Tip
To learn how to remove players from your server as an admin, see [Kick & Ban Players](kick-ban-players.md).
::::
