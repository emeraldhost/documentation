---
slug: "change-pal-spawn-rate"
language: "en"
title: "How to Change the Pal Spawn Rate on Your Palworld Server"
description: "Change the Pal spawn rate on a Palworld server"
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
short_title: "Change Pal Spawn Rate"
sort: 13
related: ["gameserver/palworld/change-pal-capture-rate", "gameserver/palworld/change-pal-damage", "gameserver/palworld/change-player-damage", "gameserver/palworld/change-server-name"]
---

You can adjust how many Pals spawn on the map.

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

4. **Adjust spawn rate**\
   Find the parameter `PalSpawnNumRate` and adjust the value:

   ```text
   PalSpawnNumRate=1.000000
   ```

5. **Start the server**\
   Start your server.

**Examples:**

| Value | Description |
|-------|-------------|
| `0.5` | Fewer Pals |
| `1.0` | Default |
| `2.0` | Twice as many Pals |

> [!WARNING]
> High values can affect server performance.
