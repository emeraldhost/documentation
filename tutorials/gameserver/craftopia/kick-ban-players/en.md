---
slug: "kick-ban-players"
language: "en"
title: "How to Kick and Ban Players on Your Craftopia Server"
description: "Kick and ban players on a Craftopia server"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["craftopia"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Kick & Ban Players"
sort: 5
related: ["gameserver/craftopia/add-savegame", "gameserver/craftopia/create-backup", "gameserver/craftopia/download-savegame", "gameserver/craftopia/join-server"]
---

On a Craftopia server you remove players through the **console in the dashboard**. There are no in-game chat commands for this.

> [!NOTE]
> **No admin concept in the game**
>
> Craftopia has **no admin rights for players**: there is no admin file, no admin list and no command that grants a player permissions in the game. All administration therefore runs through the console of your server – and thus through everyone who has access to the dashboard.

## Open the console

1. **Open the dashboard**\
   Log in to the dashboard of your server.

2. **Open the console**\
   Switch to the **console**. There you can see the output of your server and enter commands.

3. **The server has to be running**\
   Commands are only accepted by a running server. If your server is stopped, start it first.

## List the players

Before you can kick or ban anyone, you need their **UserID**. The following command lists it:

```text
list
```

The command shows the players with their UserID from the multiplayer list.

> [!WARNING]
> Always run `list` right before a `kick` or `ban` and copy the UserID exactly as it is shown in the console.

## Kick a player

```text
kick <UserID>
```

The player is disconnected from the server but can rejoin at any time.

## Ban a player

```text
ban <UserID>
```

The player is removed from the server and added to the ban list.

> [!WARNING]
> **Bans apply to the IP address**
>
> The Craftopia ban list contains **IP addresses**, not player accounts. This means:
>
> - If the player changes their IP address, they can join the server again.
> - Players who share an IP address – for example within the same household – are banned as well.

## Show banned players

```text
banlist
```

Shows all banned IP addresses.

## Lift a ban

```text
pardon <IP address>
```

Use the IP address exactly as `banlist` shows it.

> [!TIP]
> **If a command is not accepted**
>
> Craftopia is still in development and the exact spelling of the commands can change between game versions. If a command is not accepted, check the output in the console of your server.

## Command overview

| Command | Description |
|---------|-------------|
| `list` | Show players including their UserID |
| `kick <UserID>` | Disconnect a player from the server |
| `ban <UserID>` | Ban a player (IP based) |
| `banlist` | Show banned IP addresses |
| `pardon <IP address>` | Lift a ban |

## Do not shut down the server through the console

> [!IMPORTANT]
> Always use the **dashboard** to stop and restart your server, not the commands of the server console. This is the only way your server shuts down cleanly and starts up correctly afterwards.

## No whitelist

> [!WARNING]
> Craftopia has **no whitelist feature**. If you want to open your server only to specific players, set a server password and share it with those players only. Keep in mind that the password in Craftopia is a plain number with a maximum of eight digits.
