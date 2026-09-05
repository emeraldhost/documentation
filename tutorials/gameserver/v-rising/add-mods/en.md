---
slug: "add-mods"
language: "en"
title: "How to Add Mods to Your V Rising Server"
description: "Add mods to a V Rising server"
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
short_title: "Add Mods"
sort: 2
related: ["gameserver/v-rising/add-admin", "gameserver/v-rising/download-savegame", "gameserver/v-rising/install-bepinex", "gameserver/v-rising/add-savegame"]
---

V Rising mods are based on the **BepInEx** framework. You need to install BepInEx first before you can add mods. See [Install BepInEx](/tutorials/gameserver/v-rising/install-bepinex).

> [!WARNING]
> Stop your server before adding mods. After a game update, mods may be incompatible and cause crashes.

1. **Download mods**\
   Download the desired mods from [Thunderstore](https://thunderstore.io/c/v-rising/) or [Nexus Mods](https://www.nexusmods.com/vrising).

2. **Stop the server**\
   Stop your server via the dashboard.

3. **Connect via SFTP**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection).

4. **Upload mod files**\
   Extract the mod and upload the `.dll` file(s) to the following directory:

   ```text
   /BepInEx/plugins/
   ```

5. **Start the server**\
   Start your server.

> [!IMPORTANT]
> All players must have the **same mods** installed locally to join the server.
