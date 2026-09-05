---
slug: "join-server"
language: "en"
title: "How to Join Your Left 4 Dead Server"
description: "Join a Left 4 Dead server"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["left-4-dead"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Join Server"
sort: 4
related: ["gameserver/left-4-dead/add-admin", "gameserver/left-4-dead/add-mods", "gameserver/left-4-dead/create-backup", "gameserver/left-4-dead/kick-ban-players"]
---

Left 4 Dead is built around lobbies. The most reliable ways onto your own server are a **direct connection** through the game console or the **Steam favorites**.

> [!IMPORTANT]
> For players to be able to join directly, the line `sv_allow_lobby_connect_only "0"` has to be set in your `server.cfg`. The default value is `1` – in that case joining is only possible through a matchmaking lobby and every direct connection fails. How to set it is described below.

## Find connection details

> [!NOTE]
> You can find the **IP address** and the **Game Port** of your server in the **dashboard** of your server. Left 4 Dead uses the same port for gameplay and for server queries – there is **no separate Query Port**.

> [!WARNING]
> Always enter the **Game Port** from the dashboard. Port `27005` is the local client port of your game and must not be used as a server address.

## Allow direct connections on the server

You only have to do this once.

1. **Stop the server**\
   Stop your server via the dashboard.

2. **Connect via SFTP**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection).

3. **Open server.cfg**\
   Open the following file. If it does not exist yet, create it:

   ```text
   /left4dead/cfg/server.cfg
   ```

4. **Enable direct connections**\
   Add the following line or set it to `0`:

   ```text
   sv_allow_lobby_connect_only "0"
   ```

   > [!NOTE]
   > The engine describes the value as follows: if it is set to `1`, players may only join the server from a matchmaking lobby and may not connect directly.

5. **Start the server**\
   Save the file and start your server.

## Enable the developer console in the game

The console is disabled by default in Left 4 Dead.

1. **Start Left 4 Dead**\
   Launch the game and wait for the main menu to load.

2. **Open the settings**\
   Open the **Options** and switch to **Keyboard/Mouse**.

3. **Enable the console**\
   Enable the **Developer Console** there.

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
   Select the server and connect. The server then also appears in the favorites section inside the game.

## Onto your own server from a lobby

If you want to start a campaign from a lobby the usual way but play on your own server, there are two options.

### Set a search key

A search key restricts the server search started from a lobby to servers using the same key.

1. **Set the key on the server**\
   Add the following line to `/left4dead/cfg/server.cfg` and restart the server:

   ```text
   sv_search_key "mykey"
   ```

2. **Set the key in the game**\
   Every player in the lobby enters the same value in the game console:

   ```text
   sv_search_key "mykey"
   ```

3. **Start the campaign**\
   When the lobby then starts a campaign, only servers using this key are searched.

### Force a specific server

Alternatively the lobby leader points the lobby at the server directly. The command is entered in the **game console**, not on the server:

```text
mm_dedicated_force_servers 123.45.67.89:27015
```

> [!NOTE]
> The command expects a comma-delimited list of `IP:Port` entries. Instead of searching for public servers, the lobby then only uses the servers listed there. Use the IP address and the Game Port from your dashboard here as well.

> [!WARNING]
> The search key only applies to the server search started from a lobby. You cannot search for it in the public server list – when in doubt, use the direct connection or the Steam favorites.
