---
slug: "join-server"
language: "en"
title: "How to Join Your Necesse Server"
description: "Join a Necesse server"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["necesse"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Join Server"
sort: 6
related: ["gameserver/necesse/add-savegame", "gameserver/necesse/create-backup", "gameserver/necesse/download-savegame", "gameserver/necesse/kick-ban-players"]
---

Necesse has **no public server browser**. You add your server manually in the multiplayer menu once and can then connect any time with a double click.

## Find connection details

> [!IMPORTANT]
> You can find the IP address and the port of your server in the **dashboard**. Use exactly the **Game Port** shown there – Necesse does not use a different port for joining.

## Add the server and join

1. **Start Necesse**\
   Launch the game and wait for the main menu to load.

2. **Open Multiplayer**\
   Select **Multiplayer** in the main menu.

3. **Add the server**\
   Click on **Add Server**.

4. **Enter the connection details**\
   Fill in the details of your server:

   - **Name** – a display name of your choice for your server list
   - **IP** – the IPv4 address from your dashboard
   - **Port** – the **Game Port** from your dashboard

   > [!TIP]
   > **Example**
   >
   > ```text
   > Name:  My Necesse Server
   > IP:    123.45.67.89
   > Port:  Game Port from the dashboard
   > ```

5. **Save the entry**\
   Confirm with **Add**. Your server now stays in your server list permanently.

6. **Join**\
   Double-click the entry to connect.

> [!TIP]
> If you only want to connect once without saving the server permanently, you can use the direct connection instead. It asks for the same details but does not create a list entry.

## Password protected server

If a password is set for your server, Necesse asks for it when connecting. Enter the password exactly as stored in your dashboard – it is case sensitive.

## Which port does Necesse use?

> [!NOTE]
> A Necesse server uses only a single port, the **Game Port** (UDP). There is no separate **Query Port** – which is why you enter exactly the Game Port shown in your dashboard.

> [!WARNING]
> **Server not reachable**
>
> First check in the dashboard whether your server is actually running. Then make sure the IP address and the Game Port were copied exactly – a typo in the port is the most common reason for a failed connection.

> [!WARNING]
> **Check the version**
>
> Client and server must run the same game version. After updating your game, connecting can fail until your server is on the same version as well.
