---
slug: "kick-ban-players"
language: "en"
title: "How to Kick and Ban Players on Your Necesse Server"
description: "Kick and ban players on a Necesse server"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["necesse"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Kick & Ban Players"
sort: 7
related: ["gameserver/necesse/add-savegame", "gameserver/necesse/create-backup", "gameserver/necesse/download-savegame", "gameserver/necesse/join-server"]
---

You remove players from a Necesse server with commands – either in the **console** of your dashboard or in the **in-game chat**. You always specify the **player name**.

> [!NOTE]
> Kicking requires at least the `moderator` level, banning at least `admin`. You can find out how to grant permissions under [Add Admin](/tutorials/gameserver/necesse/add-admin). In the console of the dashboard all commands are available to you without any additional permissions.

## Run commands

1. **Open the console or the chat**\
   Open the **console** of your server in the dashboard, or press `Enter` in the game to open the chat.

2. **Enter the command**\
   All commands start with `/`, for example:

   ```text
   /kick JohnDoe
   ```

## Kick a player

```text
/kick <PlayerName> [reason]
```

The player is disconnected from the server and can rejoin at any time. The optional reason is shown to them on disconnect.

> [!TIP]
> **Example**
>
> ```text
> /kick JohnDoe Please follow the rules
> ```

## Ban a player

```text
/ban <PlayerName>
```

The player is kicked from the server and cannot connect again until you lift the ban.

## Unban a player

```text
/unban <PlayerName>
```

## Show bans

```text
/bans
```

Lists all banned players.

## Command overview

| Command | Required level | Description |
|---------|----------------|-------------|
| `/kick <PlayerName> [reason]` | `moderator` | Disconnect a player from the server |
| `/ban <PlayerName>` | `admin` | Ban a player |
| `/unban <PlayerName>` | `admin` | Lift a ban |
| `/bans` | `admin` | Show all bans |

> [!WARNING]
> **Caution**
>
> Write the player name exactly as it is displayed in the game, including upper and lower case. Use `/bans` to check how an entry was stored.

## Manage bans

> [!WARNING]
> **Caution**
>
> Manage bans exclusively with the commands `/ban`, `/unban` and `/bans`. How Necesse stores bans internally is not documented – do not edit any server files via SFTP for this.

## No whitelist

> [!NOTE]
> Necesse has **no whitelist feature**. If you want to open your server only to specific players, protect it with a server password and share it only with the players you want.
