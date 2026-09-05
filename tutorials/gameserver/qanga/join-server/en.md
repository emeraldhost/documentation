---
slug: "join-server"
language: "en"
title: "How to Join Your QANGA Server"
description: "Join a QANGA server"
tags: []
date: "2026-07-31"
visibility: "public"
cta: "gameserver"
product_keys: ["qanga"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Join Server"
sort: 2
related: ["gameserver/qanga/create-backup"]
---

You find your QANGA server in the game through the **server list**. After starting, your server registers with Steam on its own and shows up there with the name set in the **dashboard**.

## Find your connection details

> [!IMPORTANT]
> You look for your server in the server list by its **name**. You can see which name your server uses in the **dashboard** of your server.

## Join the server

1. **Start QANGA**\
   Launch QANGA on your PC and wait for the main menu to load.

2. **Open the server list**\
   Open the online mode in the main menu. You now see the list of available servers.

3. **Search for your server**\
   Look for the name of your server in the list. With many entries it helps to type the name into the search.

4. **Join**\
   Select your server and confirm joining.

5. **Enter the password**\
   If a password is set for your server, enter it now and confirm.

## Do you need to open ports?

> [!NOTE]
> No. That is not necessary on your rented server – the ports are already set up and are listed in the **dashboard**.
>
> Your server uses two ports for this:
>
> | Port | Purpose |
> |------|---------|
> | **Game Port** | The game traffic runs through this port. |
> | **Query Port** | The server registers with Steam through this port so it appears in the server list. |
>
> Both ports are assigned to you automatically.

## Server does not appear in the list

If your server does not show up right after starting, a little patience usually helps – registering with Steam takes a moment after every start. Additionally check:

- Is the server running? The status in the **dashboard** has to be **Online**.
- Did you restart after a change in the dashboard? The startup parameters are only applied after a restart.
- Are you searching for the exact name? The search in the server list is sensitive to typos.
- Refresh the server list in the game instead of just waiting.

> [!WARNING]
> **Caution**
>
> If the server is running but never appears in the list, check the **console** of your server. Errors during startup or an update still in progress are the most common cause.

> [!NOTE]
> Your progress on this server is stored on the server itself. That way your shared world is kept, even when nobody is online.
