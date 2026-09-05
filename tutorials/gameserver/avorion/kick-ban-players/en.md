---
slug: "kick-ban-players"
language: "en"
title: "How to Kick and Ban Players on Your Avorion Server"
description: "Kick and ban players on an Avorion server"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["avorion"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Kick & Ban Players"
sort: 7
related: ["gameserver/avorion/add-savegame", "gameserver/avorion/create-backup", "gameserver/avorion/download-savegame", "gameserver/avorion/join-server"]
---

In Avorion you remove players with commands. You can enter them either in the **console** of your dashboard or in the game chat – there with a leading `/`.

> [!NOTE]
> To use the commands in the game you need admin rights. See [Add admin](/tutorials/gameserver/avorion/add-admin).

## Kick a player

```text
/kick <player name>
```

The player is disconnected from the server but can rejoin immediately. A kick works well as a warning or to disconnect a stuck player.

## Ban a player

```text
/ban <player name>
```

The player is put on the blacklist and cannot join your server again until you lift the ban.

## Lift a ban

```text
/unban <player name>
```

## Ban an IP

```text
/banip <player IP>
```

An IP ban can be lifted again with:

```text
/unbanip <player IP>
```

> [!WARNING]
> An IP ban affects everyone behind the same IP address – for example several people in one household. Many internet connections also get a new IP address regularly, which makes the ban ineffective. As a rule, use `/ban`.

## Commands at a glance

| Command | Description |
|---------|-------------|
| `/kick <player name>` | Disconnect a player from the server |
| `/ban <player name>` | Put a player on the blacklist |
| `/unban <player name>` | Lift a ban |
| `/banip <player IP>` | Ban an IP address |
| `/unbanip <player IP>` | Lift an IP ban |
| `/blacklist` | Show the blacklist options |
| `/whitelist` | Show the whitelist options |
| `/player` | Show the number of connected players |
| `/status` | Show information about the current status of the server |
| `/w <player name>` | Send a private message to a player |
| `/save` | Save the current state |
| `/stop` | Shut down the server |
| `/help` | Show all available commands |

> [!TIP]
> The player name has to match exactly – including capitalisation. It is best to copy it from the console of your dashboard, where it appears when the player connects.

> [!NOTE]
> When kicking or banning through the console of the dashboard, you can leave out the `/` or include it – both work. In the game chat the `/` is mandatory, otherwise your input is sent as a normal chat message.

> [!WARNING]
> Before a planned server stop, run `/save` before you use `/stop` or stop the server via the dashboard – that way no progress is lost.
