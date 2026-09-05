---
slug: "kick-ban-players"
language: "en"
title: "How to Kick and Ban Players on a The Bus Server"
description: "Kick and ban players on a The Bus server"
tags: []
date: "2026-02-24"
visibility: "public"
updated: "2026-08-29"
cta: "gameserver"
product_keys: ["the-bus"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Kick & Ban Players"
sort: 17
related: ["gameserver/the-bus/add-savegame", "gameserver/the-bus/join-server", "gameserver/the-bus/send-chat-messages", "gameserver/the-bus/spawn-bus"]
---

## Show player list

To show all players on the server, enter the following command:

```text
/list
```

## How to kick a player

```text
/kick <playername>
```

The player will be immediately removed from the server.

## How to ban a player

```text
/ban <playername>
```

The player will be permanently banned and automatically kicked from the server.

## How to temporarily ban a player

```text
/tempban <playername> <minutes>
```

**Examples:**

```text
/tempban PlayerName 60
/tempban PlayerName 1440
```

| Duration | Minutes |
|----------|---------|
| 1 hour | `60` |
| 24 hours | `1440` |
| 7 days | `10080` |

## How to unban a player

```text
/unban <playername>
```

Alternatively, you can open the file `TheBus/Saved/PlayerData.json` via [SFTP](/tutorials/gameserver/establish-sftp-connection) and set the value `"banned"` to `false`:

```json
{
    "name": "PlayerName",
    "uniqueId": "|0002xxxxxxxxxxxxxxxxxxxxxxxxxxxx",
    "perms": "User",
    "banned": false,
    "unbanDate": "0001.01.01-00.00.00",
    "adminPasswordUsed": ""
}
```

Restart the server afterwards.

> [!TIP]
> Check the file with a JSON formatter like [JSONLint](https://jsonlint.com/) after editing – a single missing or extra comma is enough to make the player data unreadable for the server.

## How to mute a player

```text
/mute <playername>
```

The player will no longer be able to send messages in chat.

## How to unmute a player

```text
/unmute <playername>
```

## All commands

| Command | Description |
|---------|-------------|
| `/list` | Show all players |
| `/kick <player>` | Kick player from server |
| `/ban <player>` | Permanently ban player |
| `/tempban <player> <minutes>` | Temporarily ban player |
| `/unban <player>` | Unban player |
| `/mute <player>` | Mute player |
| `/unmute <player>` | Unmute player |

> [!TIP]
> These commands require Owner or Admin permissions.
