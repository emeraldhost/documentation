---
slug: "kick-ban-players"
language: "en"
title: "How to Kick and Ban Players on Your The Front Server"
description: "Kick and ban players on a The Front server"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["the-front"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Kick & Ban Players"
sort: 6
related: ["gameserver/the-front/add-savegame", "gameserver/the-front/create-backup", "gameserver/the-front/download-savegame", "gameserver/the-front/join-server"]
---

You remove players from your The Front server using admin commands directly in the game. All commands work with the player's **SteamID64** – a 17-digit number starting with `7656`.

> [!NOTE]
> You need admin rights to use these commands. See [Add Admin](/tutorials/gameserver/the-front/add-admin).

> [!TIP]
> Here you can find a guide on how to find a [SteamID64](/tutorials/gameserver/steamid64-find-out).

## Use commands in the game

1. **Open the admin menu**\
   Press `Shift` + `G` in the game to open the admin menu. Alternatively you can open the console with the `` ` `` or `~` key.

2. **Enter the command**\
   Enter the desired command together with the player's SteamID64, for example:

   ```text
   BanPlayer 76561198012345678 login
   ```

3. **Confirm**\
   Confirm your input. The command takes effect immediately, no server restart is required.

## Kick a player

```text
KickPlayerOff <SteamID64>
```

The player is disconnected from the server but can rejoin at any time.

## Ban a player

```text
BanPlayer <SteamID64> login
```

The player can no longer log in to your server until you lift the ban.

## Unban a player

```text
PermitPlayer <SteamID64> login
```

## Mute a player

```text
BanPlayer <SteamID64> chat
```

This locks the player out of the in-game chat. They can still join the server.

## Unmute a player

```text
PermitPlayer <SteamID64> chat
```

## Command overview

| Command | Description |
|---------|-------------|
| `KickPlayerOff <SteamID64>` | Disconnect a player from the server |
| `BanPlayer <SteamID64> login` | Ban a player from the server |
| `PermitPlayer <SteamID64> login` | Lift a ban |
| `BanPlayer <SteamID64> chat` | Mute a player (chat) |
| `PermitPlayer <SteamID64> chat` | Unmute a player |
| `GotoPlayerByAccount <SteamID64>` | Teleport to a player |

> [!WARNING]
> The difference lies in the second value: `login` controls access to the server, `chat` only the communication. To lock a player out completely, use `login`.

> [!NOTE]
> **Where are bans stored?**
>
> Admins and bans are stored in the file `Saved/GameStates/Accounts/GM.csv` on your server. Do not edit it by hand – lift bans with the `PermitPlayer` command so the data stays consistent. The file is included automatically when you back up your save, see [Download savegame](/tutorials/gameserver/the-front/download-savegame).
