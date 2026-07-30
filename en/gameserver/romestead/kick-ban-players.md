---
description: Kick and ban players on a Romestead server
---

# How to Kick and Ban Players on Your Romestead Server

On a Romestead server you remove players through the **console in the dashboard**. The commands work with the player's **IP address** – not with the player name and not with the SteamID64.

:::: info Note
Romestead has no admin or operator system. There is neither an admin list nor admin rights inside the game: anyone with access to the console in the dashboard can kick and ban players.
::::

:::: warning Warning
The console commands are only available once your server has fully loaded the world. Right after the start the server still ignores your input.
::::

## Kick a player

Open the **console** in the dashboard and enter:

```
kick <IP address>
```

The player is disconnected from the server but can rejoin at any time.

## Ban a player

```
ban <IP address>
```

The player is disconnected and cannot connect again while the ban is active.

:::: danger Bans do not survive a restart
Bans only persist until the next server start. As soon as you restart your server, or it is restarted by an update, the ban list is empty again and the player can connect once more. You have to run the command again afterwards.
::::

## Lift a ban

```
unban <IP address>
```

Afterwards the player can connect again immediately.

## Find a player's IP address

All three commands strictly require an IP address. With

```
list
```

the server shows the currently connected players. Check the output in the console and also watch the messages the server prints when a player joins.

:::: warning Warning
There is no command that removes a player by name or SteamID64. Without the matching IP address, `kick`, `ban` and `unban` do not work.
::::

## Bans apply to IP addresses

:::: danger Important
A ban blocks an IP address, not a player account. If the player later connects from a different IP address – for example after a router restart with a dynamic IP or from another network – the ban no longer applies. Conversely, banning an IP address also blocks every other player who shares that address, for example within the same household.
::::

## More console commands

| Command | Description |
|---------|-------------|
| `list` | Show connected players |
| `kick <IP address>` | Disconnect a player from the server |
| `ban <IP address>` | Block an IP address |
| `unban <IP address>` | Lift a ban (applies until the next server start) |
| `say <message>` | Send a message to all players |
| `save` | Full save – the server is frozen while it runs |
| `quicksave` | Saves on a second thread, the server keeps running |
| `stop` | Fully save the world and shut down the server |
| `quickstop` | Shut down the server without saving |

:::: danger Important
`quickstop` shuts the server down **without saving**. Everything since the last save point is lost. Use `stop` or the stop function in the dashboard for an orderly shutdown.
::::

## No kick or ban commands inside the game

:::: info Note
There is no way to remove players from inside the game. The Romestead developer console only contains cheat and debug commands, but no commands for kicking or banning. Everything concerning players goes through the console in the dashboard.
::::

:::: tip Tip
If you want to restrict your server to certain players in general, set a server password and only share it with those people. That is more reliable than banning an IP address.
::::
