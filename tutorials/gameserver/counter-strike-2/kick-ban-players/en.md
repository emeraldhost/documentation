---
slug: "kick-ban-players"
language: "en"
title: "How to Kick and Ban Players on Your Counter-Strike 2 Server"
description: "Kick and ban players on a Counter-Strike 2 server"
tags: []
date: "2026-04-11"
visibility: "public"
cta: "gameserver"
product_keys: ["counter-strike-2"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Kick & Ban Players"
sort: 8
related: ["gameserver/counter-strike-2/change-map", "gameserver/counter-strike-2/configure-server", "gameserver/counter-strike-2/create-backup", "gameserver/counter-strike-2/join-server"]
---

You can kick and ban players using the server console in the dashboard.

> [!TIP]
> Here you can find a guide on how to find a player's [SteamID64](/tutorials/gameserver/steamid64-find-out).

## Kick or ban players via the server console

1. **Open the server console**\
   Open the console of your server via the dashboard.

2. **List players**\
   Enter the command `status` to display all connected players and their SteamID64.

3. **Kick or ban a player**\
   Use one of the following commands:

   ```text
   kick <Name>
   ```

   ```text
   banid <Minutes> <SteamID64>
   ```

> [!NOTE]
> Set the minutes to `0` to permanently ban the player.

## Command overview

| Command | Description |
|---------|-------------|
| `status` | List all connected players |
| `kick <Name>` | Kick a player from the server |
| `banid <Minutes> <SteamID64>` | Ban a player for a specific duration |
| `removeid <SteamID64>` | Unban a player |
