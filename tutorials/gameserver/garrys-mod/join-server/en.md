---
slug: "join-server"
language: "en"
title: "How to Join Your Garry's Mod Server"
description: "Join a Garry's Mod server"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["garrys-mod"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Join Server"
sort: 4
related: ["gameserver/garrys-mod/add-admin", "gameserver/garrys-mod/add-mods", "gameserver/garrys-mod/create-backup", "gameserver/garrys-mod/kick-ban-players"]
---

## Find connection details

> [!NOTE]
> You can find the **IP address** and the **port** of your server in the **dashboard**. Garry's Mod uses the same port for gameplay and for server queries – there is no separate query port you would have to enter. By default this is port `27015`.

## Via the in-game Legacy Browser

1. **Start Garry's Mod**\
   Launch Garry's Mod.

2. **Open the server search**\
   Select **Find Multiplayer Game** in the main menu and then **Legacy Browser**.

3. **Add server**\
   Click **Add a Server** and enter the IP address and port of your server.

   > [!TIP]
   > **Example**
   >
   > ```text
   > 123.45.67.89:27015
   > ```

4. **Add to favorites**\
   Confirm with **Add this address to favorites**.

5. **Join the server**\
   Select your server in the favorites list and click **Connect**.

## Via the Steam server browser

1. **Open Steam**\
   Open the Steam client.

2. **Open server browser**\
   Click on **View** in the top left and select **Game Servers**.

3. **Add server**\
   Click on the **Favorites** tab and then on **+** at the bottom right.

4. **Enter server address**\
   Enter the IP address and the port of your server and confirm with **OK**.

5. **Connect**\
   Select the server and click **Connect**.

## Via the game console

1. **Start Garry's Mod**\
   Launch Garry's Mod.

2. **Open the console**\
   Press `~` to open the console.

3. **Connect**\
   Enter the following command:

   ```text
   connect IP:Port
   ```

   > [!TIP]
   > **Example**
   >
   > ```text
   > connect 123.45.67.89:27015
   > ```

> [!WARNING]
> **Caution**
>
> Always enter the **Game Port** of your server. Port `27005` is the local client port of your game and must not be used as a server address.

> [!NOTE]
> **Server not showing up in the public server list?**
>
> Since May 2020, Garry's Mod servers without a Steam Game Server Login Token (GSLT) receive a severe penalty in the server list ranking. You can create a token at [Steam Game Server Accounts](https://steamcommunity.com/dev/managegameservers) using app ID `4000`. Then enter it in the **dashboard** of your server under **Settings** in the **Steam Account Token** field and restart the server. The server then starts with the parameter `+sv_setsteamaccount <Token>`. Every server needs its own token. Connecting directly via IP and port works without a token as well.
