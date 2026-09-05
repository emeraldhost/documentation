---
slug: "join-server"
language: "en"
title: "How to Join Your The Cenozoic Era Server"
description: "Join a The Cenozoic Era server"
tags: []
date: "2026-07-31"
visibility: "public"
cta: "gameserver"
product_keys: ["the-cenozoic-era"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Join Server"
sort: 3
related: ["gameserver/the-cenozoic-era/add-admin", "gameserver/the-cenozoic-era/create-backup", "gameserver/the-cenozoic-era/kick-ban-players"]
---

The Cenozoic Era has an **in-game server browser**. Your server shows up there with the name configured for it – that name is how you find it and join.

## Find connection details

> [!NOTE]
> You can find the IP address, the **Game Port** and the **Query Port** of your server in the **dashboard**. Both ports are assigned to your server there – always use the values shown in your dashboard.
>
> As a player you usually do not need these values: your server registers with Steam through the Query Port and therefore appears in the in-game server browser.

## Via the in-game server browser

1. **Start The Cenozoic Era**\
   Launch the game and wait for the main menu to load.

2. **Open the server list**\
   Open the server browser in the main menu (**Servers** or **Server Browser**).

3. **Search for your server**\
   Enter the name of your server in the search field. It is the name stored in the configuration of your server.

4. **Refresh the list**\
   Refresh the server list so the servers are queried again.

5. **Join**\
   Select your server from the list and join it.

> [!TIP]
> Give your server a distinctive name. Short or generic names show up in the search among many unrelated servers and are hard to find again.

## Which ports does The Cenozoic Era use?

> [!NOTE]
> A The Cenozoic Era server uses two ports:
>
> | Port | Purpose |
> |------|---------|
> | **Game Port** | Carries the game traffic between player and server |
> | **Query Port** | Steam and the server browser query your server through it |
>
> You can see the values that apply to your server in the **dashboard**. There are no fixed default values – the ports are assigned to your server when it is created.

> [!WARNING]
> **Server is not found**
>
> Check the following in order:
>
> - Is your server running? You can see the status in the **dashboard**.
> - Did you refresh the server list? Freshly started servers only appear there after a short delay.
> - Are you searching for the exact server name? A single different character can keep the server out of the filtered list.
> - Was the server restarted after a configuration change? A changed server name is only applied after a restart.

> [!NOTE]
> **Query Port for a direct connection**
>
> If you hand out the connection details of your server anywhere, the **Query Port** is the right value for it – not the Game Port. However, there is no documented input field for a direct connection via `IP:Port` inside the game, and joining through the Steam favorites is not documented either. The in-game server browser is the documented way onto your server.
