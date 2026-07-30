---
description: Kick and ban players on an Operation Harsh Doorstop server
---

# How to Kick or Ban Players on Your Operation Harsh Doorstop Server

You remove players either directly from within the game using the in-game console or via RCON. Permanent bans end up in the file `Bans.cfg`, which you can edit via SFTP.

:::: info Note
You need admin rights to use these commands. See [Add Admin](add-admin.md).
::::

## Use commands in game

1. <b>Open the console</b><br>
   Press the `~` key in game to open the in-game console.

2. <b>List the players</b><br>
   First display all connected players with their name, ID number and SteamID64:

   ```
   admin status
   ```

3. <b>Run the command</b><br>
   Run the desired command with the `admin` prefix in front, for example:

   ```
   admin kick PlayerName RuleViolation
   ```

:::: warning Caution
In the in-game console every admin command needs the `admin` prefix. Through an RCON client you enter the same commands **without** that prefix.
::::

## Kick a player

```
admin kick <name> [reason]
```

```
admin kickid <id#> [reason]
```

The player is disconnected from the server immediately but can rejoin at any time. The ID number comes from the output of `admin status`.

## Ban a player

```
admin ban <name> [reason] [duration]
```

```
admin banid <id#> [reason] [duration]
```

The **duration** is given in **minutes**. A value of `0` – or leaving the duration out – means a permanent ban.

## Command overview

| Command | Description |
|---------|-------------|
| `admin status` | Show all players including ID number and SteamID64 |
| `admin kick <name> [reason]` | Disconnect a player by name |
| `admin kickid <id#> [reason]` | Disconnect a player by ID number |
| `admin ban <name> [reason] [duration]` | Ban a player by name |
| `admin banid <id#> [reason] [duration]` | Ban a player by ID number |

## Lift a ban

Banned players are listed in the file `Bans.cfg`. A ban is lifted by deleting the corresponding line.

1. <b>Stop the server</b><br>
   Stop your server via the dashboard.

2. <b>Connect via SFTP</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md).

3. <b>Open Bans.cfg</b><br>
   Open the following file:

   ```
   /HarshDoorstop/Saved/Config/LinuxServer/Bans.cfg
   ```

4. <b>Delete the line</b><br>
   Each line contains a SteamID64 followed by a colon and a number:

   ```
   76561198012345678:0
   ```

   Delete the entire line of the player you want to unban.

5. <b>Start the server</b><br>
   Save the file and start your server.

:::: tip Unban without a restart
You can skip the restart: delete the line in `Bans.cfg` and then send the command `RELOADSERVERCONFIG` via RCON. The server then reloads `Bans.cfg`, `Admins.cfg` and the other configuration files straight from disk.
::::

:::: info Note
`Bans.cfg` is not shipped with the server either. It is created as soon as the first ban is issued – but you can also create it yourself in the `LinuxServer` folder and enter SteamID64s in the format `76561198012345678:0`.
::::

## Send commands via RCON

Instead of the in-game console you can send the same commands through an external RCON client – then without the `admin` prefix, so for example `status`, `kick`, `kickid`, `ban` and `banid`.

:::: danger Important
You can find the RCON port and the RCON password of your server in the **dashboard**. Never share them with players – anyone with that access can fully control your server remotely.
::::
