---
slug: "join-server"
language: "en"
title: "How to Join Your Counter-Strike Global Offensive Server"
description: "Join a Counter-Strike Global Offensive server"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["counter-strike-global-offensive"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Join Server"
sort: 4
related: ["gameserver/counter-strike-global-offensive/add-admin", "gameserver/counter-strike-global-offensive/add-mods", "gameserver/counter-strike-global-offensive/create-backup", "gameserver/counter-strike-global-offensive/kick-ban-players"]
---

Counter-Strike Global Offensive was replaced by Counter-Strike 2 in Steam. Before you can join your server you therefore have to switch your client back to the classic CS:GO version. After that you get onto your server through the **Steam favorites** or with a **direct connection** in the game console.

> [!IMPORTANT]
> A regular Counter-Strike 2 installation **cannot** join a Counter-Strike Global Offensive server. Without switching to the beta branch `csgo_legacy` every connection attempt fails.

## Switch the client to the CS:GO version

1. **Open the Steam library**\
   Open the Steam client and switch to your **Library**.

2. **Open the properties**\
   Right-click **Counter-Strike 2** and select **Properties**.

3. **Select the beta branch**\
   Switch to the **Betas** tab and select the entry `csgo_legacy` from the dropdown menu.

   > [!NOTE]
   > The branch is called "Legacy Version of CS:GO" in Steam and does **not** require an access code. Simply leave the beta access code field empty.

4. **Wait for the update**\
   Close the window. Steam then downloads the CS:GO files. Wait until the download has finished and start the game from your library as usual afterwards.

> [!TIP]
> If you want to play Counter-Strike 2 again later, simply set the dropdown menu in the **Betas** tab back to **None**.

## Find connection details

> [!NOTE]
> You can find the **IP address** and the **Game Port** of your server in the **dashboard** of your server. Counter-Strike Global Offensive uses the same port for gameplay and for server queries – there is **no separate Query Port**.

> [!WARNING]
> Always enter the **Game Port** from the dashboard. Port `27005` is the local client port of your game and must not be used as a server address.

## Via Steam favorites

1. **Open Steam**\
   Open the Steam client.

2. **Open the server browser**\
   Click on **View** in the top left and select **Game Servers**.

3. **Add the server**\
   Click on the **Favorites** tab and then on **+** at the bottom right.

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

5. **Select the server in the game**\
   Start Counter-Strike Global Offensive, select **Play CS:GO** in the main menu and open the **Community Server Browser**. You will find your server on the **Favorites** tab and can join it from there.

## Enable the developer console in the game

The console is disabled by default in Counter-Strike Global Offensive. You need it for the direct connection.

1. **Start Counter-Strike Global Offensive**\
   Launch the game and wait for the main menu to load.

2. **Open the settings**\
   Open the **Settings** and switch to the **Game** section.

3. **Enable the console**\
   Set the option **Enable Developer Console** to **Yes**.

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

## Steam Account Token (GSLT)

> [!NOTE]
> The **dashboard** of your server contains the mandatory field **Steam Account Token**. Behind it is the Steam Game Server Login Token (GSLT), which the server passes to Steam on startup via `sv_setsteamaccount`. The token is exactly 32 characters long and consists of letters and digits.
>
> You can create a token at [Steam Game Server Accounts](https://steamcommunity.com/dev/managegameservers) using the App ID `730`. Afterwards enter it in the dashboard and restart your server.

> [!WARNING]
> Every simultaneously running server needs its **own** token. Using the same token on several servers is not permitted.
