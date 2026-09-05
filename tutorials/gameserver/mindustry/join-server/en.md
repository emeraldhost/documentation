---
slug: "join-server"
language: "en"
title: "How to Join Your Mindustry Server"
description: "Join a Mindustry server"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["mindustry"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Join Server"
sort: 6
related: ["gameserver/mindustry/add-savegame", "gameserver/mindustry/create-backup", "gameserver/mindustry/download-savegame", "gameserver/mindustry/kick-ban-players"]
---

Mindustry offers a real direct connection in its join menu: you enter the **IP address** and the **Game Port** of your server and connect right away. This is the most reliable way onto your server.

## Find connection details

> [!IMPORTANT]
> You can find the IP address and the Game Port of your server in the **dashboard**. Always enter exactly the port shown there – without a port, Mindustry falls back to a built-in default value that usually does not match a hosted server.

> [!NOTE]
> Mindustry has **no separate Query Port**. Status queries and the game itself both run through the same Game Port, over TCP as well as UDP.

## Join via the direct connection

1. **Start Mindustry**\
   Launch Mindustry on your PC.

2. **Open the join menu**\
   Select **Play** in the main menu and then **Join Game**.

3. **Add the server**\
   In the **Remote** section, click **Add Server**.

4. **Enter the server address**\
   Enter the IP address and the Game Port of your server, separated by a colon:

   > [!TIP]
   > **Example**
   >
   > ```text
   > 123.45.67.89:<Game Port>
   > ```
   >
   > Replace the IP address and the Game Port with the values from your **dashboard**.

   > [!NOTE]
   > **IPv6**
   >
   > If your server has an IPv6 address, put it in square brackets:
   >
   > ```text
   > [2001:db8::1]:<Game Port>
   > ```

5. **Confirm the entry**\
   Confirm your input. The server then stays listed in the **Remote** section and is queried every time you open the menu.

6. **Join**\
   Once the entry shows the server name, map and player count, click it to join.

## The sections of the join menu

| Section | Meaning |
|---------|---------|
| **Local** | Searches for servers in the same local network. Your hosted server is **not** found here. |
| **Remote** | The servers you added yourself. This is how you join your server. |
| **Global** | A server list curated by the community. Your server does not appear there automatically. |

## Server is not found

> [!WARNING]
> **Caution**
>
> Your server can only be reached once it actually hosts a map. As long as no map is loaded, it does not accept connections. Check in the **console** of your dashboard whether a map is running and start one otherwise:
>
> ```text
> host <mapname>
> ```
>
> Alternatively, load an existing save, which also brings the server online:
>
> ```text
> load <slot>
> ```

> [!TIP]
> If the entry in the **Remote** section stays greyed out or reports an error, first check the spelling of the IP address and the port. A common mistake is using a Game Port from an old guide instead of the port from your dashboard.
