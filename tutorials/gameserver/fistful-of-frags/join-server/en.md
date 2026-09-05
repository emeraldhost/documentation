---
slug: "join-server"
language: "en"
title: "How to Join Your Fistful of Frags Server"
description: "Join a Fistful of Frags server"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["fistful-of-frags"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Join Server"
sort: 4
related: ["gameserver/fistful-of-frags/add-admin", "gameserver/fistful-of-frags/add-mods", "gameserver/fistful-of-frags/create-backup", "gameserver/fistful-of-frags/kick-ban-players"]
---

There are two ways onto your Fistful of Frags server: through the in-game **server browser** or through a **direct connection** using the developer console. There is no lobby system – joining via IP and port always works.

## Find connection details

> [!NOTE]
> You can find the **IP address** and the **Game Port** of your server in the **dashboard** of your server. Fistful of Frags uses the same port for gameplay and for server queries – there is **no separate Query Port**.

> [!WARNING]
> Always enter the **Game Port** from the dashboard. Port `27005` is the local client port of your game and must not be used as a server address.

## Enable the developer console in the game

The console is disabled by default. You need it for the direct connection.

1. **Start Fistful of Frags**\
   Launch the game and wait for the main menu to load.

2. **Open the options**\
   Open the **Options** from the main menu using the gear icon and switch to the **Keyboard** tab.

3. **Open the advanced settings**\
   Click the **Advanced** button.

4. **Enable the console**\
   Tick **Enable Developer Console** and confirm the setting.

## Connect through the game console

1. **Open the console**\
   Press `~` or `` ` `` in the game to open the console.

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

> [!TIP]
> You can also reach your server directly through Steam. Enter the following address in your browser or in the Windows Run dialog – Steam launches the game and connects you automatically:
>
> ```text
> steam://connect/123.45.67.89:27015
> ```

## Via the in-game server browser

1. **Open the server browser**\
   Start Fistful of Frags and open the server browser in the main menu.

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

To have your server listed reliably in the public server list, a **Steam Game Server Login Token (GSLT)** is recommended.

1. **Create a token**\
   Create a token at [Steam Game Server Accounts](https://steamcommunity.com/dev/managegameservers) using the App ID `265630`.

   > [!NOTE]
   > `265630` is the App ID of the game and the correct ID for the token. The server itself is installed under a different App ID – for the GSLT always use `265630`.

2. **Stop the server**\
   Stop your server via the dashboard.

3. **Open server.cfg**\
   Open the following file via [SFTP](/tutorials/gameserver/establish-sftp-connection):

   ```text
   /fof/cfg/server.cfg
   ```

4. **Add the token**\
   Add the following line:

   ```text
   sv_setsteamaccount "YOUR-TOKEN"
   ```

5. **Start the server**\
   Save the file and start your server.

> [!NOTE]
> If the dashboard of your server offers a dedicated **GSL Token** field, you can enter the token there instead. Every server needs its own token. A direct connection via IP and port works without a token as well.

## More visibility settings

Add these values to `/fof/cfg/server.cfg`:

| Setting | Meaning |
|---------|---------|
| `sv_lan 0` | Server is publicly reachable and logs in to Steam (`1` = LAN only) |
| `sv_region` | Region for the server browser (default value `255` = worldwide) |
| `sv_tags` | Custom tags players can filter by in the server browser |
| `sv_visiblemaxplayers` | Number of slots shown in the server browser |
| `sv_steamgroup` | Group ID of a Steam group the server is highlighted for |

> [!TIP]
> After changing the `server.cfg` you have to restart your server for the values to be applied.

## Which ports does Fistful of Frags use?

> [!NOTE]
>
> | Port | Purpose |
> |------|---------|
> | **Game Port** | Gameplay, server queries and RCON – this is the port you enter when joining |
> | Client port `27005` | Local port on the player's PC, not a server address |
> | SourceTV port | Only relevant if you use SourceTV for spectators |
>
> You can see the values that apply to your server in the **dashboard**.
