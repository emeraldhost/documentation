---
slug: "change-traffic"
language: "en"
title: "How to Change Traffic on a The Bus Server"
description: "Set the traffic density on a The Bus server by command"
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
short_title: "Change Traffic"
sort: 8
related: ["gameserver/the-bus/change-ticket-chance", "gameserver/the-bus/change-time", "gameserver/the-bus/change-weather", "gameserver/the-bus/configure-server"]
---

You can adjust the traffic density on your server with a command in the in-game chat. The command was added in Update 3.2.

> [!NOTE]
> This command requires Owner or Admin permissions. To learn how to add an admin, see [Add Admin](/tutorials/gameserver/the-bus/add-admin). On our servers, the console in the dashboard only shows the server output and does not accept commands.

## How to Change the Traffic Density

1. **Open the in-game chat**\
   [Join your server](/tutorials/gameserver/the-bus/join-server) and open the in-game chat.

2. **Set the traffic density**\
   Enter the following command and replace `<value>` with the desired traffic density:

   ```text
   /traffic <value>
   ```

   > [!TIP]
   > Which values `/traffic` expects exactly is not officially documented. Use `/commands` to show all available commands.

> [!TIP]
> Less traffic reduces the load on your server. If it does not run as expected, you can find solutions under [Troubleshoot Server](/tutorials/gameserver/the-bus/troubleshoot-server).
