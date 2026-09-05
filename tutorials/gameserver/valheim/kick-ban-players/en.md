---
slug: "kick-ban-players"
language: "en"
title: "How to Kick and Ban Players on Your Valheim Server"
description: "Kick and ban players on a Valheim server"
tags: []
date: "2026-04-11"
visibility: "public"
cta: "gameserver"
product_keys: ["valheim"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Kick & Ban Players"
sort: 13
related: ["gameserver/valheim/enable-crossplay", "gameserver/valheim/enable-server-list", "gameserver/valheim/join-server", "gameserver/valheim/set-server-password"]
---

You can kick and ban players using the in-game console or edit the ban list manually via SFTP.

## Kick and ban players via console

Open the console with `F5` and enter the following commands:

### Kick a player

```text
kick <name>
```

The player is removed from the server but can rejoin.

### Ban a player

```text
ban <name>
```

The player is permanently banned from the server.

### Unban a player

```text
unban <name>
```

## Edit ban list manually

You can also edit the ban list and permitted list directly via SFTP:

1. **Stop the server**\
   Stop your server via the dashboard.

2. **Connect via SFTP**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection).

3. **Edit files**\
   Open the files at `/config/`:

   - `bannedlist.txt` – Banned players (one SteamID64 per line)
   - `permittedlist.txt` – Permitted players (one SteamID64 per line)

4. **Add or remove SteamID64**\
   Add the player's SteamID64 on a new line or remove it.

5. **Start the server**\
   Start your server.

> [!TIP]
> Here you can find a guide on how to find your [SteamID64](/tutorials/gameserver/steamid64-find-out).

## All commands

| Command | Description |
|---------|-------------|
| `kick <name>` | Kick a player |
| `ban <name>` | Ban a player |
| `unban <name>` | Unban a player |
