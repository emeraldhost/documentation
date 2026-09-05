---
slug: "change-map"
language: "en"
title: "How to Change the Map on Your Conan Exiles Server"
description: "Step-by-step instructions on how to change the map on your Conan Exiles server."
tags: []
date: "2026-01-08"
visibility: "public"
updated: "2026-03-19"
cta: "gameserver"
product_keys: ["conan-exiles"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Change Map"
sort: 4
related: ["gameserver/conan-exiles/add-mods", "gameserver/conan-exiles/add-savegame", "gameserver/conan-exiles/change-max-players", "gameserver/conan-exiles/change-server-community"]
---

> [!TIP]
> You can also edit the files using an FTP program. Here you will find instructions on how to [establish an SFTP connection](/tutorials/gameserver/establish-sftp-connection).

> [!WARNING]
> When changing the map, all save data and buildings will be lost! Create a backup beforehand if you want to return to the old map later.

## Available Maps

| Map | Value |
|-----|-------|
| **Exiled Lands** | `/Game/Maps/ConanSandbox/ConanSandbox` |
| **Isle of Siptah** | `/Game/DLC_EXT/DLC_Siptah/Maps/DLC_Isle_of_Siptah` |

> [!NOTE]
> The "Isle of Siptah" map requires the DLC of the same name.

## Steps

1. **Stop server**\
   Stop your server in the dashboard.

2. **Open Engine.ini**\
   Navigate to the file `Engine.ini` in the file browser. Path: `ConanSandbox/Saved/Config/WindowsServer/Engine.ini`

3. **Add entry**\
   Add the following entry:

   ```ini
   [/Script/EngineSettings.GameMapsSettings]
   ServerDefaultMap=/Game/DLC_EXT/DLC_Siptah/Maps/DLC_Isle_of_Siptah
   ```

4. **Restart server**\
   Save the file and restart your server.
