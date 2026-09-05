---
slug: "add-savegame"
language: "en"
title: "How to Add a Savegame to Your BeamMP Server"
description: "Upload custom maps to a BeamMP server"
tags: []
date: "2026-04-11"
visibility: "public"
cta: "gameserver"
product_keys: ["beammp"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Add Savegame"
sort: 3
related: ["gameserver/beammp/add-admin", "gameserver/beammp/add-mods", "gameserver/beammp/change-map", "gameserver/beammp/change-max-cars"]
---

BeamMP is based on the BeamNG.drive sandbox and does not use persistent world savegames. Instead, you can upload custom map files to your server.

## Upload custom maps

> [!WARNING]
> Stop your server before uploading files, otherwise they will be overwritten by the server.

1. **Stop the server**\
   Stop your server via the dashboard.

2. **Connect via SFTP**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection).

3. **Upload map files**\
   Upload your custom map files to the following directory on the server:

   ```text
   /Resources/Client/
   ```

> [!WARNING]
> Uploading files will overwrite any existing files on the server.

4. **Start the server**\
   Start your server. The uploaded maps will now be available.

> [!TIP]
> Since BeamMP is based on the BeamNG.drive sandbox, there are no persistent world savegames. Game progress is not saved on the server side.
