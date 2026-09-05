---
slug: "increase-slots"
language: "en"
title: "How to Increase the Slots on a Minecraft Java Edition Server"
description: "Increase slots on a Minecraft Java Edition server"
tags: []
date: "2025-06-19"
visibility: "public"
updated: "2026-08-20"
cta: "gameserver"
product_keys: ["minecraft"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Increase Slots"
sort: 22
related: ["gameserver/minecraft/grant-op-rights", "gameserver/minecraft/improve-performance", "gameserver/minecraft/install-mods", "gameserver/minecraft/install-plugins"]
---

1. **Open server.properties**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection) and open the file `server.properties`.

2. **Find the entry**\
   Look for the following entry:

   ```text
   max-players=20
   ```

3. **Change the value**\
   Change the value to the desired number of players.

4. **Restart the server**\
   Save the changes and restart the server.

> [!WARNING]
> Make sure that your server has enough resources (such as RAM and CPU) to support the increased number of players.
