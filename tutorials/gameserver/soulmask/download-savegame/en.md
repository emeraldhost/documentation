---
slug: "download-savegame"
language: "en"
title: "How to Download the Savegame of Your Soulmask Server"
description: "Download a savegame from a Soulmask server"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["soulmask"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Download Savegame"
sort: 9
related: ["gameserver/soulmask/configure-pvp", "gameserver/soulmask/create-backup", "gameserver/soulmask/find-invitation-code", "gameserver/soulmask/join-server"]
---

You can download your server's savegame to your PC at any time – for example as an additional backup, to archive it, or to move it to another server.

> [!WARNING]
> **Caution**
>
> Stop your server before downloading the files. While the server is running it saves regularly – otherwise you would download an incomplete or corrupted savegame.

1. **Stop the server**\
   Stop your server via the dashboard.

2. **Connect via SFTP**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection).

3. **Open the directory**\
   Go to the following directory:

   ```text
   /WS/Saved/Worlds/Dedicated/Level01_Main/
   ```

4. **Download the world data**\
   Download the `world.db` file from this directory to your PC. It contains your complete world including buildings, player and character data.

5. **Download the gameplay settings (optional)**\
   If you also want to save your gameplay settings, go to the following directory as well and download the `GameXishu.json` file:

   ```text
   /WS/Saved/GameplaySettings/
   ```

6. **Start the server**\
   Start your server again.

> [!TIP]
> **Find the right folder**
>
> The `Level01_Main` folder corresponds to the default map Cloud Mist Forest. If your server runs a different map, the `world.db` is located in the folder matching the value of the map setting in the dashboard (e.g. `DLC_Level01_Main` for Shifting Sands).

> [!TIP]
> **Restore the savegame**
>
> If you want to transfer the savegame back to a server later, follow the guide [Add savegame](/tutorials/gameserver/soulmask/add-savegame).

> [!NOTE]
> **Regular backups**
>
> For automatic or regular backups you can also use the backup function: [Create backup](/tutorials/gameserver/soulmask/create-backup).
