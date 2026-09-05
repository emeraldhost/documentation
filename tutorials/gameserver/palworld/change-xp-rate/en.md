---
slug: "change-xp-rate"
language: "en"
title: "How to Change the XP Rate on Your Palworld Server"
description: "Change the XP rate on a Palworld server"
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
short_title: "Change XP Rate"
sort: 18
related: ["gameserver/palworld/change-structure-damage", "gameserver/palworld/change-work-speed", "gameserver/palworld/create-backup", "gameserver/palworld/disable-death-penalty"]
---

You can adjust the experience points multiplier to level up faster or slower.

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

4. **Adjust XP rate**\
   Find the parameter `ExpRate` and adjust the value:

   ```text
   ExpRate=1.000000
   ```

5. **Start the server**\
   Start your server.

**Examples:**

| Value | Description |
|-------|-------------|
| `0.5` | Half XP |
| `1.0` | Default |
| `2.0` | Double XP |
| `5.0` | 5x XP |
