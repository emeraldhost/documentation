---
slug: "kick-ban-players"
language: "en"
title: "How to Kick and Ban Players on Your Minecraft Java Edition Server"
description: "Kick and ban players on a Minecraft Java Edition server"
tags: []
date: "2026-04-11"
visibility: "public"
cta: "gameserver"
product_keys: ["minecraft"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Kick & Ban Players"
sort: 26
related: ["gameserver/minecraft/install-plugins", "gameserver/minecraft/join-server", "gameserver/minecraft/upload-world", "gameserver/minecraft/use-tp-command"]
---

As an operator you can kick or permanently ban players using commands. The commands work both in the in-game chat and in the server console (without `/`).

> [!NOTE]
> You need OP rights to use these commands. See [Grant OP rights](/tutorials/gameserver/minecraft/grant-op-rights).

## Kick a player

```text
/kick <name> [reason]
```

The player is removed from the server but can rejoin.

## Ban a player

```text
/ban <name> [reason]
```

The player is permanently banned from the server.

## Ban a player by IP

```text
/ban-ip <ip>
```

The specified IP address is permanently banned from the server.

## Unban a player

```text
/pardon <name>
```

The player's ban is lifted.

## Unban an IP

```text
/pardon-ip <ip>
```

The IP ban is lifted.

> [!TIP]
> In the server console, commands are entered without `/`, e.g. `kick playername`.

## All commands

| Command | Description |
|---------|-------------|
| `/kick <name> [reason]` | Kick a player |
| `/ban <name> [reason]` | Ban a player |
| `/ban-ip <ip>` | Ban an IP address |
| `/pardon <name>` | Unban a player |
| `/pardon-ip <ip>` | Unban an IP address |
