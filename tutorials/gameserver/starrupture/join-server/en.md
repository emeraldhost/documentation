---
slug: "join-server"
language: "en"
title: "How to Join Your StarRupture Server"
description: "Join a StarRupture server"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["starrupture"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Join Server"
sort: 4
related: ["gameserver/starrupture/add-savegame", "gameserver/starrupture/create-backup", "gameserver/starrupture/download-savegame"]
---

StarRupture does **not** have a server browser. You connect exclusively by entering the IP address and port directly. The connection itself runs through Epic Online Services (EOS) – even when you launched the game via Steam.

## Find connection details

> [!NOTE]
> You can find the IP address and the Game Port of your server in the **dashboard** of your server.

> [!IMPORTANT]
> Always use the public IP address shown in the dashboard. Because the connection is established through Epic Online Services, a local network address (LAN) will not work.

## Join the server

1. **Start StarRupture**\
   Launch StarRupture and wait until the main menu has loaded.

2. **Open Join Game**\
   Select **Join Game** in the main menu.

3. **Select Dedicated Server**\
   Select **Dedicated Server**. This is the only place where you can enter an address.

4. **Enter the server address**\
   Enter the IP address and the Game Port of your server, separated by a colon:

   > [!TIP]
   > **Notation**
   >
   > ```text
   > <IP address>:<Game Port>
   > ```
   >
   > Replace the placeholders with the values shown in your dashboard.

   > [!WARNING]
   > **Caution**
   >
   > The port always has to be included. Without a port the game will not reliably find your server.

5. **Enter the password**\
   If a join password is set for your server, enter it in the corresponding field. Leave the field empty if no password is set.

6. **Connect**\
   Confirm your input with **Confirm**. You will then be loaded onto the server.

## Which ports does StarRupture use?

> [!NOTE]
> A StarRupture server only needs a single port: the **Game Port**, and only via **UDP**. There is no separate **Query Port**. The Game Port that applies to your server is shown in the **dashboard**.

> [!CAUTION]
> **Why no TCP is opened**
>
> The dedicated server ships with an HTTP remote control interface (visible in game as **Manage Server**) that contains a known, unauthenticated security vulnerability: attackers could use it to change passwords, manipulate saves or crash the server. Your server is therefore run with the start parameters `-RCWebControlDisable` and `-RCWebInterfaceDisable` and is only reachable via UDP. As a result **Manage Server** is deliberately unavailable – you change server settings through the dashboard or the `DSSettings.txt` file instead.

## Connection problems

> [!WARNING]
> **Message about multiple servers at this IP**
>
> If a message such as *"More than one server at this IP, please specify port"* appears when joining, your game client is still holding an outdated connection to your server. This mainly happens when the server was restarted while StarRupture stayed open. Close the game **completely**, start it again and enter the IP address and Game Port once more.

> [!TIP]
> When troubleshooting, first check whether the server is actually running in the dashboard and whether you entered the IP address and port exactly as displayed there.
