---
slug: "add-mods"
language: "en"
title: "How to Install Mods on a The Bus Server"
description: "Install mods on a The Bus server"
tags: []
date: "2026-02-24"
visibility: "public"
updated: "2026-03-07"
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

The Bus supports mods via the **Steam Workshop**. Mods are placed in the mods folder on the server.

> [!TIP]
> You can find mods for The Bus on the [Steam Workshop](https://steamcommunity.com/workshop/browse/?appid=491540).

## How to install mods

1. **Download mod**\
   Open the [Steam Workshop for The Bus](https://steamcommunity.com/workshop/browse/?appid=491540) and subscribe to the desired mods. The mods can then be found in the following folder:

   ```text
   SteamLibrary/steamapps/workshop/content/491540/
   ```

2. **Upload mod**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection) and upload the mod files to the `TheBus/Mods/` folder.

3. **Restart server**\
   Restart your server so the mods are loaded.

> [!TIP]
> Use the `maplist` command in the server console to check if map mods have been detected correctly.

## Mod Types

Pay attention to the mod type labels, as they determine where the mod needs to be installed:

| Type | Description |
|------|-------------|
| **Client and Server** | Must be installed on both the server and all players |
| **Client only** | Normally only required on the player's side – however, if the mod is installed on the server, all players must install it too |
| **Server only** | Only required on the server and is deactivated for players |

> [!WARNING]
> **Important**
>
> Compatible mods are automatically activated on the server. Make sure all players have installed the required client mods, otherwise they won't be able to join.
