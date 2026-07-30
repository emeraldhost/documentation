---
description: Kick and ban players on a Ground Branch server
---

# How to Kick and Ban Players on Your Ground Branch Server

You remove players from a Ground Branch server through the **in-game admin menu**. In addition, the configuration files let you define how long bans last by default, when team killers get banned automatically and whether players may vote to kick someone.

:::: info Note
You need admin rights with the `kick` and `ban` permissions. See [Add Admin](add-admin.md) for how to grant them.
::::

## Kick or ban a player

1. <b>Join as an admin</b><br>
   Join your server — see [Join Server](join-server.md). Without admin rights the following options are not available to you.

2. <b>Open the admin menu</b><br>
   Press `F8`. Alternatively open the ESC menu and select the admin button there, or enter the command `admin` in the console (`` ` ``).

3. <b>Select the player</b><br>
   Pick the player in question from the player list.

4. <b>Choose an action</b><br>
   Select **Kick** to disconnect the player from the server, or **Ban** to lock them out.

5. <b>Confirm the ban duration</b><br>
   When banning, the server asks you for the duration. It is prefilled with the value from the `Ban.ini`, which you can overwrite.

:::: info Note
A kick only disconnects the player — they can rejoin immediately. Only a ban locks them out for the given duration.
::::

## Set the default ban duration

How long a ban lasts by default is controlled in the `Ban.ini`.

1. <b>Stop the server</b><br>
   Stop your server via the dashboard.

2. <b>Connect via SFTP</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md).

3. <b>Open Ban.ini</b><br>
   Open the following file:

   ```
   /GroundBranch/ServerConfig/Ban.ini
   ```

4. <b>Enter the duration</b><br>
   Adjust the value in the section `[/Script/RBZooKeeper.ZKBan]`. The value is given in **minutes**:

   ```ini
   [/Script/RBZooKeeper.ZKBan]
   DefaultBanDuration=720
   ```

5. <b>Start the server</b><br>
   Save the file and start your server.

:::: tip Conversion
| Value | Equals |
|-------|--------|
| `60` | 1 hour |
| `720` | 12 hours (default) |
| `1440` | 1 day |
| `10080` | 7 days |
::::

## Ban team killers automatically

Ground Branch can ban players on its own if they kill their own teammates too often. The related settings live in the `TeamKill.ini`:

```
/GroundBranch/ServerConfig/TeamKill.ini
```

```ini
[/Script/RBZooKeeper.ZKTeamKill]
MaxTeamKills=3
BanTime=60
TeamKillExpireTime=30
```

| Value | Meaning |
|-------|---------|
| `MaxTeamKills` | Number of team kills after which a player is banned |
| `BanTime` | Duration of the automatic ban in minutes |
| `TeamKillExpireTime` | Time in minutes after which a single team kill expires again |

:::: info Lift a team kill ban
To let an automatically banned player back in, stop the server, remove their entries from the `TeamKill.ini` and start the server again.
::::

## Configure player votes

The `Vote.ini` defines what players on your server may vote on — including a kick.

```
/GroundBranch/ServerConfig/Vote.ini
```

```ini
[/Script/RBZooKeeper.ZKVote]
VotingCommands=kick
```

| Value | Meaning |
|-------|---------|
| `VotingCommands` | Allowed votes: `kick`, `changemap`, `nextmap`, `missionsettings`, `restartround` |
| `VoteDuration` | Duration of a running vote |
| `MinPlayers` | Minimum number of players required for voting |
| `VoteSucceededTimeout` | Cooldown after a successful vote |
| `VoteFailedTimeout` | Cooldown after a failed vote |
| `MapVoteTimeout` | Cooldown between map votes |
| `bAllowVotingOffMapList` | Allows voting for maps outside the map list |
| `PermittedGameModes` | Game modes in which voting is allowed |

:::: warning Warning
To disable vote kicks entirely, remove `kick` from `VotingCommands`. Otherwise players can throw each other off the server without any admin rights.
::::

## What Ground Branch does not offer

:::: warning Lifting a ban
There is no documented way to lift a regular ban issued through the admin menu. Set the ban duration deliberately and work with shorter periods when in doubt. For automatic team kill bans, the procedure via the `TeamKill.ini` described above works.
::::

:::: info Whitelist
Ground Branch does have a whitelist — when it is active, only admins and whitelisted players can join. The file name and format are not officially documented though. If you want to restrict your server to a fixed group of people, a server password is the more reliable route.
::::

:::: info No RCON
Ground Branch does not offer an RCON interface. Kicks and bans run exclusively through the in-game admin menu.
::::

:::: danger Important
All files in the `ServerConfig` folder are only read on server start. Stop your server before editing them and restart it afterwards.
::::
