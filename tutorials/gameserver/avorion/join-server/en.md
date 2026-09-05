---
slug: "join-server"
language: "en"
title: "How to Join Your Avorion Server"
description: "Join an Avorion server"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["avorion"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Join Server"
sort: 6
related: ["gameserver/avorion/add-savegame", "gameserver/avorion/create-backup", "gameserver/avorion/download-savegame", "gameserver/avorion/kick-ban-players"]
---

Avorion gives you two ways onto your server: the in-game server browser or a direct connection via the IP address. The direct connection is the most reliable one, because your server does not have to be publicly listed for it.

## Find connection details

> [!IMPORTANT]
> To connect you need the **IP address** and the **Game Port** of your server. You can find both in the **dashboard** of your server.

## Connect directly via IP

1. **Start Avorion**\
   Launch Avorion on your PC.

2. **Open Multiplayer**\
   Select **Multiplayer** in the main menu.

3. **Choose Join via IP**\
   Click on **Join via IP**.

4. **Enter the server address**\
   Enter the IP address and the Game Port of your server, separated by a colon:

   ```text
   <IP address>:<Game Port>
   ```

   You can find the exact values in the **dashboard** of your server.

5. **Name the entry and join**\
   Additionally give the entry a name and confirm with **Add Server**. The server is added to your server list and the connection is established – next time you simply pick it from the list. With **Join** you connect without saving the server permanently.

## Via the server browser

1. **Open Multiplayer**\
   Select **Multiplayer** in the main menu.

2. **Open the server browser**\
   Click on **Browse Servers**.

3. **Look up your server**\
   Search the list for your server name and join it with a double click or via **Join**.

> [!NOTE]
> Your server only appears in the server browser if it is publicly listed. This is controlled in the **dashboard** via the setting **Serverliste** (`true` = listed, `false` = not listed); internally this corresponds to the startup parameter `--listed` or the value `isListed` in the `server.ini`. If you cannot find your server there, use the direct connection via **Join via IP**.

> [!WARNING]
> After a restart or a change to the settings it takes a moment until the server is reachable again. Check in the **dashboard** whether the server has fully started before you connect.

> [!TIP]
> Besides the Game Port, an Avorion server also uses a Query Port as well as ports for the Steam query. All values are assigned to your server in the **dashboard**. To connect, first enter the **Game Port** – if the connection does not work with it, try the same entry with the **Query Port**.
