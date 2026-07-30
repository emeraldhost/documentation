---
description: Kick and ban players on a Mordhau server
---

# How to Kick and Ban Players on Your Mordhau Server

You remove players from a Mordhau server through **RCON**. This lets you manage your server from your PC without being in the game yourself. RCON is disabled by default and has to be set up once.

:::: warning Warning
The console in the **dashboard** is not a command line for Mordhau. The server only accepts kick and ban commands through RCON – typing them into the server console does nothing.
::::

## Set up RCON

1. <b>Assign a port</b><br>
   RCON needs a port of its own. Assign an additional port to your server in the **dashboard** and note the value.

   :::: info Note
   RCON in Mordhau runs over **TCP**, not UDP. The port is therefore different from the Game Port and the Query Port and has to be assigned separately.
   ::::

2. <b>Stop the server</b><br>
   Stop your server via the **dashboard**.

   :::: warning Warning
   Only edit the `Game.ini` while the server is stopped. Mordhau completely rewrites the file on shutdown – changes made while it is running are lost.
   ::::

3. <b>Connect via SFTP</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md).

4. <b>Open the Game.ini</b><br>
   Open the following file:

   ```
   /Mordhau/Saved/Config/LinuxServer/Game.ini
   ```

5. <b>Enable RCON</b><br>
   In the section `[/Script/Mordhau.MordhauGameSession]` enter your RCON password and the assigned port:

   ```ini
   [/Script/Mordhau.MordhauGameSession]
   RconPassword=ASecurePassword
   RconPort=YourRconPort
   RconTimeout=120.000000
   ```

   :::: danger Important
   If `RconPort` is set to `0`, RCON is disabled. Make sure to set a dedicated, secure RCON password as well – anyone who knows it has full control over your server.
   ::::

6. <b>Start the server</b><br>
   Save the file and start your server.

7. <b>Connect via RCON</b><br>
   Connect with an RCON tool that supports the Source RCON protocol. Enter the IP address of your server, the RCON port and the RCON password there.

## List the players

For kicks and bans you need the player's **PlayFab ID**. The following command returns it:

```
playerlist
```

The server returns one line per player with the PlayFab ID and the player name.

:::: info Note
`playerlist` only shows players who are currently connected. Note down the ID while the player is still online.
::::

## Kick a player

```
kick <PlayFabID> <reason>
```

The player is disconnected from the server immediately but can rejoin at any time.

## Ban a player

```
ban <PlayFabID> <duration> <reason>
```

The **duration is given in minutes**. If you enter `0`, the ban is permanent.

:::: tip Example
```
ban 909275ECE8FEDDB 1440 Teamkilling
```
This ban lasts for 1440 minutes, so 24 hours.
::::

## Lift a ban

```
unban <PlayFabID>
```

With `banlist` you can check all active bans and their remaining duration beforehand.

:::: warning Warning
Do not edit the ban and mute lists in the `Game.ini` by hand. The server maintains these entries itself – only lift bans through `unban`.
::::

## Mute a player

```
mute <PlayFabID> <minutes>
```

```
unmute <PlayFabID>
```

With `mutelist` you get all currently muted players.

## Command overview

| Command | Description |
|---------|-------------|
| `playerlist` | Shows all connected players with PlayFab ID and name |
| `kick <ID> <reason>` | Disconnects a player from the server |
| `ban <ID> <minutes> <reason>` | Bans a player, `0` means permanent |
| `unban <ID>` | Lifts a ban |
| `banlist` | Lists all active bans with their duration |
| `mute <ID> <minutes>` | Mutes a player |
| `unmute <ID>` | Unmutes a player |
| `mutelist` | Lists all muted players |
| `addadmin <ID>` | Adds a player as an admin |
| `removeadmin <ID>` | Removes an admin |
| `adminlist` | Shows all admins |
| `say <text>` | Sends a message to all players |
| `changelevel <map>` | Changes the map |
| `killplayer <ID>` | Kills a player in the game |
| `info` | Shows information about the server |

:::: tip Tip
To learn how to grant permanent admin rights, see [Add Admin](add-admin.md).
::::

:::: info Note
The folder `LinuxServer` and the `Game.ini` are only created after your server has fully started once. If you cannot find the file, start your server once and stop it again.
::::
