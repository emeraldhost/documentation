---
slug: "add-admin"
language: "en"
title: "How to Add an Admin to Your Arma Reforger Server"
description: "Add another admin to an Arma Reforger server"
tags: []
date: "2026-04-11"
visibility: "public"
updated: "2026-08-29"
cta: "gameserver"
product_keys: ["arma-reforger"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Add Admin"
sort: 1
related: ["gameserver/arma-reforger/add-mods", "gameserver/arma-reforger/add-savegame", "gameserver/arma-reforger/become-admin", "gameserver/arma-reforger/download-savegame"]
---

You can add other players as admins by entering their SteamID64 in the `config.json` file.

> [!TIP]
> Here you can find a guide on how to find your [SteamID64](/tutorials/gameserver/steamid64-find-out).

1. **Stop the server**\
   Stop your server via the dashboard.

2. **Connect via SFTP**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection).

3. **Open config.json**\
   Open the file `config.json` and find the `"admins"` entry in the `"game"` section.

4. **Add SteamID64 to the admins list**\
   Enter the SteamID64 of the player who should become admin:

   ```json
   "game": {
     "admins": [
       "76561198012345678",
       "76561198087654321"
     ]
   }
   ```

   Add one SteamID64 per entry. Make sure the entries are separated by commas.

   > [!TIP]
   > Check the file with a JSON formatter like [JSONLint](https://jsonlint.com/) after editing – a single missing or extra comma is enough to prevent the server from starting.

5. **Start the server**\
   Save the file and start your server.

> [!NOTE]
> Changes to `config.json` only take effect after a server restart. Players added here receive permanent admin rights and do not need to log in with a password.
