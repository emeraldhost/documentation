---
slug: "ban-players"
language: "en"
title: "How to Ban Players on Your Core Keeper Server"
description: "Ban and unban players on a Core Keeper server"
tags: []
date: "2026-04-10"
visibility: "public"
cta: "gameserver"
product_keys: ["core-keeper"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Ban Players"
sort: 4
related: ["gameserver/core-keeper/add-mods", "gameserver/core-keeper/add-savegame", "gameserver/core-keeper/change-content-bundle", "gameserver/core-keeper/change-game-id"]
---

As an admin you can ban and unban players via the server console.

> [!NOTE]
> You need admin rights to use these commands. See [Add Admin](/tutorials/gameserver/core-keeper/add-admin).

## Ban a player

Open the **server console** in the dashboard and enter:

```text
ban PlayerName
```

## Unban a player

```text
unban PlayerName
```

## Kick a player

```text
kick PlayerName
```

## All commands

| Command | Description |
|---------|-------------|
| `ban <PlayerName>` | Ban a player |
| `unban <PlayerName>` | Unban a player |
| `kick <PlayerName>` | Kick a player |
| `list` | Show all connected players |
| `say <Message>` | Send a message to all players |
