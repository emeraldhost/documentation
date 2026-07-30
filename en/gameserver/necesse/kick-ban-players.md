---
description: Kick and ban players on a Necesse server
---

# How to Kick and Ban Players on Your Necesse Server

You remove players from a Necesse server with commands – either in the **console** of your dashboard or in the **in-game chat**. You always specify the **player name**.

:::: info Note
Kicking requires at least the `moderator` level, banning at least `admin`. You can find out how to grant permissions under [Add Admin](add-admin.md). In the console of the dashboard all commands are available to you without any additional permissions.
::::

## Run commands

1. <b>Open the console or the chat</b><br>
   Open the **console** of your server in the dashboard, or press `Enter` in the game to open the chat.

2. <b>Enter the command</b><br>
   All commands start with `/`, for example:

   ```
   /kick JohnDoe
   ```

## Kick a player

```
/kick <PlayerName> [reason]
```

The player is disconnected from the server and can rejoin at any time. The optional reason is shown to them on disconnect.

:::: tip Example
```
/kick JohnDoe Please follow the rules
```
::::

## Ban a player

```
/ban <PlayerName>
```

The player is kicked from the server and cannot connect again until you lift the ban.

## Unban a player

```
/unban <PlayerName>
```

## Show bans

```
/bans
```

Lists all banned players.

## Command overview

| Command | Required level | Description |
|---------|----------------|-------------|
| `/kick <PlayerName> [reason]` | `moderator` | Disconnect a player from the server |
| `/ban <PlayerName>` | `admin` | Ban a player |
| `/unban <PlayerName>` | `admin` | Lift a ban |
| `/bans` | `admin` | Show all bans |

:::: warning Caution
Write the player name exactly as it is displayed in the game, including upper and lower case. Use `/bans` to check how an entry was stored.
::::

## Manage bans

:::: warning Caution
Manage bans exclusively with the commands `/ban`, `/unban` and `/bans`. How Necesse stores bans internally is not documented – do not edit any server files via SFTP for this.
::::

## No whitelist

:::: info Note
Necesse has **no whitelist feature**. If you want to open your server only to specific players, protect it with a server password and share it only with the players you want.
::::
