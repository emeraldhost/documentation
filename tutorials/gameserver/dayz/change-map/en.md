---
slug: "change-map"
language: "en"
title: "How to Change the Map on Your DayZ Server"
description: "Change the map on a DayZ server"
tags: []
date: "2026-04-08"
visibility: "public"
cta: "gameserver"
product_keys: ["dayz"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Change Map"
sort: 5
related: ["gameserver/dayz/add-savegame", "gameserver/dayz/adjust-loot", "gameserver/dayz/change-time", "gameserver/dayz/configure-pvp"]
---

You can switch between the official maps **Chernarus** and **Livonia**.

> [!WARNING]
> For the Livonia map you need the **Livonia DLC** in DayZ. Players without the DLC cannot join the server.

1. **Stop the server**\
   Stop your server via the dashboard.

2. **Connect via SFTP**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection).

3. **Open serverDZ.cfg**\
   Open the file `serverDZ.cfg` in the root directory of your server.

4. **Set the map**\
   Find the `class Missions` section and change the `template` value:

   ```text
   class Missions
   {
       class Mission1
       {
           template="dayzOffline.chernarusplus";
       };
   };
   ```

   | Value | Map |
   |-------|-----|
   | `dayzOffline.chernarusplus` | Chernarus (default) |
   | `dayzOffline.enoch` | Livonia (DLC) |

5. **Start the server**\
   Save the file and start your server.

> [!NOTE]
> On first startup with a new map, a new world is automatically generated. Your previous progress on the old map is preserved.
