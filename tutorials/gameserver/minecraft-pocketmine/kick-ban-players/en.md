---
slug: "kick-ban-players"
language: "en"
title: "How to Kick and Ban Players on Your Minecraft PocketMine Edition Server"
description: "Kick and ban players on a Minecraft PocketMine Edition server"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["minecraft-pocketmine"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Kick & Ban Players"
sort: 7
related: ["gameserver/minecraft-pocketmine/add-savegame", "gameserver/minecraft-pocketmine/create-backup", "gameserver/minecraft-pocketmine/download-savegame", "gameserver/minecraft-pocketmine/join-server"]
---

You remove players with commands – either in the console of your server or in the game chat. PocketMine-MP distinguishes between name bans and IP bans.

> [!NOTE]
> In the game you need operator rights to use these commands. See [Add Admin](/tutorials/gameserver/minecraft-pocketmine/add-admin). In the console of your server the commands are always available to you.

> [!NOTE]
> If the server does not react to a command in the console, try it with a leading `/` as well.

## Kick a player

```text
/kick <PlayerName> [reason]
```

The player is disconnected from the server immediately but can rejoin at any time. The optional reason is shown to them.

> [!NOTE]
> `kick` only works for players who are currently online. The name does not have to be complete – PocketMine-MP looks the player up by the beginning of their name.

## Ban a player

```text
/ban <PlayerName> [reason]
```

The player can no longer connect. If they are online at that moment, they are kicked from the server immediately.

> [!TIP]
> `ban` also works for players who are **not** online. You can therefore ban someone in advance as long as you know their exact name.

## Ban an IP address

```text
/ban-ip <IP address or player name> [reason]
```

If you provide an IP address, that address is banned directly. If you provide the name of a player who is currently online instead, the server bans their current IP address.

> [!WARNING]
> An IP ban affects everyone behind the same connection – for example other players in the same household. Many internet connections also get a new IP address regularly, so an IP ban does not last permanently.

## Show bans

```text
/banlist [ips|players]
```

Without an argument the command shows the banned player names – exactly like `players` does. Banned IP addresses are only shown with `ips`.

## Lift a ban

```text
/pardon <PlayerName>
```

```text
/pardon-ip <IP address>
```

> [!NOTE]
> Both commands have short forms: `/unban <PlayerName>` and `/unban-ip <IP address>` do exactly the same thing.

## Command overview

| Command | Description |
|---------|-------------|
| `/kick <PlayerName> [reason]` | Disconnects a player from the server |
| `/ban <PlayerName> [reason]` | Bans a player name permanently |
| `/ban-ip <IP or name> [reason]` | Bans an IP address |
| `/pardon <PlayerName>` | Lifts the ban of a player name (also `/unban`) |
| `/pardon-ip <IP address>` | Lifts the ban of an IP address (also `/unban-ip`) |
| `/banlist [ips\|players]` | Shows the banned player names, with `ips` the banned IP addresses |

## The ban lists as files

All bans are stored in two text files in the main folder of your server:

| File | Content |
|------|---------|
| `banned-players.txt` | Banned player names |
| `banned-ips.txt` | Banned IP addresses |

Every line in `banned-players.txt` follows this pattern, separated by a vertical bar:

```text
Name|Created|Created by|Expires|Reason
```

> [!NOTE]
> For a permanent ban the "Expires" field contains the value `Forever`. Dates are stored in the format `year-month-day hour:minute:second ±timezone`.

> [!WARNING]
> The ban lists are read on server start. If you edit the files by hand, stop your server beforehand and start it again afterwards – otherwise your changes will not apply reliably. While the server is running it is best to always use the commands.

## Whitelist instead of a ban list

If you want to open your server only to specific players instead of banning individual ones, use the whitelist.

1. **Enable the whitelist**\
   Enter the following command:

   ```text
   /whitelist on
   ```

2. **Allow players**\
   Add every allowed player individually:

   ```text
   /whitelist add <PlayerName>
   ```

3. **Check the list**\
   Display all allowed players:

   ```text
   /whitelist list
   ```

| Command | Description |
|---------|-------------|
| `/whitelist on` | Enables the whitelist |
| `/whitelist off` | Disables the whitelist |
| `/whitelist add <PlayerName>` | Adds a player |
| `/whitelist remove <PlayerName>` | Removes a player |
| `/whitelist list` | Shows all allowed players |
| `/whitelist reload` | Reloads the whitelist |

> [!NOTE]
> The allowed players are stored in the `white-list.txt` file in the main folder of your server. Whether the whitelist is active is additionally controlled by the `white-list` entry in the `server.properties` file.
