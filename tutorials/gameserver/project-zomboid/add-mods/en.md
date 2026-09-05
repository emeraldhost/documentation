---
slug: "add-mods"
language: "en"
title: "How to Add Mods to Your Project Zomboid Server"
description: "Add mods to a Project Zomboid server"
tags: []
date: "2025-11-03"
visibility: "public"
updated: "2026-04-10"
cta: "gameserver"
product_keys: ["project-zomboid"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Add Mods"
sort: 2
related: ["gameserver/project-zomboid/add-admin", "gameserver/project-zomboid/add-savegame", "gameserver/project-zomboid/change-max-players", "gameserver/project-zomboid/change-server-description"]
---

You can install Steam Workshop mods on your server to enhance the gameplay experience.

## Find Workshop ID and Mod ID

1. **Open Steam Workshop**\
   Open the [Steam Workshop for Project Zomboid](https://steamcommunity.com/app/108600/workshop/) and find the desired mod.

2. **Copy Workshop ID**\
   You can find the Workshop ID in the URL of the Workshop page. Copy the number after `?id=`.

   > [!TIP]
   > **Example**
   >
   > In the URL `https://steamcommunity.com/sharedfiles/filedetails/?id=2392709985`, the Workshop ID is `2392709985`.

3. **Find Mod ID**\
   The Mod ID can be found on the Workshop page in the mod description (often listed as "Mod ID").

## Add mods to the server

1. **Stop the server**\
   Stop your server via the dashboard.

2. **Connect via SFTP**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection).

3. **Open config**\
   Open the file `ProjectZomboid.ini` at:

   ```text
   /.cache/Server/ProjectZomboid.ini
   ```

4. **Add mods**\
   Add the Mod IDs and Workshop IDs, separated by `;`:

   ```ini
   Mods=ModID1;ModID2;ModID3
   WorkshopItems=WorkshopID1;WorkshopID2;WorkshopID3
   ```

   > [!TIP]
   > **Example**
   >
   > ```ini
   > Mods=jiggasGreenfireMelee;tsarslib
   > WorkshopItems=2392709985;2392987599
   > ```

5. **Start the server**\
   Save the file and start your server. The mods will be downloaded automatically on startup.

> [!IMPORTANT]
> All players must **subscribe to the same mods** via the Steam Workshop to be able to join the server.
