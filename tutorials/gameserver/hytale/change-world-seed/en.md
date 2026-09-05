---
slug: "change-world-seed"
language: "en"
title: "How to Change the World Seed on a Hytale Server"
description: "Change World Seed on a Hytale server"
tags: []
date: "2026-02-04"
visibility: "public"
updated: "2026-08-29"
cta: "gameserver"
product_keys: ["hytale"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Change World Seed"
sort: 25
related: ["gameserver/hytale/pause-game-time", "gameserver/hytale/set-password", "gameserver/hytale/set-spawn-point", "gameserver/hytale/upload-world"]
---

The world seed determines how the world is generated. Using the same seed will always produce the same world - identical landscapes, mountains, and structures at the same coordinates.

> [!TIP]
> **Note**
>
> Stop your server before making changes to configuration files, otherwise they will be overwritten by the server.

## How to Change the World Seed

1. **Stop the Server**\
   Stop your server via the dashboard.

2. **Open the World Configuration**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection) and navigate to the folder `universe/worlds/<worldname>/`. Open the `config.json` file.

3. **Adjust the Seed**\
   Find the `Seed` setting and change the value:

   ```json
   "Seed": 123456789
   ```

   You can use any number as a seed.

   > [!TIP]
   > Check the file with a JSON formatter like [JSONLint](https://jsonlint.com/) after editing – a single missing or extra comma is enough to stop the server from loading the world configuration.

4. **Delete World Data**\
   Delete the `chunks` folder in the same directory (`universe/worlds/<worldname>/chunks`) so the world is regenerated with the new seed.

5. **Start the Server**\
   Start your server to regenerate the world.

> [!WARNING]
> Deleting the `chunks` folder will permanently remove all builds and progress in this world. Create a [backup](/tutorials/gameserver/hytale/create-backup) first!
