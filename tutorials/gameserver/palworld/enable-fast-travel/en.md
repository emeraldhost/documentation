---
slug: "enable-fast-travel"
language: "en"
title: "How to Enable or Disable Fast Travel on Your Palworld Server"
description: "Enable or disable fast travel on a Palworld server"
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
short_title: "Enable Fast Travel"
sort: 23
related: ["gameserver/palworld/download-savegame", "gameserver/palworld/edit-server-config", "gameserver/palworld/enable-hardcore-mode", "gameserver/palworld/enable-pvp"]
---

You can configure whether players can use the fast travel feature.

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

4. **Configure fast travel**\
   Find the parameter `bEnableFastTravel` and set the desired value:

   ```text
   bEnableFastTravel=True
   ```

5. **Start the server**\
   Start your server.

| Value | Description |
|-------|-------------|
| `True` | Fast travel enabled (default) |
| `False` | Fast travel disabled |
