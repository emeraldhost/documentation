---
slug: "change-time"
language: "en"
title: "How to Change Time and Date on a The Bus Server"
description: "Change time and date on a The Bus server or use the real time"
tags: []
date: "2026-02-24"
visibility: "public"
updated: "2026-10-05"
cta: "gameserver"
product_keys: ["the-bus"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Change Time"
sort: 7
related: ["gameserver/the-bus/change-operating-plan", "gameserver/the-bus/change-ticket-chance", "gameserver/the-bus/change-traffic", "gameserver/the-bus/change-weather"]
---

You can change the time of day and the date on your server using a **command** in the in-game chat, or let the server use the current real time.

> [!NOTE]
> These commands require Owner or Admin permissions. You can find out how to add an admin in [Add Admin](/tutorials/gameserver/the-bus/add-admin). On our servers, the console in the dashboard only shows the server output and does not accept commands.

## How to Change the Time of Day

1. **Open the in-game chat**\
   [Join your server](/tutorials/gameserver/the-bus/join-server) and open the in-game chat.

2. **Enter the command**\
   Enter the following command and replace `<time>` with the time you want:

   ```text
   /time <time>
   ```

## How to Change the Date

1. **Open the in-game chat**\
   [Join your server](/tutorials/gameserver/the-bus/join-server) and open the in-game chat.

2. **Enter the command**\
   Enter the following command and replace `<date>` with the date you want:

   ```text
   /date <date>
   ```

> [!TIP]
> The format in which `/time` and `/date` expect their values is not officially documented. Use `/commands` to show all available commands.

## How to Use the Current Real Time

Since Update 3.2 EA, your server can use the current real time. You enable this option with the following command in the in-game chat:

```text
/useRealTime
```

> [!NOTE]
> Whether the command expects an additional value is not officially documented. While real time is active, values you set with `/time` or `/date` may be replaced by the current time again.

## Command Overview

| Command | Description |
|---------|-------------|
| `/time <time>` | Set the current time |
| `/date <date>` | Set the current date |
| `/useRealTime` | Enable the real time (UseRealTime) |

To change the weather, see [Change Weather](/tutorials/gameserver/the-bus/change-weather).
