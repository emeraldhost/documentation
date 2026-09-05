---
slug: "kick-ban-players"
language: "en"
title: "How to Kick and Ban Players on Your The Cenozoic Era Server"
description: "Kick and ban players on a The Cenozoic Era server"
tags: []
date: "2026-07-31"
visibility: "public"
cta: "gameserver"
product_keys: ["the-cenozoic-era"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Kick & Ban Players"
sort: 4
related: ["gameserver/the-cenozoic-era/add-admin", "gameserver/the-cenozoic-era/create-backup", "gameserver/the-cenozoic-era/join-server"]
---

You remove players from your The Cenozoic Era server directly in the game using chat commands. As the target you enter either the username or the Net ID of the player.

> [!NOTE]
> To use these commands you have to be entered as an owner in the `Game.ini` of your server. See [Add Admin](/tutorials/gameserver/the-cenozoic-era/add-admin).

## Use commands in the game

1. **Open the chat**\
   Join your server and open the chat in the game.

2. **Identify the player**\
   The following command forces the display of name tags and shows you who is currently moving around on the server:

   ```text
   /users
   ```

3. **Run the command**\
   Enter the desired command with a leading `/`, for example:

   ```text
   /kick PlayerName
   ```

## Kick a player

```text
/kick <Username or Net ID>
```

The player is disconnected from the server but can rejoin at any time. A kick is the right tool for minor issues – for example to make a player aware of your server rules.

## Ban a player

```text
/ban <Username or Net ID>
```

The player is removed from the server and cannot connect again until you lift the ban.

## Unban a player

```text
/unban <Username or Net ID>
```

> [!NOTE]
> A time-limited ban is not documented for The Cenozoic Era. A ban stays in place until you lift it again with `/unban`.

## More moderation commands

| Command | Description |
|---------|-------------|
| `/users` | Forces the display of name tags |
| `/kick <Username or Net ID>` | Disconnect a player from the server |
| `/ban <Username or Net ID>` | Ban a player |
| `/unban <Username or Net ID>` | Lift a ban |
| `/slay <Username or Net ID>` | Kill the given player |
| `/tp <Username or Net ID>` | Teleport to the given player |
| `/bring <Username or Net ID>` | Bring the given player to you |

> [!TIP]
> `/slay` is the milder option if a player gained an unfair advantage or got stuck: the player dies in the game instead of being banned from the server. You can find the complete list of admin commands under [Add Admin](/tutorials/gameserver/the-cenozoic-era/add-admin).

> [!WARNING]
> **Caution**
>
> There is **no documented ban file** on the server for The Cenozoic Era. Bans are managed exclusively through the in-game commands – adding or correcting an entry via SFTP is not supported.

> [!IMPORTANT]
> Write down the username or the Net ID of the player when you ban someone. Without it you cannot lift the ban later with `/unban`, because the player no longer shows up on the server.
