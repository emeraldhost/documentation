---
slug: "add-mods"
language: "en"
title: "How to Add Mods to Your Soulmask Server"
description: "Add mods to a Soulmask server"
tags: []
date: "2026-04-10"
visibility: "public"
cta: "gameserver"
product_keys: ["soulmask"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Add Mods"
sort: 2
related: ["gameserver/soulmask/add-admin", "gameserver/soulmask/add-savegame", "gameserver/soulmask/change-map", "gameserver/soulmask/change-max-players"]
---

You can add Steam Workshop mods to your server to enhance the gameplay experience.

> [!WARNING]
> Stop your server before adding mods. After a game update, mods may be incompatible and cause crashes.

## Download mods

1. **Subscribe in Steam Workshop**\
   Open the [Steam Workshop for Soulmask](https://steamcommunity.com/app/2646460/workshop/) and subscribe to the desired mods.

2. **Find mod folders**\
   The downloaded mods can be found on your PC at:

   ```text
   %LOCALAPPDATA%\WS\Saved\Mods\
   ```

## Upload mods to the server

1. **Stop the server**\
   Stop your server via the dashboard.

2. **Connect via SFTP**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection).

3. **Upload mods**\
   Upload the mod folders to the following directory:

   ```text
   /WS/Saved/Mods/
   ```

4. **Start the server**\
   Start your server.

> [!IMPORTANT]
> All players must **subscribe to the same mods** via the Steam Workshop to be able to join the server.
