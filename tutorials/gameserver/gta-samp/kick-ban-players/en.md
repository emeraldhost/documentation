---
slug: "kick-ban-players"
language: "en"
title: "How to Kick and Ban Players on Your GTA San Andreas Server"
description: "Kick and ban players on a GTA San Andreas server"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["gta-samp"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Kick & Ban Players"
sort: 5
related: ["gameserver/gta-samp/add-admin", "gameserver/gta-samp/add-mods", "gameserver/gta-samp/create-backup", "gameserver/gta-samp/join-server"]
---

You remove players via **RCON** – either in the game through the chat or through the external remote console.

> [!NOTE]
> You have to be logged in as an RCON admin to do this. See [Add Admin](/tutorials/gameserver/gta-samp/add-admin).

## Find the player ID

Kick and ban work with the **player ID**, not with the name.

1. **Open the chat**\
   Press `T` in the game to open the chat.

2. **List the players**\
   Show all connected players with their ID, name, IP address and ping:

   ```text
   /rcon players
   ```

3. **Note the ID**\
   Note the ID of the player – and for a planned ban also their IP address.

> [!IMPORTANT]
> The player ID is only a temporary slot. As soon as a player leaves the server, the same ID can immediately be assigned to somebody else. Always request the list again right before kicking or banning, otherwise you hit the wrong player.

## Kick a player

```text
/rcon kick 3
```

The player is disconnected from the server and can rejoin immediately.

## Ban a player

```text
/rcon ban 3
```

The player is kicked from the server and locked out.

> [!WARNING]
> **Caution**
>
> The ban is applied to the **IP address**, even though you pass a player ID. There is no ban based on the player name or an account. With changing IP addresses a banned player can therefore come back – and on shared connections you may lock out several people at once.

## Ban an IP address directly

```text
/rcon banip 123.45.67.89
```

This locks out an IP address even when the player is not currently connected. Wildcards are accepted, so entire ranges can be blocked:

```text
/rcon banip 123.45.67.*
```

## Lift a ban

```text
/rcon unbanip 123.45.67.89
```

## Command overview

| Command | Description |
|---------|-------------|
| `/rcon players` | List all connected players with ID, name, IP address and ping |
| `/rcon kick <ID>` | Disconnect a player from the server |
| `/rcon ban <ID>` | Lock a player out (applied to their IP address) |
| `/rcon banip <IP>` | Ban an IP address, wildcards allowed |
| `/rcon unbanip <IP>` | Lift the ban for an IP address |
| `/rcon reloadbans` | Reload the ban list |

## Edit the ban list via SFTP

All bans are written to a file in the main directory of your server. Which one it is depends on your server variant:

| Server | File |
|--------|------|
| **open.mp** | `bans.json` |
| **SA-MP** | `samp.ban` |

Among other things the file contains the banned IP address as well as the date, time and the name or reason of the ban.

1. **Connect via SFTP**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection).

2. **Edit the file**\
   Open the ban file in the main directory and remove or add the entries you want.

3. **Reload the list**\
   Afterwards run the following command in the game:

   ```text
   /rcon reloadbans
   ```

> [!WARNING]
> **Caution**
>
> After editing the ban file manually, `reloadbans` is mandatory. Without that command the running server keeps using the old list and may overwrite your changes again.

> [!NOTE]
> Whether an existing `samp.ban` is migrated to `bans.json` automatically when switching from SA-MP to open.mp is not documented. Check your ban list after switching and re-add missing entries with `/rcon banip`.
