---
slug: "change-simulation-distance"
language: "en"
title: "How to Change the Simulation Distance on a Minecraft Java Edition Server"
description: "Change simulation distance on a Minecraft Java Edition server"
tags: []
date: "2025-05-19"
visibility: "public"
updated: "2026-08-20"
cta: "gameserver"
product_keys: ["minecraft"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Change Simulation Distance"
sort: 5
related: ["gameserver/minecraft/change-motd", "gameserver/minecraft/change-server-icon", "gameserver/minecraft/change-spawn-protection", "gameserver/minecraft/change-difficulty"]
---

## What is the simulation distance?

The `simulation-distance` determines **the radius around the player in which entities and game mechanics are actively ticked**. This includes:

- **Other players and mobs** – they are only moved and shown within this area
- **Redstone circuits**
- **Mob spawning**
- **Plant growth** and ticks of fire, water, dripstone, etc.

Chunks outside the simulation distance are still loaded (as long as they are inside the [`view-distance`](/tutorials/gameserver/minecraft/change-view-distance)), but are "frozen" – no active processing happens.

> [!WARNING]
> **Players only become visible up close?**
>
> This is the most common case: if the simulation distance is set too low (e.g. `5`), other players and entities only appear when they get very close. Try setting the value to `8`–`16` and restart the server.

## Effects on the server

- Values that are too low cause farms, redstone, mobs or players outside the player to be inactive.
- Higher values mean more server load, especially with many players or large systems.

## Change the simulation distance

1. **Open server.properties**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection) or use the file browser in the dashboard. Open the file `server.properties`.

2. **Find the entry**\
   Search for the following entry:

   ```text
   simulation-distance=16
   ```

3. **Change the value**\
   Change the value as required (e.g. `8` or `12`).

4. **Restart the server**\
   Save the changes and restart the server.

> [!TIP]
> **Recommendation**
>
> - `4`–`6` → For large numbers of players & low server performance
> - `16` → Default setting, sufficient for most servers
> - `16`+ → Only with high server performance

## Client-side note

For players to actually see the full distance, they also need to set the **render distance** in their **video settings** high enough. Otherwise they only see part of the world the server sends – no matter what you configure on the server side.
