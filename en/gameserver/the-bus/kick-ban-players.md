---
description: Kick and ban players on a The Bus server
---

# How to Kick and Ban Players on a The Bus Server

## Show player list

To show all players on the server, enter the following command:

```
/list
```

## How to kick a player

```
/kick <playername>
```

The player will be immediately removed from the server.

## How to ban a player

```
/ban <playername>
```

The player will be permanently banned and automatically kicked from the server.

## How to temporarily ban a player

```
/tempban <playername> <minutes>
```

**Examples:**

```
/tempban PlayerName 60
/tempban PlayerName 1440
```

| Duration | Minutes |
|----------|---------|
| 1 hour | `60` |
| 24 hours | `1440` |
| 7 days | `10080` |

## How to unban a player

```
/unban <playername>
```

Alternatively, you can open the file `TheBus/Saved/PlayerData.json` via [SFTP](../establish-sftp-connection.md) and set the value `"banned"` to `false`:

```json
{
    "name": "PlayerName",
    "uniqueId": "|0002xxxxxxxxxxxxxxxxxxxxxxxxxxxx",
    "perms": "User",
    "banned": false,
    "unbanDate": "0001.01.01-00.00.00",
    "adminPasswordUsed": ""
}
```

Restart the server afterwards.

## How to mute a player

```
/mute <playername>
```

The player will no longer be able to send messages in chat.

## How to unmute a player

```
/unmute <playername>
```

## All commands

| Command | Description |
|---------|-------------|
| `/list` | Show all players |
| `/kick <player>` | Kick player from server |
| `/ban <player>` | Permanently ban player |
| `/tempban <player> <minutes>` | Temporarily ban player |
| `/unban <player>` | Unban player |
| `/mute <player>` | Mute player |
| `/unmute <player>` | Unmute player |

:::: tip Tip
These commands require Owner or Admin permissions.
::::
