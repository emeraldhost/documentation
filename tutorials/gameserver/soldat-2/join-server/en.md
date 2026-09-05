---
slug: "join-server"
language: "en"
title: "How to Join Your Soldat 2 Server"
description: "Join a Soldat 2 server"
tags: []
date: "2026-07-31"
visibility: "public"
cta: "gameserver"
product_keys: ["soldat-2"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Join Server"
sort: 4
related: ["gameserver/soldat-2/add-admin", "gameserver/soldat-2/add-mods", "gameserver/soldat-2/create-backup", "gameserver/soldat-2/kick-ban-players"]
---

Soldat 2 uses **a single port** for the connection – the **Game Port**. There is no separate **Query Port**. You can reach your server in two ways: through the in-game server list or through a direct connection using IP address and port.

## Find connection details

> [!IMPORTANT]
> You can find the IP address and the Game Port of your server in the **dashboard**. That is exactly the port you enter in the game – with Soldat 2 there is nothing to add to it.

## Via the server list

1. **Start Soldat 2**\
   Launch Soldat 2 on your PC.

2. **Open the server list**\
   In the main menu, open the multiplayer section with the list of public servers.

3. **Search for your server**\
   Look for the name of your server in the list. The name you set in the **dashboard** is exactly the name shown here.

4. **Join**\
   Select your server and join it.

> [!NOTE]
> For your server to appear in the public list at all, `VisibleInGamesList` in the `autoconfig.ini` has to be set to `True`. If it is set to `False`, your server is still reachable – but only through a direct connection.

## Connect directly via IP

A direct connection is the most reliable way onto your server and also works when it does not show up in the server list.

1. **Start Soldat 2**\
   Launch Soldat 2 on your PC.

2. **Open the direct connection**\
   Switch to the direct connection in the multiplayer section. Soldat 2 asks for the address and the port in separate fields.

3. **Enter the address**\
   Enter the IP address of your server from the **dashboard** into the address field:

   ```text
   123.45.67.89
   ```

4. **Enter the port**\
   Enter the **Game Port** of your server into the port field – unchanged, exactly as shown in the **dashboard**.

5. **Connect**\
   Confirm your input. You then drop straight into the running game.

## Password protected server

If a game password is set for your server, you are asked for it when joining. The game password only controls who is allowed on the server at all – it has nothing to do with the RCON password used for admin rights. How to grant admin rights is explained under [Add Admin](/tutorials/gameserver/soldat-2/add-admin).

## Server cannot be found

> [!WARNING]
> If your server does not appear in the list, check the following in order:
>
> - Is the server running in the **dashboard** and has it finished starting?
> - Is `VisibleInGamesList` in the `autoconfig.ini` set to `True`?
> - Are you really using the IP address and Game Port from the **dashboard**?
>
> Freshly started servers need a moment before they show up in the server list. Through a direct connection you reach your server immediately.

## Which ports does Soldat 2 use?

> [!NOTE]
>
> | Port | Protocol | Purpose |
> |------|----------|---------|
> | Game Port | TCP **and** UDP | Game data and server queries – all players connect through this one |
> | WebSockets port | TCP | Optional WebSockets interface – not needed for normal play |
> | WebSockets RCON port | TCP | Optional RCON interface over WebSockets – not needed for normal play |
>
> Soldat 2 has no dedicated Query Port – server queries run through the same port as the game itself. You can see which ports apply to your server in the **dashboard**.

> [!WARNING]
> Ports, server name and game password are written from the **dashboard** into the `autoconfig.ini` on every server start. If you enter these values into the file by hand, they are overwritten on the next start – always change them in the dashboard instead.
