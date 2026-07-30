---
description: Kick and ban players on a No More Room in Hell server
---

# How to Kick and Ban Players on Your No More Room in Hell Server

You can remove players either through the **server console** in the dashboard or — if SourceMod is installed — directly in the game through the **SourceMod commands**. On top of that No More Room in Hell ships its own **VoteKick and VoteBan system**, which lets players react even when no admin is on the server.

## List the players

1. <b>Open the server console</b><br>
   Open the console of your server via the dashboard.

2. <b>Show the player list</b><br>
   Enter the following command:

   ```
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
| `map <map name>` | Force a map — this kicks every player from the server |

### Kick a player

```
kick <player name>
```

:::: tip Example
```
kick dark_st3alth
```
::::

A kicked player is removed from the server immediately but can rejoin right away.

### Ban a player

```
banid 60 STEAM_0:1:12345678 kick
```

The duration in minutes goes in front of the SteamID, `0` bans permanently. Without the `kick` argument the player stays on the server for now and the ban only takes effect on the next connection attempt.

### Save bans permanently

:::: danger Important
Bans only live in the server's memory at first and are gone after a restart. Save them after every change with `writeid` (SteamID bans) or `writeip` (IP bans). The bans are then written to the files `/nmrih/cfg/banned_user.cfg` and `/nmrih/cfg/banned_ip.cfg`.
::::

:::: info Note
For saved bans to apply again after a restart, the files have to be executed on server start. Add the following lines to `/nmrih/cfg/server.cfg`:

```
exec banned_ip.cfg
exec banned_user.cfg
```
::::

:::: warning Warning
The Source Engine also knows the commands `kickid`, `addip`, `removeid` and `removeip`. They are **not officially documented** for No More Room in Hell and may not behave as expected. To lift a ban it is best to use `sm_unban` from SourceMod, or remove the matching line from `/nmrih/cfg/banned_user.cfg` and restart the server.
::::

## Commands through SourceMod

With SourceMod installed you can manage players directly from within the game. How to set up SourceMod and give yourself admin rights is described under [Add Mods](add-mods.md) and [Add Admin](add-admin.md).

| Command | Syntax | Required flag |
|--------|--------|---------------|
| `sm_kick` | `<#userid\|name> [reason]` | `c` (kick) |
| `sm_ban` | `<#userid\|name> <minutes\|0> [reason]` | `d` (ban) |
| `sm_banip` | `<ip\|#userid\|name> <time> [reason]` | `d` (ban) |
| `sm_addban` | `<time> <steamid> [reason]` | `m` (rcon) |
| `sm_unban` | `<steamid\|ip>` | `e` (unban) |
| `sm_who` | `[#userid\|name]` | `b` (generic) |
| `sm_map` | `<map>` | `g` (changemap) |

:::: info Note
For `sm_ban` and `sm_banip` a duration of `0` means a permanent ban. With `sm_addban` you can also ban players who are not currently on the server.
::::

### Examples

```
sm_kick "player name" Rule violation
```

```
sm_ban #12 60 Rule violation
```

```
sm_addban 0 STEAM_0:1:12345678 Rule violation
```

### Lift a ban

```
sm_unban STEAM_0:1:12345678
```

```
sm_unban 123.45.67.89
```

## VoteKick and VoteBan

No More Room in Hell comes with its own voting system. It lets players remove abusive or team-killing players without an admin being present.

### How players vote

1. <b>Show the player list</b><br>
   A player enters the following command in the chat:

   ```
   !vklist
   ```

   A numbered list of all players on the server is displayed.

2. <b>Start the vote</b><br>
   The vote is started with the number from that list:

   ```
   !vk 3
   ```

   `!vk` starts a votekick, `!vb` starts a voteban.

3. <b>Agree to the vote</b><br>
   The other players agree in the chat with the following command:

   ```
   !yes
   ```

### Configure the voting

Add the settings via [SFTP](../establish-sftp-connection.md) to the following file:

```
/nmrih/cfg/server.cfg
```

| Setting | Default | Meaning |
|---------|---------|---------|
| `sv_votekick_timer` | `10` | Duration of a vote in seconds |
| `sv_votekick_required_pct` | `0.5` | Share of players that has to agree to a votekick |
| `sv_voteban_required_pct` | `0.65` | Share of players that has to agree to a voteban |
| `sv_voteban_banlength` | `30` | Duration of a voteban in minutes |

Example:

```
sv_votekick_timer 10
sv_votekick_required_pct 0.5
sv_voteban_required_pct 0.65
sv_voteban_banlength 30
```

:::: info Note
The voteban system cannot issue **permanent bans** — `sv_voteban_banlength` therefore always has to be greater than `0`. Permanent bans are set through the server console or through SourceMod.
::::

:::: tip Tip
After changing the `server.cfg` you have to restart your server for the values to be applied.
::::
