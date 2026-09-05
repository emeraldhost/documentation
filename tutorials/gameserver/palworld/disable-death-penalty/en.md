---
slug: "disable-death-penalty"
language: "en"
title: "How to Disable the Death Penalty on Your Palworld Server"
description: "Disable the death penalty on a Palworld server"
tags: []
date: "2026-02-28"
visibility: "public"
updated: "2026-07-16"
cta: "gameserver"
product_keys: ["palworld"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Disable Death Penalty"
sort: 20
related: ["gameserver/palworld/change-xp-rate", "gameserver/palworld/create-backup", "gameserver/palworld/download-savegame", "gameserver/palworld/edit-server-config"]
---

You can configure what players lose when they die.

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

4. **Adjust death penalty**\
   Find the parameter `DeathPenalty` and set the desired value:

   ```text
   DeathPenalty=None
   ```

5. **Start the server**\
   Start your server.

**Available values:**

| Value | Description |
|-------|-------------|
| `None` | No loss on death |
| `Item` | Lose items only |
| `ItemAndEquipment` | Lose items and equipment |
| `All` | Lose everything (items, equipment, and Pals) |

> [!NOTE]
> As of the 1.0 release, the default value is `Item` – the server defaults were aligned with the single-player Normal difficulty. Servers created before 1.0 keep the value set in their config (previous default: `All`).
