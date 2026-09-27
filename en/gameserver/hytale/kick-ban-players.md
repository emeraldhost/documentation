---
description: Kick and ban players on a Hytale server
---

# How to Kick and Ban Players on a Hytale Server

Enter the following commands in the console of your dashboard. Admins can also use them in-game, with a leading `/`. You can find out how to grant admin rights under [Add Admin](add-admin.md).

## How to Kick a Player

1. <b>Open dashboard</b><br>
   Open the dashboard of your Hytale server.

2. <b>Enter the Command</b><br>
   Enter the following command in the console:
   ```
   kick <playername>
   ```

The player must be online for this. They are disconnected from the server but can rejoin right away.

## How to Ban a Player

```
ban <playername> <reason>
```

You can also leave out the reason. Instead of the name, the player's UUID works as well, and the player does not have to be online. The ban is permanent. If the player is currently online, they are disconnected from the server immediately.

Example:
```
ban Player123 Griefing at spawn
```

## How to Unban a Player

```
unban <playername>
```

Here, too, you can use the UUID instead of the name.

## All Commands

| Command | Description |
| ------- | ----------- |
| `kick <player>` | Kick player from server |
| `ban <player> [reason]` | Ban player permanently, optionally with a reason |
| `unban <player>` | Unban player |

:::: info Note
The server stores banned players in the `bans.json` file in the main directory. You can ban admins (OPs) directly as well, without removing their rights first.
::::
