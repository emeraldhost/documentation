---
slug: "add-savegame"
language: "en"
title: "How to Add a Savegame to Your 7 Days to Die Server"
description: "Upload a savegame to a 7 Days to Die server"
tags: []
date: "2026-03-18"
visibility: "public"
cta: "gameserver"
product_keys: ["7-days-to-die"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Add Savegame"
sort: 4
related: ["gameserver/7-days-to-die/add-admin", "gameserver/7-days-to-die/add-mods", "gameserver/7-days-to-die/change-map", "gameserver/7-days-to-die/create-backup"]
---

You can upload an existing singleplayer world to your server.

## Find savegame

Your local savegame can be found on your PC at:

```text
%AppData%/7DaysToDie/
```

There are two important folders:

- `GeneratedWorlds/` – contains the world data (terrain, buildings)
- `Saves/` – contains the save files (player progress, placements)

## Upload savegame

1. **Stop the server**\
   Stop your server via the dashboard.

2. **Connect via SFTP**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection).

3. **Upload world data**\
   Upload the folder of your world from `GeneratedWorlds/` to the following directory on the server:

   ```text
   /.local/share/7DaysToDie/GeneratedWorlds/
   ```

4. **Upload save data**\
   Upload the folder of your save from `Saves/` to the following directory on the server:

   ```text
   /Saves/
   ```

5. **Edit serverconfig.xml**\
   Open the file `serverconfig.xml` and adjust the following values:

   ```xml
   <property name="GameWorld" value="YourWorldName"/>
   <property name="GameName" value="YourSaveName"/>
   ```

   Replace `YourWorldName` with the name of your world folder and `YourSaveName` with the name of your save folder.

6. **Start the server**\
   Save the file and start your server.

> [!WARNING]
> The folder names must exactly match the values in `serverconfig.xml`.
