---
slug: "reset-world"
language: "en"
title: "How to Reset the World of Your Stormforge Server"
description: "Start over with a new world on your Stormforge server by renaming or deleting the folder of the current world."
tags: []
date: "2026-11-11"
visibility: "public"
cta: "gameserver"
product_keys: ["stormforge"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Reset World"
sort: 11
related: ["gameserver/stormforge/create-backup", "gameserver/stormforge/download-savegame", "gameserver/stormforge/change-world-seed", "gameserver/stormforge/change-world-settings"]
---

You get a new world by renaming or deleting the folder of the current world. If the server no longer finds the files of the configured world on startup, it automatically generates a new world.

> [!WARNING]
> Back up your current world before resetting it: create a [backup](/tutorials/gameserver/stormforge/create-backup) via the dashboard or download the world to your PC ([Download savegame](/tutorials/gameserver/stormforge/download-savegame)). Without a backup there is no way to get a deleted world back.

## Reset the world

1. **Stop the server**\
   Stop your server via the dashboard.

2. **Set world name and seed (optional)**\
   If the new world should have a specific name, navigate to the **Config Editor** in the dashboard, enter it in the field **Weltname** (world name, at most 64 characters) and save. A specific seed is also set now: [Change World Seed](/tutorials/gameserver/stormforge/change-world-seed). Both values are used when a new world is generated.

3. **Look up the ID of the current world**\
   Open the file `/settings.json` in the main directory of your server, via [SFTP](/tutorials/gameserver/establish-sftp-connection) or in the [File Manager](/tutorials/gameserver/use-file-browser). The value of `worldPrefabID` is the ID of the world your server currently loads:

   ```json
   "worldPrefabID": "3f2b8c1e-5a47-4d09-9e6b-7c1d2a4f8b30",
   ```

   You do not need to change the entry itself.

4. **Rename or delete the world folder**\
   Navigate to the following directory via SFTP or in the File Manager:

   ```text
   /saves/Worlds/
   ```

   It contains a folder that is named like the ID from step 3. Rename it, e.g. to `3f2b8c1e-5a47-4d09-9e6b-7c1d2a4f8b30-old`, if you want to keep the old world on the server as a fallback, or delete it.

5. **Start the server**\
   Start your server. It generates a new world on startup.

> [!TIP]
> **Switching back to the old world**\
> If you renamed the folder, you can load the old world again: stop the server, give the folder its original name back (the ID without the suffix) and enter this ID as `worldPrefabID` in `/settings.json`. Then start the server.

> [!NOTE]
> **Only the right folder**\
> Several world folders can lie side by side in `/saves/Worlds/`. Only the world whose ID is set in `worldPrefabID` is loaded. So rename or delete exactly this folder. Keep the file `/settings.json`, it contains your server settings.

> [!NOTE]
> **A new seed alone is not enough**\
> A changed seed does not rebuild an existing world. It only takes effect when a new world is generated.

> [!TIP]
> If the new world should run under different rules, adjust the [world settings](/tutorials/gameserver/stormforge/change-world-settings) before you start the server again.
