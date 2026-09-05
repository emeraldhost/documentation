---
slug: "change-pal-capture-rate"
language: "en"
title: "How to Change the Pal Capture Rate on Your Palworld Server"
description: "Change the Pal capture rate on a Palworld server"
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
short_title: "Change Pal Capture Rate"
sort: 11
related: ["gameserver/palworld/change-hp-regeneration", "gameserver/palworld/change-max-dropped-items", "gameserver/palworld/change-pal-damage", "gameserver/palworld/change-pal-spawn-rate"]
---

You can adjust the capture chance multiplier for catching Pals.

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

4. **Adjust capture rate**\
   Find the parameter `PalCaptureRate` and adjust the value:

   ```text
   PalCaptureRate=1.000000
   ```

5. **Start the server**\
   Start your server.

**Examples:**

| Value | Description |
|-------|-------------|
| `0.5` | Harder to catch |
| `1.0` | Default |
| `2.0` | Double catch chance |
