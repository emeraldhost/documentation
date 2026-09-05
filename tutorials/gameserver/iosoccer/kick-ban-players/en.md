---
slug: "kick-ban-players"
language: "en"
title: "How to Kick and Ban Players on Your IOSoccer Server"
description: "Kick and ban players on an IOSoccer server"
tags: []
date: "2026-07-31"
visibility: "public"
cta: "gameserver"
product_keys: ["iosoccer"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Kick & Ban Players"
sort: 5
related: ["gameserver/iosoccer/add-admin", "gameserver/iosoccer/add-mods", "gameserver/iosoccer/create-backup", "gameserver/iosoccer/join-server"]
---

You can remove players either through the **server console** in the dashboard or – if SourceMod is installed – directly in the game through the **SourceMod commands**.

> [!NOTE]
> IOSoccer does not have a votekick system. Your players cannot remove troublemakers by vote – every kick and every ban goes through the server console or through an admin using SourceMod.

## List the players

1. **Open the server console**\
   Open the console of your server via the dashboard.

2. **Show the player list**\
   Enter the following command:

   ```text
   status
   ```

   The output shows the **userid** and the **SteamID** for every connected player. You need these values for the commands below. The command `users` gives you an additional compact overview of the connected players.

## Commands in the server console

| Command | Description |
|--------|-------------|
| `status` | Show server and player information including userid and SteamID |
| `users` | Show an overview of the connected players |
| `kick <player name>` | Remove a player from the server by name |
| `kickid <userid \| SteamID> [message]` | Remove a player by userid or SteamID, with an optional message |
| `banid <minutes> <userid \| SteamID> [kick]` | Ban a player (`0` = permanent), `kick` also removes them right away |
| `banip <minutes> <ip>` | Ban an IP address (`0` = permanent) |
| `listid` / `listip` | Show banned SteamIDs or IP addresses |
| `removeid <SteamID>` / `removeip <ip>` | Lift a ban |
| `writeid` / `writeip` | Write bans permanently to the ban files |
| `changelevel <map name>` | Change the map without disconnecting players |
| `map <map name>` | Force a map – this kicks every player from the server |

### Kick a player

```text
kick <player name>
```

> [!TIP]
> **Example**
>
> ```text
> kickid 12 Rule violation
> ```
>
> `12` is the userid from the output of `status`. Using the userid is more reliable than using the name, because player names can contain special characters and spaces.

A kicked player is removed from the server immediately but can rejoin right away.

> [!NOTE]
> IOSoccer has no command that removes every player at once. If you want to empty the server, change the map with `map <map name>` – that disconnects all players.

### Ban a player

```text
banid 60 STEAM_0:1:12345678 kick
```

The duration in minutes goes in front of the SteamID, `0` bans permanently. Without the `kick` argument the player stays on the server for now and the ban only takes effect on the next connection attempt.

You ban an IP address accordingly:

```text
banip 60 123.45.67.89
```

### Save bans permanently

> [!IMPORTANT]
> Bans only live in the server's memory at first and are gone after a restart. Save them after every change with `writeid` (SteamID bans) or `writeip` (IP bans). The bans are then written to the files `/iosoccer/cfg/banned_user.cfg` and `/iosoccer/cfg/banned_ip.cfg`. The same goes for `removeid` and `removeip` – without a following `writeid`/`writeip` the ban is back after the next restart.

> [!NOTE]
> For saved bans to apply again after a restart, the files have to be executed on server start. Add the following lines at the end of `/iosoccer/cfg/server.cfg`:
>
> ```text
> exec banned_ip.cfg
> exec banned_user.cfg
> writeip
> writeid
> ```

> [!TIP]
> With the setting `sv_logbans 1` in `/iosoccer/cfg/server.cfg` every ban is also recorded in the server logs. That way you can look up later who was banned and when.

## Commands through SourceMod

With SourceMod installed you can manage players directly from within the game. How to set up SourceMod and give yourself admin rights is described under [Add Mods](/tutorials/gameserver/iosoccer/add-mods) and [Add Admin](/tutorials/gameserver/iosoccer/add-admin).

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

### Lift a ban

```text
sm_unban STEAM_0:1:12345678
```

```text
sm_unban 123.45.67.89
```

> [!TIP]
> After changing the `server.cfg` you have to restart your server for the values to be applied.
