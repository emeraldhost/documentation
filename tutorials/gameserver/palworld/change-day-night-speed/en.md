---
slug: "change-day-night-speed"
language: "en"
title: "How to Change the Day/Night Speed on Your Palworld Server"
description: "Change the day/night speed on a Palworld server"
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
short_title: "Change Day/Night Speed"
sort: 4
related: ["gameserver/palworld/broadcast-message", "gameserver/palworld/adjust-hunger-stamina", "gameserver/palworld/change-drop-rate", "gameserver/palworld/change-egg-hatching-time"]
---

You can adjust the speed of the day-night cycle separately for day and night.

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

4. **Adjust speed**\
   Find the parameters `DayTimeSpeedRate` and `NightTimeSpeedRate`:

   ```text
   DayTimeSpeedRate=1.000000
   NightTimeSpeedRate=1.000000
   ```

5. **Start the server**\
   Start your server.

**Examples:**

| Value | Description |
|-------|-------------|
| `0.5` | Twice as long day/night |
| `1.0` | Default |
| `2.0` | Half as long day/night |

> [!TIP]
> A lower value means longer days/nights, a higher value means shorter ones.
