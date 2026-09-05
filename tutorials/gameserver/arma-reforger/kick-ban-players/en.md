---
slug: "kick-ban-players"
language: "en"
title: "How to Kick and Ban Players on an Arma Reforger Server"
description: "Kick and ban players on an Arma Reforger server"
tags: []
date: "2026-02-22"
visibility: "public"
updated: "2026-03-19"
cta: "gameserver"
product_keys: ["arma-reforger"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Kick & Ban Players"
sort: 6
related: ["gameserver/arma-reforger/become-admin", "gameserver/arma-reforger/download-savegame", "gameserver/arma-reforger/change-scenario", "gameserver/arma-reforger/create-backup"]
---

> [!WARNING]
> **Prerequisite**
>
> You must be logged in as admin to use these commands. See [Become Admin](/tutorials/gameserver/arma-reforger/become-admin).

## Find Player ID

Before you can kick or ban a player, you need their player ID.

1. **Open chat**\
   Open the chat with the `/` key.

2. **List players**\
   Enter the following command:

    ```text
    #players
    ```

3. **Note the ID**\
   Note the ID of the desired player from the list.

## Kick a Player

A kicked player is removed from the server but can rejoin immediately.

```text
#kick <playerId>
```

Example:

```text
#kick 5
```

## Ban a Player

A banned player cannot rejoin the server until the ban expires or is manually removed.

```text
#ban <playerId> <duration>
```

The duration is specified in seconds. `0` means a permanent ban.

Examples:

| Command | Effect |
|---------|--------|
| `#ban 5 0` | Permanent ban |
| `#ban 5 3600` | Ban for 1 hour |
| `#ban 5 86400` | Ban for 24 hours |

## Remove a Ban

```text
#ban remove <playerId>
```

## List All Bans

```text
#ban list
```

> [!TIP]
> Always use the numeric player ID instead of the player name to make sure the correct player is affected.
