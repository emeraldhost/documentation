---
slug: "change-world-seed"
language: "en"
title: "How to Change the World Seed on a Minecraft Java Edition Server"
description: "Change world seed on a Minecraft Java Edition server"
tags: []
date: "2025-06-27"
visibility: "public"
updated: "2026-08-20"
cta: "gameserver"
product_keys: ["minecraft"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Change World Seed"
sort: 11
related: ["gameserver/minecraft/change-view-distance", "gameserver/minecraft/change-world-border", "gameserver/minecraft/create-backup", "gameserver/minecraft/delete-world"]
---

The world seed determines how the world is generated. It only affects **newly generated worlds** – so you have to delete your existing world first.

> [!CAUTION]
> **Attention**
>
> Your current world will be lost permanently. Create a [backup](/tutorials/gameserver/minecraft/create-backup) beforehand if you still need it later.

1. **Stop the server**\
   Stop your server via the dashboard.

2. **Connect via SFTP**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection), or use the file browser.

3. **Set the seed**\
   Open the file `server.properties`, find the entry `level-seed=` and enter the desired seed:

   ```text
   level-seed=5101553622029575588
   ```

   Then save the file.

4. **Delete the old world**\
   Delete the `world` folder in the main directory. Without this step the server simply keeps loading your old world and the new seed has no effect.

   > [!NOTE]
   > **Paper, Spigot & Purpur**
   >
   > On these servers the Nether and the End are stored in separate folders. Also delete `world_nether` and `world_the_end` so those dimensions are regenerated as well.

5. **Start the server**\
   Start your server. The world is now generated using your new seed.

> [!TIP]
> You can find out the seed of an existing world by entering the command `/seed` in the game. If you leave `level-seed=` empty, the server generates a random seed.
