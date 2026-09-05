---
slug: "change-hp-regeneration"
language: "en"
title: "How to Change HP Regeneration on Your Palworld Server"
description: "Change HP regeneration on a Palworld server"
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
short_title: "Change HP Regeneration"
sort: 9
related: ["gameserver/palworld/change-equipment-durability", "gameserver/palworld/change-guild-settings", "gameserver/palworld/change-max-dropped-items", "gameserver/palworld/change-pal-capture-rate"]
---

You can adjust how quickly players and Pals regenerate health.

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

4. **Adjust HP regeneration**\
   **Player regeneration:**

   ```text
   PlayerAutoHPRegeneRate=1.000000
   ```

   **Player regeneration while sleeping:**

   ```text
   PlayerAutoHpRegeneRateInSleep=1.000000
   ```

   **Pal regeneration:**

   ```text
   PalAutoHPRegeneRate=1.000000
   ```

   **Pal regeneration while sleeping:**

   ```text
   PalAutoHpRegeneRateInSleep=1.000000
   ```

5. **Start the server**\
   Start your server.

**Examples:**

| Value | Description |
|-------|-------------|
| `0.5` | Slower regeneration |
| `1.0` | Default |
| `2.0` | Double regeneration |
| `5.0` | 5x regeneration |
