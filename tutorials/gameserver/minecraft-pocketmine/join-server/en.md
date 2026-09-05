---
slug: "join-server"
language: "en"
title: "How to Join Your Minecraft PocketMine Edition Server"
description: "Join a Minecraft PocketMine Edition server"
tags: []
date: "2026-07-30"
visibility: "public"
updated: "2026-08-20"
cta: "gameserver"
product_keys: ["minecraft-pocketmine"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Join Server"
sort: 6
related: ["gameserver/minecraft-pocketmine/add-savegame", "gameserver/minecraft-pocketmine/create-backup", "gameserver/minecraft-pocketmine/download-savegame", "gameserver/minecraft-pocketmine/kick-ban-players"]
---

PocketMine-MP is a server software for Minecraft Bedrock Edition. That means you connect with a regular Bedrock client, for example on Windows, Android or iOS. The server has to be added manually once.

## Find connection details

> [!NOTE]
> You can find the IP address and the Game Port of your server in the **dashboard** of your server. Always enter exactly this Game Port in the game.

> [!IMPORTANT]
> PocketMine-MP answers server queries on the same UDP port the game itself runs on. There is no separate Query Port for connecting – entering a different port will not get you onto the server.

## Add the server in the game

1. **Start Minecraft**\
   Launch Minecraft Bedrock Edition on your device.

2. **Open Play**\
   Select **Play** in the main menu.

3. **Open the Servers tab**\
   Switch to the **Servers** tab.

4. **Add a server**\
   Scroll down and select **Add Server**.

5. **Enter the connection details**\
   Enter a server name of your choice as well as the IP address and the Game Port from the dashboard:

   ```text
   Server Name:    My PocketMine Server
   Server Address: 123.45.67.89
   Port:           Game Port from the dashboard
   ```

6. **Save**\
   Save the entry. Your server then appears in the list under **Additional Servers**.

7. **Join**\
   Select your server and click **Join Server**.

## Why your server does not show up in the server list

> [!NOTE]
> In the **Servers** tab Minecraft only lists the large Mojang partner servers under "Featured Servers". Your own server – whether rented or self-hosted – never shows up there. The only way to reach it is the manual entry with IP address and Game Port.

## Sign in with a Microsoft account

> [!NOTE]
> By default PocketMine-MP verifies the Xbox authentication of your players. Every player therefore has to be signed in with a Microsoft or Xbox account in their Minecraft client. This is controlled by the `xbox-auth` entry in the `server.properties` file in the main folder of your server.

## Joining from consoles

> [!WARNING]
> On Xbox, PlayStation and Nintendo Switch you cannot enter custom server addresses. Players on these consoles can only connect to your server through a custom DNS service or through a LAN connection.

## Minecraft Java Edition

> [!IMPORTANT]
> **Minecraft Java Edition** clients cannot join a PocketMine server. Both editions use different network protocols – Bedrock communicates over UDP, Java over TCP. Plugins exist that add partial support, but according to the official PocketMine documentation this support is explicitly only partial and no full replacement.
