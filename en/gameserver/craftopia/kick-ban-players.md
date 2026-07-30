---
description: Kick and ban players on a Craftopia server
---

# How to Kick and Ban Players on Your Craftopia Server

On a Craftopia server you remove players through the **console in the dashboard**. There are no in-game chat commands for this.

:::: info No admin concept in the game
Craftopia has **no admin rights for players**: there is no admin file, no admin list and no command that grants a player permissions in the game. All administration therefore runs through the console of your server – and thus through everyone who has access to the dashboard.
::::

## Open the console

1. <b>Open the dashboard</b><br>
   Log in to the dashboard of your server.

2. <b>Open the console</b><br>
   Switch to the **console**. There you can see the output of your server and enter commands.

3. <b>The server has to be running</b><br>
   Commands are only accepted by a running server. If your server is stopped, start it first.

## List the players

Before you can kick or ban anyone, you need their **UserID**. The following command lists it:

```
list
```

The command shows the players with their UserID from the multiplayer list.

:::: warning Warning
Always run `list` right before a `kick` or `ban` and copy the UserID exactly as it is shown in the console.
::::

## Kick a player

```
kick <UserID>
```

The player is disconnected from the server but can rejoin at any time.

## Ban a player

```
ban <UserID>
```

The player is removed from the server and added to the ban list.

:::: warning Bans apply to the IP address
The Craftopia ban list contains **IP addresses**, not player accounts. This means:

- If the player changes their IP address, they can join the server again.
- Players who share an IP address – for example within the same household – are banned as well.
::::

## Show banned players

```
banlist
```

Shows all banned IP addresses.

## Lift a ban

```
pardon <IP address>
```

Use the IP address exactly as `banlist` shows it.

:::: tip If a command is not accepted
Craftopia is still in development and the exact spelling of the commands can change between game versions. If a command is not accepted, check the output in the console of your server.
::::

## Command overview

| Command | Description |
|---------|-------------|
| `list` | Show players including their UserID |
| `kick <UserID>` | Disconnect a player from the server |
| `ban <UserID>` | Ban a player (IP based) |
| `banlist` | Show banned IP addresses |
| `pardon <IP address>` | Lift a ban |

## Do not shut down the server through the console

:::: danger Important
Always use the **dashboard** to stop and restart your server, not the commands of the server console. This is the only way your server shuts down cleanly and starts up correctly afterwards.
::::

## No whitelist

:::: warning Warning
Craftopia has **no whitelist feature**. If you want to open your server only to specific players, set a server password and share it with those players only. Keep in mind that the password in Craftopia is a plain number with a maximum of eight digits.
::::
