---
slug: "add-mods"
language: "en"
title: "How to Install Mods on a Hytale Server"
description: "Install mods on a Hytale server"
tags: []
date: "2026-01-15"
visibility: "public"
updated: "2026-03-07"
cta: "gameserver"
product_keys: ["hytale"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Add Mods"
sort: 17
related: ["gameserver/hytale/enable-whitelist", "gameserver/hytale/improve-performance", "gameserver/hytale/item-loss-on-death", "gameserver/hytale/join-server"]
---

> [!TIP]
> **Note**
>
> Stop your server before installing mods, otherwise they will not load correctly.

> [!TIP]
> You can download mods for Hytale from [CurseForge](https://www.curseforge.com/hytale).

## How to Install Mods

1. **Stop the Server**\
   Stop your server via the dashboard.

2. **Download the Mod**\
   Download the desired mod as a `.jar` or `.zip` file.

3. **Upload the Mod**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection) and upload the mod file to the `mods/` folder.

4. **Start the Server**\
   Start your server to load the mod.

## How to Remove Mods

1. **Stop the Server**\
   Stop your server via the dashboard.

2. **Delete the Mod**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection) and delete the mod file from the `mods/` folder.

3. **Start the Server**\
   Start your server.

> [!WARNING]
> Hytale is in Early Access. Mods may cause stability issues. Create a backup of your server before installation.
