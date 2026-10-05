---
slug: "change-operating-plan"
language: "en"
title: "How to Change the Operating Plan on a The Bus Server"
description: "Change operating plan on a The Bus server"
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
short_title: "Change Operating Plan"
sort: 5
related: ["gameserver/the-bus/change-fleet", "gameserver/the-bus/change-map", "gameserver/the-bus/change-ticket-chance", "gameserver/the-bus/change-time"]
---

You change your server's operating plan in-game via the **Admin Menu** or by **command** in the in-game chat.

> [!NOTE]
> The map and the operating plan are set separately. If you change the map, for example to Hamburg, select an operating plan that fits the new map afterwards. You can find out how to switch the map in the [Change Map](/tutorials/gameserver/the-bus/change-map) guide.

## Change Operating Plan via the Admin Menu

1. **Open Admin Menu**\
   Open the pause menu in-game and select the **Admin Menu**. You need Owner or Admin permissions or the admin password, see [Add Admin](/tutorials/gameserver/the-bus/add-admin).

2. **Select operating plan**\
   Choose the desired operating plan from the available options in the Admin Menu.

## Change Operating Plan by Command

Alternatively, you can set the operating plan in the in-game chat. You need Owner or Admin permissions for this. Enter the following command and replace `<plan>` with the desired operating plan:

```text
/operatingPlan <plan>
```

> [!TIP]
> The exact value for `<plan>` is not officially documented. Use `/commands` to show all available commands. On our servers, the console in the dashboard only shows the server output and does not accept commands.

## Use Custom Operating Plans

Upload custom operating plans or operating plans from the Steam Workshop to the `/TheBus/Mods/` folder like any other mod. You can find out exactly how this works in the [Add Mods](/tutorials/gameserver/the-bus/add-mods) guide.

> [!WARNING]
> If a mod is flagged as "Client and Server", every player must have it installed as well, otherwise they cannot connect to your server.
