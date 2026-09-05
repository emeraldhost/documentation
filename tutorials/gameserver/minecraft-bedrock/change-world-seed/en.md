---
slug: "change-world-seed"
language: "en"
title: "How to Change the World Seed on Your Minecraft Bedrock Edition Server"
description: "Step-by-step instructions on how to change the world seed on your Minecraft Bedrock Edition server."
tags: []
date: "2025-06-27"
visibility: "public"
updated: "2026-07-20"
cta: "gameserver"
product_keys: ["minecraft-bedrock"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Change World Seed"
sort: 5
related: ["gameserver/minecraft-bedrock/change-view-distance", "gameserver/minecraft-bedrock/change-world-border", "gameserver/minecraft-bedrock/create-backup", "gameserver/minecraft-bedrock/delete-world"]
---

The world seed determines how the world is generated. It only affects **newly generated worlds** – so you have to delete your existing world first.

> [!CAUTION]
> **Attention**
>
> Your current world will be lost permanently. Create a [backup](/tutorials/gameserver/minecraft-bedrock/create-backup) beforehand if you still need it later.

1. **Stop the server**\
   Stop your server via the dashboard.

2. **Open the file browser**\
   Open the file browser or connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection).

3. **Set the seed**\
   Open the file `server.properties`, find the entry `level-seed=` and enter the desired seed:

   ```text
   level-seed=1111132940
   ```

   Then save the file.

4. **Delete the old world**\
   Go to the `worlds` folder and delete the `Bedrock level` folder there. Without this step the server simply keeps loading your old world and the new seed has no effect.

   > [!NOTE]
   > If you set a custom world name under `level-name` in the `server.properties`, the folder is named accordingly.

5. **Start the server**\
   Start your server. The world is now generated using your new seed.

> [!TIP]
> You can find out the seed of an existing world by entering the command `/seed` in the game. If you leave `level-seed=` empty, the server generates a random seed.
