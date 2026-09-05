---
slug: "join-server"
language: "en"
title: "How to Join Your Sons Of The Forest Server"
description: "Join a Sons Of The Forest server"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["sons-of-the-forest"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Join Server"
sort: 5
related: ["gameserver/sons-of-the-forest/add-savegame", "gameserver/sons-of-the-forest/create-backup", "gameserver/sons-of-the-forest/download-savegame", "gameserver/sons-of-the-forest/kick-ban-players"]
---

You can join your server directly via its IP address or search for it in the ingame server browser. The direct connection is the most reliable option because it works independently of the server list.

## Find connection details

> [!WARNING]
> **Important**
>
> You can find the **IP address** and the ports of your server in the **dashboard**. For the direct connection you need the **Game Port**, and for adding the server in the Steam server browser you need the **Query Port**. Always use the values shown there – the ports are assigned to your server and may differ from the game's default ports.

## Via direct connection

1. **Start Sons Of The Forest**\
   Launch the game and wait for the main menu to load.

2. **Open multiplayer**\
   Select **Multiplayer** in the main menu and then **Join**.

3. **Select direct connection**\
   Click on **Direct** at the bottom.

4. **Enter server address**\
   Enter the IP address and the **Game Port** of your server.

   > [!TIP]
   > **Example**
   >
   > ```text
   > 123.45.67.89:8766
   > ```

5. **Join the server**\
   Click **Join**. If a password is set on the server, enter it afterwards.

## Via the ingame server browser

1. **Start Sons Of The Forest**\
   Launch the game.

2. **Open multiplayer**\
   Select **Multiplayer** in the main menu and then **Join**.

3. **Change the source**\
   Set **Source** to **Dedicated**. Your server will not be listed under the other sources (P2P, Friends, LAN).

4. **Search for the server**\
   Enter the exact name of your server in the filter field.

5. **Join the server**\
   Select your server from the list and click **Join**.

## Via Steam favorites

1. **Open Steam**\
   Open the Steam client.

2. **Open server browser**\
   Click on **View** in the top left and select **Game Servers**.

3. **Add server**\
   Switch to the **Favorites** tab and click **Add a server**.

4. **Enter server address**\
   Enter the IP address and the **Query Port** of your server.

   > [!TIP]
   > **Example**
   >
   > ```text
   > 123.45.67.89:27016
   > ```

5. **Join the server**\
   Launch Sons Of The Forest and select your server from the favorites list.

> [!NOTE]
> After a restart it takes a few minutes until your server appears in the server browser. Use the direct connection in the meantime – it works right away.

> [!WARNING]
> **Server not found**
>
> If `LanOnly` is set to `true` in the server configuration, your server will never appear in the public server list. You can find this setting in the file `/serverconfig/dedicatedserver.cfg`, which you can edit via [SFTP](/tutorials/gameserver/establish-sftp-connection).
