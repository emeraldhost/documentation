---
description: Kick and ban players on an Arma 3 server
---

# How to Kick and Ban Players on Your Arma 3 Server

There are two ways to remove players: directly in the game through the chat console, or from outside through BattlEye RCON – even when you are not on the server yourself.

:::: info Note
You need admin rights to use the in-game commands. See [Add Admin](add-admin.md).
::::

## Use commands in the game

1. <b>Log in as admin</b><br>
   Press the `/` key in the game to open the chat console and log in as admin:

   ```
   #login yourAdminPassword
   ```

2. <b>Kick a player</b><br>
   Disconnect a player from the server. You can pass the player name, the ID or the player number:

   ```
   #kick PlayerName
   ```

   The player is disconnected immediately but can rejoin at any time.

3. <b>Ban a player</b><br>
   Block a player permanently. With `#exec`, the name or ID has to be wrapped in quotation marks:

   ```
   #exec ban "PlayerName"
   ```

   The player's ID is added to the ban list `ban.txt` in the main directory of your server.

4. <b>Lift a ban</b><br>
   Remove a ban again. Only the player's UID works here, not the name:

   ```
   #exec unban "76561198012345678"
   ```

## Command overview

| Command | Description |
|---------|-------------|
| `#kick <name/ID>` | Disconnect a player from the server |
| `#exec ban "<name/ID>"` | Ban a player permanently |
| `#exec unban "<UID>"` | Lift a ban – only possible using the UID |
| `#lock` | Lock the server – nobody can join anymore |
| `#unlock` | Unlock the server again |

:::: warning Caution
Do not edit the ban files of your server by hand. Use `#exec unban` or the RCON commands to lift bans – this keeps the list in a valid state.
::::

## Set up BattlEye RCON

With RCON you manage players from your PC without being in the game. In Arma 3, RCON runs exclusively through BattlEye.

:::: danger Important
RCON only works while BattlEye is active on your server. If the `server.cfg` contains `BattlEye = 0;`, RCON cannot be used.
::::

1. <b>Stop the server</b><br>
   Stop your server via the dashboard.

2. <b>Enable BattlEye</b><br>
   Open the file `/server.cfg` via [SFTP](../establish-sftp-connection.md) and make sure it contains the following value:

   ```
   BattlEye = 1;
   ```

3. <b>Determine the port</b><br>
   RCON runs through the BattlEye port of your server – that is the **Game Port + 4**. The ports assigned to your server are shown in the **dashboard**. If that port is not available to you, assign an additional port to your server there and use it instead.

4. <b>Create the BattlEye configuration</b><br>
   Change into the `battleye` folder of your server via SFTP and create the file `beserver_x64.cfg` there – or open it if it already exists. Enter the following two lines:

   ```
   RConPassword yourRconPassword
   RConPort yourRconPort
   ```

   :::: info Note
   BattlEye creates the folder automatically the first time the server starts with BattlEye enabled, by default inside the server profile directory – so under `/serverprofile/battleye`. If you cannot find it, start your server once with `BattlEye = 1;` and stop it again afterwards. If your server starts with the 32-bit binary, the file is called `beserver.cfg` instead of `beserver_x64.cfg`.
   ::::

5. <b>Start the server</b><br>
   Save the changes and start your server.

6. <b>Connect via RCON</b><br>
   Connect using an RCON tool such as [BattleWarden](https://battlewarden.net/) and enter the IP address of your server, the RCON port and the RCON password.

## RCON commands

| Command | Description |
|---------|-------------|
| `players` | Shows all connected players with player number, GUID and ping |
| `kick [player #] [reason]` | Disconnects a player from the server |
| `ban [player #] [time] [reason]` | Bans a connected player by GUID, `0` means permanent |
| `addBan [GUID or IP] [time] [reason]` | Bans a player who is currently not connected |
| `bans` | Lists all active bans together with their ban number |
| `removeBan [ban #]` | Lifts a single ban |
| `loadBans` | Reloads the ban list |
| `writeBans` | Removes expired bans from the list |
| `say [player #] [message]` | Sends a message, `-1` sends it to everyone |

:::: tip Lift a ban via RCON
First run `bans` and note the number of the entry. Then lift the ban with `removeBan <ban #>`.
::::

:::: info Note
The player numbers from `players` are only valid for the current session. Check them again right before every `kick` or `ban`.
::::
