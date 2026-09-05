---
slug: "add-savegame"
language: "en"
title: "How to Upload a Savegame to Your Conan Exiles Server"
description: "Upload a savegame to a Conan Exiles server"
tags: []
date: "2026-04-10"
visibility: "public"
cta: "gameserver"
product_keys: ["conan-exiles"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Add Savegame"
sort: 3
related: ["gameserver/conan-exiles/add-admin", "gameserver/conan-exiles/add-mods", "gameserver/conan-exiles/change-map", "gameserver/conan-exiles/change-max-players"]
---

You can transfer your local savegame to your server and continue playing there. The savegame consists of the `game.db` file.

> [!WARNING]
> Uploading will overwrite the existing savegame on the server. Create a backup beforehand if you want to keep the current savegame.

1. **Stop the server**\
   Stop your server via the dashboard.

2. **Connect via SFTP**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection).

3. **Upload savegame**\
   Upload your `game.db` file to the following directory on the server:

   ```text
   /ConanSandbox/Saved/game.db
   ```

4. **Start the server**\
   Start your server. Your savegame will now be loaded.

> [!TIP]
> You can find your local savegame on your PC in the Conan Exiles installation directory under `ConanSandbox/Saved/`.
