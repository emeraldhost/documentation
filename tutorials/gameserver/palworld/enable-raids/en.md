---
slug: "enable-raids"
language: "en"
title: "How to Enable or Disable Raids on Your Palworld Server"
description: "Enable or disable raids on a Palworld server"
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
short_title: "Enable Raids"
sort: 26
related: ["gameserver/palworld/enable-hardcore-mode", "gameserver/palworld/enable-pvp", "gameserver/palworld/add-mods", "gameserver/palworld/join-server"]
---

You can configure whether enemy invasions on player bases occur.

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

4. **Configure raids**\
   Find the parameter `bEnableInvaderEnemy` and set the desired value:

   ```text
   bEnableInvaderEnemy=True
   ```

5. **Start the server**\
   Start your server.

| Value | Description |
|-------|-------------|
| `True` | Raids enabled (default) |
| `False` | Raids disabled |
