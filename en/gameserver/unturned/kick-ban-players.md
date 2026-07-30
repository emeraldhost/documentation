---
description: Kick and ban players on an Unturned server
---

# How to Kick and Ban Players on Your Unturned Server

You remove players from an Unturned server using commands – either in the **console** of the dashboard or, as an admin, directly in the in-game chat. The commands take effect immediately, no restart is needed.

:::: warning Requirement
To use the commands in the in-game chat you need admin rights. Here you can find a guide on how to [add an admin](add-admin.md). In the console of the dashboard the commands always work.
::::

:::: tip Tip
Here you can find a guide on how to find a player's [SteamID64](../steamid64-find-out.md).
::::

## Enter commands

1. <b>Open the console or chat</b><br>
   Open the **console** in the dashboard of your server or – as an admin in the game – the chat.

2. <b>Enter the command</b><br>
   In the console you enter the command without a prefix, in the in-game chat with a leading `/` or `@`:

   ```
   kick Sam/AFK
   ```

   ```
   /kick Sam/AFK
   ```

:::: danger Parameters are separated by a slash
Unlike many other games, Unturned separates the parameters with a **`/`** instead of a space. So `ban Sam Griefing` does not work – the correct form is `ban Sam/Griefing`.
::::

## Kick a player

```
kick <SteamID64|PlayerName>/<Reason>
```

The player is disconnected from the server but can rejoin at any time. If you leave out the reason, the player is kicked with the reason "unspecified".

:::: tip Example
```
kick 76561198012345678/AFK
```
::::

## Ban a player

```
ban <SteamID64|PlayerName>/<Reason>/<Duration in seconds>
```

The player is kicked from the server and cannot connect again for the given duration.

:::: tip Example
```
ban 76561198012345678/Griefing/86400
```

This bans the player for one day (86,400 seconds).
::::

:::: info Leaving out the duration
If you do not specify a duration, the player is banned for 31,536,000 seconds – which equals 365 days. For a longer ban, enter a correspondingly larger value in seconds.
::::

| Duration | Value in seconds |
|----------|------------------|
| 1 hour | `3600` |
| 1 day | `86400` |
| 7 days | `604800` |
| 30 days | `2592000` |
| 365 days | `31536000` |

## Lift a ban

```
unban <SteamID64>
```

:::: warning Warning
Unbanning works with the **SteamID64 only** – not with the player name, because the player is no longer on the server. Make a note of the SteamID64 before you ban someone.
::::

## Command overview

| Command | Description |
|---------|-------------|
| `kick <SteamID64\|PlayerName>/<Reason>` | Disconnect a player from the server |
| `ban <SteamID64\|PlayerName>/<Reason>/<Seconds>` | Ban a player |
| `unban <SteamID64>` | Lift a ban |
| `admin <SteamID64\|PlayerName>` | Make a player an admin |
| `unadmin <SteamID64\|PlayerName>` | Revoke admin rights |
| `save` | Save the world |
| `shutdown` | Save the world and shut the server down |

## Ban list

:::: warning Maintain the ban list with the commands
Bans are stored in `/Servers/<ServerID>/Server/Blacklist.dat`. Always ban and unban using the `ban` and `unban` commands so the list stays valid. If you want to lift all bans at once, you can also delete the file while the server is stopped.
::::

## Open the server to specific players only

:::: info Whitelist
Unturned also has the configuration command `Whitelisted` for `Commands.dat`. With it, only permitted players can join your server. How players are added to that list is not officially documented – if you simply want to keep your server private, a server password is the easier option.
::::
