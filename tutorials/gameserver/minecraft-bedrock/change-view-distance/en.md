---
slug: "change-view-distance"
language: "en"
title: "How to Change the View Distance on Your Minecraft Bedrock Edition Server"
description: "Step-by-step instructions on how to change the view distance on your Minecraft Bedrock Edition server."
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
short_title: "Change View Distance"
sort: 3
related: ["gameserver/minecraft-bedrock/add-behavior-und-resource-packs", "gameserver/minecraft-bedrock/change-tick-distance", "gameserver/minecraft-bedrock/change-world-border", "gameserver/minecraft-bedrock/change-world-seed"]
---

## What is the view distance?

The `view-distance` determines **how many chunks the server loads and sends to clients**. A chunk in Minecraft is an area of 16x16 blocks. With a view distance of 10, the player can see 10 chunks in each direction (a 21x21 chunk square).

The view distance only affects the **display** of the world – how far the landscape is visible. It does **not** control the active ticking of mobs, redstone or players.

> [!NOTE]
> **Players or mobs only become visible up close?**
>
> That's not handled by `view-distance` but by [`tick-distance`](/tutorials/gameserver/minecraft-bedrock/change-tick-distance). Entities are only ticked and shown within the area covered by the tick distance.

## Effects on the server

- Higher values allow a larger world view.
- The more players are online at the same time, the greater the load on the server.
- Values that are too high can cause stuttering, connection problems or high RAM usage.

## Change the view distance

1. **Open dashboard**\
   Go to your Minecraft Bedrock Edition server in the dashboard.

2. **Open file browser**\
   Open the file browser.

3. **Open config**\
   Open the file `server.properties`.

4. **Find entry**\
   Search for the following entry:

   ```text
   view-distance=32
   ```

5. **Change value**\
   Change the value as desired (e.g. `12` or `10`).

6. **Save changes**\
   Save the changes by clicking on "Save".

7. **Restart server**\
   Restart the server so that the changes become active.

> [!TIP]
> **Recommendation**
>
> - `6`–`8` → For large numbers of players & low server performance
> - `10`–`12` → Balanced between performance and visibility
> - `16`–`20` → Only with high server performance
> - `32` → Default setting

## Client-side note

The server's view distance is the **upper limit** – the client cannot see further than the server sends. Players also need to set the **render distance** in their **video settings** high enough to actually see the full distance the server provides.
