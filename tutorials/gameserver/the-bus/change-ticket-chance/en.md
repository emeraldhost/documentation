---
slug: "change-ticket-chance"
language: "en"
title: "How to Change the Ticket Chance on a The Bus Server"
description: "Change the ticket chance on a The Bus server by command"
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
short_title: "Change Ticket Chance"
sort: 6
related: ["gameserver/the-bus/change-map", "gameserver/the-bus/change-operating-plan", "gameserver/the-bus/change-time", "gameserver/the-bus/change-traffic"]
---

The ticket chance determines how likely passengers on your server are to buy a ticket. You change it with a command in the in-game chat. The command was introduced with Update 3.2.

> [!NOTE]
> This command requires Owner or Admin permissions. To learn how to add an admin, see [Add Admin](/tutorials/gameserver/the-bus/add-admin). On our servers, the console in the dashboard only shows the server output and does not accept commands.

## How to Set the Ticket Chance

1. **Open the in-game chat**\
   [Join your server](/tutorials/gameserver/the-bus/join-server) and open the in-game chat.

2. **Set the ticket chance**\
   Enter the following command and replace `<value>` with a value from `0` to `100`:

   ```text
   /tickets <value>
   ```

   For example:

   ```text
   /tickets 50
   ```

> [!TIP]
> The command is `/tickets`, not `/ticketchance`. Use `/commands` to show all available commands.
