---
slug: "download-savegame"
language: "en"
title: "How to Download the Savegame of Your Myth of Empires Server"
description: "Download a savegame from a Myth of Empires server"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["myth-of-empires"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Download Savegame"
sort: 4
related: ["gameserver/myth-of-empires/add-savegame", "gameserver/myth-of-empires/create-backup", "gameserver/myth-of-empires/join-server", "gameserver/myth-of-empires/kick-ban-players"]
---

The save of a Myth of Empires server is not a single file but the complete folder `Saved`. It contains the world, all structures, the player data and your server settings.

> [!WARNING]
> **Caution**
>
> Stop your server before downloading the files. Myth of Empires writes to the save regularly while running – if you download during operation, the save can be incomplete or corrupted.

1. **Save the world**\
   Run the command `cheat SaveWorld` in the game as an admin and wait about 30 to 45 seconds so the save is fully written to disk.

2. **Stop the server**\
   Stop your server via the dashboard.

3. **Connect via SFTP**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection).

4. **Open the directory**\
   Change to the following directory:

   ```text
   /MOE/
   ```

5. **Download Saved**\
   Download the complete folder `Saved` with all of its subfolders and files to your PC.

6. **Start the server**\
   Start your server again.

> [!WARNING]
> **Caution**
>
> A save is always the complete folder `Saved`. World and player data are stored there side by side across several files and belong together – individual files taken from it do not make a usable save.

> [!NOTE]
> **What is inside the Saved folder?**
>
> | Entry | Content |
> |-------|---------|
> | `Config/WindowsServer/` | Your server settings, among them the `GameUserSettings.ini` |
> | `Logs/` | The log files of your server |
>
> The remaining files in the folder hold the world and the player data. Always back up the folder in full.

> [!NOTE]
> The configuration folder is called `WindowsServer` on your Linux server as well. That is intended – Myth of Empires only ships a Windows server binary, which runs on Linux servers through a compatibility layer.

> [!CAUTION]
> **The save is tied to the server ID**
>
> The save is stored under the **server ID** of your server. If you change that ID, the server no longer finds its previous save and creates a new, empty world. Write down the server ID of your server before restoring the save somewhere else.

> [!TIP]
> **Restore the save later**
>
> If you want to transfer the save back to a server later, follow the guide [Add Savegame](/tutorials/gameserver/myth-of-empires/add-savegame).

> [!NOTE]
> **Regular backups**
>
> For automatic or regular backups you can also use the backup feature: [Create Backup](/tutorials/gameserver/myth-of-empires/create-backup).
