---
description: Add an admin to a Soldat 2 server
---

# How to Add an Admin to Your Soldat 2 Server

Soldat 2 has two ways to grant admin rights: a **permanent admin via PlayFab ID** and an **RCON password** that lets any number of players log in as admin in the game. There is no file-based admin list.

:::: info Note
The field for the permanent admin is **singular** – exactly **one** PlayFab ID can be stored per server. All further admins log in with the RCON password.
::::

## Set the permanent admin via PlayFab ID

Soldat 2 identifies players by their **PlayFab ID**, a 16-character hexadecimal string such as `9FD985AB3FE67850`. A Steam ID is not used here.

### Find the PlayFab ID

1. <b>Start the server</b><br>
   Start your server via the **dashboard** and open the server console there.

2. <b>Join the server</b><br>
   Connect to your server. How to do that is explained under [Join Server](join-server.md).

3. <b>Read the console output</b><br>
   When you join, the server writes a line following this pattern:

   ```
   1 YOUR_NAME joined the server [9FD985AB3FE67850]
   ```

   The value in square brackets is the PlayFab ID.

4. <b>Copy the ID</b><br>
   Write down the ID exactly as it appears in the console.

:::: tip Tip
You can find another player's PlayFab ID the same way – have them connect to your server once and read the matching line from the console.
::::

### Enter the PlayFab ID

1. <b>Stop the server</b><br>
   Stop your server via the **dashboard**.

2. <b>Store the ID</b><br>
   Enter the PlayFab ID into the admin field in the **dashboard**.

3. <b>Start the server</b><br>
   Start your server. The value is written into the `autoconfig.ini` on start:

   ```
   AdminPlayfabId=9FD985AB3FE67850
   ```

4. <b>Join and verify</b><br>
   Connect to your server. A red `[Admin]` tag appears behind your name in the scoreboard.

:::: danger Important
The `autoconfig.ini` is completely rewritten when the server **stops**. Any change you write into the file while the server is running is lost in the process. Only edit the file while the server is stopped.
::::

:::: warning Warning
The values `Name`, `Port`, `WebSocketsPort`, `WebSocketsRconPort`, `RconPassword`, `MaxPlayers`, `GreetMessage`, `AdminPlayfabId` and `ServerPassword` are written from the **dashboard** into the `autoconfig.ini` on **every server start**. These values therefore belong in the dashboard, not in the file.
::::

:::: info Spelling
You will find two spellings of this key online: `AdminPlayfabId` and `AdminPlayfabID`. What counts is the spelling that is already in your `autoconfig.ini` – keep it exactly as it is.
::::

## Further admins via the RCON password

For all further admins you use the RCON password. With it, any player can log in as admin directly in the game.

1. <b>Stop the server</b><br>
   Stop your server via the **dashboard**.

2. <b>Set the password</b><br>
   Enter your own long password into the RCON password field in the **dashboard**.

3. <b>Start the server</b><br>
   Start your server.

4. <b>Log in inside the game</b><br>
   Open the console in the game and log in:

   ```
   rcon YourRconPassword
   ```

:::: danger Important
A default password is set out of the box. Make sure to change it – anyone who knows the RCON password has full control over your server.
::::

## The in-game console

1. <b>Open the console</b><br>
   Press `Alt` + `~` in the game.

2. <b>Enter a command</b><br>
   Commands that affect the server are prefixed with `rcon`:

   ```
   rcon listplayers
   ```

3. <b>List commands</b><br>
   Pressing `Tab` shows the available commands and completes your input.

:::: info Note
Commands are **not** case sensitive. `rcon ListPlayers` and `rcon listplayers` do the same thing.
::::

## Admin commands at a glance

| Command | Description |
|---------|-------------|
| `rcon info` | Show information about the server |
| `rcon listplayers` | Show all players with their IDs |
| `rcon listmaps` | Show available maps |
| `rcon version` | Show the server version |
| `rcon say "<text>"` | Send a message to everyone. With a leading ID only to one player: `rcon say 2 "text"` |
| `rcon addbot` | Add a bot |
| `rcon rembot` | Remove a bot |
| `rcon setteam <id> <team>` | Move a player into a team |
| `rcon kick <id>` | Disconnect a player from the server |
| `rcon kickall` | Disconnect all players from the server |
| `rcon ban <id>` | Ban a player for a limited time |
| `rcon vote` | Start a vote |
| `rcon restart` | Restart the current round |
| `rcon nextmap` | Switch to the next map |
| `rcon loadmap <mapname> <gamemode>` | Load a specific map with a game mode |
| `rcon loadcycle <file>` | Load a map cycle |
| `rcon addmodifier <name>` | Enable a modifier |
| `rcon removemodifier <name>` | Disable a modifier |
| `rcon reload` | Recompile and reload the scripts |
| `rcon restartserver` | Restart the server |
| `rcon get <variable>` | Print the value of a variable |
| `rcon set <variable> <value>` | Set the value of a variable |

## Change settings while the server is running

With `set` and `get` you change values without stopping the server. This works for configuration variables as well as for rule values:

```
rcon set FillBotsCount 5
```

```
rcon set Match.MinimumPlayers 4
```

:::: warning Warning
Changes made with `set` only apply to the running session. On the next server start the values from the **dashboard** and the `autoconfig.ini` apply again.
::::

:::: tip Tip
To learn how to remove players from your server as an admin, see [Kick & Ban Players](kick-ban-players.md).
::::
