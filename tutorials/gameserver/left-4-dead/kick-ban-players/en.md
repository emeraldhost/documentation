---
slug: "kick-ban-players"
language: "en"
title: "How to Kick and Ban Players on Your Left 4 Dead Server"
description: "Kick and ban players on a Left 4 Dead server"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["left-4-dead"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Kick & Ban Players"
sort: 5
related: ["gameserver/left-4-dead/add-admin", "gameserver/left-4-dead/add-mods", "gameserver/left-4-dead/create-backup", "gameserver/left-4-dead/join-server"]
---

You can remove players either through the **server console** in the dashboard or – if SourceMod is installed – directly in the game through the **SourceMod commands**.

## List the players

1. **Open the server console**\
   Open the console of your server via the dashboard.

2. **Show the player list**\
   Enter the following command:

   ```text
   status
   ```

   The output shows the **userid** and the **SteamID** for every connected player. You need these values for the commands below.

   > [!TIP]
   > `users` additionally shows the user info for all players on the server.

## Commands in the server console

| Command | Description |
|--------|-------------|
| `status` | Show server and player information including userid and SteamID |
| `users` | Show user info for the players on the server |
| `kick <player name>` | Remove a player from the server by name |
| `kickid <userid\|SteamID> [reason]` | Remove a player from the server by ID |
| `banid <minutes> <SteamID> [kick]` | Ban a player (`0` = permanent) |
| `addip <minutes> <IP>` | Ban an IP address |
| `removeid <SteamID>` | Lift the ban on a SteamID |
| `removeip <IP>` | Lift the ban on an IP address |
| `listid` | List banned SteamIDs |
| `listip` | List banned IP addresses |
| `writeid` | Save SteamID bans permanently |
| `writeip` | Save IP bans permanently |
| `changelevel <map name>` | Change the map |
| `say <message>` | Send a message to all players |

### Kick a player

```text
kick <player name>
```

Instead of the name you can also use the userid or the SteamID:

```text
kickid STEAM_0:1:12345678 Reason
```

A kicked player is removed from the server but can rejoin immediately.

### Ban a player

```text
banid 60 STEAM_0:1:12345678 kick
```

The duration in minutes goes in front of the SteamID, `0` bans permanently. The optional `kick` removes the player from the server right away – without it the ban only takes effect on the next connection attempt.

### Save bans permanently

> [!IMPORTANT]
> Bans only live in the server's memory at first and are gone after a restart. Save them after every change with `writeid` (SteamID bans) or `writeip` (IP bans). The bans are then written to the files `/left4dead/cfg/banned_user.cfg` and `/left4dead/cfg/banned_ip.cfg`.

> [!NOTE]
> For saved bans to apply again after a restart, the files have to be executed on server start. Add the following lines to `/left4dead/cfg/server.cfg`:
>
> ```text
> exec banned_ip.cfg
> exec banned_user.cfg
> ```

## Enable RCON

RCON lets you run the same commands from outside the dashboard.

1. **Stop the server**\
   Stop your server via the dashboard.

2. **Open server.cfg**\
   Open the following file via [SFTP](/tutorials/gameserver/establish-sftp-connection):

   ```text
   /left4dead/cfg/server.cfg
   ```

3. **Set a password**\
   Add the following line and choose a secure password:

   ```text
   rcon_password "your-password"
   ```

4. **Start the server**\
   Save the file and start your server.

> [!NOTE]
> RCON runs over the same port as the game – there is no separate RCON port.

> [!IMPORTANT]
> Anyone who knows your RCON password has full control over your server. Do not share it and use a dedicated, long password.

## Commands through SourceMod

With SourceMod installed you can manage players directly from within the game. How to set up SourceMod and give yourself admin rights is described under [Add Mods](/tutorials/gameserver/left-4-dead/add-mods) and [Add Admin](/tutorials/gameserver/left-4-dead/add-admin).

| Command | Syntax | Required flag |
|--------|--------|---------------|
| `sm_kick` | `<#userid\|name> [reason]` | `c` (kick) |
| `sm_ban` | `<#userid\|name> <minutes\|0> [reason]` | `d` (ban) |
| `sm_banip` | `<ip\|#userid\|name> <time> [reason]` | `d` (ban) |
| `sm_addban` | `<time> <steamid> [reason]` | `m` (rcon) |
| `sm_unban` | `<steamid\|ip>` | `e` (unban) |
| `sm_who` | `[#userid\|name]` | `b` (generic) |
| `sm_map` | `<map>` | `g` (changemap) |

> [!NOTE]
> For `sm_ban` and `sm_banip` a duration of `0` means a permanent ban. With `sm_addban` you can also ban players who are not currently on the server.

> [!TIP]
> SourceMod commands also work in the in-game chat with a leading `!` or `/`, for example `!kick`.

### Examples

```text
sm_kick "player name" Rule violation
```

```text
sm_ban #12 60 Rule violation
```

```text
sm_addban 0 STEAM_0:1:12345678 Rule violation
```

## Lift a ban

Through the server console:

```text
removeid STEAM_0:1:12345678
```

```text
removeip 123.45.67.89
```

Afterwards run `writeid` or `writeip` again so the change is saved permanently.

With SourceMod:

```text
sm_unban STEAM_0:1:12345678
```

```text
sm_unban 123.45.67.89
```
