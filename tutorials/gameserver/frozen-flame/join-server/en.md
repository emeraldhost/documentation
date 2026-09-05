---
slug: "join-server"
language: "en"
title: "How to Join Your Frozen Flame Server"
description: "Join a Frozen Flame server"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["frozen-flame"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Join Server"
sort: 5
related: ["gameserver/frozen-flame/add-savegame", "gameserver/frozen-flame/create-backup", "gameserver/frozen-flame/download-savegame", "gameserver/frozen-flame/kick-ban-players"]
---

You connect to your Frozen Flame server through the private server list: you add your server there once with its IP address and then connect directly. To do that you use the **Game Port**, not the Query Port.

## Find connection details

> [!IMPORTANT]
> You can find the IP address and the ports of your server in the **dashboard**. To join you need the IP address and the **Game Port**. The Query Port is only used for server queries – you do not connect through it.

## Add the server in the game

1. **Start Frozen Flame**\
   Launch Frozen Flame and wait until the main menu has loaded.

2. **Open Play**\
   Select **Play** in the main menu.

3. **Open Private Server**\
   Switch to the **Private Server** section.

4. **Add the server**\
   Click on **Add** in the private server list to create a new entry.

5. **Enter the server address**\
   Enter the IP address and the Game Port of your server, separated by a colon:

   ```text
   <IP address>:<Game Port>
   ```

   > [!WARNING]
   > Enter the **Game Port** from the dashboard here. The connection will fail with the Query Port.

6. **Confirm the entry**\
   Confirm your input with **Enter**. Your server then appears in the list of private servers.

7. **Connect**\
   Select your server from the list and click on **Connect**.

> [!TIP]
> The entry is stored in the game. Next time you simply pick your server from the list and click **Connect**.

## The connection drops after 20 to 30 seconds

> [!WARNING]
> **EasyAntiCheat**
>
> If you get disconnected from the server after roughly 20 to 30 seconds, the developers point to EasyAntiCheat as the cause. If your server runs without EasyAntiCheat (startup parameter `-noeac`), **every player has to launch the game without EasyAntiCheat as well**. To do so, choose the second launch option without EasyAntiCheat when starting the game in Steam. Server and client always have to match.

## Public server list

> [!NOTE]
> Your server does not show up in a public server list automatically. The official server documentation provides a separate service for that, which is connected through additional entries in the `Engine.ini`. Whether that service is still running cannot be confirmed. Always connect directly via the IP address – that method works regardless of whether your server is listed anywhere.

## Which ports does Frozen Flame use?

> [!NOTE]
> A Frozen Flame server uses several ports:
>
> | Port | Protocol | Purpose |
> |------|----------|---------|
> | Game Port | TCP and UDP | Game data – players connect to your server through this one |
> | Query Port | UDP | Server queries, for example for server information through Steam |
> | RCON Port | TCP | Remote control of the server – see [Add Admin](/tutorials/gameserver/frozen-flame/add-admin) |
>
> You can see which values apply to your server in the **dashboard**.
