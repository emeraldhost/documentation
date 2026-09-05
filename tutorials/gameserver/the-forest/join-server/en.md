---
slug: "join-server"
language: "en"
title: "How to Join Your The Forest Server"
description: "Join a The Forest server"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["the-forest"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Join Server"
sort: 5
related: ["gameserver/the-forest/add-savegame", "gameserver/the-forest/create-backup", "gameserver/the-forest/download-savegame", "gameserver/the-forest/kick-ban-players"]
---

The Forest has **no direct connection via IP address inside the game menu**. You either find your server through the in-game server browser or add it to your Steam favorites. For the Steam entry you need the **Query Port** – not the Game Port.

## Find connection details

> [!IMPORTANT]
> You can find the IP address and the ports of your server in the **dashboard**. For the entry in your Steam favorites always use the **Query Port**, not the Game Port. This is the most common reason why joining fails.

## Via the in-game server browser

1. **Start The Forest**\
   Launch the game and wait for the main menu to load.

2. **Open Multiplayer**\
   Select **Multiplayer** in the main menu and then **Join Game**.

3. **Change the source**\
   Set the source on the left to **Dedicated (Internet)**. Your server is not listed under the other sources.

4. **Search for your server**\
   Enter the name of your server in the search bar.

5. **Join the server**\
   Select your server from the list:

   - **Join** starts with a new character.
   - **Continue** loads the character you already saved on this server.

## Via Steam favorites

If you want to join via the IP address specifically, add the server in Steam. This replaces the missing direct connection in the game.

> [!NOTE]
> This step can only be done in Steam, not inside the game itself.

1. **Open Steam**\
   Open the Steam client.

2. **Open the server browser**\
   Click on **View** in the top left and select **Servers** or **Game Servers**.

3. **Add the server**\
   Switch to the **Favorites** tab and click on **Add a Server**.

4. **Enter the server address**\
   Enter the IP address and the **Query Port** of your server:

   > [!TIP]
   > **Example**
   >
   > ```text
   > 123.45.67.89:27016
   > ```

5. **Refresh the list**\
   Click on **Refresh** so Steam queries the server.

6. **Join the server**\
   Start The Forest, open **Multiplayer → Join Game** and set the source to **Favorites**. Your server appears there.

## Password protected server

If a password is set for your server, a lock icon is shown in the server list. You are asked for the password every time you join.

> [!TIP]
> The same window also contains a field for the **admin password**. If you enter the admin password of your server there, you join as an admin – see [Add Admin](/tutorials/gameserver/the-forest/add-admin).

## Which ports does The Forest use?

> [!NOTE]
> A The Forest server uses three ports:
>
> | Configuration value | Default | Purpose |
> |---------------------|---------|---------|
> | `serverSteamPort` | `8766` | Communication with Steam |
> | `serverGamePort` | `27015` | Game port used for the game traffic |
> | `serverQueryPort` | `27016` | Query port – Steam and the server browser query the server through it, and players connect through it |
>
> You can see the values that apply to your server in the **dashboard**.

> [!WARNING]
> **Server not found**
>
> If your server does not show up in the server browser, add it to your Steam favorites using the query port. Through the favorites you find it regardless of whether it appears in the public list.
