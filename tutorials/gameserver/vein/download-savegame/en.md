---
slug: "download-savegame"
language: "en"
title: "How to Download the Savegame of Your VEIN Server"
description: "Download a savegame from a VEIN server"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["vein"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Download Savegame"
sort: 4
related: ["gameserver/vein/add-savegame", "gameserver/vein/create-backup", "gameserver/vein/enable-whitelist", "gameserver/vein/join-server"]
---

You can download your server's savegame to your PC at any time – for example as an additional backup, to archive a save, or to move it to another server.

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
   /Vein/Saved/SaveGames/
   ```

4. **Download the files**\
   Download all `.vns` files (e.g. `Server.vns`) from this directory to your PC. The savegame consists solely of these files.

5. **Start the server**\
   Start your server again.

> [!TIP]
> Your server's savegame is usually named `Server.vns`. If there are several `.vns` files in the folder, it is best to download all of them – that way older saves are backed up as well.

> [!TIP]
> **Restoring the savegame**
>
> If you want to transfer the save back to a server later, follow the guide [Add savegame](/tutorials/gameserver/vein/add-savegame).

> [!NOTE]
> **Regular backups**
>
> For automatic or regular backups you can also use the backup function: [Create backup](/tutorials/gameserver/vein/create-backup).
