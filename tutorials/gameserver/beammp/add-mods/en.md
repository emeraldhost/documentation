---
slug: "add-mods"
language: "en"
title: "How to Add Mods to Your BeamMP Server"
description: "Add mods to a BeamMP server"
tags: []
date: "2025-10-15"
visibility: "public"
updated: "2026-04-10"
cta: "gameserver"
product_keys: ["beammp"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Add Mods"
sort: 2
related: ["gameserver/beammp/add-admin", "gameserver/beammp/add-savegame", "gameserver/beammp/change-map", "gameserver/beammp/change-max-cars"]
---

You can install mods on your server to enhance the gameplay experience.

> [!WARNING]
> Stop your server before adding mods. Mods must **not be archived** (e.g. `.zip`) – extract them first.

1. **Download mods**\
   Download the desired mods from [BeamNG.drive Mods](https://www.beamng.com/resources/) or the [BeamMP Forum](https://forum.beammp.com/).

2. **Stop the server**\
   Stop your server via the dashboard.

3. **Connect via SFTP**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection).

4. **Upload mods**\
   Upload the extracted mod files to the following directory:

   ```text
   /Resources/Client/
   ```

5. **Start the server**\
   Start your server.

> [!NOTE]
> Mods in the `Resources/Client/` folder are automatically downloaded by all players joining the server.
