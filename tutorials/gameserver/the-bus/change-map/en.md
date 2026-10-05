---
slug: "change-map"
language: "en"
title: "How to Change the Map on a The Bus Server"
description: "Change map on a The Bus server"
tags: []
date: "2026-02-24"
visibility: "public"
updated: "2026-10-05"
cta: "gameserver"
product_keys: ["the-bus"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Change Map"
sort: 4
related: ["gameserver/the-bus/add-admin", "gameserver/the-bus/change-fleet", "gameserver/the-bus/change-operating-plan", "gameserver/the-bus/change-ticket-chance"]
---

The base map of The Bus is **Berlin** with the lines TXL, 100, N100, 123, 142, 147, 200, 245 and 300. Additional maps come from DLCs (currently the Hamburg City DLC, selectable in-game as the map **Hamburg**) or from map mods that you install in the `/TheBus/Mods/` folder.

You can change the active map via the **Admin Menu** or by **command** in the in-game chat.

> [!NOTE]
> All players need the DLC of the respective map, or the map mod if it is also required on the client, to join and play on the map.

> [!TIP]
> Create a [backup](/tutorials/gameserver/the-bus/create-backup) before switching maps. Savegames and operating plans each belong to a specific map.

## How to Change the Map via the Admin Menu

1. **Join the Server**\
   Join your server in-game, see [Join Server](/tutorials/gameserver/the-bus/join-server).

2. **Open the Admin Menu**\
   Open the pause menu in-game and select the **Admin Menu**. If you are not an Admin yet, enter your server's admin password, see [Add Admin](/tutorials/gameserver/the-bus/add-admin).

3. **Select the Map**\
   Select the desired map in the Admin Menu.

> [!NOTE]
> Since Update 3.2 EA, the map selected in the Admin Menu is saved and kept after a restart of your server.

## How to Change the Map via Command

Alternatively, you can switch the map via the in-game chat. You need Owner or Admin permissions for this, see [Add Admin](/tutorials/gameserver/the-bus/add-admin).

1. **Show Available Maps**\
   Enter the following command in the in-game chat to list all available maps:

   ```text
   /mapList
   ```

2. **Switch the Map**\
   Enter the following command and replace `<mapname>` with the name of the map exactly as `/mapList` shows it:

   ```text
   /map <mapname>
   ```

   For the Hamburg map, for example, the command is:

   ```text
   /map Hamburg
   ```

   > [!TIP]
   > To switch back to the default map Berlin, use `/map` with the name that `/mapList` shows for Berlin.

> [!NOTE]
> Use `/commands` to show all available commands. On our servers, the console in the dashboard only shows the server output and does not accept commands.

## How to Add More Maps

- For a full walkthrough on switching to Hamburg, see [Play a DLC Map](/tutorials/gameserver/the-bus/add-dlc-map).
- To learn how to install map mods, see [Add Mods](/tutorials/gameserver/the-bus/add-mods).
