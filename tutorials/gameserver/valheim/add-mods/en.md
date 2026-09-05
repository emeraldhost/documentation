---
slug: "add-mods"
language: "en"
title: "How to Add Mods to Your Valheim Server"
description: "Add mods to a Valheim server"
tags: []
date: "2026-03-10"
visibility: "public"
updated: "2026-04-10"
cta: "gameserver"
product_keys: ["valheim"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Add Mods"
sort: 4
related: ["gameserver/valheim/download-savegame", "gameserver/valheim/install-bepinex", "gameserver/valheim/add-savegame", "gameserver/valheim/change-branch"]
---

Valheim mods are based on the **BepInEx** framework. You need to install BepInEx first before you can add mods. See [Install BepInEx](/tutorials/gameserver/valheim/install-bepinex).

> [!WARNING]
> Stop your server before adding mods. After a game update, mods may be incompatible and cause crashes.

1. **Download mods**\
   Download the desired mods from [Thunderstore](https://thunderstore.io/c/valheim/) or [Nexus Mods](https://www.nexusmods.com/valheim).

2. **Stop the server**\
   Stop your server via the dashboard.

3. **Connect via SFTP**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection).

4. **Upload mod files**\
   Extract the mod and upload the `.dll` file(s) to the following directory:

   ```text
   /BepInEx/plugins/
   ```

   > [!TIP]
   > **Example**
   >
   > ```text
   > /BepInEx/plugins/
   > ├── ValheimPlus.dll
   > ├── EpicLoot.dll
   > └── BetterArchery.dll
   > ```

5. **Start the server**\
   Start your server.

> [!IMPORTANT]
> All players must have the **same mods** installed locally to join the server. Players need to install BepInEx and the mods in their local Valheim directory as well.

> [!NOTE]
> Some mods automatically create configuration files under `/BepInEx/config/` on first startup. You can adjust these to customize the mods to your liking.
