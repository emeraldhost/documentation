---
slug: "download-savegame"
language: "en"
title: "How to Download the Savegame of Your Citadel Forged with Fire Server"
description: "Download a savegame from a Citadel Forged with Fire server"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["citadel-forged-with-fire"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Download Savegame"
sort: 4
related: ["gameserver/citadel-forged-with-fire/add-savegame", "gameserver/citadel-forged-with-fire/create-backup", "gameserver/citadel-forged-with-fire/join-server", "gameserver/citadel-forged-with-fire/kick-ban-players"]
---

You can download your server's save to your PC at any time – for example as an additional backup or to transfer it to another server.

> [!WARNING]
> **Caution**
>
> Stop your server before downloading the files. Your server saves automatically while running – if you download during operation, the save can be incomplete.

1. **Stop the server**\
   Stop your server via the dashboard.

2. **Connect via SFTP**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection).

3. **Open the directory**\
   Navigate to the following directory:

   ```text
   /Citadel/Saved/SaveGames/
   ```

4. **Download the entire folder**\
   Download the complete content of this directory including all subfolders and files to your PC.

5. **Start the server**\
   Start your server again.

> [!NOTE]
> **What is inside the savegame?**
>
> The folder contains the world data as well as the data of all players. The character data is named after the **SteamID64** of the respective player. Here you can learn how to find your [SteamID64](/tutorials/gameserver/steamid64-find-out).

> [!WARNING]
> A save is always the **entire folder content**. Always download it completely – individual files from it do not make a usable save.

> [!TIP]
> **Back up the configuration as well**
>
> If you also want to save your server settings, download the following folder in addition:
>
> ```text
> /Config/
> ```
>
> It contains, among others, the `Game.ini` with your server settings.

> [!TIP]
> **Restoring the savegame**
>
> If you want to transfer the save back to a server later, follow the guide [Add savegame](/tutorials/gameserver/citadel-forged-with-fire/add-savegame).

> [!NOTE]
> **Regular backups**
>
> For automatic or regular backups you can also use the backup function: [Create backup](/tutorials/gameserver/citadel-forged-with-fire/create-backup).
