---
slug: "kick-ban-players"
language: "en"
title: "How to Kick and Ban Players on Your Unturned Server"
description: "Kick and ban players on an Unturned server"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["unturned"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Kick & Ban Players"
sort: 7
related: ["gameserver/unturned/add-savegame", "gameserver/unturned/create-backup", "gameserver/unturned/download-savegame", "gameserver/unturned/join-server"]
---

You remove players from an Unturned server using commands – either in the **console** of the dashboard or, as an admin, directly in the in-game chat. The commands take effect immediately, no restart is needed.

> [!WARNING]
> **Requirement**
>
> To use the commands in the in-game chat you need admin rights. Here you can find a guide on how to [add an admin](/tutorials/gameserver/unturned/add-admin). In the console of the dashboard the commands always work.

> [!TIP]
> Here you can find a guide on how to find a player's [SteamID64](/tutorials/gameserver/steamid64-find-out).

## Enter commands

1. **Open the console or chat**\
   Open the **console** in the dashboard of your server or – as an admin in the game – the chat.

2. **Enter the command**\
   In the console you enter the command without a prefix, in the in-game chat with a leading `/` or `@`:

   ```text
   kick Sam/AFK
   ```

   ```text
   /kick Sam/AFK
   ```

> [!CAUTION]
> **Parameters are separated by a slash**
>
> Unlike many other games, Unturned separates the parameters with a **`/`** instead of a space. So `ban Sam Griefing` does not work – the correct form is `ban Sam/Griefing`.

## Kick a player

```text
kick <SteamID64|PlayerName>/<Reason>
```

The player is disconnected from the server but can rejoin at any time. If you leave out the reason, the player is kicked with the reason "unspecified".

> [!TIP]
> **Example**
>
> ```text
> kick 76561198012345678/AFK
> ```

## Ban a player

```text
ban <SteamID64|PlayerName>/<Reason>/<Duration in seconds>
```

The player is kicked from the server and cannot connect again for the given duration.

> [!TIP]
> **Example**
>
> ```text
> ban 76561198012345678/Griefing/86400
> ```
>
> This bans the player for one day (86,400 seconds).

> [!NOTE]
> **Leaving out the duration**
>
> If you do not specify a duration, the player is banned for 31,536,000 seconds – which equals 365 days. For a longer ban, enter a correspondingly larger value in seconds.

| Duration | Value in seconds |
|----------|------------------|
| 1 hour | `3600` |
| 1 day | `86400` |
| 7 days | `604800` |
| 30 days | `2592000` |
| 365 days | `31536000` |

## Lift a ban

```text
unban <SteamID64>
```

> [!WARNING]
> Unbanning works with the **SteamID64 only** – not with the player name, because the player is no longer on the server. Make a note of the SteamID64 before you ban someone.

## Command overview

| Command | Description |
|---------|-------------|
| `kick <SteamID64\|PlayerName>/<Reason>` | Disconnect a player from the server |
| `ban <SteamID64\|PlayerName>/<Reason>/<Seconds>` | Ban a player |
| `unban <SteamID64>` | Lift a ban |
| `admin <SteamID64\|PlayerName>` | Make a player an admin |
| `unadmin <SteamID64\|PlayerName>` | Revoke admin rights |
| `save` | Save the world |
| `shutdown` | Save the world and shut the server down |

## Ban list

> [!WARNING]
> **Maintain the ban list with the commands**
>
> Bans are stored in `/Servers/<ServerID>/Server/Blacklist.dat`. Always ban and unban using the `ban` and `unban` commands so the list stays valid. If you want to lift all bans at once, you can also delete the file while the server is stopped.

## Open the server to specific players only

> [!NOTE]
> **Whitelist**
>
> Unturned also has the configuration command `Whitelisted` for `Commands.dat`. With it, only permitted players can join your server. How players are added to that list is not officially documented – if you simply want to keep your server private, a server password is the easier option.
