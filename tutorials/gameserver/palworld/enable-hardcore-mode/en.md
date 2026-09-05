---
slug: "enable-hardcore-mode"
language: "en"
title: "How to Enable Hardcore Mode on Your Palworld Server"
description: "Enable hardcore mode on a Palworld server"
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
short_title: "Enable Hardcore Mode"
sort: 24
related: ["gameserver/palworld/edit-server-config", "gameserver/palworld/enable-fast-travel", "gameserver/palworld/enable-pvp", "gameserver/palworld/enable-raids"]
---

In hardcore mode, players cannot respawn and Pals are permanently lost on death.

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

4. **Enable hardcore mode**\
   Find the following parameters and set them to `True`:

   ```text
   bHardcore=True
   bPalLost=True
   ```

5. **Start the server**\
   Start your server.

## All parameters

| Parameter | Default | Description |
|-----------|---------|-------------|
| `bHardcore` | `False` | Players cannot respawn |
| `bPalLost` | `False` | Pals are permanently lost on death |

> [!TIP]
> You can enable the parameters individually, e.g. only `bPalLost=True` without hardcore mode.
