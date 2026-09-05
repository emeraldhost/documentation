---
slug: "join-server"
language: "en"
title: "How to Join Your Midnight Ghost Hunt Server"
description: "Join a Midnight Ghost Hunt server"
tags: []
date: "2026-07-31"
visibility: "public"
cta: "gameserver"
product_keys: ["midnight-ghost-hunt"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Join Server"
sort: 2
related: ["gameserver/midnight-ghost-hunt/create-backup"]
---

You find your Midnight Ghost Hunt server in the **server list** inside the game. It appears there under the **server name** configured for it – in the **region** that is set for your server. Both are passed to the server on startup, so you should note them down beforehand.

## Find connection details

> [!IMPORTANT]
> You can find the server name, the region and any password set for your server in the **dashboard**. The server name and the region are the crucial part – they are how you find your server in the list.

A Midnight Ghost Hunt server uses several ports that are assigned automatically when your server is created:

| Port | Purpose |
|------|---------|
| **Game Port** | The actual connection to the server runs through this port. |
| **Query Port** | Your server answers server queries through this port so it appears in the in-game list. |
| **Beacon Port** | Additional port through which your server delivers the menu and join information to the players. |

> [!NOTE]
> You do not have to open any ports manually. All ports are already set up and open on your server. You can see which values apply to your server in the **dashboard**.

## Join the server

1. **Start the server**\
   Start your server in the **dashboard** and wait until it has fully booted. Only then is it reachable and listed in the server list.

2. **Check the server name and region**\
   Look up the **server name** and the **region** configured for your server in the dashboard. Your server appears in the game under exactly that name and in that region.

3. **Start Midnight Ghost Hunt**\
   Launch Midnight Ghost Hunt via Steam on your PC.

4. **Open the server list**\
   Open the list of available servers in the game.

5. **Search for your server**\
   Look for the name of your server in the list. Make sure you are searching in the region that is set for your server.

6. **Enter the password**\
   If a password is set for your server, you are asked for it when joining. Enter the password from the dashboard.

7. **Join the server**\
   Select your server from the list and join it. You then drop into the running or the next round.

> [!TIP]
> Pick a server name that is as distinctive as possible. A very generic name makes it unnecessarily hard to tell your server apart from the others in the list. The name also has to be longer than three characters.

## The region of your server

The region determines which area your server is sorted into within the server list. Choose it to match the location of your server or the place where your fellow players are. The following regions are available:

- North America
- South America
- Western Europe
- Northern Europe
- Eastern Europe
- Middle East
- Asia
- Africa
- Oceania

> [!NOTE]
> If you search in a region other than the one set for your server, you will not find it. It is best to tell your fellow players right away which region they have to look in.

## Password-protected server

If a password is set for your server, everyone needs that password in order to join. Only pass it on to the people who are supposed to play on your server.

> [!WARNING]
> **Caution**
>
> Changes to the password only take effect the next time the server starts. Restart your server via the **dashboard** after changing it.

## Your server does not appear in the list

> [!WARNING]
> **Caution**
>
> If your server does not show up in the server list, work through these points one by one:
>
> - **Is the server really online?** Check in the dashboard whether the server is running and not currently restarting or installing an update.
> - **Give it a moment after starting.** Right after the start it takes a short while until the server appears in the list.
> - **Selected the right region?** Your server only appears in the region that is set for it.
> - **Check the spelling of the name.** Search for exactly the name shown in the dashboard, ideally only for a distinctive part of it.
> - **Is the name long enough?** A server name has to be longer than three characters, otherwise the server is not listed correctly.
> - **Refresh the list.** Leave the server list in the game and open it again so the list is queried anew.
> - **Changed something?** Server name, region and password are passed to the server on startup. After a change you have to restart the server for the new values to be applied.
