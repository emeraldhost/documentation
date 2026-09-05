---
slug: "adjust-hunger-stamina"
language: "en"
title: "How to Adjust Hunger and Stamina on Your Palworld Server"
description: "Adjust hunger and stamina on a Palworld server"
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
short_title: "Adjust Hunger & Stamina"
sort: 3
related: ["gameserver/palworld/add-admin", "gameserver/palworld/broadcast-message", "gameserver/palworld/change-day-night-speed", "gameserver/palworld/change-drop-rate"]
---

You can configure how quickly hunger and stamina deplete for players and Pals.

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

4. **Adjust values**\
   **Player hunger:**

   ```text
   PlayerStomachDecreaceRate=1.000000
   ```

   **Player stamina:**

   ```text
   PlayerStaminaDecreaceRate=1.000000
   ```

   **Pal hunger:**

   ```text
   PalStomachDecreaceRate=1.000000
   ```

   **Pal stamina:**

   ```text
   PalStaminaDecreaceRate=1.000000
   ```

5. **Start the server**\
   Start your server.

**Examples:**

| Value | Description |
|-------|-------------|
| `0.5` | Slower depletion (easier) |
| `1.0` | Default |
| `2.0` | Faster depletion (harder) |

> [!NOTE]
> The spelling `Decreace` in the parameter name is intentional and must be used exactly as shown.
