---
slug: "join-server"
language: "en"
title: "How to Join Your Quake Live Server"
description: "Join a Quake Live server"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["quake-live"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Join Server"
sort: 4
related: ["gameserver/quake-live/add-admin", "gameserver/quake-live/add-mods", "gameserver/quake-live/create-backup", "gameserver/quake-live/kick-ban-players"]
---

Quake Live has no matchmaking. You either connect directly through the in-game console using the IP address and port, or you look for your server in the server browser.

## Find connection details

> [!NOTE]
> You can find the **IP address** and the **Game Port** of your server in the **dashboard** of your server. Quake Live uses the same port for gameplay and for server queries – there is no separate **Query Port**.

## Open the in-game console

The console is the most reliable way onto your server.

1. **Start Quake Live**\
   Launch the game and wait until the main menu has loaded.

2. **Open the console**\
   Press `~` to open the console.

> [!NOTE]
> **Console does not open?**
>
> The console key sits to the left of the `1` key – on a German keyboard layout that is the `^` key. Whether the console is available at all is controlled by the client variable `com_allowConsole`, which is set to `1` by default.

## Connect directly via IP

1. **Open the console**\
   Open the console in the game.

2. **Connect**\
   Enter the following command:

   ```text
   connect IP:Port
   ```

   > [!TIP]
   > **Example**
   >
   > If the dashboard shows the IP `123.45.67.89` and the Game Port `27043`, the command is:
   >
   > ```text
   > connect 123.45.67.89:27043
   > ```
   >
   > Always use the values from your own dashboard here.

3. **Enter the server**\
   After connecting you first join the running match as a spectator and can then pick a team.

## Connect to a password-protected server

If you set a **Server Password** in the dashboard, you have to set it in the game before connecting.

1. **Set the password**\
   Enter the following command in the console:

   ```text
   password YOURPASSWORD
   ```

2. **Connect**\
   Then connect as usual:

   ```text
   connect 123.45.67.89:27043
   ```

> [!NOTE]
> **Reserved slots**
>
> Besides the server password, Quake Live supports reserved slots. `sv_privateClients` defines how many slots stay reserved, and `sv_privatePassword` sets the matching password. Players who enter that password with `password` can join even when all regular slots are taken.

## Via the server browser

1. **Open the server list**\
   Open the server list from the main menu.

2. **Search for the server**\
   Search for the name you set as **Server Name** in the dashboard.

> [!WARNING]
> For your server to be listed publicly, **Server Type** in the dashboard has to be set to `2` (Internet). `0` means offline and `1` limits the server to the local network. In addition `sv_master "1"` has to be set – only then does the server register with the master server and answer queries. Connecting directly through the console works regardless of this.

> [!TIP]
> Server tags make it easier to find your server in the browser again. Add them to `/baseq3/server.cfg`, for example:
>
> ```text
> set sv_tags "classic, custom"
> ```
>
> The tags are offered as filters in the in-game server browser.

> [!TIP]
> To learn how to give yourself admin rights on your server, see [Add Admin](/tutorials/gameserver/quake-live/add-admin).
