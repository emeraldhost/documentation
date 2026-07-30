---
description: Kick and ban players on a Mindustry server
---

# How to Kick and Ban Players on Your Mindustry Server

On a Mindustry server you remove players through the **console** of your server. There is no file to edit – all bans are stored in binary form in `config/settings.bin`.

:::: info Note
In the console of your dashboard all commands are available to you without any extra permissions. As an [admin](add-admin.md) you can additionally kick and ban players directly in the game through the player list.
::::

## Kick a player

```
kick <PlayerName>
```

The player is disconnected immediately and a message is shown in the chat for everyone. After a short block of around 30 seconds they can rejoin.

:::: warning Caution
`kick` only finds players who are currently **online**, and the name has to match exactly. There is no duration option – kicking a player "for 30 minutes" is not possible in Mindustry.
::::

## Ban a player

When banning you always specify the type first:

```
ban <id/name/ip> <value>
```

| Variant | When to use it |
|---------|----------------|
| `ban id <UUID>` | The most reliable ban. Works even while the player is offline. |
| `ban name <PlayerName>` | Only for players who are currently online. |
| `ban ip <IP address>` | Blocks an entire IP address. |

:::: tip Example
```
ban id AbCdEfGhIjKlMnOpQrSt==
```
::::

The server confirms with `Banned.` and kicks the player right away if they are still connected.

:::: info Note
You can read a player's UUID with `players` (all connected players) or `info <name/UUID/IP>`. If you use a type other than `id`, `name` or `ip`, the server reports `Invalid type.`
::::

## Show bans

```
bans
```

Lists all banned UUIDs with their last known name as well as all banned IP addresses.

## Lift a ban

```
unban <UUID/IP address>
```

The server confirms with `Unbanned player: <value>`.

:::: tip Tip
If you lift a ban by UUID, the server automatically removes the associated IP addresses from the ban list as well.
::::

## Undo a votekick

If other players removed someone by votekick, `unban` does not help – there is a dedicated command for that:

```
pardon <UUID>
```

This allows the player to rejoin.

:::: info Note
The votekick system is enabled by default. You can turn it off:

```
config enableVotekick false
```
::::

## Further blocking options

| Command | Description |
|---------|-------------|
| `name-ban [add/remove/clear] [expression]` | Blocks player names based on a regular expression, ignoring upper and lower case |
| `subnet-ban [add/remove] [address]` | Blocks a whole IP range based on the beginning of the address |
| `dos-ban [add/remove] [ip]` | Blocks an IP address because of connection flooding |

## Command overview

| Command | Description |
|---------|-------------|
| `players` | Show all connected players with UUID and IP |
| `kick <PlayerName>` | Disconnect a player from the server |
| `ban id <UUID>` | Ban a player permanently by UUID |
| `ban name <PlayerName>` | Ban an online player by name |
| `ban ip <IP>` | Ban an IP address |
| `bans` | Show all bans |
| `unban <UUID/IP>` | Lift a ban |
| `pardon <UUID>` | Undo a votekick |

:::: danger Important
Bans and the whitelist are stored together with all settings in the binary file `config/settings.bin`. Manage them exclusively through the console commands – opening the file in a text editor destroys it.
::::

:::: tip Open the server for selected players only
Instead of banning individual players, you can also close your server completely and allow only selected players. You can find out how under [Add Admin](add-admin.md) in the whitelist section.
::::
