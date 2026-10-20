---
slug: "change-map"
language: "en"
title: "How to Change the Map on Your DayZ Server"
description: "Change the map on a DayZ server, e.g. to Sakhal or the new Nasdara map"
tags: []
date: "2026-04-08"
visibility: "public"
updated: "2026-10-20"
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

You can switch between the four official maps:

| Map | DLC |
|-----|-----|
| **Chernarus** | – (base game) |
| **Livonia** | Livonia |
| **Sakhal** | DayZ Frostline |
| **Nasdara** | DayZ Badlands |

**Nasdara** is the newest map. It was released on October 15, 2026 together with the **DayZ Badlands** DLC and Update 1.30 and, at 267 km², it is the largest official DayZ map.

> [!WARNING]
> You don't need to buy a DLC for your server. Your players, however, need the matching DLC: for servers running Sakhal, Bohemia Interactive requires DayZ Frostline, and for Livonia the Livonia DLC. For Nasdara, players will most likely need DayZ Badlands as well – Bohemia has not officially confirmed this yet.

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
   | `dayzOffline.sakhal` | Sakhal (DayZ Frostline DLC) |
   | `dayzOffline.nasdara` | Nasdara (DayZ Badlands DLC) |

   > [!TIP]
   > **Example for Nasdara**
   >
   > ```text
   > template="dayzOffline.nasdara";
   > ```

5. **Start the server**\
   Save the file and start your server.

> [!IMPORTANT]
> Nasdara is only available from version 1.30. If the **Auto Update** field in the **Config Editor** in the dashboard is set to `1`, your server updates automatically on start. Check whether the `dayzOffline.nasdara` folder exists in the `/mpmissions/` folder. If it is missing, your server is not up to date yet.

> [!NOTE]
> On first startup with a new map, a new world is automatically generated. Your previous progress on the old map is preserved.
