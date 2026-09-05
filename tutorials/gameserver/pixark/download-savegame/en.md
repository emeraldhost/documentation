---
slug: "download-savegame"
language: "en"
title: "How to Download the Savegame of Your PixARK Server"
description: "Download a savegame from a PixARK server"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["pixark"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Download Savegame"
sort: 5
related: ["gameserver/pixark/add-mods", "gameserver/pixark/add-savegame", "gameserver/pixark/create-backup", "gameserver/pixark/join-server"]
---

You can download your server's save to your PC at any time – for example as an additional backup or to transfer it to another server.

In PixARK all mutable data lives in a single folder: `Saved`. It contains the voxel world, the player and tribe data, your configuration files and the logs.

> [!WARNING]
> **Caution**
>
> Stop your server before downloading the files. While running, the server constantly writes to the save – otherwise you would download an incomplete or corrupted state.

## Download the savegame

1. **Stop the server**\
   Stop your server via the dashboard.

2. **Connect via SFTP**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection).

3. **Open the directory**\
   Navigate to the following directory:

   ```text
   /ShooterGame/
   ```

4. **Download the folder**\
   Download the complete `Saved` folder to your PC:

   ```text
   /ShooterGame/Saved/
   ```

   > [!NOTE]
   > Always download the entire folder instead of picking individual subfolders. World, player and tribe data are stored in separate subfolders and belong together – if one of them is missing, the save is unusable.

5. **Start the server**\
   Start your server again.

## What is inside the Saved folder?

| Content | Description |
|---------|-------------|
| World data | The entire voxel world including all buildings and terrain changes |
| Player and tribe data | Characters, progress, inventories and tribes |
| `Config/WindowsServer/` | Configuration files, among them the `GameUserSettings.ini` |
| `Logs/` | The server logs |

> [!NOTE]
> The configuration folder is called `WindowsServer` on your Linux server as well. That is intended – PixARK only ships a Windows server binary, which runs on Linux servers through a compatibility layer.

> [!TIP]
> **Restoring the savegame**
>
> If you want to transfer the save back to a server later, follow the guide [Add Savegame](/tutorials/gameserver/pixark/add-savegame).

> [!NOTE]
> **Regular backups**
>
> For automatic or regular backups you can also use the backup function: [Create Backup](/tutorials/gameserver/pixark/create-backup).
