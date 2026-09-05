---
slug: "reset-world"
language: "en"
title: "How to Reset the World on Your Palworld Server"
description: "Reset the world on a Palworld server"
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
short_title: "Reset World"
sort: 30
related: ["gameserver/palworld/join-server", "gameserver/palworld/kick-ban-players", "gameserver/palworld/restore-automatic-backup", "gameserver/palworld/set-server-password"]
---

You can reset your server's world to generate a completely new one. This deletes all save data and buildings.

> [!WARNING]
> This action cannot be undone. Create a backup beforehand if you want to keep the save data.

1. **Stop the server**\
   Stop your server via the dashboard.

2. **Connect via SFTP**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection).

3. **Delete savegame folder**\
   Navigate to:

   ```text
   /Pal/Saved/SaveGames/0/
   ```

   Delete the folder inside (a folder with a long string of characters as its name).

4. **Start the server**\
   Start your server. A new world will be generated automatically.

> [!TIP]
> Your server settings in `PalWorldSettings.ini` are preserved and do not need to be reconfigured.
