---
slug: "change-world-border"
language: "en"
title: "How to Change the World Border on a Minecraft Java Edition Server"
description: "Change the world border (worldborder) on a Minecraft Java Edition server"
tags: []
date: "2026-05-15"
visibility: "public"
updated: "2026-08-20"
cta: "gameserver"
product_keys: ["minecraft"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Change World Border"
sort: 10
related: ["gameserver/minecraft/change-version", "gameserver/minecraft/change-view-distance", "gameserver/minecraft/change-world-seed", "gameserver/minecraft/create-backup"]
---

The world border is an invisible, square boundary around the center of your world. Players cannot move past it, and chunks outside the border are no longer generated. By default the border is 60,000,000 blocks wide.

> [!NOTE]
> The `/worldborder` command is a **vanilla command** and works on all Java server variants – Vanilla, Paper, Spigot, Purpur, Folia, Forge, Fabric and NeoForge.

## Prerequisite

You need OP rights (at least level 2) to run the `/worldborder` command. See [Grant OP Rights](/tutorials/gameserver/minecraft/grant-op-rights).

## Set the world border

You can run the command either in the in-game chat or via the server console in the dashboard.

### Set the size

```text
/worldborder set <diameter>
```

The value is the **diameter** in blocks, measured from the center. Example – set the border to 1000 blocks (500 blocks in each direction):

```text
/worldborder set 1000
```

### Change the size over time

You can also resize the border over a given time in seconds:

```text
/worldborder set 1000 60
```

In this example the border shrinks or grows to 1000 blocks over 60 seconds.

### Change the center

```text
/worldborder center <X> <Z>
```

Example – set the center to coordinates `100, -200`:

```text
/worldborder center 100 -200
```

## Additional options

| Command | Description |
|---------|-------------|
| `/worldborder get` | Show the current size |
| `/worldborder add <blocks> [time]` | Grow or shrink the border relative to the current size |
| `/worldborder warning distance <blocks>` | Distance from the border at which the warning appears (default: 5) |
| `/worldborder warning time <seconds>` | Pre-warning time when the border shrinks (default: 15) |
| `/worldborder damage amount <value>` | Damage per block outside the border (default: 0.2) |
| `/worldborder damage buffer <blocks>` | Buffer outside the border in which no damage is dealt (default: 5) |

## Value range

- **Minimum:** `1` block
- **Maximum:** `59,999,968` blocks

> [!TIP]
> The world border is saved automatically and persists across server restarts. It is set per world – in Paper/Spigot multi-world setups, each world has its own border.
