---
slug: "join-server"
language: "en"
title: "How to Join Your BATTALION Legacy Server"
description: "Join a BATTALION Legacy server"
tags: []
date: "2026-07-31"
visibility: "public"
cta: "gameserver"
product_keys: ["battalion-legacy"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Join Server"
sort: 3
related: ["gameserver/battalion-legacy/add-admin", "gameserver/battalion-legacy/create-backup"]
---

BATTALION Legacy comes with a working in-game **server browser**. You find your server there by its **server name**. A direct connection via IP address is not offered in the game menu.

## Find connection details

> [!IMPORTANT]
> You can find the **server name** as well as the **IP address** and the ports of your server in the **dashboard**. The server name is the most important value – you use it to look up your server in the server browser.

> [!NOTE]
> **Which ports does BATTALION Legacy use?**
>
> Your server uses two ports:
>
> | Port | Purpose |
> |------|---------|
> | **Game Port** | Carries the game data between the server and the players |
> | **Query Port** | Your server registers with Steam through it and appears in the server browser |
>
> The values that apply to your server are shown in the **dashboard**. Both ports are assigned to your server automatically when it is created – you do not have to change them or open them manually.

## Join the server

1. **Start the server**\
   Start your server in the **dashboard** and wait until it has fully booted.

   > [!TIP]
   > The console entry `OnCreateSessionComplete` tells you that the session has been created and the server is ready.

2. **Check the server name**\
   Look up the **server name** stored for your server in the dashboard. Your server appears under exactly that name in the server browser.

3. **Start BATTALION Legacy**\
   Launch the game through Steam on your PC and wait for the main menu to load.

4. **Open the server browser**\
   Open the server list in the main menu. All reachable servers are listed there.

5. **Search for your server**\
   Enter the name of your server in the search field to narrow down the list.

6. **Join**\
   Select your server from the list and join it.

> [!TIP]
> Choose a server name that is as distinctive as possible. A very generic name makes it unnecessarily hard to tell your server apart from the others in the list.

> [!NOTE]
> **Connecting directly via IP**
>
> There is no field for an IP address in the game menu. The official server documentation of BATTALION 1944, the predecessor of BATTALION Legacy, lists the console command `connect <IP>:<Game Port>`. Whether it still works in the current build is not documented – how to enable the console is described in [Add Admin](/tutorials/gameserver/battalion-legacy/add-admin).

## Square bracket after the server name

> [!WARNING]
> **Caution**
>
> If your server appears in the list with a square bracket at the end of its name – `My Server` becomes `My Server]` – this is a known issue with the way the name is passed on and not a typo in your settings. It has no effect on how your server runs.
>
> For that reason, search the server browser for a distinctive part of the name **without** the appended character.

## Your server does not appear in the list

> [!WARNING]
> **Caution**
>
> If your server does not show up in the server browser, work through these points one by one:
>
> - **Is the server really online?** Check in the dashboard whether the server is running and not currently restarting or installing files.
> - **Give it a moment after the start.** After the start it takes a moment before your server appears in the list. Wait and refresh the list afterwards.
> - **Check the spelling of the name.** Search for exactly the name from the dashboard, ideally only for a distinctive part of it.
> - **Refresh the list.** Leave the server browser in the game and open it again so the list is queried anew.
> - **Changed the server name?** After changing the server name you have to restart the server so the new name is applied.

## Progress and savegame

> [!NOTE]
> BATTALION Legacy is a pure PvP shooter. No world save and no player progress are stored on the server – only the current round is kept. There is therefore no savegame you would have to transfer or download.

> [!TIP]
> You can find out how to give yourself admin rights on your server in [Add Admin](/tutorials/gameserver/battalion-legacy/add-admin).
