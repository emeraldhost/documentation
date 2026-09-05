---
slug: "download-savegame"
language: "en"
title: "How to Download the Savegame of Your Conan Exiles Server"
description: "Download a savegame from a Conan Exiles server"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["conan-exiles"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Download Savegame"
sort: 10
related: ["gameserver/conan-exiles/change-server-region", "gameserver/conan-exiles/create-backup", "gameserver/conan-exiles/enable-battleye", "gameserver/conan-exiles/enable-pvp"]
---

You can download your server's savegame to your PC at any time – for example as an extra backup, to archive it, or to move it to another server. The savegame consists of the `game.db` file.

> [!WARNING]
> **Caution**
>
> Stop your server before downloading the files. While the server is running it saves regularly, so you would end up downloading an incomplete or corrupted save.

1. **Stop the server**\
   Stop your server via the dashboard.

2. **Connect via SFTP**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection).

3. **Open the directory**\
   Navigate to the following directory:

   ```text
   /ConanSandbox/Saved/
   ```

4. **Download the file**\
   Download the `game.db` file to your PC. It contains your entire world including all buildings, characters and progress.

5. **Start the server**\
   Start your server again.

> [!TIP]
> The full path to the savegame file on the server is `/ConanSandbox/Saved/game.db`. If you want to continue playing the downloaded savegame locally, place the `game.db` on your PC in the Conan Exiles installation directory under `ConanSandbox/Saved/`.

> [!TIP]
> **Restoring the save later**
>
> If you want to transfer the save back to a server later on, follow the guide [Add savegame](/tutorials/gameserver/conan-exiles/add-savegame).

> [!NOTE]
> **Regular backups**
>
> For automatic or regular backups you can also use the backup function: [Create backup](/tutorials/gameserver/conan-exiles/create-backup).
