---
slug: "change-structure-damage"
language: "en"
title: "How to Change Structure Damage on Your Palworld Server"
description: "Change structure damage on a Palworld server"
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
short_title: "Change Structure Damage"
sort: 16
related: ["gameserver/palworld/change-player-damage", "gameserver/palworld/change-server-name", "gameserver/palworld/change-work-speed", "gameserver/palworld/change-xp-rate"]
---

You can adjust how much damage buildings and structures take.

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

4. **Adjust structure damage**\
   There are two parameters:

   **Damage to structures:**

   ```text
   BuildObjectDamageRate=1.000000
   ```

   **Structure deterioration:**

   ```text
   BuildObjectDeteriorationDamageRate=1.000000
   ```

5. **Start the server**\
   Start your server.

**Examples:**

| Value | Description |
|-------|-------------|
| `0` | No damage / no deterioration |
| `0.5` | Half damage |
| `1.0` | Default |
| `2.0` | Double damage |
