---
slug: "download-savegame"
language: "en"
title: "How to Download the Savegame of Your Enshrouded Server"
description: "Download a savegame from an Enshrouded server"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["enshrouded"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Download Savegame"
sort: 7
related: ["gameserver/enshrouded/control-automatic-updates", "gameserver/enshrouded/create-backup", "gameserver/enshrouded/enable-text-chat", "gameserver/enshrouded/enable-voice-chat"]
---

You can download your server's save to your PC at any time – for example as an extra backup, to archive it, or to move it to another server.

> [!WARNING]
> **Caution**
>
> Stop your server before downloading the files. While the server is running it saves regularly, so you would end up downloading an incomplete or corrupted save.

1. **Stop the server**\
   Stop your server via the dashboard.

2. **Connect via SFTP**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection).

3. **Open the directory**\
   Navigate to the save folder `savegame`.

4. **Download the files**\
   Download both files of your world to your PC: `3ad85aea` and `3ad85aea_info`. Only together do they form a complete save – never download just one of the two files.

5. **Start the server**\
   Start your server again.

> [!TIP]
> **Finding the right folder**
>
> By default the save is stored in the `savegame` folder. If you have changed the default folder in the server settings, navigate to the folder you selected for the saves instead.

> [!TIP]
> **Playing the world locally**
>
> If you want to continue playing the downloaded world in singleplayer, rename the files back to the names of your local world (so `3ad85aea` to e.g. `3bd85c7d` and `3ad85aea_info` to `3bd85c7d_info`) and place them in the Steam `userdata` folder: `C:\Program Files (x86)\Steam\userdata\[YourSteamID]\1203620\remote`. Replace `[YourSteamID]` with your SteamID64.

> [!TIP]
> **Restoring the save later**
>
> If you want to transfer the save back to a server later on, follow the guide [Add savegame](/tutorials/gameserver/enshrouded/add-savegame).

> [!NOTE]
> **Regular backups**
>
> For automatic or regular backups you can also use the backup function: [Create backup](/tutorials/gameserver/enshrouded/create-backup).
