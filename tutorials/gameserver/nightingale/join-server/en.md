---
slug: "join-server"
language: "en"
title: "How to Join Your Nightingale Server"
description: "Join a Nightingale server"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["nightingale"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Join Server"
sort: 5
related: ["gameserver/nightingale/add-savegame", "gameserver/nightingale/create-backup", "gameserver/nightingale/download-savegame", "gameserver/nightingale/kick-ban-players"]
---

Nightingale has **no server browser**. You always connect directly using the **IP address** and the **Game Port** of your server – both are entered into two separate fields in the game.

## Find connection details

> [!IMPORTANT]
> You can find the **IP address** and the **Game Port** of your server in the **dashboard**. Nightingale connects through the Game Port (UDP). Nightingale does not use a Query Port.

## Join the server

1. **Start Nightingale**\
   Launch the game and wait for the main menu to load.

2. **Select Play**\
   Click on **Play** in the main menu.

3. **Choose your character**\
   On the next screen, select the character you want to play with.

4. **Open Join a Game**\
   Then select **Join a Game**.

5. **Change the connection type**\
   Switch the **Connection Type** dropdown from **Steam** to **IP/LAN**. This is the only option that reaches a dedicated server.

6. **Enter the connection details**\
   Enter the IP address and the Game Port into the two fields – the IP address in the first field, the port in the second.

   > [!WARNING]
   > The IP address and the port go into **separate fields**. Do not enter both together with a colon in a single field.

7. **Enter the password**\
   If a password is set for your server, enter it into the password field on the same screen. If none is set, leave the field empty.

8. **Connect**\
   Click on **Play** to establish the connection.

## Why not via Steam?

> [!NOTE]
> The **Steam** connection type is meant for sessions hosted by another player from within the running game – there you connect through your Steam friends list. A dedicated server does **not** show up there. For your server, always use **IP/LAN**.

## What happens the first time you join

> [!IMPORTANT]
> If you are the first to connect to a still empty server, your client automatically uploads your character **and all realms belonging to it** to the server. This is the official way to transfer your progress from your PC to the server.
>
> If you do **not** want this, connect with a **newly created character** first. After that the server is occupied and nothing else will be uploaded.

> [!TIP]
> You can find more about transferring and saving your progress in [Add Savegame](/tutorials/gameserver/nightingale/add-savegame) and [Download Savegame](/tutorials/gameserver/nightingale/download-savegame).

## Connection fails

> [!WARNING]
> In that case check the following one by one:
>
> - Is your server running? You can see the status in the **dashboard**.
> - Is **Connection Type** set to **IP/LAN**?
> - Do the IP address and the Game Port exactly match the values from the dashboard?
> - Does your server run the same game version as your client after an update? Different versions prevent joining.
