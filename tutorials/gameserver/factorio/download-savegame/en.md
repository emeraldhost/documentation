---
slug: "download-savegame"
language: "en"
title: "How to Download the Savegame of Your Factorio Server"
description: "Download a savegame from a Factorio server"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["factorio"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Download Savegame"
sort: 5
related: ["gameserver/factorio/add-savegame", "gameserver/factorio/create-backup", "gameserver/factorio/join-server", "gameserver/factorio/kick-ban-players"]
---

You can download your server's save to your PC at any time – for example as an additional backup, to archive a factory, or to move it to another server.

> [!WARNING]
> **Caution**
>
> Stop your server before downloading the file. While the server is running it saves at regular intervals – otherwise you would download an incomplete or corrupted save.

1. **Stop the server**\
   Stop your server via the dashboard.

2. **Connect via SFTP**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection).

3. **Open the directory**\
   Navigate to the following directory:

   ```text
   /saves/
   ```

4. **Download the save**\
   Download the `.zip` file of your save to your PC. The entire save is contained in this single file.

5. **Start the server**\
   Start your server again.

> [!TIP]
> **Which file is the right one?**
>
> You can tell which save is loaded from the **Save Name** field in the **Settings** of the dashboard. If it contains `gamesave`, for example, you need the file `gamesave.zip`.

> [!NOTE]
> **Autosaves**
>
> The automatic saves are located in the same folder and are named `_autosave1.zip`, `_autosave2.zip` and so on. They are useful for returning to a slightly older state.

> [!TIP]
> **Continue playing locally**
>
> Copy the downloaded `.zip` file to `%appdata%\Factorio\saves` on your PC to open the factory in single player.

> [!TIP]
> **Restoring the savegame**
>
> If you want to transfer the save back to a server later, follow the guide [Add savegame](/tutorials/gameserver/factorio/add-savegame).

> [!NOTE]
> **Regular backups**
>
> For automatic or regular backups you can also use the backup function: [Create backup](/tutorials/gameserver/factorio/create-backup).
