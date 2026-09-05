---
slug: "add-mods"
language: "en"
title: "How to Add Mods to Your Core Keeper Server"
description: "Add mods to a Core Keeper server"
tags: []
date: "2026-04-10"
visibility: "public"
cta: "gameserver"
product_keys: ["core-keeper"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Add Mods"
sort: 2
related: ["gameserver/core-keeper/add-admin", "gameserver/core-keeper/add-savegame", "gameserver/core-keeper/ban-players", "gameserver/core-keeper/change-content-bundle"]
---

Core Keeper uses **mod.io** for mods. You can download mods manually and upload them via SFTP.

> [!WARNING]
> Stop your server before adding mods. After a game update, mods may be incompatible and cause crashes.

## Set up mod.io

1. **Create mod.io account**\
   Create an account on [mod.io](https://mod.io/) or log in.

2. **Create API Key**\
   Go to [mod.io/me/access](https://mod.io/me/access) and create an **API Key**. Copy the key and the **API URL** (e.g. `https://u-*.modapi.io/v1`).

3. **Create OAuth Token**\
   Under **OAuth Access**, create a new token with **Read + Write** permissions. Copy the token immediately – it is only shown once.

## Download and upload mods

1. **Download mods**\
   Download the desired mods from [mod.io/g/corekeeper](https://mod.io/g/corekeeper). Use the **Download File** button on the mod page.

2. **Stop the server**\
   Stop your server via the dashboard.

3. **Connect via SFTP**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection).

4. **Upload mods**\
   Extract each mod into its own subfolder in the directory:

   ```text
   /Mods/
   ```

   > [!NOTE]
   > If the `Mods` folder does not exist yet, create it in the root directory of your server.

5. **Start the server**\
   Start your server.

> [!IMPORTANT]
> All players must have the **same mods** installed to be able to join the server.
