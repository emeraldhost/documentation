---
slug: "deactivate-player-damage"
language: "en"
title: "How to Disable Player Damage on Your Euro Truck Simulator 2 Server"
description: "Step-by-step guide on how to disable player damage on your Euro Truck Simulator 2 server."
tags: []
date: "2025-09-09"
visibility: "public"
updated: "2026-03-19"
cta: "gameserver"
product_keys: ["euro-truck-simulator-2"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Deactivate Player Damage"
sort: 4
related: ["gameserver/euro-truck-simulator-2/add-mods", "gameserver/euro-truck-simulator-2/create-backup", "gameserver/euro-truck-simulator-2/join-server", "gameserver/euro-truck-simulator-2/kick-ban-players"]
---

1. **Open dashboard**\
   Open your dashboard and select your Euro Truck Simulator 2 server.

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
