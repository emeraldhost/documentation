---
slug: "change-guild-settings"
language: "en"
title: "How to Change Guild Settings on Your Palworld Server"
description: "Change guild settings on a Palworld server"
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
short_title: "Change Guild Settings"
sort: 8
related: ["gameserver/palworld/change-egg-hatching-time", "gameserver/palworld/change-equipment-durability", "gameserver/palworld/change-hp-regeneration", "gameserver/palworld/change-max-dropped-items"]
---

You can adjust the maximum number of guild members, bases, and workers.

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

4. **Adjust guild settings**\
   **Maximum players per guild:**

   ```text
   GuildPlayerMaxNum=20
   ```

   **Maximum bases per guild:**

   ```text
   BaseCampMaxNumInGuild=4
   ```

   **Maximum workers per base:**

   ```text
   BaseCampWorkerMaxNum=15
   ```

5. **Start the server**\
   Start your server.

## All parameters

| Parameter | Default | Description |
|-----------|---------|-------------|
| `GuildPlayerMaxNum` | `20` | Maximum players per guild |
| `BaseCampMaxNumInGuild` | `4` | Maximum bases per guild |
| `BaseCampWorkerMaxNum` | `15` | Maximum workers per base |

> [!WARNING]
> High values for `BaseCampWorkerMaxNum` can affect server performance.
