---
slug: "download-savegame"
language: "en"
title: "How to Download the Savegame of Your Abiotic Factor Server"
description: "Download a savegame from an Abiotic Factor server"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["abiotic-factor"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Download Savegame"
sort: 4
related: ["gameserver/abiotic-factor/add-savegame", "gameserver/abiotic-factor/create-backup", "gameserver/abiotic-factor/join-server", "gameserver/abiotic-factor/kick-ban-players"]
---

You can download your server's savegame to your PC at any time – for example as an additional backup or to move it to another server.

> [!WARNING]
> **Caution**
>
> Stop your server before downloading the files. The server writes to the world files while it is running – if you download during that, the savegame can be incomplete.

1. **Stop the server**\
   Stop your server via the dashboard.

2. **Connect via SFTP**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection).

3. **Open the directory**\
   Change to the following directory:

   ```text
   /AbioticFactor/Saved/SaveGames/Server/Worlds/
   ```

4. **Download the world folder**\
   Download the complete folder of your world with all of its files to your PC. By default the folder is called `Cascade`.

5. **Start the server**\
   Start your server again.

> [!WARNING]
> **Caution**
>
> A savegame is always the complete world folder. Always download it in full – individual files from it do not make a usable savegame.

> [!NOTE]
> **Which folder is the right one?**
>
> If several world folders exist side by side, the active one is the folder loaded through your server's world name – by default `Cascade`. When in doubt the file timestamps help: the most recently modified folder is the active savegame.

> [!TIP]
> **Back up the settings as well**
>
> The gameplay and sandbox settings of your world are stored in the `SandboxSettings.ini` file inside the world folder – so it is downloaded together with that folder. The start parameter `-SandboxIniPath=` can place the file somewhere else, for example directly under `/AbioticFactor/Saved/`.
>
> Your admin list sits outside the world folder and has to be saved separately:
>
> ```text
> /AbioticFactor/Saved/SaveGames/Server/Admin.ini
> ```

> [!TIP]
> **Restore the savegame**
>
> If you want to move the savegame back to a server later, follow the guide [Add Savegame](/tutorials/gameserver/abiotic-factor/add-savegame).

> [!NOTE]
> **Regular backups**
>
> For automatic or regular backups you can also use the backup feature: [Create Backup](/tutorials/gameserver/abiotic-factor/create-backup).
