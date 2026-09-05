---
slug: "install-bepinex"
language: "en"
title: "How to Install BepInEx on Your V Rising Server"
description: "Install BepInEx on a V Rising server"
tags: []
date: "2026-04-10"
visibility: "public"
cta: "gameserver"
product_keys: ["v-rising"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Install BepInEx"
sort: 4
related: ["gameserver/v-rising/add-mods", "gameserver/v-rising/download-savegame", "gameserver/v-rising/add-savegame", "gameserver/v-rising/change-game-settings"]
---

**BepInEx** is a mod framework required to use mods on your V Rising server.

1. **Download BepInEx**\
   Download the latest version of [BepInExPack V Rising](https://thunderstore.io/c/v-rising/p/BepInEx/BepInExPack_V_Rising/). Click **Manual Download**.

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
> After installation, you can upload mods as `.dll` files to the `/BepInEx/plugins/` folder. See [Add Mods](/tutorials/gameserver/v-rising/add-mods).
