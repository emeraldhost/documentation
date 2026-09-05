---
slug: "change-work-speed"
language: "en"
title: "How to Change the Work Speed on Your Palworld Server"
description: "Change work speed on a Palworld server"
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
short_title: "Change Work Speed"
sort: 17
related: ["gameserver/palworld/change-server-name", "gameserver/palworld/change-structure-damage", "gameserver/palworld/change-xp-rate", "gameserver/palworld/create-backup"]
---

You can adjust how fast Pals work at workstations.

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

4. **Adjust work speed**\
   Find the parameter `WorkSpeedRate` and adjust the value:

   ```text
   WorkSpeedRate=1.000000
   ```

5. **Start the server**\
   Start your server.

**Examples:**

| Value | Description |
|-------|-------------|
| `0.5` | Half work speed |
| `1.0` | Default |
| `2.0` | Double work speed |
| `5.0` | 5x work speed |
