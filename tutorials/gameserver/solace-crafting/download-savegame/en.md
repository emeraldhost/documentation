---
slug: "download-savegame"
language: "en"
title: "How to Download the Savegame of Your Solace Crafting Server"
description: "Download a savegame from a Solace Crafting server"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["solace-crafting"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Download Savegame"
sort: 3
related: ["gameserver/solace-crafting/add-savegame", "gameserver/solace-crafting/create-backup", "gameserver/solace-crafting/join-server"]
---

You can download your server's world to your PC at any time – for example as an additional backup, for archiving or to transfer it to another server.

> [!WARNING]
> **Caution**
>
> Stop your server before downloading the files. While the server is running it saves regularly – otherwise you would download an incomplete or corrupted save.

1. **Stop the server**\
   Stop your server via the dashboard.

2. **Connect via SFTP**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection).

3. **Open the directory**\
   Navigate to the following directory:

   ```text
   /.config/unity3d/Big Kitty Games/Solace Crafting/Worlds/
   ```

   > [!NOTE]
   > The folder `.config` starts with a dot and is therefore hidden. Enable the display of hidden files in your SFTP client if you cannot see it.

4. **Download the world folder**\
   Download the complete folder of your world including all its files to your PC. If several worlds are stored in the directory, download all folders when in doubt.

5. **Start the server**\
   Start your server again.

> [!TIP]
> **Find the right world**
>
> The world your server currently loads is defined in the file `servercfg.dat` under the value `worldSaveToUse`. The name entered there matches the folder name inside the `Worlds` directory. Without any changes this is the folder `MultiplayerWorld`.

> [!TIP]
> **Back up the configuration as well**
>
> If you also want to save your server settings, download the following file in addition:
>
> ```text
> /.config/unity3d/Big Kitty Games/Solace Crafting/servercfg.dat
> ```

> [!TIP]
> **Continue playing the world locally**
>
> If you want to continue playing the downloaded world in single player on your PC, place the world folder into the following directory:
>
> ```text
> %USERPROFILE%\AppData\LocalLow\Big Kitty Games\Solace Crafting\Worlds
> ```

> [!TIP]
> **Restoring the savegame**
>
> If you want to transfer the save back to a server later, follow the guide [Add savegame](/tutorials/gameserver/solace-crafting/add-savegame).

> [!NOTE]
> **Regular backups**
>
> For automatic or regular backups you can also use the backup function: [Create backup](/tutorials/gameserver/solace-crafting/create-backup).
