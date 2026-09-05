---
slug: "change-pal-damage"
language: "en"
title: "How to Change Pal Damage on Your Palworld Server"
description: "Change Pal damage multiplier on a Palworld server"
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
short_title: "Change Pal Damage"
sort: 12
related: ["gameserver/palworld/change-max-dropped-items", "gameserver/palworld/change-pal-capture-rate", "gameserver/palworld/change-pal-spawn-rate", "gameserver/palworld/change-player-damage"]
---

You can adjust how much damage Pals deal and take.

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

4. **Adjust Pal damage**\
   **Pal attack strength:**

   ```text
   PalDamageRateAttack=1.000000
   ```

   **Pal defense:**

   ```text
   PalDamageRateDefense=1.000000
   ```

5. **Start the server**\
   Start your server.

**Examples:**

| Value | Description |
|-------|-------------|
| `0.5` | Half damage / half defense |
| `1.0` | Default |
| `2.0` | Double damage / double defense |

## All parameters

| Parameter | Default | Description |
|-----------|---------|-------------|
| `PalDamageRateAttack` | `1.0` | Pal attack strength |
| `PalDamageRateDefense` | `1.0` | Pal defense |
