---
description: Kick and ban players on a Fistful of Frags server
---

# How to Kick and Ban Players on Your Fistful of Frags Server

You can remove players either through the **server console** in the dashboard or — if SourceMod is installed — directly in the game through the **SourceMod commands**. On top of that Fistful of Frags ships a built-in **votekick system**, which lets your players deal with troublemakers even when no admin is present.

## List the players

1. <b>Open the server console</b><br>
   Open the console of your server via the dashboard.

2. <b>Show the player list</b><br>
   Enter the following command:

   ```
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
| `kickall <message>` | Remove every connected player with a message |
| `banid <minutes> <userid \| SteamID> [kick]` | Ban a player (`0` = permanent), `kick` also removes them right away |
| `banip <minutes> <ip>` | Ban an IP address (`0` = permanent) |
| `listid` / `listip` | Show banned SteamIDs or IP addresses |
| `removeid <SteamID>` / `removeip <ip>` | Lift a ban |
| `writeid` / `writeip` | Write bans permanently to the ban files |
| `changelevel <map name>` | Change the map without disconnecting players |
| `map <map name>` | Force a map — this kicks every player from the server |

### Kick a player

```
kick <player name>
```

:::: tip Example
```
kickid 12 Rule violation
```

`12` is the userid from the output of `status`. Using the userid is more reliable than using the name, because player names can contain special characters and spaces.
::::

A kicked player is removed from the server immediately but can rejoin right away.

### Ban a player

```
banid 60 STEAM_0:1:12345678 kick
```

The duration in minutes goes in front of the SteamID, `0` bans permanently. Without the `kick` argument the player stays on the server for now and the ban only takes effect on the next connection attempt.

You ban an IP address accordingly:

```
banip 60 123.45.67.89
```

### Save bans permanently

:::: danger Important
Bans only live in the server's memory at first and are gone after a restart. Save them after every change with `writeid` (SteamID bans) or `writeip` (IP bans). The bans are then written to the files `/fof/cfg/banned_user.cfg` and `/fof/cfg/banned_ip.cfg`. The same goes for `removeid` and `removeip` — without a following `writeid`/`writeip` the ban is back after the next restart.
::::

:::: info Note
For saved bans to apply again after a restart, the files have to be executed on server start. Add the following lines at the end of `/fof/cfg/server.cfg`:

```
exec banned_ip.cfg
exec banned_user.cfg
writeip
writeid
```
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

## Votekick

Fistful of Frags comes with its own votekick system. It lets your players remove troublemakers by vote without an admin being present.

### How players vote

1. <b>Open the votekick menu</b><br>
   A player presses the votekick key in the game — `F3` by default. The command `votekick` in the game console works as well.

2. <b>Select the player</b><br>
   In the menu they select the player who should be kicked.

3. <b>Agree to the vote</b><br>
   The other players open the same menu and vote. The player is only removed once enough votes come in.

### Configure the votekick

Add the setting via [SFTP](../establish-sftp-connection.md) to the following file:

```
/fof/cfg/server.cfg
```

| Setting | Default | Meaning |
|---------|---------|---------|
| `fof_sv_votekickallowed` | `1` | Allow votekicks on the server (`0` = disabled) |

:::: info Note
There is no voteban in Fistful of Frags — a vote only kicks the player, who can rejoin afterwards. Permanent bans are set through the server console or through SourceMod.
::::

### Other votes

Fistful of Frags also supports the Source Engine voting system, which players can use to suggest a map change, for example:

| Setting | Meaning |
|---------|---------|
| `sv_allow_votes` | Allow votes on the server in general |
| `sv_vote_allow_spectators` | Spectators are allowed to vote |
| `sv_vote_quorum_ratio` | Share of players that has to agree |
| `sv_vote_creation_timer` | Cooldown before the same player may start another vote |
| `sv_vote_failure_timer` | Cooldown after a failed vote |

The command `listissues` in the game console shows which votes are available; they are started with `callvote`.

:::: tip Tip
After changing the `server.cfg` you have to restart your server for the values to be applied.
::::
