---
slug: "add-mods"
language: "en"
title: "How to Add Mods to Your 7 Days to Die Server"
description: "Add mods to a 7 Days to Die server"
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
short_title: "Add Mods"
sort: 3
related: ["gameserver/7-days-to-die/activate-crossplay", "gameserver/7-days-to-die/add-admin", "gameserver/7-days-to-die/add-savegame", "gameserver/7-days-to-die/change-map"]
---

You can install mods on your server to enhance the gameplay experience.

> [!WARNING]
> Stop your server before adding mods. After a game update, mods may be incompatible and cause crashes.

1. **Download mods**\
   Download the desired mods from [Nexus Mods](https://www.nexusmods.com/7daystodie) or [7daystodiemods.com](https://7daystodiemods.com/).

2. **Stop the server**\
   Stop your server via the dashboard.

3. **Connect via SFTP**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection).

4. **Upload mods**\
   Extract the mod and upload the mod folder (the one containing `ModInfo.xml`) to the following directory:

   ```text
   /Mods/
   ```

   > [!TIP]
   > **Example**
   >
   > ```text
   > /Mods/
   > ├── MyMod/
   > │   ├── ModInfo.xml
   > │   └── Config/
   > └── AnotherMod/
   >     ├── ModInfo.xml
   >     └── Config/
   > ```

   > [!NOTE]
   > If the `Mods` folder does not exist yet, create it in the root directory of your server.

5. **Start the server**\
   Start your server.

> [!IMPORTANT]
> All players must have the **same mods** installed locally to be able to join the server.
