---
slug: "kick-ban-players"
language: "en"
title: "How to Kick and Ban Players on Your Counter-Strike Global Offensive Server"
description: "Kick and ban players on a Counter-Strike Global Offensive server"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["counter-strike-global-offensive"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Kick & Ban Players"
sort: 5
related: ["gameserver/counter-strike-global-offensive/add-admin", "gameserver/counter-strike-global-offensive/add-mods", "gameserver/counter-strike-global-offensive/create-backup", "gameserver/counter-strike-global-offensive/join-server"]
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

## Commands in the server console

| Command | Description |
|--------|-------------|
| `status` | Show server and player information including userid and SteamID |
| `kick <player name>` | Remove a player from the server by name |
| `kickid <userid> <message>` | Remove a player from the server by userid |
| `banid <minutes> <userid>` | Ban a player (`0` = permanent) |
| `addip <minutes> <IP>` | Ban an IP address (`0` = permanent) |
| `removeid <SteamID>` | Lift the ban of a SteamID |
| `removeip <IP>` | Lift the ban of an IP address |
| `writeid` | Save permanent SteamID bans to `banned_user.cfg` |
| `writeip` | Save permanent IP bans to `banned_ip.cfg` |
| `changelevel <map name>` | Change the map |

### Kick a player

```text
kick <player name>
```

Instead of the name you can also use the userid from the `status` output and pass a message:

```text
kickid 12 Rule violation
```

A kicked player is removed from the server but can rejoin immediately.

> [!WARNING]
> `kickid` and `banid` expect the **userid** from the `status` output, not the SteamID. The server assigns a new userid for every connection – so run `status` again shortly before using the command.

### Ban a player

```text
banid 60 12
```

The duration in minutes goes in front of the userid, `0` bans permanently. To block an IP address use `addip` instead:

```text
addip 0 123.45.67.89
```

### Save bans permanently

> [!IMPORTANT]
> Bans only live in the server's memory at first and are gone after a restart. Save them after every change with `writeid` (SteamID bans) or `writeip` (IP bans). The bans are then written to the files `/csgo/cfg/banned_user.cfg` and `/csgo/cfg/banned_ip.cfg`.

> [!NOTE]
> Only permanent bans – entries with a duration of `0` – are written to those files. Time-limited bans only last until the next restart.

> [!NOTE]
> For saved bans to apply again after a restart, the files have to be executed on server start. Add the following lines to `/csgo/cfg/server.cfg`:
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
   /csgo/cfg/server.cfg
   ```

3. **Set a password**\
   Add the following line and choose a secure password:

   ```text
   rcon_password "your-password"
   ```

4. **Start the server**\
   Save the file and start your server.

> [!NOTE]
> RCON runs over the same port as the game – there is no separate RCON port. You then issue commands with `rcon <command>`.

> [!TIP]
> If you want to disable RCON again, set the password to an empty value:
>
> ```text
> rcon_password ""
> ```

> [!IMPORTANT]
> Anyone who knows your RCON password has full control over your server. Do not share it and use a dedicated, long password.

## Commands through SourceMod

With SourceMod installed you can manage players directly from within the game. How to set up SourceMod and give yourself admin rights is described under [Add Mods](/tutorials/gameserver/counter-strike-global-offensive/add-mods) and [Add Admin](/tutorials/gameserver/counter-strike-global-offensive/add-admin).

| Command | Syntax | Required flag |
|--------|--------|---------------|
| `sm_kick` | `<#userid\|name> [reason]` | `c` (kick) |
| `sm_ban` | `<#userid\|name> <minutes\|0> [reason]` | `d` (ban) |
| `sm_banip` | `<ip\|#userid\|name> <time> [reason]` | `d` (ban) |
| `sm_addban` | `<time> <steamid> [reason]` | `m` (rcon) |
| `sm_unban` | `<steamid\|ip>` | `e` (unban) |
| `sm_who` | `[#userid\|name]` | `b` (generic) |
| `sm_slay` | `<target>` | `f` (slay) |
| `sm_map` | `<map>` | `g` (changemap) |
| `sm_rcon` | `<command>` | `m` (rcon) |

> [!NOTE]
> For `sm_ban` and `sm_banip` a duration of `0` means a permanent ban. With `sm_addban` you can also ban players who are not currently on the server. All commands work in the game console as well as in the chat – there you simply write `!kick` or `/kick` instead of `sm_kick`.

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

> [!NOTE]
> Alternatively you can stop your server and delete the corresponding line from `/csgo/cfg/banned_user.cfg` or `/csgo/cfg/banned_ip.cfg` via [SFTP](/tutorials/gameserver/establish-sftp-connection).
