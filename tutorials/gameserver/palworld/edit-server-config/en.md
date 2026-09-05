---
slug: "edit-server-config"
language: "en"
title: "How to Edit Your Palworld Server Config"
description: "Edit a Palworld server config"
tags: []
date: "2026-01-06"
visibility: "public"
updated: "2026-02-28"
cta: "gameserver"
product_keys: ["palworld"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Edit Server Config"
sort: 22
related: ["gameserver/palworld/disable-death-penalty", "gameserver/palworld/download-savegame", "gameserver/palworld/enable-fast-travel", "gameserver/palworld/enable-hardcore-mode"]
---

You can adjust your server settings via the configuration file.

> [!WARNING]
> Stop your server before editing the config file, otherwise your changes will be overwritten by the game.

1. **Stop the server**\
   Stop your server via the dashboard.

2. **Connect via SFTP**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection).

3. **Open config file**\
   Navigate to the following path and open the file `PalWorldSettings.ini`:

   ```text
   /Pal/Saved/Config/LinuxServer/PalWorldSettings.ini
   ```

4. **Adjust settings**\
   Adjust the desired settings and save the file.

5. **Start the server**\
   Restart your server for the changes to take effect.
