---
slug: "install-bepinex"
language: "en"
title: "How to Install BepInEx on Your Valheim Server"
description: "Install BepInEx on a Valheim server"
tags: []
date: "2026-04-10"
visibility: "public"
cta: "gameserver"
product_keys: ["valheim"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Install BepInEx"
sort: 3
related: ["gameserver/valheim/add-admin", "gameserver/valheim/download-savegame", "gameserver/valheim/add-mods", "gameserver/valheim/add-savegame"]
---

**BepInEx** is a mod framework required to use mods on your Valheim server.

1. **Download BepInEx**\
   Download **BepInExPack_Valheim** from [Thunderstore](https://thunderstore.io/c/valheim/p/denikson/BepInExPack_Valheim/). Click **Manual Download**.

2. **Stop the server**\
   Stop your server via the dashboard.

3. **Connect via SFTP**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection).

4. **Upload BepInEx**\
   Extract the downloaded ZIP file and upload the **entire contents** to the root directory of your server. The following files and folders should be present afterwards:

   ```text
   /
   ├── BepInEx/
   │   ├── config/
   │   ├── plugins/
   │   └── core/
   ├── doorstop_config.ini
   ├── winhttp.dll
   └── ...
   ```

5. **Start the server**\
   Start your server. BepInEx will initialize automatically.

> [!NOTE]
> After installation, you can upload mods as `.dll` files to the `/BepInEx/plugins/` folder. See [Add Mods](/tutorials/gameserver/valheim/add-mods).
