---
slug: "kick-ban-players"
language: "en"
title: "How to Kick and Ban Players on Your No More Room in Hell Server"
description: "Kick and ban players on a No More Room in Hell server"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["no-more-room-in-hell"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Kick & Ban Players"
sort: 5
related: ["gameserver/no-more-room-in-hell/add-admin", "gameserver/no-more-room-in-hell/add-mods", "gameserver/no-more-room-in-hell/create-backup", "gameserver/no-more-room-in-hell/join-server"]
---

You can remove players either through the **server console** in the dashboard or – if SourceMod is installed – directly in the game through the **SourceMod commands**. On top of that No More Room in Hell ships its own **VoteKick and VoteBan system**, which lets players react even when no admin is on the server.

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
| `kick <player name>` | Remove a player from the server immediately |
| `banid <minutes> <SteamID> [kick]` | Ban a player (`0` = permanent), `kick` also removes them right away |
| `writeid` | Save SteamID bans permanently |
| `writeip` | Save IP bans permanently |
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
> kick dark_st3alth
> ```

A kicked player is removed from the server immediately but can rejoin right away.

### Ban a player

```text
banid 60 STEAM_0:1:12345678 kick
```

The duration in minutes goes in front of the SteamID, `0` bans permanently. Without the `kick` argument the player stays on the server for now and the ban only takes effect on the next connection attempt.

### Save bans permanently

> [!IMPORTANT]
> Bans only live in the server's memory at first and are gone after a restart. Save them after every change with `writeid` (SteamID bans) or `writeip` (IP bans). The bans are then written to the files `/nmrih/cfg/banned_user.cfg` and `/nmrih/cfg/banned_ip.cfg`.

> [!NOTE]
> For saved bans to apply again after a restart, the files have to be executed on server start. Add the following lines to `/nmrih/cfg/server.cfg`:
>
> ```text
> exec banned_ip.cfg
> exec banned_user.cfg
> ```

> [!WARNING]
> The Source Engine also knows the commands `kickid`, `addip`, `removeid` and `removeip`. They are **not officially documented** for No More Room in Hell and may not behave as expected. To lift a ban it is best to use `sm_unban` from SourceMod, or remove the matching line from `/nmrih/cfg/banned_user.cfg` and restart the server.

## Commands through SourceMod

With SourceMod installed you can manage players directly from within the game. How to set up SourceMod and give yourself admin rights is described under [Add Mods](/tutorials/gameserver/no-more-room-in-hell/add-mods) and [Add Admin](/tutorials/gameserver/no-more-room-in-hell/add-admin).

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

## VoteKick and VoteBan

No More Room in Hell comes with its own voting system. It lets players remove abusive or team-killing players without an admin being present.

### How players vote

1. **Show the player list**\
   A player enters the following command in the chat:

   ```text
   !vklist
   ```

   A numbered list of all players on the server is displayed.

2. **Start the vote**\
   The vote is started with the number from that list:

   ```text
   !vk 3
   ```

   `!vk` starts a votekick, `!vb` starts a voteban.

3. **Agree to the vote**\
   The other players agree in the chat with the following command:

   ```text
   !yes
   ```

### Configure the voting

Add the settings via [SFTP](/tutorials/gameserver/establish-sftp-connection) to the following file:

```text
/nmrih/cfg/server.cfg
```

| Setting | Default | Meaning |
|---------|---------|---------|
| `sv_votekick_timer` | `10` | Duration of a vote in seconds |
| `sv_votekick_required_pct` | `0.5` | Share of players that has to agree to a votekick |
| `sv_voteban_required_pct` | `0.65` | Share of players that has to agree to a voteban |
| `sv_voteban_banlength` | `30` | Duration of a voteban in minutes |

Example:

```text
sv_votekick_timer 10
sv_votekick_required_pct 0.5
sv_voteban_required_pct 0.65
sv_voteban_banlength 30
```

> [!NOTE]
> The voteban system cannot issue **permanent bans** – `sv_voteban_banlength` therefore always has to be greater than `0`. Permanent bans are set through the server console or through SourceMod.

> [!TIP]
> After changing the `server.cfg` you have to restart your server for the values to be applied.
