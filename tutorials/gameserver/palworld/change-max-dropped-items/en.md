---
slug: "change-max-dropped-items"
language: "en"
title: "How to Change the Maximum Dropped Items on Your Palworld Server"
description: "Change maximum dropped items on a Palworld server"
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
short_title: "Change Max Dropped Items"
sort: 10
related: ["gameserver/palworld/change-guild-settings", "gameserver/palworld/change-hp-regeneration", "gameserver/palworld/change-pal-capture-rate", "gameserver/palworld/change-pal-damage"]
---

You can set how many items can be on the ground at the same time.

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

4. **Adjust limit**\
   Find the parameter `DropItemMaxNum` and adjust the value:

   ```text
   DropItemMaxNum=3000
   ```

5. **Start the server**\
   Start your server.

**Examples:**

| Value | Description |
|-------|-------------|
| `1000` | Fewer items on the ground |
| `3000` | Default |
| `5000` | More items on the ground |

> [!WARNING]
> High values can affect server performance.
