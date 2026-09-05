---
slug: "kick-ban-players"
language: "en"
title: "How to Kick and Ban Players on Your Mordhau Server"
description: "Kick and ban players on a Mordhau server"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["mordhau"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Kick & Ban Players"
sort: 5
related: ["gameserver/mordhau/add-admin", "gameserver/mordhau/add-mods", "gameserver/mordhau/create-backup", "gameserver/mordhau/join-server"]
---

You remove players from a Mordhau server through **RCON**. This lets you manage your server from your PC without being in the game yourself. RCON is disabled by default and has to be set up once.

> [!WARNING]
> The console in the **dashboard** is not a command line for Mordhau. The server only accepts kick and ban commands through RCON – typing them into the server console does nothing.

## Set up RCON

1. **Assign a port**\
   RCON needs a port of its own. Assign an additional port to your server in the **dashboard** and note the value.

   > [!NOTE]
   > RCON in Mordhau runs over **TCP**, not UDP. The port is therefore different from the Game Port and the Query Port and has to be assigned separately.

2. **Stop the server**\
   Stop your server via the **dashboard**.

   > [!WARNING]
   > Only edit the `Game.ini` while the server is stopped. Mordhau completely rewrites the file on shutdown – changes made while it is running are lost.

3. **Connect via SFTP**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection).

4. **Open the Game.ini**\
   Open the following file:

   ```text
   /Mordhau/Saved/Config/LinuxServer/Game.ini
   ```

5. **Enable RCON**\
   In the section `[/Script/Mordhau.MordhauGameSession]` enter your RCON password and the assigned port:

   ```ini
   [/Script/Mordhau.MordhauGameSession]
   RconPassword=ASecurePassword
   RconPort=YourRconPort
   RconTimeout=120.000000
   ```

   > [!IMPORTANT]
   > If `RconPort` is set to `0`, RCON is disabled. Make sure to set a dedicated, secure RCON password as well – anyone who knows it has full control over your server.

6. **Start the server**\
   Save the file and start your server.

7. **Connect via RCON**\
   Connect with an RCON tool that supports the Source RCON protocol. Enter the IP address of your server, the RCON port and the RCON password there.

## List the players

For kicks and bans you need the player's **PlayFab ID**. The following command returns it:

```text
playerlist
```

The server returns one line per player with the PlayFab ID and the player name.

> [!NOTE]
> `playerlist` only shows players who are currently connected. Note down the ID while the player is still online.

## Kick a player

```text
kick <PlayFabID> <reason>
```

The player is disconnected from the server immediately but can rejoin at any time.

## Ban a player

```text
ban <PlayFabID> <duration> <reason>
```

The **duration is given in minutes**. If you enter `0`, the ban is permanent.

> [!TIP]
> **Example**
>
> ```text
> ban 909275ECE8FEDDB 1440 Teamkilling
> ```
>
> This ban lasts for 1440 minutes, so 24 hours.

## Lift a ban

```text
unban <PlayFabID>
```

With `banlist` you can check all active bans and their remaining duration beforehand.

> [!WARNING]
> Do not edit the ban and mute lists in the `Game.ini` by hand. The server maintains these entries itself – only lift bans through `unban`.

## Mute a player

```text
mute <PlayFabID> <minutes>
```

```text
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

> [!TIP]
> To learn how to grant permanent admin rights, see [Add Admin](/tutorials/gameserver/mordhau/add-admin).

> [!NOTE]
> The folder `LinuxServer` and the `Game.ini` are only created after your server has fully started once. If you cannot find the file, start your server once and stop it again.
