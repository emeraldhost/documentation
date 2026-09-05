---
slug: "download-savegame"
language: "en"
title: "How to Download the Savegame of Your Avorion Server"
description: "Download a savegame from an Avorion server"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["avorion"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Download Savegame"
sort: 5
related: ["gameserver/avorion/add-savegame", "gameserver/avorion/create-backup", "gameserver/avorion/join-server", "gameserver/avorion/kick-ban-players"]
---

You can download the galaxy of your server to your PC at any time – for example as an additional backup or to transfer it to another server.

> [!WARNING]
> **Caution**
>
> Stop your server before downloading the files. Avorion saves automatically while running – if you download during that, the galaxy can be incomplete.

1. **Stop the server**\
   Stop your server via the dashboard. Enter `/save` in the console beforehand so the current state is written to disk.

2. **Connect via SFTP**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection) or use the file browser in the dashboard.

3. **Find the galaxy folder**\
   Navigate to the data directory `/galaxy/` of your server and open the folder named after your galaxy inside it. You can recognise the right folder by the files `server.ini`, `admin.xml` and `modconfig.lua`.

   > [!NOTE]
   > **Which galaxy is the right one?**
   >
   > You can find the name of your current galaxy in the **dashboard** under the **settings** in the field for the galaxy name (**Galaxy Name**). The folder is named exactly like that.

4. **Download the folder**\
   Download the **complete** galaxy folder with all its files and subfolders to your PC.

5. **Start the server**\
   Start your server again.

> [!WARNING]
> A savegame is always the complete galaxy folder. Individual files taken from it do not make a usable savegame.

> [!TIP]
> **Reduce the download**
>
> The subfolder `workshop` inside the galaxy only contains the Workshop mods your server downloaded automatically. Your server downloads them again on the next start – so you can leave that folder out of the download if you want to save time and disk space.

> [!TIP]
> **Restore the savegame**
>
> If you want to transfer the galaxy back to a server later, follow the guide [Add savegame](/tutorials/gameserver/avorion/add-savegame). Make sure that the folder name and the configured galaxy name match.

> [!NOTE]
> **Regular backups**
>
> For automatic or regular backups you can also use the backup feature: [Create Backup](/tutorials/gameserver/avorion/create-backup).
