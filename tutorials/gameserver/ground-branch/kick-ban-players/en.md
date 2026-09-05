---
slug: "kick-ban-players"
language: "en"
title: "How to Kick and Ban Players on Your Ground Branch Server"
description: "Kick and ban players on a Ground Branch server"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["ground-branch"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Kick & Ban Players"
sort: 5
related: ["gameserver/ground-branch/add-admin", "gameserver/ground-branch/add-mods", "gameserver/ground-branch/create-backup", "gameserver/ground-branch/join-server"]
---

You remove players from a Ground Branch server through the **in-game admin menu**. In addition, the configuration files let you define how long bans last by default, when team killers get banned automatically and whether players may vote to kick someone.

> [!NOTE]
> You need admin rights with the `kick` and `ban` permissions. See [Add Admin](/tutorials/gameserver/ground-branch/add-admin) for how to grant them.

## Kick or ban a player

1. **Join as an admin**\
   Join your server – see [Join Server](/tutorials/gameserver/ground-branch/join-server). Without admin rights the following options are not available to you.

2. **Open the admin menu**\
   Press `F8`. Alternatively open the ESC menu and select the admin button there, or enter the command `admin` in the console (`` ` ``).

3. **Select the player**\
   Pick the player in question from the player list.

4. **Choose an action**\
   Select **Kick** to disconnect the player from the server, or **Ban** to lock them out. In both cases you can optionally state a reason.

5. **Confirm the ban duration**\
   When banning, the server asks you for the duration. It is prefilled with the value from the `Ban.ini`, which you can overwrite. A ban can be temporary or permanent.

> [!NOTE]
> A kick only disconnects the player – they can rejoin immediately. Only a ban locks them out for the given duration.

## Set the default ban duration

How long a ban lasts by default is controlled in the `Ban.ini`.

1. **Stop the server**\
   Stop your server via the dashboard.

2. **Connect via SFTP**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection).

3. **Open Ban.ini**\
   Open the following file:

   ```text
   /GroundBranch/ServerConfig/Ban.ini
   ```

4. **Enter the duration**\
   Adjust the value in the section `[/Script/RBZooKeeper.ZKBan]`. The value is given in **minutes**:

   ```ini
   [/Script/RBZooKeeper.ZKBan]
   DefaultBanDuration=720
   ```

5. **Start the server**\
   Save the file and start your server.

> [!TIP]
> **Conversion**
>
> | Value | Equals |
> |-------|--------|
> | `60` | 1 hour |
> | `720` | 12 hours (default) |
> | `1440` | 1 day |
> | `10080` | 7 days |

## Ban team killers automatically

Ground Branch can ban players on its own if they kill their own teammates too often. The related settings live in the `TeamKill.ini`:

```text
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

> [!NOTE]
> With the default values a player is banned once they kill three of their own teammates within 30 minutes. Such a ban is lifted with the `unban` command, just like any other ban.

## Configure player votes

The `Vote.ini` defines what players on your server may vote on – including a kick.

```text
/GroundBranch/ServerConfig/Vote.ini
```

```ini
[/Script/RBZooKeeper.ZKVote]
VotingCommands=kick
VotingCommands=changemap
VotingCommands=nextmap
VotingCommands=missionsettings
VotingCommands=restartround
```

| Value | Meaning |
|-------|---------|
| `VotingCommands` | One line per allowed vote. Only `kick`, `changemap`, `nextmap`, `missionsettings` and `restartround` are available |
| `VoteDuration` | Duration of a running vote in seconds |
| `MinPlayers` | Minimum number of players required for voting |
| `VoteSucceededTimeout` | Cooldown in seconds after a successful vote |
| `VoteFailedTimeout` | Cooldown in seconds after a failed vote |
| `MapVoteTimeout` | Cooldown in seconds between map votes |
| `bAllowVotingOffMapList` | Allows voting for maps outside the map list |
| `PermittedGameModes` | Game modes in which voting is allowed |

> [!WARNING]
> To disable vote kicks entirely, remove the line `VotingCommands=kick`. Otherwise players can throw each other off the server without any admin rights.

## Lift a ban

Ground Branch has the admin command `unban`. It removes a player from the ban list based on their unique player ID (SteamID64). You use it like the other admin commands through the admin menu – see [Add Admin](/tutorials/gameserver/ground-branch/add-admin).

> [!NOTE]
> The exact console syntax of `unban` is not officially documented. Note down the SteamID64 of the player before you ban them – without it you cannot lift that specific ban.

## Whitelist

Ground Branch does have a whitelist – when it is active, only admins and whitelisted players can join. Everyone else gets a message when joining that the server uses a whitelist.

> [!NOTE]
> You manage the whitelist in the admin menu under **Whitelist**. The file name and format on the server are not officially documented, so maintain it in the game rather than via SFTP.

## What Ground Branch does not offer

> [!NOTE]
> **No RCON**
>
> Ground Branch does not offer an RCON interface. Kicks and bans run exclusively through the in-game admin menu.

> [!IMPORTANT]
> All files in the `ServerConfig` folder are only read on server start. Stop your server before editing them and restart it afterwards.
