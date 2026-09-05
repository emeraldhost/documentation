---
slug: "change-egg-hatching-time"
language: "en"
title: "How to Change the Egg Hatching Time on Your Palworld Server"
description: "Change the egg hatching time on a Palworld server"
tags: []
date: "2026-02-28"
visibility: "public"
updated: "2026-07-16"
cta: "gameserver"
product_keys: ["palworld"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Change Egg Hatching Time"
sort: 6
related: ["gameserver/palworld/change-day-night-speed", "gameserver/palworld/change-drop-rate", "gameserver/palworld/change-equipment-durability", "gameserver/palworld/change-guild-settings"]
---

You can adjust the time it takes for Pal eggs to hatch.

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

4. **Adjust hatching time**\
   Find the parameter `PalEggDefaultHatchingTime` and adjust the value:

   ```text
   PalEggDefaultHatchingTime=1.000000
   ```

   The value is in **hours** and applies to the largest egg (Huge Egg) – smaller eggs hatch correspondingly faster.

5. **Start the server**\
   Start your server.

**Examples:**

| Value | Description |
|-------|-------------|
| `0` | Instant hatching |
| `1.0` | 1 hour (default) |
| `24.0` | 1 day |
| `72.0` | 3 days |

> [!NOTE]
> As of the 1.0 release, the default value is `1` hour. Servers created before 1.0 keep the value set in their config (previous default: `72`).
