---
slug: "kick-ban-players"
language: "en"
title: "How to Kick and Ban Players on Your ARK Survival Evolved Server"
description: "Kick and ban players on an ARK Survival Evolved server"
tags: []
date: "2026-04-11"
visibility: "public"
cta: "gameserver"
product_keys: ["ark-survival-evolved"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Kick & Ban Players"
sort: 7
related: ["gameserver/ark-survival-evolved/add-savegame", "gameserver/ark-survival-evolved/create-backup", "gameserver/ark-survival-evolved/download-savegame", "gameserver/ark-survival-evolved/join-server"]
---

You can kick and ban players using console commands.

> [!WARNING]
> **Requirement**
>
> You must be an admin on your server. Here you can find a guide on how to [add an admin](/tutorials/gameserver/ark-survival-evolved/add-admin).

> [!TIP]
> Here you can find a guide on how to find a player's [SteamID64](/tutorials/gameserver/steamid64-find-out).

## Kick or ban players via console command

1. **Join the server**\
   Join your ARK Survival Evolved server.

2. **Open the console**\
   Press the `Tab` key to open the console.

3. **List players**\
   Enter the command `ListPlayers` to display all connected players and their SteamID64.

4. **Kick or ban a player**\
   Use one of the following commands:

   ```text
   KickPlayer <SteamID64>
   ```

   ```text
   BanPlayer <SteamID64>
   ```

## Command overview

| Command | Description |
|---------|-------------|
| `ListPlayers` | List all connected players |
| `KickPlayer <SteamID64>` | Kick a player from the server |
| `BanPlayer <SteamID64>` | Permanently ban a player |
| `UnbanPlayer <SteamID64>` | Unban a player |
