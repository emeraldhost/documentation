---
slug: "join-server"
language: "en"
title: "How to Join Your Black Mesa Server"
description: "Join a Black Mesa server"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["black-mesa"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Join Server"
sort: 4
related: ["gameserver/black-mesa/add-admin", "gameserver/black-mesa/add-mods", "gameserver/black-mesa/create-backup", "gameserver/black-mesa/kick-ban-players"]
---

Black Mesa has no matchmaking and does not force you through a lobby. You connect to your server directly – through the developer console, through the Steam favorites or through the in-game server browser.

## Find connection details

> [!NOTE]
> You can find the **IP address** and the **Game Port** of your server in the **dashboard** of your server. Black Mesa uses the same port for gameplay and for server queries – there is **no separate Query Port**.

> [!WARNING]
> Always enter the **Game Port** from the dashboard. Ports such as `27005` that show up in general Source guides are local client ports of your game and must not be used as a server address.

## Enable the developer console

The console is disabled by default in Black Mesa.

1. **Start Black Mesa**\
   Launch the game and wait for the main menu to load.

2. **Open the options**\
   Open the **Options** from the main menu.

3. **Enable the console**\
   Enable the **Developer Console** option there.

## Connect through the game console

A direct connection is the most reliable way onto your server.

1. **Open the console**\
   Press `~` in the game to open the console.

2. **Connect**\
   Enter the following command:

   ```text
   connect IP:Port
   ```

   > [!TIP]
   > **Example**
   >
   > If the dashboard shows the IP `123.45.67.89` and the Game Port `28015`, the command is:
   >
   > ```text
   > connect 123.45.67.89:28015
   > ```
   >
   > Always use the values from your own dashboard here.

## Via Steam favorites

Storing your server in Steam lets you find it again at any time.

1. **Open Steam**\
   Open the Steam client.

2. **Open the server browser**\
   Click on **View** in the top left and select **Game Servers**.

3. **Add the server**\
   Click on the **Favorites** tab and then on **+** at the bottom right.

4. **Enter the server address**\
   Enter the IP address and the Game Port of your server and confirm.

5. **Join**\
   Select the server and connect. The server then also appears in the favorites section inside the game.

## Via the in-game server browser

1. **Open the server list**\
   Select **Play Online** in the main menu. Black Mesa then opens the server list.

2. **Search for your server**\
   Search for your server name in the search field, or switch to the **Favorites** tab if you stored the server in Steam beforehand.

> [!WARNING]
> For your server to appear in the public list it has to be running and reachable – and depending on the configuration it needs a valid login token (see below). A direct connection through the console works regardless.

> [!NOTE]
> **Server does not show up in the public server list?**
>
> Without a valid Steam Game Server Login Token (GSLT) a Source server may not be listed in the public server list. You can create a token at [Steam Game Server Accounts](https://steamcommunity.com/dev/managegameservers) using the App ID of Black Mesa. Afterwards enter the token in the **dashboard** of your server in the **GSL Token** field and restart the server. Every server needs its own token. A direct connection via IP and Game Port works without a token as well.

> [!TIP]
> To learn how to give yourself admin rights on your server, see [Add Admin](/tutorials/gameserver/black-mesa/add-admin).
