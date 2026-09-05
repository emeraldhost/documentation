---
slug: "deactivate-player-damage"
language: "en"
title: "How to Disable Player Damage on Your American Truck Simulator Server"
description: "Step-by-step guide on how to disable player damage on your American Truck Simulator server."
tags: []
date: "2025-09-09"
visibility: "public"
updated: "2026-03-19"
cta: "gameserver"
product_keys: ["american-truck-simulator"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Deactivate Player Damage"
sort: 4
related: ["gameserver/american-truck-simulator/add-mods", "gameserver/american-truck-simulator/create-backup", "gameserver/american-truck-simulator/join-server", "gameserver/american-truck-simulator/kick-ban-players"]
---

1. **Open dashboard**\
   Open your dashboard and select your American Truck Simulator server.

2. **Open file browser**\
   Go to the file browser.

3. **Open config file**\
   Open the file `server_config.sii`.

4. **Find entry**\
   Look for the following entry:

    ```text
    player_damage: true
    ```

5. **Change value**\
   Change the value to `false`.
