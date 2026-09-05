---
slug: "join-server"
language: "en"
title: "How to Join Your Smalland Survive the Wilds Server"
description: "Join a Smalland Survive the Wilds server"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["smalland-survive-the-wilds"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Join Server"
sort: 4
related: ["gameserver/smalland-survive-the-wilds/add-savegame", "gameserver/smalland-survive-the-wilds/create-backup", "gameserver/smalland-survive-the-wilds/download-savegame"]
---

Smalland Survive the Wilds has **no direct connection via IP address**. You find your server exclusively through the in-game server browser by searching for the **name of your server**.

> [!IMPORTANT]
> You do **not** need an IP address or port to join. The game has no input field for it. All that matters is the **server name** you set in the dashboard of your server.

## Search for the server and join

1. **Start Smalland**\
   Launch the game and wait for the main menu to load.

2. **Select Play**\
   Click **Play** in the main menu.

3. **Choose a character**\
   Select an existing character or create a new one.

   > [!NOTE]
   > Your character is stored on your own PC, not on the server. That is why you can use the same character on every server.

4. **Open the server browser**\
   On the following screen with the worlds, switch to **Join** at the top.

5. **Search for the server name**\
   Enter the **name of your server** in the search field.

   > [!WARNING]
   > **Caution**
   >
   > The search looks for the **server name**, not the world name. Both values are independent of each other – the world name only determines which savegame is loaded.

6. **Check the filters**\
   Make sure the filters in the server browser match your server, for example **Public** or **Crossplay**. If a filter does not match, your server is not listed even though it is running.

7. **Join**\
   Click your server in the list and confirm with **Join** – a double click on the entry works as well.

8. **Enter the password**\
   If you set a server password, you are asked for it when joining. Enter it exactly as it is stored in the dashboard.

> [!TIP]
> **Save the server as a favorite**
>
> Use **Add to Favorites** to store your server in the server browser. You can then find it again next time without searching.

## Server is not found

> [!WARNING]
> **Caution**
>
> If you cannot find your server, work through these points one by one:
>
> - Is the server running? Check the status in the **dashboard**.
> - Did the server just start? It takes a moment before it shows up in the browser.
> - Are you really searching for the **server name** and not the world name?
> - Do the filters in the server browser match, for example **Public**, **Crossplay** or **Favorites**?
> - Is the private server setting enabled? In that case your server does **not** appear in the list at all.

> [!CAUTION]
> **Private server**
>
> If you enable the private server option in the dashboard, your server is hidden from the server browser completely. Since Smalland has no direct connection via IP address, your fellow players can no longer select it. If you only want to protect your server from strangers, set a **server password** instead.

## Which ports does Smalland Survive the Wilds use?

> [!NOTE]
> A Smalland server only uses a **Game Port** (UDP). There is no **Query Port** and no RCON port. You can see which Game Port applies to your server in the **dashboard**.
>
> You never enter this port in the game: joining works exclusively through the server browser, which establishes the connection in the background on its own.
