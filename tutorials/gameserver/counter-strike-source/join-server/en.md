---
slug: "join-server"
language: "en"
title: "How to Join Your Counter-Strike Source Server"
description: "Join a Counter-Strike Source server"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["counter-strike-source"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Join Server"
sort: 4
related: ["gameserver/counter-strike-source/add-admin", "gameserver/counter-strike-source/add-mods", "gameserver/counter-strike-source/create-backup", "gameserver/counter-strike-source/kick-ban-players"]
---

There are three ways onto your Counter-Strike Source server: through the **in-game server browser**, through the **Steam favorites** or with a **direct connection** in the game console.

## Find connection details

> [!NOTE]
> You can find the **IP address** and the **Game Port** of your server in the **dashboard** of your server. Counter-Strike Source uses the same port for gameplay and for server queries – there is **no separate Query Port**.

> [!WARNING]
> Always enter the **Game Port** from the dashboard. Port `27005` is the local client port of your game and must not be used as a server address.

## Through the in-game server browser

1. **Start Counter-Strike Source**\
   Launch the game and wait for the main menu to load.

2. **Open the server search**\
   Select **Find Servers** in the main menu.

3. **Add the server**\
   Switch to the **Favorites** tab and click on **Add a Server**.

4. **Enter the server address**\
   Enter the IP address and the Game Port of your server, separated by a colon:

   > [!TIP]
   > **Example**
   >
   > ```text
   > 123.45.67.89:27015
   > ```
   >
   > Use the IP address and the Game Port from your dashboard here.

5. **Join the server**\
   Confirm your entry. Your server then appears in the favorites list, where you can select it and join.

## Via Steam favorites

1. **Open Steam**\
   Open the Steam client.

2. **Open the server browser**\
   Click on **View** in the top left and select **Game Servers**.

3. **Add the server**\
   Click on the **Favorites** tab and then on **+** at the bottom right.

4. **Enter the server address**\
   Enter the IP address and the Game Port of your server and confirm.

5. **Join**\
   Select the server and connect. The server then also appears in the game under **Find Servers** in the **Favorites** tab.

## Enable the developer console in the game

The console is disabled by default in Counter-Strike Source. You need it for the direct connection.

1. **Start Counter-Strike Source**\
   Launch the game and wait for the main menu to load.

2. **Open the settings**\
   Open the **Options** and switch to **Keyboard**.

3. **Enable the console**\
   Open **Advanced** and enable the **Developer Console** there.

> [!TIP]
> Alternatively you can enable the console permanently with the launch option `-console`. Add it in Steam by right-clicking the game and opening **Properties** → **Launch Options**.

## Connect through the game console

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
   > ```text
   > connect 123.45.67.89:27015
   > ```
   >
   > Use the IP address and the Game Port from your dashboard here.

> [!NOTE]
> **Server does not show up in the public server list?**
>
> Without a valid Steam Game Server Login Token (GSLT) your server may not be listed in the public server list and does not use VAC. You can create a token at [Steam Game Server Accounts](https://steamcommunity.com/dev/managegameservers) using the App ID `240`. Afterwards enter it in the **dashboard** of your server and restart the server. Every server needs its own token. A direct connection via IP and Game Port works without a token as well.
