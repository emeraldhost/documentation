---
slug: "kick-ban-players"
language: "en"
title: "How to Kick or Ban Players on Your Operation Harsh Doorstop Server"
description: "Kick and ban players on an Operation Harsh Doorstop server"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["operation-harsh-doorstop"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Kick & Ban Players"
sort: 5
related: ["gameserver/operation-harsh-doorstop/add-admin", "gameserver/operation-harsh-doorstop/add-mods", "gameserver/operation-harsh-doorstop/create-backup", "gameserver/operation-harsh-doorstop/join-server"]
---

You remove players either directly from within the game using the in-game console or via RCON. Permanent bans end up in the file `Bans.cfg`, which you can edit via SFTP.

> [!NOTE]
> You need admin rights to use these commands. See [Add Admin](/tutorials/gameserver/operation-harsh-doorstop/add-admin).

## Use commands in game

1. **Open the console**\
   Press the `~` key in game to open the in-game console.

2. **List the players**\
   First display all connected players with their name, ID number and SteamID64:

   ```text
   admin status
   ```

3. **Run the command**\
   Run the desired command with the `admin` prefix in front, for example:

   ```text
   admin kick PlayerName RuleViolation
   ```

> [!WARNING]
> **Caution**
>
> In the in-game console every admin command needs the `admin` prefix. Through an RCON client you enter the same commands **without** that prefix.

## Kick a player

```text
admin kick <name> [reason]
```

```text
admin kickid <id#> [reason]
```

The player is disconnected from the server immediately but can rejoin at any time. The ID number comes from the output of `admin status`.

## Ban a player

```text
admin ban <name> [reason] [duration]
```

```text
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

1. **Stop the server**\
   Stop your server via the dashboard.

2. **Connect via SFTP**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection).

3. **Open Bans.cfg**\
   Open the following file:

   ```text
   /HarshDoorstop/Saved/Config/LinuxServer/Bans.cfg
   ```

4. **Delete the line**\
   Each line contains a SteamID64 followed by a colon and a number:

   ```text
   76561198012345678:0
   ```

   Delete the entire line of the player you want to unban.

5. **Start the server**\
   Save the file and start your server.

> [!TIP]
> **Unban without a restart**
>
> You can skip the restart: delete the line in `Bans.cfg` and then send the command `RELOADSERVERCONFIG` via RCON. The server then reloads `Bans.cfg`, `Admins.cfg` and the other configuration files straight from disk.

> [!NOTE]
> `Bans.cfg` is not shipped with the server either. It is created as soon as the first ban is issued – but you can also create it yourself in the `LinuxServer` folder and enter SteamID64s in the format `76561198012345678:0`.

## Send commands via RCON

Instead of the in-game console you can send the same commands through an external RCON client – then without the `admin` prefix, so for example `status`, `kick`, `kickid`, `ban` and `banid`.

> [!IMPORTANT]
> You can find the RCON port and the RCON password of your server in the **dashboard**. Never share them with players – anyone with that access can fully control your server remotely.
