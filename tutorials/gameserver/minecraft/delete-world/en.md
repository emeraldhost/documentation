---
slug: "delete-world"
language: "en"
title: "How to Delete a World on a Minecraft Java Edition Server"
description: "Delete a world on a Minecraft Java Edition server"
tags: []
date: "2025-09-09"
visibility: "public"
updated: "2026-08-20"
cta: "gameserver"
product_keys: ["minecraft"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Delete World"
sort: 13
related: ["gameserver/minecraft/change-world-seed", "gameserver/minecraft/create-backup", "gameserver/minecraft/disable-end", "gameserver/minecraft/disable-nether"]
---

> [!CAUTION]
> **Attention**
>
> If you delete the world, it cannot be restored. Create a backup beforehand in case you need the world again later.

1. **Stop the server**\
   Stop your Minecraft Java Edition server.

2. **Connect via SFTP**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection).

3. **Delete the world**\
   Locate the `world` folder in the main folder and delete it.

4. **Restart the server**\
   Restart your server. A new world will then be generated automatically.
