---
slug: "join-server"
language: "en"
title: "How to Join Your No More Room in Hell Server"
description: "Join a No More Room in Hell server"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["no-more-room-in-hell"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Join Server"
sort: 4
related: ["gameserver/no-more-room-in-hell/add-admin", "gameserver/no-more-room-in-hell/add-mods", "gameserver/no-more-room-in-hell/create-backup", "gameserver/no-more-room-in-hell/kick-ban-players"]
---

There are two ways onto your No More Room in Hell server: through the in-game **server browser** or through a **direct connection** using the developer console. There is no lobby system like in other co-op shooters – joining via IP and port always works.

## Find connection details

> [!NOTE]
> You can find the **IP address** and the **Game Port** of your server in the **dashboard** of your server. No More Room in Hell uses the same port for gameplay and for server queries – there is **no separate Query Port**.

> [!WARNING]
> Always enter the **Game Port** from the dashboard. Port `27005` is the local client port of your game and must not be used as a server address.

## Enable the developer console in the game

The console is disabled by default. You need it for the direct connection.

1. **Start No More Room in Hell**\
   Launch the game and wait for the main menu to load.

2. **Open the options**\
   Open the **Options** and switch to the **Keyboard** tab.

3. **Open the advanced settings**\
   Click on **Advanced**.

4. **Enable the console**\
   Tick **Enable developer console** and confirm with **OK**.

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

## Via the in-game server browser

1. **Open the server browser**\
   Start No More Room in Hell and open the server browser in the main menu.

2. **Search for your server**\
   Switch to the **Internet** tab and search for the name of your server.

3. **Join**\
   Select your server and connect.

## Via Steam favorites

If you cannot find your server in the list, add it directly in Steam.

1. **Open Steam**\
   Open the Steam client.

2. **Open the server browser**\
   Click on **View** in the top left and select **Game Servers**.

3. **Add the server**\
   Click on the **Favorites** tab and then on **+** at the bottom right.

4. **Enter the server address**\
   Enter the IP address and the Game Port of your server and confirm.

5. **Join**\
   Select the server and connect. The server then also appears in the favorites section of the in-game server browser.

## Show the server in the public server list

For your server to be listed permanently in the public server list it needs a **Steam Game Server Login Token (GSLT)**.

1. **Create a token**\
   Create a token at [Steam Game Server Accounts](https://steamcommunity.com/dev/managegameservers) using the App ID `224260`.

   > [!NOTE]
   > `224260` is the App ID of the game and the correct ID for the token. The server itself is installed under a different App ID – for the GSLT always use `224260`.

2. **Stop the server**\
   Stop your server via the dashboard.

3. **Open autoexec.cfg**\
   Open the following file via [SFTP](/tutorials/gameserver/establish-sftp-connection). If it does not exist yet, create it:

   ```text
   /nmrih/cfg/autoexec.cfg
   ```

   > [!NOTE]
   > According to the official documentation the token belongs in the `autoexec.cfg`, because that file is already executed when the server starts – that is, before the server logs in to Steam.

4. **Add the token**\
   Add the following line:

   ```text
   sv_setsteamaccount "YOUR-TOKEN"
   ```

5. **Start the server**\
   Save the file and start your server. The server console then shows the message `Assigned persistent gameserver Steam ID`.

> [!NOTE]
> If the dashboard of your server offers a dedicated **GSL Token** field, you can enter the token there instead. Every server needs its own token. A direct connection via IP and port works without a token as well.

## Which ports does No More Room in Hell use?

> [!NOTE]
>
> | Port | Purpose |
> |------|---------|
> | **Game Port** (UDP) | Gameplay and server queries – this is the port you enter when joining |
> | Client port `27005` | Local port on the player's PC, not a server address |
> | SourceTV port | Only relevant if you use SourceTV |
>
> You can see the values that apply to your server in the **dashboard**.
