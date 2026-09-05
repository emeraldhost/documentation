---
slug: "kick-ban-players"
language: "en"
title: "How to Kick and Ban Players on Your Project Zomboid Server"
description: "Kick and ban players on a Project Zomboid server"
tags: []
date: "2026-04-11"
visibility: "public"
cta: "gameserver"
product_keys: ["project-zomboid"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Kick & Ban Players"
sort: 11
related: ["gameserver/project-zomboid/download-savegame", "gameserver/project-zomboid/enable-server-list", "gameserver/project-zomboid/join-server", "gameserver/project-zomboid/set-server-password"]
---

As an admin you can kick or permanently ban players using commands.

> [!NOTE]
> You need admin rights to use these commands. See [Add Admin](/tutorials/gameserver/project-zomboid/add-admin).

## Show player list

Enter the following command to display all connected players:

```text
/players
```

## Kick a player

```text
/kick <name>
```

The player is removed from the server but can rejoin.

## Ban a player

By player name:

```text
/banuser <name>
```

By SteamID64:

```text
/banid <SteamID64>
```

The player is permanently banned from the server.

> [!TIP]
> Here you can find a guide on how to find your [SteamID64](/tutorials/gameserver/steamid64-find-out).

## Unban a player

By player name:

```text
/unbanuser <name>
```

By SteamID64:

```text
/unbanid <SteamID64>
```

## All commands

| Command | Description |
|---------|-------------|
| `/players` | Show player list |
| `/kick <name>` | Kick a player |
| `/banuser <name>` | Ban a player by name |
| `/banid <SteamID64>` | Ban a player by SteamID64 |
| `/unbanuser <name>` | Unban a player by name |
| `/unbanid <SteamID64>` | Unban a player by SteamID64 |
