---
description: Add an admin to a Soldat server
---

# How to Add an Admin to Your Soldat Server

Admin rights on a Soldat server work through two mechanisms: an **admin password** that any player can log in with inside the game, and a **permanent admin list** that stores IP addresses.

:::: info Note
Soldat identifies admins by their **IP address**, not by a Steam ID or a player UUID. For the permanent admin list you therefore need the IP address of the player in question.
::::

:::: info Two server versions
There are two Soldat server versions with different configuration files. You can tell which one you are running from the file manager or via [SFTP](../establish-sftp-connection.md):

| File in the main directory | Version |
|----------------------------|---------|
| `soldat.ini` and `server.ini` | classic Soldat server |
| `configs/server.cfg` | OpenSoldat |

This guide covers both variants.
::::

## Set the admin password

1. <b>Stop the server</b><br>
   Stop your server via the dashboard.

2. <b>Connect via SFTP</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md).

3. <b>Open the configuration</b><br>
   Classic server: open `soldat.ini` and go to the `[NETWORK]` section.

   OpenSoldat: open the file `configs/server.cfg`.

4. <b>Enter the password</b><br>
   Classic server:

   ```
   Admin_Password=YourAdminPassword
   ```

   OpenSoldat:

   ```
   set sv_adminpassword YourAdminPassword
   ```

5. <b>Start the server</b><br>
   Save the file and start your server.

:::: danger Important
On the classic Soldat server `Admin_Password` is mandatory: if it is empty, **the server will refuse to start**. The password is also case sensitive.
::::

:::: warning Warning
The admin password is not the game password. The game password (`Game_Password` or `sv_password`) only controls who may join the server at all. Anyone who knows the admin password has full control over your server – only share it with people you trust.
::::

## Log in as admin in the game

1. <b>Join the server</b><br>
   Connect to your server. See [Join Server](join-server.md) for how to do that.

2. <b>Open the chat</b><br>
   Open the chat in the game.

3. <b>Log in</b><br>
   Enter the following command with your admin password:

   ```
   /adminlog YourAdminPassword
   ```

   Example:

   ```
   /adminlog Rxz12F
   ```

4. <b>Use the commands</b><br>
   The admin commands are then available in the chat – all of them start with a `/`.

:::: info Note
Logging in with `/adminlog` only applies to the current session. After reconnecting you have to log in again. Anyone who should be a permanent admin belongs in the admin list.
::::

## Permanent admins through the admin list

Permanent admins are managed in the file `remote.txt` in the main directory of your server. It holds **one IP address per line**, optionally followed by a comment.

### Add an admin in the game

1. <b>Log in as admin</b><br>
   Log in with `/adminlog` as described above.

2. <b>Add the player</b><br>
   Enter the following command in the chat with the player's name:

   ```
   /adm <PlayerName>
   ```

   The server looks up the player's IP address itself and writes it into `remote.txt`.

   If you already know the IP address, you can add it directly – the player does not have to be on the server for that:

   ```
   /admip <IP address>
   ```

### Add an admin through the file

1. <b>Stop the server</b><br>
   Stop your server via the dashboard.

2. <b>Open remote.txt</b><br>
   Open the file `remote.txt` in the main directory of your server via [SFTP](../establish-sftp-connection.md). If it does not exist yet, create it.

3. <b>Enter the IP addresses</b><br>
   Enter one IPv4 address per line. You can add a comment behind it:

   ```
   127.0.0.1 [!] Host
   24.232.167.2 [!] Another entry
   ```

4. <b>Start the server</b><br>
   Save the file and start your server.

### Remove an admin

```
/unadm <IP address>
```

:::: info Note
The documentation also mentions `/deadm` for the same purpose. If one of the two variants does not work on your server, try the other one – or simply delete the matching line from `remote.txt`. Editing the file always works.
::::

## Remote admin console

Soldat comes with a remote admin console that lets you run the same commands from outside the game. It runs over **TCP on the same port as the game** – that is, your Game Port.

| Setting (classic, `server.ini`) | Setting (OpenSoldat) | Purpose |
|---------------------------------|----------------------|---------|
| `MaxAdminConnections` | `net_maxadminconnections` | Maximum number of simultaneous admin connections |
| – | `net_adminip` | IP address the admin port is bound to |
| – | `net_rcon_limit` / `net_rcon_burst` | Rate limit for connection attempts per second |

:::: danger Important
Without an admin password nobody can log in to the remote console. The other way round: anyone who knows your admin password can control your server completely – choose a long, unique password and use the console in your **dashboard** when in doubt.
::::

## Restrict admins

Locked mode prevents logged-in admins from using certain commands.

| Server version | How to enable | Effect |
|----------------|---------------|--------|
| classic server | Launch parameter `-lock 1` | Admins can no longer use `/loadcon`, `/password` and `/maxplayers` |
| OpenSoldat | `set sv_lockedmode 1` in `configs/server.cfg` | Admins can no longer use `/loadcon` |

:::: info Note
You cannot change the launch parameters of the server yourself. If you want to use locked mode on the classic server, contact support.
::::

## Important admin commands

| Command | Description |
|---------|-------------|
| `/adminlog <password>` | Log in as admin |
| `/adm <PlayerName>` | Add a player to the admin list permanently |
| `/admip <IP address>` | Add an IP address to the admin list permanently |
| `/unadm <IP address>` | Remove an entry from the admin list |
| `/map <MapName>` | Switch to a specific map |
| `/nextmap` | Switch to the next map in the rotation |
| `/restart` | Restart the round |
| `/gamemode 0-6` | Change the game mode |
| `/friendlyfire 0/1` | Turn friendly fire off or on |
| `/respawntime <seconds>` | Set the respawn time |
| `/say <text>` | Send a message to all players |
| `/addbot <BotName>` | Add a bot |
| `/addbot<team ID> <BotName>` | Add a bot to a specific team, e.g. `/addbot2 Terminator` |

:::: tip Game modes
`0` Deathmatch, `1` Pointmatch, `2` Teammatch, `3` Capture the Flag, `4` Rambomatch, `5` Infiltration, `6` Hold the Flag
::::

:::: info Note
The team ID is attached directly to the command, so there is no space in between. The bot name is the bot's file name without path and extension and is case sensitive.
::::

:::: warning Warning
`/gamemode`, `/friendlyfire` and `/respawntime` only exist on the **classic** server. On **OpenSoldat** you set these values through the matching options in `configs/server.cfg` instead, for example `sv_gamemode` or `sv_friendlyfire`.
::::

:::: tip Tip
To learn how to remove players from your server as an admin, see [Kick & Ban Players](kick-ban-players.md).
::::
