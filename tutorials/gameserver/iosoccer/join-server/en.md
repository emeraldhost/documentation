---
slug: "join-server"
language: "en"
title: "How to Join Your IOSoccer Server"
description: "Join an IOSoccer server"
tags: []
date: "2026-07-31"
visibility: "public"
cta: "gameserver"
product_keys: ["iosoccer"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Join Server"
sort: 4
related: ["gameserver/iosoccer/add-admin", "gameserver/iosoccer/add-mods", "gameserver/iosoccer/create-backup", "gameserver/iosoccer/kick-ban-players"]
---

There are two ways onto your IOSoccer server: through the in-game **server browser** or through a **direct connection** using the developer console. There is no lobby system – joining via IP and port always works.

## Find connection details

> [!NOTE]
> You can find the **IP address** and the **Game Port** of your server in the **dashboard** of your server. IOSoccer uses the same port for gameplay and for server queries – there is **no separate Query Port**.

> [!WARNING]
> Always enter the **Game Port** from the dashboard. Port `27005` is the local client port of your game and must not be used as a server address.

## Enable the developer console in the game

You need the developer console for the direct connection. If it does not respond, enable it like this:

1. **Start IOSoccer**\
   Launch the game and wait for the main menu to load.

2. **Open the options**\
   Open the **Options** from the main menu and switch to the **Keyboard** tab.

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

3. **Reconnect**\
   If the connection drops, the command `retry` brings you back to the same server without typing the address again.

> [!TIP]
> You can also reach your server directly through Steam. Enter the following address in your browser or in the Windows Run dialog – Steam launches the game and connects you automatically:
>
> ```text
> steam://connect/123.45.67.89:27015
> ```

## Via the in-game server browser

1. **Open the server browser**\
   Start IOSoccer and open the server browser in the main menu.

2. **Search for your server**\
   Switch to the **Internet** tab and search for the name of your server.

3. **Join**\
   Select your server and connect.

> [!NOTE]
> By default the **Internet** tab of the server browser hides servers that run a different game version. If your server does not show up there even though it is running, first check whether server and game are on the same version. You can still reach it through the direct connection.

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

Add these values via [SFTP](/tutorials/gameserver/establish-sftp-connection) to the following file. If it does not exist yet, create it:

```text
/iosoccer/cfg/server.cfg
```

| Setting | Meaning |
|---------|---------|
| `sv_lan 0` | Server is publicly reachable and logs in to Steam (`1` = LAN only) |
| `sv_region` | Region for the server browser (default value `255` = worldwide) |
| `sv_tags` | Custom tags players can filter by in the server browser |

> [!NOTE]
> You do not need a **Steam Game Server Login Token (GSLT)** for IOSoccer – the server does not support login tokens because it runs on an older branch of the Source Engine. With `sv_lan 0` it registers with the Steam master servers without a token. If it ever fails to register in time, trigger the registration again with `heartbeat` in the server console.

> [!TIP]
> After changing the `server.cfg` you have to restart your server for the values to be applied.

## Which ports does IOSoccer use?

> [!NOTE]
>
> | Port | Purpose |
> |------|---------|
> | **Game Port** | Gameplay, server queries and RCON – this is the port you enter when joining |
> | Client port `27005` | Local port on the player's PC, not a server address |
> | SourceTV port | Only relevant if you use SourceTV for spectators |
>
> You can see the values that apply to your server in the **dashboard**.
