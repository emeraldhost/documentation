---
slug: "change-tick-distance"
language: "en"
title: "How to Change the Tick Distance on Your Minecraft Bedrock Edition Server"
description: "Step-by-step instructions on how to change the tick distance on your Minecraft Bedrock Edition server."
tags: []
date: "2025-06-10"
visibility: "public"
updated: "2026-05-30"
cta: "gameserver"
product_keys: ["minecraft-bedrock"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Change Tick Distance"
sort: 2
related: ["gameserver/minecraft-bedrock/add-behavior-und-resource-packs", "gameserver/minecraft-bedrock/change-view-distance", "gameserver/minecraft-bedrock/change-world-border", "gameserver/minecraft-bedrock/change-world-seed"]
---

## What is the tick distance?

The `tick-distance` determines **the radius around the player in which entities and game mechanics are actively ticked**. This includes:

- **Other players and mobs** – they are only moved and shown within this area
- **Redstone circuits**
- **Mob spawning**
- **Plant growth** and ticks of fire, water, dripstone, etc.

Chunks outside the tick distance are still loaded (as long as they are inside the [`view-distance`](/tutorials/gameserver/minecraft-bedrock/change-view-distance)), but are "frozen" – no active processing happens.

> [!WARNING]
> **Players only become visible up close?**
>
> This is the most common case: if the tick distance is set too low (e.g. `4`), other players and entities only appear when they get very close. Try setting the value to `8`–`10` and restart the server.

## Effects on the server

- Values that are too low cause farms, redstone, mobs or players outside the player to be inactive.
- Higher values mean more server load, especially with many players or large systems.

## Change the tick distance

1. **Open dashboard**\
   Go to your Minecraft Bedrock Edition server in the dashboard.

2. **Open file browser**\
   Open the file browser.

3. **Open config**\
   Open the file `server.properties`.

4. **Find entry**\
   Search for the following entry:

   ```text
   tick-distance=4
   ```

5. **Change value**\
   Change the value as required (e.g. `8` or `6`).

6. **Save changes**\
   Save the changes by clicking on "Save".

7. **Restart server**\
   Restart the server so that the changes become active.

> [!TIP]
> **Recommendation**
>
> - `4` → Default setting
> - `6`–`8` → Balanced between farming & world exploration
> - `10`–`12` → Only with strong server performance

## Client-side note

For players to actually see the full distance, they also need to set the **render distance** in their **video settings** high enough. Otherwise they only see part of the world the server sends – no matter what you configure on the server side.
