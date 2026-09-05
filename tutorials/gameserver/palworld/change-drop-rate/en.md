---
slug: "change-drop-rate"
language: "en"
title: "How to Change the Drop Rate on Your Palworld Server"
description: "Change the drop rate on a Palworld server"
tags: []
date: "2026-02-28"
visibility: "public"
cta: "gameserver"
product_keys: ["palworld"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Change Drop Rate"
sort: 5
related: ["gameserver/palworld/adjust-hunger-stamina", "gameserver/palworld/change-day-night-speed", "gameserver/palworld/change-egg-hatching-time", "gameserver/palworld/change-equipment-durability"]
---

You can adjust the amount of items dropped when gathering and from defeated enemies.

> [!WARNING]
> Make sure your server is stopped before editing the config file. Changes to the `PalWorldSettings.ini` will otherwise be overwritten by the game.

1. **Stop the server**\
   Stop your server via the dashboard.

2. **Connect via SFTP**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection).

3. **Open config file**\
   Open the file `PalWorldSettings.ini` at:

   ```text
   /Pal/Saved/Config/LinuxServer/PalWorldSettings.ini
   ```

4. **Adjust drop rate**\
   There are two parameters for different drop types:

   **Resource drops** (mining, gathering):

   ```text
   CollectionDropRate=1.000000
   ```

   **Enemy drops** (defeated enemies):

   ```text
   EnemyDropItemRate=1.000000
   ```

5. **Start the server**\
   Start your server.

**Examples:**

| Value | Description |
|-------|-------------|
| `1.0` | Default |
| `2.0` | Double drops |
| `5.0` | 5x drops |
