---
slug: "change-spawn-protection"
language: "en"
title: "How to Change the Spawn Protection on a Minecraft Java Edition Server"
description: "Change spawn protection on a Minecraft Java Edition server"
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
short_title: "Change Spawn Protection"
sort: 6
related: ["gameserver/minecraft/change-server-icon", "gameserver/minecraft/change-simulation-distance", "gameserver/minecraft/change-difficulty", "gameserver/minecraft/change-version"]
---

## What is spawn protection?

Spawn protection prevents players without OP rights from breaking or placing blocks in the area around the world spawn point. The value specifies the radius in blocks around the spawn point.

## How do I change the spawn protection?

1. **Connect via SFTP**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection) and open the file `server.properties`.

2. **Find the entry**\
   Search for the following entry:

```text
spawn-protection=16
```

3. **Change the value**\
   Change the value as desired.

4. **Restart the server**\
   Save the changes and restart the server.

| Value | Description |
|-------|-------------|
| `0` | Spawn protection disabled (all players can build at spawn) |
| `16` | Default setting (16 block radius) |

> [!TIP]
> **Note**
>
> A value of `0` is recommended if you use plugins like WorldGuard for area protection.
