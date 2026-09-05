---
slug: "join-server"
language: "en"
title: "How to Join Your Operation Harsh Doorstop Server"
description: "Join an Operation Harsh Doorstop server"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["operation-harsh-doorstop"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Join Server"
sort: 4
related: ["gameserver/operation-harsh-doorstop/add-admin", "gameserver/operation-harsh-doorstop/add-mods", "gameserver/operation-harsh-doorstop/create-backup", "gameserver/operation-harsh-doorstop/kick-ban-players"]
---

You can either find your server in the in-game server browser or add it to Steam as a favorite. For the entry in Steam you usually need the **Query Port** and not the Game Port.

## Find connection details

> [!IMPORTANT]
> The IP address and the ports of your server can be found in the **dashboard**. There are no fixed default values – the ports are assigned to your server and may differ from those of other servers.

## Via the in-game server browser

This is the easiest way: you need neither the IP address nor a port.

1. **Start Operation Harsh Doorstop**\
   Launch the game and wait for the main menu to load.

2. **Open Multiplayer**\
   Select the **Multiplayer** tab in the main menu.

3. **Search for your server**\
   Look for your server name in the server list. Use the search function or the filter of the list.

4. **Join the server**\
   Select your server and confirm to join.

> [!NOTE]
> A freshly started server does not appear in the list immediately. Wait a few minutes after the first start before searching.

## Via Steam favorites

If your server does not show up in the server browser, add it directly in Steam.

> [!NOTE]
> The easiest way is to add the server while Operation Harsh Doorstop is closed. Afterwards you start the game straight from the favorites entry.

1. **Open Steam**\
   Open the Steam client.

2. **Open the server browser**\
   Click on **View** in the top left and select **Game Servers**.

3. **Add the server**\
   Switch to the **Favorites** tab and click **+** or **Add Server** at the bottom right.

4. **Enter the server address**\
   Enter the IP address and the **Query Port** of your server, separated by a colon:

   ```text
   <IP address>:<Query Port>
   ```

   > [!TIP]
   > The values that apply to your server are shown in the **dashboard**. If Steam does not find the server this way, try the same entry with the **Game Port**.

5. **Refresh the list**\
   Click **Refresh** so Steam queries the server. If the server responds, you see its name, map and player count.

6. **Join**\
   Connect straight from Steam or start the game and select the server in the favorites section.

## Which ports does Operation Harsh Doorstop use?

> [!NOTE]
> An Operation Harsh Doorstop server uses several ports with different purposes:
>
> | Port | Protocol | Purpose |
> |------|----------|---------|
> | Game Port | UDP | Carries the actual game traffic |
> | Query Port | UDP | Steam and the server browser query your server through this port – this is the one you enter in the Steam favorites |
> | RCON port | TCP | Remote control of the server through an RCON client |
>
> Which values apply to your server is shown in the **dashboard**.

> [!WARNING]
> **Server cannot be found**
>
> If your server appears neither in the server browser nor after adding it to your favorites, check the following:
>
> - Is the server actually running according to the dashboard?
> - Did you enter the **Query Port**? Try the **Game Port** as an alternative.
> - If the dashboard only shows one port, ask support which port is the Query Port.
> - Did you refresh the list in Steam after adding the server? Without a refresh the entry stays empty.

> [!NOTE]
> **Mods on the server**
>
> If your server runs a modded map or game mode, you need the matching content on your PC as well. Subscribe to the mods used on the **Steam Workshop** and restart the game afterwards. See [Add Mods](/tutorials/gameserver/operation-harsh-doorstop/add-mods) for more.
