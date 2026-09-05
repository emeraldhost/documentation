---
slug: "download-savegame"
language: "en"
title: "How to Download the Savegame of Your DayZ Server"
description: "Download a savegame from a DayZ server"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["dayz"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Download Savegame"
sort: 9
related: ["gameserver/dayz/configure-pvp", "gameserver/dayz/create-backup", "gameserver/dayz/enable-crosshair", "gameserver/dayz/enable-third-person"]
---

You can download your server's savegame to your PC at any time – for example as an extra backup, to archive it, or to move it to another server. The savegame is located in the `storage_1` folder.

> [!NOTE]
> DayZ saves are stored server-side only. The downloaded folder can therefore only be restored to another DayZ server, not to a singleplayer game.

> [!WARNING]
> **Caution**
>
> Stop your server before downloading the files. While the server is running it saves regularly, so you would end up downloading an incomplete or corrupted save.

1. **Stop the server**\
   Stop your server via the dashboard.

2. **Connect via SFTP**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection).

3. **Open the directory**\
   Navigate to the following directory:

   ```text
   /mpmissions/dayzOffline.chernarusplus/storage_1/
   ```

   > [!TIP]
   > If you are using the Livonia map, the path is:
   >
   > ```text
   > /mpmissions/dayzOffline.enoch/storage_1/
   > ```

4. **Download the folder**\
   Download the complete `storage_1` folder including all files inside it to your PC. It holds the entire world state of your server including buildings, loot and vehicles.

5. **Start the server**\
   Start your server again.

> [!TIP]
> **Finding the right mission**
>
> The `storage_1` folder is always located inside the mission folder of the map your server currently loads: `dayzOffline.chernarusplus` for Chernarus, `dayzOffline.enoch` for Livonia. If you run a different map, you will find the folder in that map's mission folder under `/mpmissions/`.

> [!TIP]
> **Restoring the save later**
>
> If you want to transfer the save back to a server later on, follow the guide [Add savegame](/tutorials/gameserver/dayz/add-savegame).

> [!NOTE]
> **Regular backups**
>
> For automatic or regular backups you can also use the backup function: [Create backup](/tutorials/gameserver/dayz/create-backup).
