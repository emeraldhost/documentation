---
description: Kick and ban players on a The Cenozoic Era server
---

# How to Kick and Ban Players on Your The Cenozoic Era Server

You remove players from your The Cenozoic Era server directly in the game using chat commands. As the target you enter either the username or the Net ID of the player.

:::: info Note
To use these commands you have to be entered as an owner in the `Game.ini` of your server. See [Add Admin](add-admin.md).
::::

## Use commands in the game

1. <b>Open the chat</b><br>
   Join your server and open the chat in the game.

2. <b>Identify the player</b><br>
   The following command forces the display of name tags and shows you who is currently moving around on the server:

   ```
   /users
   ```

3. <b>Run the command</b><br>
   Enter the desired command with a leading `/`, for example:

   ```
   /kick PlayerName
   ```

## Kick a player

```
/kick <Username or Net ID>
```

The player is disconnected from the server but can rejoin at any time. A kick is the right tool for minor issues – for example to make a player aware of your server rules.

## Ban a player

```
/ban <Username or Net ID>
```

The player is removed from the server and cannot connect again until you lift the ban.

## Unban a player

```
/unban <Username or Net ID>
```

:::: info Note
A time-limited ban is not documented for The Cenozoic Era. A ban stays in place until you lift it again with `/unban`.
::::

## More moderation commands

| Command | Description |
|---------|-------------|
| `/users` | Forces the display of name tags |
| `/kick <Username or Net ID>` | Disconnect a player from the server |
| `/ban <Username or Net ID>` | Ban a player |
| `/unban <Username or Net ID>` | Lift a ban |
| `/slay <Username or Net ID>` | Kill the given player |
| `/tp <Username or Net ID>` | Teleport to the given player |
| `/bring <Username or Net ID>` | Bring the given player to you |

:::: tip Tip
`/slay` is the milder option if a player gained an unfair advantage or got stuck: the player dies in the game instead of being banned from the server. You can find the complete list of admin commands under [Add Admin](add-admin.md).
::::

:::: warning Caution
There is **no documented ban file** on the server for The Cenozoic Era. Bans are managed exclusively through the in-game commands – adding or correcting an entry via SFTP is not supported.
::::

:::: danger Important
Write down the username or the Net ID of the player when you ban someone. Without it you cannot lift the ban later with `/unban`, because the player no longer shows up on the server.
::::
