---
slug: "disable-nether"
language: "en"
title: "How to Disable the Nether on a Minecraft Java Edition Server"
description: "Disable the Nether on a Minecraft Java Edition server"
tags: []
date: "2026-05-15"
visibility: "public"
updated: "2026-08-20"
cta: "gameserver"
product_keys: ["minecraft"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Disable Nether"
sort: 15
related: ["gameserver/minecraft/delete-world", "gameserver/minecraft/disable-end", "gameserver/minecraft/disable-locator-bar", "gameserver/minecraft/download-world"]
---

When the Nether is disabled, nether portals stop working and players can no longer enter the Nether dimension. Players who are already in the Nether are moved back to the overworld on their next login.

> [!NOTE]
> This setting is controlled via `server.properties` and works on all Java server variants – Vanilla, Paper, Spigot, Purpur, Folia, Forge, Fabric and NeoForge.

## Disable the Nether

1. **Stop the server**\
   Stop your server via the dashboard.

2. **Open server.properties**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection) and open the file `server.properties`.

3. **Find the entry**\
   Search for the following entry:

   ```text
   allow-nether=true
   ```

4. **Change the value**\
   Change the value to `false`:

   ```text
   allow-nether=false
   ```

5. **Start the server**\
   Save the file and start your server.

> [!TIP]
> To re-enable the Nether, set the value back to `true` and restart the server. Existing Nether worlds are preserved.
