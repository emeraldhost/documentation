---
slug: "change-ticket-chance"
language: "en"
title: "How to Change the Ticket Chance on a The Bus Server"
description: "Change ticket chance on a The Bus server"
tags: []
date: "2026-02-24"
visibility: "public"
cta: "gameserver"
product_keys: ["the-bus"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Change Ticket Chance"
sort: 6
related: ["gameserver/the-bus/change-map", "gameserver/the-bus/change-operating-plan", "gameserver/the-bus/change-time", "gameserver/the-bus/change-traffic"]
---

You can adjust the probability of passengers buying a ticket using a command.

## How to change the ticket chance

Enter the following command in the in-game chat:

```text
/tickets <value>
```

The value is a percentage between `0` and `100`.

**Examples:**

```text
/tickets 0
/tickets 50
/tickets 100
```

| Value | Description |
|-------|-------------|
| `0` | No passengers buy tickets |
| `50` | 50% of passengers buy tickets |
| `100` | All passengers buy tickets |

> [!TIP]
> This command requires Owner or Admin permissions.
