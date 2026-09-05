---
slug: "adjust-loot"
language: "en"
title: "How to Adjust the Loot Distribution on Your DayZ Server"
description: "Adjust loot distribution on a DayZ server"
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
short_title: "Adjust Loot"
sort: 4
related: ["gameserver/dayz/add-mods", "gameserver/dayz/add-savegame", "gameserver/dayz/change-map", "gameserver/dayz/change-time"]
---

You can adjust the spawn rates and quantities of items via the `types.xml` file.

1. **Stop the server**\
   Stop your server via the dashboard.

2. **Connect via SFTP**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection).

3. **Open types.xml**\
   Open the file `types.xml` in the directory:

   ```text
   /mpmissions/dayzOffline.chernarusplus/db/types.xml
   ```

   > [!NOTE]
   > For Livonia, the file is located at `/mpmissions/dayzOffline.enoch/db/types.xml`.

4. **Adjust item**\
   Find the desired item and adjust the values. Example for ammunition:

   ```xml
   <type name="Ammo_545x39">
       <nominal>120</nominal>
       <lifetime>14400</lifetime>
       <restock>1800</restock>
       <min>80</min>
       <quantmin>20</quantmin>
       <quantmax>60</quantmax>
       <cost>100</cost>
   </type>
   ```

   | Setting | Description |
   |---------|-------------|
   | `nominal` | Maximum amount on the map |
   | `min` | Minimum amount on the map |
   | `lifetime` | Lifetime in seconds |
   | `restock` | Time until respawn |
   | `quantmin` / `quantmax` | Min/max stack size |
   | `cost` | Spawn priority |

5. **Start the server**\
   Save the file and start your server.

> [!WARNING]
> A faulty `types.xml` can prevent your server from starting. Always make a backup of the file before making changes.

> [!TIP]
> There are online tools like [DayZ Editor](https://dayzeditor.com/) or the [DayZ Loot Editor](https://www.dayz-loot-editor.com/) that make editing the `types.xml` easier.
