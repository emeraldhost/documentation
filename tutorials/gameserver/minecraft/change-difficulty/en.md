---
slug: "change-difficulty"
language: "en"
title: "How to Change the Difficulty on a Minecraft Java Edition Server"
description: "Change difficulty on a Minecraft Java Edition server"
tags: []
date: "2026-02-04"
visibility: "public"
updated: "2026-08-20"
cta: "gameserver"
product_keys: ["minecraft"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Change Difficulty"
sort: 7
related: ["gameserver/minecraft/change-simulation-distance", "gameserver/minecraft/change-spawn-protection", "gameserver/minecraft/change-version", "gameserver/minecraft/change-view-distance"]
---

## What is the difficulty?

The difficulty determines how challenging the game is. It affects mob damage, hunger and other gameplay mechanics.

| Value | Difficulty | Description |
|-------|-----------|-------------|
| `peaceful` | Peaceful | No hostile mobs, health regenerates quickly |
| `easy` | Easy | Hostile mobs spawn but deal low damage |
| `normal` | Normal | Default difficulty |
| `hard` | Hard | Mobs deal more damage, hunger can be lethal |

## How do I change the difficulty?

1. **Open server.properties**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection) and open the file `server.properties`.

2. **Find the entry**\
   Search for the following entry:

   ```text
   difficulty=easy
   ```

3. **Change the value**\
   Change the value to the desired difficulty.

4. **Restart the server**\
   Save the changes and restart the server.
