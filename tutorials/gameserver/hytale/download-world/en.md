---
slug: "download-world"
language: "en"
title: "How to Download the World of Your Hytale Server"
description: "Download a world from a Hytale server"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["hytale"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Download World"
sort: 12
related: ["gameserver/hytale/create-new-world", "gameserver/hytale/disable-npcs", "gameserver/hytale/enable-fall-damage", "gameserver/hytale/enable-pvp"]
---

You can download your server's world to your PC at any time, for example as an extra backup, to archive it, or to move it to another server.

> [!WARNING]
> **Caution**
>
> Stop your server before downloading the files. While the server is running, it saves regularly, otherwise you would download an incomplete or corrupted save.

1. **Stop the server**\
   Stop your server via the dashboard.

2. **Connect via SFTP**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection).

3. **Open the directory**\
   Navigate to the following directory:

   ```text
   /universe/worlds/
   ```

4. **Download the world folder**\
   Every world is stored here as its own folder. Download the complete folder of your world to your PC.

5. **Download player data (optional)**\
   Player progress (inventory, position, etc.) is not stored in the world folders but one level up under `/universe/players/`. If you want to save it as well, additionally download the contents of that folder.

6. **Start the server**\
   Start your server again.

> [!TIP]
> You can see which world is currently loaded in the `config.json` in the root directory of your server. In the `Defaults` block, the `World` value contains the name of the world folder.

> [!TIP]
> **Restoring the world**
>
> If you want to transfer the world back to a server later, follow the guide [Upload world](/tutorials/gameserver/hytale/upload-world).

> [!NOTE]
> **Regular backups**
>
> For automatic or regular backups you can also use the backup function: [Create backup](/tutorials/gameserver/hytale/create-backup).
