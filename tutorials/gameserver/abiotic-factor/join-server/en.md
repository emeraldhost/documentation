---
slug: "join-server"
language: "en"
title: "How to Join Your Abiotic Factor Server"
description: "Join an Abiotic Factor server"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["abiotic-factor"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Join Server"
sort: 5
related: ["gameserver/abiotic-factor/add-savegame", "gameserver/abiotic-factor/create-backup", "gameserver/abiotic-factor/download-savegame", "gameserver/abiotic-factor/kick-ban-players"]
---

There is **no documented input field for a direct connection via IP address inside the game** for Abiotic Factor. You either find your server through the in-game server browser or add it to your Steam favorites.

## Find connection details

> [!IMPORTANT]
> You can find the IP address, the **Game Port** and the **Query Port** of your server in the **dashboard**. Both ports are assigned to your server there – always use the values shown in your dashboard.

## Via the in-game server browser

1. **Start Abiotic Factor**\
   Launch the game and wait for the main menu to load.

2. **Open the server list**\
   Select **Join a Server** in the main menu. Depending on the version you only reach that entry after starting the game via **Enter the Facility**.

3. **Show dedicated servers**\
   Enable the **Show Dedicated** option in the filters. Without this filter, dedicated servers are not listed.

4. **Search for your server**\
   Enter the name of your server in the search bar.

5. **Refresh the list**\
   Refresh the server list so the server is queried again.

6. **Join**\
   Select your server from the list and click on **Join**. If a server password is set, you are asked for it now.

## Via Steam favorites

> [!NOTE]
> If your dedicated server does not show up in the in-game server browser, the route through the Steam server browser is the most reliable solution: close the game, add the server in Steam and join from there.

1. **Open Steam**\
   Close Abiotic Factor and open the Steam client.

2. **Open the server browser**\
   Click on **View** in the top left and select **Servers** or **Game Servers**.

3. **Add the server**\
   Switch to the **Favorites** tab and click on **Add a Server**.

4. **Enter the server address**\
   Enter the IP address and the **Game Port** of your server, separated by a colon:

   ```text
   <IP address>:<Game Port>
   ```

   > [!TIP]
   > If Steam does not find the server that way, try the same entry with the **Query Port**. Which of the two ports works depends on the server configuration – both variants are worth a try.

5. **Refresh the list**\
   Click on **Refresh** so Steam queries the server.

6. **Join**\
   Select the server in your favorites list and click on **Connect**. Steam starts Abiotic Factor and connects you to the server.

## Which ports does Abiotic Factor use?

> [!NOTE]
> An Abiotic Factor server uses two ports:
>
> | Port | Protocol | Purpose |
> |------|----------|---------|
> | **Game Port** | UDP | Carries the game traffic |
> | **Query Port** | UDP | Steam and the server browser query your server through it |
>
> You can see the values that apply to your server in the **dashboard**.

> [!WARNING]
> **Server not found**
>
> Check the following in order:
>
> - Is the **Show Dedicated** filter enabled in the server browser?
> - Did you refresh the server list after starting the server? Freshly started servers appear there with a delay.
> - Add the server to your **Steam favorites** instead. Through the favorites you find it regardless of whether it appears in the public list.

> [!NOTE]
> **Direct connection instead of Steam P2P**
>
> Dedicated Abiotic Factor servers do not use a Steam P2P connection but a direct connection to the IP address of your server. That is why joining works even if you are not Steam friends with the other players.

> [!WARNING]
> **No direct connect in the game**
>
> A field in the game menu where you could enter `IP:Port` directly is not documented for Abiotic Factor. Every way of joining described here goes through the in-game server browser or through the Steam favorites.
