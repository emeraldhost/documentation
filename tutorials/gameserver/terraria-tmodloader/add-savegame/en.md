---
slug: "add-savegame"
language: "en"
title: "How to Add a Savegame to Your Terraria tModLoader Server"
description: "Upload a savegame to a Terraria tModLoader server"
tags: []
date: "2026-04-11"
visibility: "public"
cta: "gameserver"
product_keys: ["terraria-tmodloader"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Add Savegame"
sort: 3
related: ["gameserver/terraria-tmodloader/add-admin", "gameserver/terraria-tmodloader/add-mods", "gameserver/terraria-tmodloader/add-world", "gameserver/terraria-tmodloader/create-backup"]
---

You can transfer your local savegame to your server and continue playing there. The savegame consists of the `.wld` and `.twld` files.

> [!WARNING]
> Uploading will overwrite the existing savegame on the server. Create a backup beforehand if you want to keep the current savegame.

1. **Stop the server**\
   Stop your server via the dashboard.

2. **Connect via SFTP**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection).

3. **Upload savegame**\
   Upload your `.wld` and `.twld` files to the following directory on the server:

   ```text
   /.local/share/Terraria/tModLoader/Worlds/
   ```

4. **Start the server**\
   Start your server. Your savegame will now be loaded.

> [!TIP]
> You can find your local savegame on your PC at `%USERPROFILE%\Documents\My Games\Terraria\tModLoader\Worlds\`.
