---
slug: "join-server"
language: "en"
title: "How to Join Your No Love Lost Server"
description: "Join a No Love Lost server"
tags: []
date: "2026-07-31"
visibility: "public"
cta: "gameserver"
product_keys: ["no-love-lost"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Join Server"
sort: 2
related: ["gameserver/no-love-lost/create-backup"]
---

You find your No Love Lost server in the **server list** inside the game. It appears there under the **server name** configured in the **dashboard**. For it to show up in the list, the **Game Port** and the **Query Port** of your server have to be reachable.

## Find connection details

> [!IMPORTANT]
> You can find the server name as well as the Game Port and the Query Port of your server in the **dashboard**. Make a note of the server name in particular – it is how you find your server in the game.

Both ports are assigned automatically when your server is created and always differ from each other:

| Port | Purpose |
|------|---------|
| **Game Port** | The actual connection to the server runs through this port. |
| **Query Port** | Your server answers server queries through this port so it appears in the in-game list. |

> [!NOTE]
> You do not have to open any ports manually. Both ports are already set up and open on your server.

## Join the server

1. **Start the server**\
   Start your server in the **dashboard** and wait until it has fully booted. Only then is it reachable.

2. **Check the server name**\
   Look up the **server name** configured for your server in the dashboard. Your server appears in the game under exactly that name.

3. **Start No Love Lost**\
   Launch No Love Lost via Steam on your PC.

4. **Open the server list**\
   Open the list of available servers in the game.

5. **Search for your server**\
   Look for the name of your server in the list.

6. **Join the server**\
   Select your server from the list and join it.

> [!TIP]
> Pick a server name that is as distinctive as possible. A very generic name makes it unnecessarily hard to tell your server apart from the others in the list.

## Your server does not appear in the list

> [!WARNING]
> **Caution**
>
> If your server does not show up in the server list, work through these points one by one:
>
> - **Is the server really online?** Check in the dashboard whether the server is running and not currently restarting or installing an update.
> - **Give it a moment after starting.** Right after the start it takes a short while until the server appears in the list.
> - **Check the spelling of the name.** Search for exactly the name shown in the dashboard, ideally only for a distinctive part of it.
> - **Refresh the list.** Leave the server list in the game and open it again so the list is queried anew.
> - **Changed the server name?** The server name is passed to the server on startup. After changing it you have to restart the server for the new name to be applied.
