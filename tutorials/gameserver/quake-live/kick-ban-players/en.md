---
slug: "kick-ban-players"
language: "en"
title: "How to Kick and Ban Players on Your Quake Live Server"
description: "Kick and ban players on a Quake Live server"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["quake-live"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Kick & Ban Players"
sort: 5
related: ["gameserver/quake-live/add-admin", "gameserver/quake-live/add-mods", "gameserver/quake-live/create-backup", "gameserver/quake-live/join-server"]
---

You remove players through the **console** of your server in the dashboard, or directly in the game if you hold admin or moderator rights there.

> [!NOTE]
> To learn how to grant rights to yourself and other players, see [Add Admin](/tutorials/gameserver/quake-live/add-admin).

## Find the client ID

All of the commands below expect the **client ID** – the number the server assigns to a connected player.

1. **Connect to your server**\
   Connect to your server in the game and open the console there.

2. **List the players**\
   Enter the following command:

   ```text
   /players
   ```

   The output shows every connected player with their client ID and their SteamID64.

> [!NOTE]
> In the console of your server you enter the commands without a leading `/`. In the game you use the same commands with a leading `/`, for example `/tempban 3`.

## Remove a player

Quake Live has no dedicated `kick` command. To remove a player, use `tempban` instead:

```text
tempban 3
```

The player is removed from the server and cannot rejoin until the current map ends. After that, access is open again.

> [!WARNING]
> Widely circulated forms such as `kick <PlayerName>` do not work on a Quake Live server – there is no `kick` command, neither in the server console nor in the game. A kick is only available as a player vote (`callvote kick` or `callvote clientkick`). As an admin you remove players with `tempban` or `ban`.

## Ban a player

```text
ban 3
```

The player is removed immediately and locked out permanently. The ban is stored in the file `/baseq3/access.txt`, in the same format as the admin rights:

```text
76561198012345678|ban
```

## Lift a ban

If the player is still connected or is trying to reconnect, you can lift the ban directly from the console:

```text
unban 3
```

For a player who is not on the server, remove the entry from the file instead:

1. **Stop the server**\
   Stop your server via the dashboard.

2. **Connect via SFTP**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection).

3. **Edit access.txt**\
   Open the following file and delete the line containing the affected SteamID64 with the suffix `|ban`:

   ```text
   /baseq3/access.txt
   ```

4. **Start the server**\
   Save the file and start your server.

> [!IMPORTANT]
> Only edit `access.txt` while the server is stopped. The server rewrites the list before every map load – changes made while the server is running are lost in the process.

## Command overview

| Command | Description |
|---------|-------------|
| `/players` (in game) | Show connected players with their client ID and SteamID64 |
| `tempban <client ID>` | Remove a player from the server until the map ends |
| `ban <client ID>` | Ban a player permanently |
| `unban <client ID>` | Lift a ban |
| `mute <client ID>` | Mute a player |
| `unmute <client ID>` | Unmute a player |
| `put <client ID> <red\|blue\|spectator>` | Move a player to a team or to the spectators |
| `lock [team]` / `unlock [team]` | Lock or unlock teams |
| `pause` / `unpause` | Pause and resume the match |
| `forceshuffle` | Shuffle the teams |
| `opsay <text>` | Send a message to all players as the server operator |
| `map <map> <factory>` | Change the map and the game mode |
| `quit` | Shut down the server |

## Restrict kick votes

Players can put each other up for a vote with `callvote kick`. You can prevent that.

1. **Stop the server**\
   Stop your server via the dashboard.

2. **Open server.cfg**\
   Open the following file via [SFTP](/tutorials/gameserver/establish-sftp-connection):

   ```text
   /baseq3/server.cfg
   ```

3. **Disable the vote**\
   For `g_voteFlags` you add up the values of the votes you want to block. Kick votes have the value `16`:

   ```text
   set g_voteFlags "16"
   ```

   If you want to disable voting entirely, set the following instead:

   ```text
   set g_allowVote "0"
   ```

4. **Start the server**\
   Save the file and start your server.

> [!NOTE]
> **Values for g_voteFlags**
>
> | Value | Blocked vote |
> |-------|--------------|
> | `1` | map |
> | `2` | map_restart |
> | `4` | nextmap |
> | `8` | gametype (factory argument for `callvote map`) |
> | `16` | kick |
> | `32` | timelimit |
> | `64` | fraglimit |
> | `128` | shuffle |
> | `256` | teamsize |
> | `512` | cointoss/random |
> | `1024` | loadouts |
> | `2048` | end-game voting |
> | `4096` | ammo (global) |
> | `8192` | timers (item) |
>
> To block kick and map votes, for example, you calculate `16 + 1 = 17`.
