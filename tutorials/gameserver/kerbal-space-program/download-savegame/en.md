---
slug: "download-savegame"
language: "en"
title: "How to Download the Savegame of Your Kerbal Space Program Server"
description: "Download the savegame of a Kerbal Space Program server"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["kerbal-space-program"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Download Savegame"
sort: 5
related: ["gameserver/kerbal-space-program/add-savegame", "gameserver/kerbal-space-program/create-backup", "gameserver/kerbal-space-program/join-server", "gameserver/kerbal-space-program/kick-ban-players"]
---

You can download the savegame of your server to your PC at any time – for example as an additional backup or to move it to another server. The complete savegame is stored in the `Universe` folder in the main directory of your server.

> [!WARNING]
> **Caution**
>
> Stop your server before downloading the files. DarkMultiPlayer constantly writes vessel and player data while running – otherwise you would download an incomplete savegame.

1. **Stop the server**\
   Stop your server via the dashboard.

2. **Connect via SFTP**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection).

3. **Open the directory**\
   Navigate to the main directory of your server. It contains the folder:

   ```text
   /Universe/
   ```

4. **Download the folder**\
   Download the complete `Universe` folder including all subfolders to your PC. Individual files are not enough – vessels, Kerbals and player progress live in different subfolders.

5. **Start the server**\
   Start your server again.

> [!NOTE]
> The folder consists of plain text files only: `Vessels` holds one file per vessel, `Kerbals` one file per Kerbal, and `Scenarios` one subfolder per player with science, funds, reputation and tech tree.

> [!TIP]
> **Back up the configuration as well**
>
> If you also want to save your server settings, download this folder in addition:
>
> ```text
> /Config/
> ```
>
> It contains `Settings.txt`, `admins.txt`, `mod-control.txt` and the ban lists, among others.

> [!TIP]
> **Restore the savegame later**
>
> If you want to move the savegame back to a server later, follow the guide [Add Savegame](/tutorials/gameserver/kerbal-space-program/add-savegame).

> [!NOTE]
> **Regular backups**
>
> For automatic or regular backups you can also use the backup feature: [Create Backup](/tutorials/gameserver/kerbal-space-program/create-backup).
