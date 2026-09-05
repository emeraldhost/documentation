---
slug: "change-time"
language: "en"
title: "How to Change the Time of Day on a Hytale Server"
description: "Change time of day on a Hytale server"
tags: []
date: "2026-01-15"
visibility: "public"
cta: "gameserver"
product_keys: ["hytale"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Change Time"
sort: 7
related: ["gameserver/hytale/change-motd", "gameserver/hytale/change-server-name", "gameserver/hytale/change-weather", "gameserver/hytale/create-backup"]
---

You can change the time of day on your server via command or pause it completely.

## How to Change the Time via Command

1. **Open Server Management**\
   Open the dashboard of your Hytale server.

2. **Enter the Command**\
   Enter the following command in the console:

   ```text
   time <value>
   ```

**Examples:**

```text
time morning
time noon
time evening
time 12
```

> [!TIP]
> **Note**
>
> Console commands are entered without `/`. In-game with admin rights, you need the `/` (e.g., `/time noon`).

## Available Time Values

| Value | Description |
| ----- | ----------- |
| `morning` | Morning |
| `noon` | Noon |
| `evening` | Evening |
| `0-24` | Numeric value (0 = midnight, 12 = noon) |

## Show Current Time

To display the current world time:

```text
time
```

## Pause Game Time

To pause time completely (e.g., for building servers), see [Pause Game Time](/tutorials/gameserver/hytale/pause-game-time).
