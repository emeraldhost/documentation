---
slug: "change-time"
language: "en"
title: "How to Change the Time of Day on a Hytale Server"
description: "Change time of day on a Hytale server"
tags: []
date: "2026-01-15"
visibility: "public"
updated: "2026-09-27"
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

1. **Open dashboard**\
   Open the dashboard of your Hytale server.

2. **Enter the Command**\
   Enter the following command in the console:

   ```text
   time <value> --world <worldname>
   ```

   Replace `<worldname>` with the name of your world (e.g., `default`).

**Examples:**

```text
time dawn --world default
time noon --world default
time dusk --world default
time set 18 --world default
```

> [!NOTE]
> Console commands are entered without `/` and need the `--world` option, otherwise the server replies with `Sender must be a player or provide the --world option!`. In-game with admin rights, you need the `/` and can leave out `--world`, in which case the command applies to the world you are in (e.g., `/time noon`).

## Available Time Values

| Value | Alternative | Description |
| ----- | ----------- | ----------- |
| `dawn` | `morning`, `day` | Dawn |
| `midday` | `noon` | Noon |
| `dusk` | `night` | Dusk |
| `midnight` | - | Midnight |
| `0-24` | `set 0-24` | Hour as a number (0 = midnight, 12 = noon), e.g., `time 18` or `time set 18` |

## Show Current Time

To display the current world time:

```text
time --world default
```

## Pause Game Time

Use `time pause --world default` to stop time. Entering the command again lets it run again. The state is saved in the world's configuration and is kept after a restart. For more options, e.g., a fixed time of day for building servers, see [Pause Game Time](/tutorials/gameserver/hytale/pause-game-time).
