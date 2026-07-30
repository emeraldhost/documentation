---
description: Kick and ban players on a SCUM server
---

# How to Kick and Ban Players on Your SCUM Server

You can remove players directly in the game using chat commands or manage them through the configuration files of your server.

:::: info Note
You need admin rights to use these commands. See [Add Admin](add-admin.md).
::::

## Use commands in the game

1. <b>Open the chat</b><br>
   Press `T` in the game to open the chat.

2. <b>Find the SteamID64</b><br>
   To ban someone you need their SteamID64. The following command lists it:

   ```
   #ListPlayers
   ```

3. <b>Run the command</b><br>
   Enter the desired command with a leading `#`, for example:

   ```
   #Ban 76561198012345678
   ```

## Kick a player

```
#Kick <PlayerName>
```

The player is disconnected from the server but can rejoin at any time.

## Ban a player

```
#Ban <SteamID64>
```

The player is kicked immediately and cannot connect again until the ban is lifted.

:::: info Note
SCUM does not support time-limited bans. A ban stays in place until you lift it.
::::

## Unban a player

```
#Unban <SteamID64>
```

## Mute a player

```
#Mute <PlayerName>
```

```
#UnMute <PlayerName>
```

With `#Silence <PlayerName> <duration in hours>` you can mute a player for a specific amount of time. If you leave out the duration or enter `0`, the player stays silenced indefinitely.

## Command overview

| Command | Description |
|---------|-------------|
| `#ListPlayers` | List all players including their SteamID64 |
| `#Kick <PlayerName>` | Disconnect a player from the server |
| `#Ban <SteamID64>` | Ban a player permanently |
| `#Unban <SteamID64>` | Lift a ban |
| `#Mute <PlayerName>` | Mute a player |
| `#UnMute <PlayerName>` | Unmute a player |
| `#Silence <PlayerName> <hours>` | Mute a player for a limited time |
| `#ListMutedPlayers` | Show all muted players |
| `#Announce <Text>` | Send an announcement to all players |

## Manage the lists via configuration files

All lists are located in the following directory, accessible via [SFTP](../establish-sftp-connection.md):

```
/SCUM/Saved/Config/WindowsServer/
```

| File | Purpose |
|------|---------|
| `BannedUsers.ini` | Banned players, one SteamID64 per line. Deleting a line is the same as an unban. |
| `SilencedUsers.ini` | Muted players including their remaining duration |
| `ExclusiveUsers.ini` | A true whitelist: as soon as the first SteamID64 is listed here, only listed players can join the server. |
| `WhitelistedUsers.ini` | Priority slots: listed players can also join a full server – another player gets kicked instead. |

1. <b>Stop the server</b><br>
   Stop your server via the dashboard.

2. <b>Edit the file</b><br>
   Open the desired file via SFTP and enter the SteamID64 – one per line. If the file does not exist yet, create it.

3. <b>Start the server</b><br>
   Save the file and start your server.

:::: warning Warning
The lists are only read on server start. Changes made to the files while the server is running have no effect – and may be overwritten when the server stops. Always stop your server before editing the files.
::::

:::: danger Important
`WhitelistedUsers.ini` is **not** a whitelist. If you want to open your server only to specific players, use `ExclusiveUsers.ini` instead.
::::

:::: info Note
The configuration folder is called `WindowsServer` on your Linux server as well. SCUM only ships a Windows server binary, which runs on Linux servers through a compatibility layer.
::::
