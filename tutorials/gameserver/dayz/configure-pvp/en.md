---
slug: "configure-pvp"
language: "en"
title: "How to Configure PvP and PvE on Your DayZ Server"
description: "Configure PvP and PvE on a DayZ server"
tags: []
date: "2026-04-08"
visibility: "public"
cta: "gameserver"
product_keys: ["dayz"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Configure PvP"
sort: 7
related: ["gameserver/dayz/change-map", "gameserver/dayz/change-time", "gameserver/dayz/create-backup", "gameserver/dayz/download-savegame"]
---

You can adjust friendly fire and damage between players via the `serverDZ.cfg`.

1. **Stop the server**\
   Stop your server via the dashboard.

2. **Connect via SFTP**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection).

3. **Open serverDZ.cfg**\
   Open the file `serverDZ.cfg` in the root directory of your server.

4. **Adjust settings**\
   Find and adjust the following values:

   ```text
   enableCfgGameplayFile = 1;
   disableDamageSystem = 0;
   ```

   | Setting | Description | Values |
   |---------|-------------|--------|
   | `disableDamageSystem` | Damage system (PvP) | `0` = enabled, `1` = disabled |
   | `enableCfgGameplayFile` | Extended gameplay configuration | `0` = off, `1` = on |

5. **Start the server**\
   Save the file and start your server.

> [!TIP]
> For a pure **PvE server**, set `disableDamageSystem = 1`. Players will then not be able to damage each other.

> [!NOTE]
> Extended gameplay settings such as mechanics, movement and more can be configured in the `cfggameplay.json` once `enableCfgGameplayFile = 1` is set.
