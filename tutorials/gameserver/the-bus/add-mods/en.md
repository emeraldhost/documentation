---
slug: "add-mods"
language: "en"
title: "How to Install Mods on a The Bus Server"
description: "Install mods on a The Bus server"
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
short_title: "Add Mods"
sort: 14
related: ["gameserver/the-bus/download-savegame", "gameserver/the-bus/enable-ai-buses", "gameserver/the-bus/add-savegame", "gameserver/the-bus/join-server"]
---

The Bus supports mods via the **Steam Workshop**. Mods are placed in the `/TheBus/Mods/` folder on the server. Compatible mods are always activated automatically on the server – you don't need to enable them separately after uploading.

> [!TIP]
> You can find mods for The Bus on the [Steam Workshop](https://steamcommunity.com/workshop/browse/?appid=491540).

## How to Install Mods

1. **Download mod**\
   Subscribe to the desired mods on the [Steam Workshop for The Bus](https://steamcommunity.com/workshop/browse/?appid=491540). Steam then downloads them to the following folder on your PC:

   ```text
   SteamLibrary/steamapps/workshop/content/491540/
   ```

2. **Stop the server**\
   Stop your server via the dashboard.

3. **Connect via SFTP**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection).

4. **Upload mod**\
   Upload the folder of each mod to the `/TheBus/Mods/` folder.

5. **Start the server**\
   Start your server again so the mods are loaded.

> [!TIP]
> To check whether a map mod has been loaded, look in-game after the start: open the **Admin Menu** from the pause menu and check whether the map appears in the map selection. You need owner or admin rights ([Add Admin](/tutorials/gameserver/the-bus/add-admin)). Alternatively, `/mapList` in the chat lists all available maps; `/commands` shows all commands. To learn how to switch the map, see [Change Map](/tutorials/gameserver/the-bus/change-map).

## Operating Plans and Fleets from the Workshop

You can also upload operating plans and fleets from the Steam Workshop to the `/TheBus/Mods/` folder, the same way as mods from the Workshop folder (see step 1). The server loads them from there, and you can then select them as usual. For more information, see [Change Operating Plan](/tutorials/gameserver/the-bus/change-operating-plan) and [Change Fleet](/tutorials/gameserver/the-bus/change-fleet).

## Mod Types

Pay attention to the mod type labels, as they determine where the mod needs to be installed:

| Type | Description |
|------|-------------|
| **Client and Server** | Must be installed on the server and by all players |
| **Client only** | Normally only required on the player's side – however, if the mod is installed on the server, all players must install it too |
| **Server only** | Only required on the server and is deactivated for players |

> [!WARNING]
> Compatible mods are automatically activated on the server. Make sure all players have installed the required client mods, otherwise they won't be able to join.

## Mods After a Game Update

Mods built for a different minor version of the game (e.g. an older version than the current one) are marked as "potentially incompatible". After an update, check the Workshop for an updated version of the mod and upload it to your server.

> [!NOTE]
> If your server crashes or no longer starts after a game update, temporarily remove the mods from the `/TheBus/Mods/` folder and start the server again. If it starts again, add the mods back one by one to find the faulty mod. For more solutions, see [Troubleshoot Server](/tutorials/gameserver/the-bus/troubleshoot-server).
