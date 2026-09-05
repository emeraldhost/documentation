---
slug: "download-savegame"
language: "en"
title: "How to Download the Savegame of Your Unturned Server"
description: "Download a savegame from an Unturned server"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["unturned"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Download Savegame"
sort: 5
related: ["gameserver/unturned/add-savegame", "gameserver/unturned/create-backup", "gameserver/unturned/join-server", "gameserver/unturned/kick-ban-players"]
---

In Unturned the save and the configuration live together in one folder under `/Servers/`. You can download that folder to your PC at any time – for example as an additional backup or to transfer it to another server.

> [!CAUTION]
> **Save first**
>
> Unturned does **not** save automatically. If you download the files without saving first, all progress since the last save is missing.

1. **Save the world**\
   Open the **console** in the dashboard and enter the following command:

   ```text
   save
   ```

2. **Stop the server**\
   Stop your server via the dashboard.

3. **Connect via SFTP**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection).

4. **Open the directory**\
   Navigate to the following directory:

   ```text
   /Servers/
   ```

   > [!NOTE]
   > **Which folder is mine?**
   >
   > The folder name matches the server ID from your server's startup parameter. Usually there is exactly one folder there – that is yours.

5. **Download the folder**\
   Download the complete folder of your server including all subfolders to your PC.

6. **Start the server**\
   Start your server again.

## What is inside the folder?

| Folder / file | Content |
|---------------|---------|
| `Level/<MapName>/` | The world data: structures, vehicles and objects – one folder per map |
| `Players/` | The player saves, one subfolder per player |
| `Server/Commands.dat` | Your server commands and settings (map, password, player count) |
| `Server/Adminlist.dat` · `Server/Blacklist.dat` | Admin list and ban list |
| `Config.txt` | Difficulty and advanced server settings |
| `WorkshopDownloadConfig.json` | The list of your Workshop mods and maps |

> [!TIP]
> **Save the world only**
>
> If you only want to keep the game progress, the folders `Level/` and `Players/` are enough. For a complete move to another server it is better to download the whole server folder.

> [!WARNING]
> Always download folders completely. Individual files from `Level/` or `Players/` do not make a usable save.

> [!TIP]
> **Restoring the savegame**
>
> If you want to transfer the save back to a server later, follow the guide [Add savegame](/tutorials/gameserver/unturned/add-savegame).

> [!NOTE]
> **Regular backups**
>
> For automatic or regular backups you can also use the backup function: [Create backup](/tutorials/gameserver/unturned/create-backup).
