---
slug: "kick-ban-players"
language: "en"
title: "How to Kick and Ban Players on Your s&box Server"
description: "Kick and ban players on an s&box server"
tags: []
date: "2026-07-31"
visibility: "public"
cta: "gameserver"
product_keys: ["sbox"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Kick & Ban Players"
sort: 6
related: ["gameserver/sbox/change-gamemode", "gameserver/sbox/change-map", "gameserver/sbox/create-backup", "gameserver/sbox/join-server"]
---

You remove players through the **server console** in the dashboard of your server. In the official sandbox mode, players with the `admin` claim can additionally kick and ban directly in the game – see [Add Admin](/tutorials/gameserver/sbox/add-admin).

## Use commands in the server console

1. **Open the server console**\
   Open the dashboard of your server and switch to the **server console**.

2. **List the players**\
   Display the connected players and their SteamID64:

   ```text
   status
   ```

3. **Run the command**\
   Enter the desired command, for example:

   ```text
   kick 76561198012345678 Rule violation
   ```

> [!NOTE]
> These commands only work through the server console. A regular player can type them into the in-game console, but they have no effect there.

## Kick a player

```text
kick <SteamID64 or part of the name> [reason]
```

As the target you pass either the exact SteamID64 or part of the display name. A kick disconnects the player immediately, but they can rejoin at any time.

> [!TIP]
> Names with spaces or special characters are unreliable as a search term. When in doubt, use the SteamID64 from the `status` output.

## Ban a player

```text
ban <SteamID64 or part of the name> [reason]
```

A ban kicks the player immediately and prevents them from connecting again. If you do not provide a reason, `Banned` is used.

> [!NOTE]
> Using a SteamID64 you can also ban players who are not currently connected. That lets you block someone before they ever join.

> [!IMPORTANT]
> The `ban` command belongs to the official sandbox mode (`facepunch.sandbox`) and is therefore not available in every game mode. `kick`, on the other hand, comes from the engine and works regardless of the game mode.

## Lift a ban

s&box has **no `unban` command**. In sandbox mode, banned players are stored in a file on your server which you have to edit manually.

1. **Stop the server**\
   Stop your server via the dashboard.

2. **Connect via SFTP**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection).

3. **Open the ban list**\
   Open the following file:

   ```text
   /data/facepunch/sandbox/bans.json
   ```

4. **Remove the entry**\
   Delete the player's entry from the list and make sure the file remains valid JSON.

5. **Start the server**\
   Save the file and start your server.

> [!WARNING]
> Never edit the file while the server is running. The server keeps the ban list in memory and rewrites the whole file on every change – your edit would be overwritten immediately.

> [!NOTE]
> This path applies to the official sandbox mode. Other game modes store their data under `/data/<organisation>/<package>/` and use their own file names there.

## Command overview

| Command | Description |
|---------|-------------|
| `status` | Show server status, connected players and the lobby ID |
| `kick <SteamID64 or part of the name> [reason]` | Disconnect a player from the server |
| `ban <SteamID64 or part of the name> [reason]` | Ban a player (sandbox mode) |
| `game <game mode> [map]` | Switch the game mode and map |
| `find <text>` | Search the available commands and variables |
| `quit` | Shut down the server |

> [!WARNING]
> `quit` terminates the server process. Use the dashboard to restart your server.
