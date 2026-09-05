---
slug: "add-savegame"
language: "en"
title: "How to Add a Savegame to Your The Bus Server"
description: "Upload a savegame to a The Bus server"
tags: []
date: "2026-04-11"
visibility: "public"
cta: "gameserver"
product_keys: ["the-bus"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Add Savegame"
sort: 15
related: ["gameserver/the-bus/enable-ai-buses", "gameserver/the-bus/add-mods", "gameserver/the-bus/join-server", "gameserver/the-bus/kick-ban-players"]
---

You can transfer a savegame to your server and continue playing there.

> [!WARNING]
> Uploading will overwrite the existing savegame on the server. Create a backup beforehand if you want to keep the current savegame.

1. **Stop the server**\
   Stop your server via the dashboard.

2. **Connect via SFTP**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection).

3. **Upload savegame**\
   Upload your save files to the following directory on the server:

   ```text
   /TheBus/Saved/SaveGames/
   ```

4. **Start the server**\
   Start your server. Your savegame will now be loaded.
