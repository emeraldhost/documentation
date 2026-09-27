---
slug: "kick-ban-players"
language: "en"
title: "How to Kick and Ban Players on a Hytale Server"
description: "Kick and ban players on a Hytale server"
tags: []
date: "2026-01-15"
visibility: "public"
updated: "2026-09-27"
cta: "gameserver"
product_keys: ["hytale"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Kick & Ban Players"
sort: 20
related: ["gameserver/hytale/item-loss-on-death", "gameserver/hytale/join-server", "gameserver/hytale/pause-game-time", "gameserver/hytale/set-password"]
---

Enter the following commands in the console of your dashboard. Admins can also use them in-game, with a leading `/`. You can find out how to grant admin rights under [Add Admin](/tutorials/gameserver/hytale/add-admin).

## How to Kick a Player

1. **Open dashboard**\
   Open the dashboard of your Hytale server.

2. **Enter the Command**\
   Enter the following command in the console:

   ```text
   kick <playername>
   ```

The player must be online for this. They are disconnected from the server but can rejoin right away.

## How to Ban a Player

```text
ban <playername> <reason>
```

You can also leave out the reason. Instead of the name, the player's UUID works as well, and the player does not have to be online. The ban is permanent. If the player is currently online, they are disconnected from the server immediately.

Example:

```text
ban Player123 Griefing at spawn
```

## How to Unban a Player

```text
unban <playername>
```

Here, too, you can use the UUID instead of the name.

## All Commands

| Command | Description |
| ------- | ----------- |
| `kick <player>` | Kick player from server |
| `ban <player> [reason]` | Ban player permanently, optionally with a reason |
| `unban <player>` | Unban player |

> [!NOTE]
> The server stores banned players in the `bans.json` file in the main directory. You can ban admins (OPs) directly as well, without removing their rights first.
