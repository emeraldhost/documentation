---
description: "Kick and ban players on an s&box server"
---

# How to Kick and Ban Players on Your s&box Server

You remove players through the **server console** in the dashboard of your server. In the official sandbox mode, players with the `admin` claim can additionally kick and ban directly in the game – see [Add Admin](add-admin.md).

## Use commands in the server console

1. <b>Open the server console</b><br>
   Open the dashboard of your server and switch to the **server console**.

2. <b>List the players</b><br>
   Display the connected players and their SteamID64:

   ```
   status
   ```

3. <b>Run the command</b><br>
   Enter the desired command, for example:

   ```
   kick 76561198012345678 Rule violation
   ```

:::: info Note
These commands only work through the server console. A regular player can type them into the in-game console, but they have no effect there.
::::

## Kick a player

```
kick <SteamID64 or part of the name> [reason]
```

As the target you pass either the exact SteamID64 or part of the display name. A kick disconnects the player immediately, but they can rejoin at any time.

:::: tip Tip
Names with spaces or special characters are unreliable as a search term. When in doubt, use the SteamID64 from the `status` output.
::::

## Ban a player

```
ban <SteamID64 or part of the name> [reason]
```

A ban kicks the player immediately and prevents them from connecting again. If you do not provide a reason, `Banned` is used.

:::: info Note
Using a SteamID64 you can also ban players who are not currently connected. That lets you block someone before they ever join.
::::

:::: danger Important
The `ban` command belongs to the official sandbox mode (`facepunch.sandbox`) and is therefore not available in every game mode. `kick`, on the other hand, comes from the engine and works regardless of the game mode.
::::

## Lift a ban

s&box has **no `unban` command**. In sandbox mode, banned players are stored in a file on your server which you have to edit manually.

1. <b>Stop the server</b><br>
   Stop your server via the dashboard.

2. <b>Connect via SFTP</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md).

3. <b>Open the ban list</b><br>
   Open the following file:

   ```
   /data/facepunch/sandbox/bans.json
   ```

4. <b>Remove the entry</b><br>
   Delete the player's entry from the list and make sure the file remains valid JSON.

5. <b>Start the server</b><br>
   Save the file and start your server.

:::: warning Warning
Never edit the file while the server is running. The server keeps the ban list in memory and rewrites the whole file on every change – your edit would be overwritten immediately.
::::

:::: info Note
This path applies to the official sandbox mode. Other game modes store their data under `/data/<organisation>/<package>/` and use their own file names there.
::::

## Command overview

| Command | Description |
|---------|-------------|
| `status` | Show server status, connected players and the lobby ID |
| `kick <SteamID64 or part of the name> [reason]` | Disconnect a player from the server |
| `ban <SteamID64 or part of the name> [reason]` | Ban a player (sandbox mode) |
| `game <game mode> [map]` | Switch the game mode and map |
| `find <text>` | Search the available commands and variables |
| `quit` | Shut down the server |

:::: warning Warning
`quit` terminates the server process. Use the dashboard to restart your server.
::::
