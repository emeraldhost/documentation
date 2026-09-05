---
slug: "add-savegame"
language: "en"
title: "How to Add a Savegame to Your Arma Reforger Server"
description: "Upload a savegame to an Arma Reforger server"
tags: []
date: "2026-04-11"
visibility: "public"
cta: "gameserver"
product_keys: ["arma-reforger"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Add Savegame"
sort: 3
related: ["gameserver/arma-reforger/add-admin", "gameserver/arma-reforger/add-mods", "gameserver/arma-reforger/become-admin", "gameserver/arma-reforger/download-savegame"]
---

You can transfer a savegame to your server to continue an existing game state.

## Upload the savegame

> [!WARNING]
> Stop your server before uploading files, otherwise they will be overwritten by the server.

1. **Stop the server**\
   Stop your server via the dashboard.

2. **Connect via SFTP**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection).

3. **Upload savegame**\
   Upload your save folder to the following directory on the server:

   ```text
   /config/profile/save/
   ```

> [!WARNING]
> Uploading files will overwrite any existing savegame on the server.

4. **Start the server**\
   Start your server. Your savegame will now be loaded.
