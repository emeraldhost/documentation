---
slug: "change-world-seed"
language: "en"
title: "How to Change the World Seed of Your Stormforge Server"
description: "Enter the world seed of your Stormforge server in settings.json and make it take effect with a new world."
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
short_title: "Change World Seed"
sort: 4
related: ["gameserver/stormforge/reset-world", "gameserver/stormforge/change-world-settings", "gameserver/stormforge/create-backup", "gameserver/stormforge/download-savegame"]
---

The world seed is the basis of world generation. In Stormforge it is stored as text in the `seed` key in the `worldSettings` block of the `settings.json` file. In the game, seeds are case sensitive, so enter a seed exactly as you received it.

> [!WARNING]
> The seed is only used when a new world is generated. A new seed does not rebuild an existing world. For it to take effect you need a new world, see [Reset World](/tutorials/gameserver/stormforge/reset-world).

1. **Stop the server**\
   Stop your server via the dashboard. Only edit the file while the server is stopped, because the running server rewrites it itself.

2. **Open settings.json**\
   Open the [File Manager](/tutorials/gameserver/use-file-browser) in the dashboard and choose **Edit** in the menu (⋮) next to the `settings.json` file. Alternatively, edit the file via [SFTP](/tutorials/gameserver/establish-sftp-connection):

   ```text
   /settings.json
   ```

3. **Enter the seed**\
   In the `worldSettings` block, enter your seed as text in quotes in the `seed` line and save the file:

   ```json
   "seed": "Smaragdkueste",
   ```

   Leave the remaining lines unchanged.

4. **Have a new world generated**\
   Now follow the guide [Reset World](/tutorials/gameserver/stormforge/reset-world), your server is already stopped for it. On the start at the end of that guide, the server generates a new world with your seed.

> [!NOTE]
> As shipped, the seed is empty (`"seed": ""`).

> [!TIP]
> Make sure the file stays valid JSON, so keep the quotes and the comma at the end of the line. What happens with a faulty `settings.json` is described in [Change World Settings](/tutorials/gameserver/stormforge/change-world-settings).
