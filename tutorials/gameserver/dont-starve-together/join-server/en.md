---
slug: "join-server"
language: "en"
title: "How to Join Your Don’t Starve Together Server"
description: "Join a Don’t Starve Together server"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["dont-starve-together"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Join Server"
sort: 6
related: ["gameserver/dont-starve-together/add-savegame", "gameserver/dont-starve-together/create-backup", "gameserver/dont-starve-together/download-savegame", "gameserver/dont-starve-together/kick-ban-players"]
---

There are two ways to join your server: through the in-game server browser or through a direct connection in the console.

## Find connection details

> [!WARNING]
> **Important**
>
> For a direct connection you need the **IP address** and the **Game Port** of your server. You can find both in the dashboard of your server. The ports `master_server_port` and `authentication_port` from the `[STEAM]` section of the `server.ini` file are internal Steam ports and are **not** used to connect.

## Via the in-game server browser

1. **Start Don’t Starve Together**\
   Launch the game and wait until you are in the main menu.

2. **Open the server browser**\
   Click **Browse Games** in the main menu.

3. **Search for your server**\
   Enter the exact name of your server in the search field. This is the value set as `cluster_name` in the `cluster.ini` file.

4. **Join the server**\
   Select your server from the list and join. If a server password is set, you will be asked for it afterwards.

> [!NOTE]
> After a start it can take up to 10 minutes for your server to appear in the server browser. Being listed also requires a valid cluster token in the `cluster_token.txt` file. You can create your token in your [Klei account](https://accounts.klei.com/account/game/servers?game=DontStarveTogether).

## Connect directly via the console

1. **Start Don’t Starve Together**\
   Launch the game and stay in the main menu.

2. **Open the console**\
   Press `~` to open the console.

3. **Enter the connect command**\
   Enter the command with the IP address and the Game Port of your server and confirm with Enter:

   ```text
   c_connect("123.45.67.89", 10999)
   ```

4. **Connect with a password**\
   If a password is set on your server, add it as the third value:

   ```text
   c_connect("123.45.67.89", 10999, "myPassword")
   ```

> [!TIP]
> The IP address and the password always have to be in quotation marks, the port does not. If you leave out the port, the game connects to the default port `10999`. Always enter the port shown in your dashboard – many servers use a different port.
