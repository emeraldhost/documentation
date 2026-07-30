---
description: Kick and ban players on a The Front server
---

# How to Kick and Ban Players on Your The Front Server

You remove players from your The Front server using admin commands directly in the game. All commands work with the player's **SteamID64** – a 17-digit number starting with `7656`.

:::: info Note
You need admin rights to use these commands. See [Add Admin](add-admin.md).
::::

:::: tip Tip
Here you can find a guide on how to find a [SteamID64](../steamid64-find-out.md).
::::

## Use commands in the game

1. <b>Open the admin menu</b><br>
   Press `Shift` + `G` in the game to open the admin menu. Alternatively you can open the console with the `` ` `` or `~` key.

2. <b>Enter the command</b><br>
   Enter the desired command together with the player's SteamID64, for example:

   ```
   BanPlayer 76561198012345678 login
   ```

3. <b>Confirm</b><br>
   Confirm your input. The command takes effect immediately, no server restart is required.

## Kick a player

```
KickPlayerOff <SteamID64>
```

The player is disconnected from the server but can rejoin at any time.

## Ban a player

```
BanPlayer <SteamID64> login
```

The player can no longer log in to your server until you lift the ban.

## Unban a player

```
PermitPlayer <SteamID64> login
```

## Mute a player

```
BanPlayer <SteamID64> chat
```

This locks the player out of the in-game chat. They can still join the server.

## Unmute a player

```
PermitPlayer <SteamID64> chat
```

## Command overview

| Command | Description |
|---------|-------------|
| `KickPlayerOff <SteamID64>` | Disconnect a player from the server |
| `BanPlayer <SteamID64> login` | Ban a player from the server |
| `PermitPlayer <SteamID64> login` | Lift a ban |
| `BanPlayer <SteamID64> chat` | Mute a player (chat) |
| `PermitPlayer <SteamID64> chat` | Unmute a player |
| `GotoPlayerByAccount <SteamID64>` | Teleport to a player |

:::: warning Warning
The difference lies in the second value: `login` controls access to the server, `chat` only the communication. To lock a player out completely, use `login`.
::::

:::: info Where are bans stored?
Admins and bans are stored in the file `Saved/GameStates/Accounts/GM.csv` on your server. Do not edit it by hand – lift bans with the `PermitPlayer` command so the data stays consistent. The file is included automatically when you back up your save, see [Download savegame](download-savegame.md).
::::
