---
slug: "join-server"
language: "en"
title: "How to Join Your Terraria tShock Server"
description: "Join a Terraria tShock server"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["terraria-tshock"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Join Server"
sort: 6
related: ["gameserver/terraria-tshock/add-savegame", "gameserver/terraria-tshock/create-backup", "gameserver/terraria-tshock/download-savegame", "gameserver/terraria-tshock/kick-ban-players"]
---

tShock runs entirely on the server side. That is why you connect with the completely normal Terraria client, exactly like on a regular Terraria server: there is no in-game server browser for dedicated servers, you connect directly using the IP address and the port of your server.

## Find connection details

> [!IMPORTANT]
> To connect you need the **IP address** and the **Game Port** of your server. You can find both in the **dashboard** of your server. tShock only uses a single port over **TCP** – there is no Query Port.

## Via Join via IP

1. **Start Terraria**\
   Launch Terraria on your PC.

2. **Open Multiplayer**\
   Select **Multiplayer** in the main menu.

3. **Select Join via IP**\
   Click on **Join via IP**.

4. **Select your character**\
   Choose the character you want to play with on the server.

5. **Enter the IP address**\
   Enter the IP address of your server – **without** the port:

   > [!TIP]
   > **Example**
   >
   > ```text
   > 123.45.67.89
   > ```

6. **Enter the port**\
   In the next field, enter the **Game Port** shown in the dashboard of your server.

7. **Connect**\
   Confirm your input to join the server. If a password is set on the server, you will be prompted for it afterwards.

> [!NOTE]
> The options **Join** and **Join via Steam** in the multiplayer menu are meant for games hosted by a friend directly from within the game. For your dedicated server you always need **Join via IP**.

## Logging in on the server

By default a tShock server does **not** require a login – you get onto the server without an account and play just like on a regular Terraria server.

Once you have created an account, you log in through the in-game chat:

```text
/login <username> <password>
```

> [!TIP]
> To learn how to create an account with admin rights, see [Add Admin](/tutorials/gameserver/terraria-tshock/add-admin).

## Server password

> [!NOTE]
> The server password of a tShock server is not part of the dashboard, it is the value `ServerPassword` in the file `/tshock/config.json`. If nothing is entered there, anyone can join without a password. After a change the command `reload` in the server console is enough – a restart is not required.

## Common reasons why joining fails

> [!WARNING]
> **Caution**
>
> The client and the server have to run **the same Terraria version**. Every tShock version is built for one specific Terraria version; if your game version does not match, the server rejects the connection with a version message. Which tShock version gets installed is controlled by the **tShock Version** field in the dashboard.

> [!IMPORTANT]
> A tShock server is joined with the **normal Terraria client** – not with the tModLoader client. The other way around, the normal client cannot join a tModLoader server. For a tModLoader server you need the matching server type: [Join Terraria tModLoader server](/tutorials/gameserver/terraria-tmodloader/join-server).
