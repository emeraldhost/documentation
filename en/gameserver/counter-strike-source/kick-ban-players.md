---
description: Kick and ban players on a Counter-Strike Source server
---

# How to Kick and Ban Players on Your Counter-Strike Source Server

You can remove players either through the **server console** in the dashboard or — if SourceMod is installed — directly in the game through the **SourceMod commands**.

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
| `kick <player name>` | Remove a player from the server by name |
| `kickid <userid\|SteamID> [reason]` | Remove a player from the server by ID |
| `banid <minutes> <SteamID> [kick]` | Ban a player (`0` = permanent) |
| `removeid <SteamID>` | Lift the ban of a SteamID |
| `removeip <IP>` | Lift the ban of an IP address |
| `writeid` | Save permanent SteamID bans to `banned_user.cfg` |
| `writeip` | Save permanent IP bans to `banned_ip.cfg` |
| `changelevel <map name>` | Change the map |

### Kick a player

```
kick <player name>
```

Instead of the name you can also use the userid or the SteamID:

```
kickid STEAM_0:1:12345678 reason
```

A kicked player is removed from the server but can rejoin immediately.

### Ban a player

```
banid 60 STEAM_0:1:12345678 kick
```

The duration in minutes goes in front of the SteamID, `0` bans permanently. The optional `kick` removes the player from the server right away — without it the ban only takes effect on the next connection attempt.

### Save bans permanently

:::: danger Important
Bans only live in the server's memory at first and are gone after a restart. Save them after every change with `writeid` (SteamID bans) or `writeip` (IP bans). The bans are then written to the files `/cstrike/cfg/banned_user.cfg` and `/cstrike/cfg/banned_ip.cfg`.
::::

:::: info Note
Only permanent bans — entries with a duration of `0` — are written to those files. Time-limited bans only last until the next restart. So anyone who should stay banned permanently is banned with `banid 0 <SteamID> kick`.
::::

:::: info Note
For saved bans to apply again after a restart, the files have to be executed on server start. Add the following lines to `/cstrike/cfg/server.cfg`:

```
exec banned_ip.cfg
exec banned_user.cfg
```
::::

## Enable RCON

RCON lets you run the same commands from outside the dashboard.

1. <b>Stop the server</b><br>
   Stop your server via the dashboard.

2. <b>Open server.cfg</b><br>
   Open the following file via [SFTP](../establish-sftp-connection.md):

   ```
   /cstrike/cfg/server.cfg
   ```

3. <b>Set a password</b><br>
   Add the following line and choose a secure password:

   ```
   rcon_password "your-password"
   ```

4. <b>Start the server</b><br>
   Save the file and start your server.

:::: info Note
RCON runs over the same port as the game — there is no separate RCON port. You then issue commands with `rcon <command>`.
::::

:::: danger Important
Anyone who knows your RCON password has full control over your server. Do not share it and use a dedicated, long password.
::::

:::: tip Tip
You can additionally protect RCON against password guessing. Add the following lines to your `server.cfg`:

```
sv_rcon_maxfailures 5
sv_rcon_banpenalty 1440
```

Once more than five login attempts with a wrong password are counted, the server blocks the IP address in question for 1440 minutes (24 hours).
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
| `sm_rcon` | `<command>` | `m` (rcon) |

:::: info Note
For `sm_ban` and `sm_banip` a duration of `0` means a permanent ban. With `sm_addban` you can also ban players who are not currently on the server. All commands work in the game console as well as in the chat — there you simply write `!kick` or `/kick` instead of `sm_kick`.
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

## Lift a ban

Through the server console:

```
removeid STEAM_0:1:12345678
```

```
removeip 123.45.67.89
```

Afterwards run `writeid` or `writeip` again so the change is saved permanently.

With SourceMod:

```
sm_unban STEAM_0:1:12345678
```

```
sm_unban 123.45.67.89
```

:::: info Note
Alternatively you can stop your server and delete the corresponding line from `/cstrike/cfg/banned_user.cfg` or `/cstrike/cfg/banned_ip.cfg` via [SFTP](../establish-sftp-connection.md).
::::
