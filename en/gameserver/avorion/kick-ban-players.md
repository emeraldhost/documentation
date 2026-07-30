---
description: Kick and ban players on an Avorion server
---

# How to Kick and Ban Players on Your Avorion Server

In Avorion you remove players with commands. You can enter them either in the **console** of your dashboard or in the game chat – there with a leading `/`.

:::: info Note
To use the commands in the game you need admin rights. See [Add admin](add-admin.md).
::::

## Kick a player

```
/kick <player name>
```

The player is disconnected from the server but can rejoin immediately. A kick works well as a warning or to disconnect a stuck player.

## Ban a player

```
/ban <player name>
```

The player is put on the blacklist and cannot join your server again until you lift the ban.

## Lift a ban

```
/unban <player name>
```

## Ban an IP

```
/banip <player IP>
```

An IP ban can be lifted again with:

```
/unbanip <player IP>
```

:::: warning Warning
An IP ban affects everyone behind the same IP address – for example several people in one household. Many internet connections also get a new IP address regularly, which makes the ban ineffective. As a rule, use `/ban`.
::::

## Commands at a glance

| Command | Description |
|---------|-------------|
| `/kick <player name>` | Disconnect a player from the server |
| `/ban <player name>` | Put a player on the blacklist |
| `/unban <player name>` | Lift a ban |
| `/banip <player IP>` | Ban an IP address |
| `/unbanip <player IP>` | Lift an IP ban |
| `/blacklist` | Show the blacklist options |
| `/whitelist` | Show the whitelist options |
| `/player` | Show the number of connected players |
| `/status` | Show information about the current status of the server |
| `/w <player name>` | Send a private message to a player |
| `/save` | Save the current state |
| `/stop` | Shut down the server |
| `/help` | Show all available commands |

:::: tip Tip
The player name has to match exactly – including capitalisation. It is best to copy it from the console of your dashboard, where it appears when the player connects.
::::

:::: info Note
When kicking or banning through the console of the dashboard, you can leave out the `/` or include it – both work. In the game chat the `/` is mandatory, otherwise your input is sent as a normal chat message.
::::

:::: warning Warning
Before a planned server stop, run `/save` before you use `/stop` or stop the server via the dashboard – that way no progress is lost.
::::
