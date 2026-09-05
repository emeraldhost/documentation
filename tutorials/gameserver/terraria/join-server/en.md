---
slug: "join-server"
language: "en"
title: "How to Join Your Terraria Server"
description: "Join a Terraria server"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["terraria"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Join Server"
sort: 4
related: ["gameserver/terraria/add-savegame", "gameserver/terraria/create-backup", "gameserver/terraria/download-savegame", "gameserver/terraria/kick-ban-players"]
---

Terraria does not have an in-game server browser for dedicated servers. Instead, you connect directly using the IP address and port of your server.

## Find connection details

> [!WARNING]
> **Important**
>
> To connect you need the **IP address** and the **port** of your server. You can find both in the **dashboard** of your server. Terraria only uses a single port over **TCP** (default: `7777`) – there is no separate query port.

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
   In the next field, enter the port of your server:

   > [!TIP]
   > **Example**
   >
   > ```text
   > 7777
   > ```

7. **Connect**\
   Confirm your input to join the server. If a password is set on the server, you will be prompted for it afterwards.

> [!NOTE]
> The options **Join** and **Join via Steam** in the multiplayer menu are meant for games hosted by a friend directly from within the game. For your dedicated server you always need **Join via IP**.

> [!WARNING]
> **Caution**
>
> The client and the server have to run **the same game version**. If your Terraria version differs from the server's version, the server rejects the connection with a version message. Make sure both are on the same version.

> [!IMPORTANT]
> Regular Terraria and tModLoader are two entirely separate programs. A regular Terraria client **cannot join a tModLoader server** – and vice versa. For a tModLoader server you need the tModLoader client: [Join Terraria tModLoader server](/tutorials/gameserver/terraria-tmodloader/join-server).
