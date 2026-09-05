---
slug: "download-savegame"
language: "en"
title: "How to Download the Savegame of Your Windrose Server"
description: "Download a savegame from a Windrose server"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["windrose"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Download Savegame"
sort: 6
related: ["gameserver/windrose/change-world-settings", "gameserver/windrose/create-backup", "gameserver/windrose/enable-direct-connection", "gameserver/windrose/join-server"]
---

You can download your server's savegame to your PC at any time – for example as an additional backup, to archive a world, or to move it to another server.

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
   /R5/Saved/SaveProfiles/Default/RocksDB/<GameVersion>/Worlds/
   ```

   The placeholder `<GameVersion>` corresponds to the version the world was created with.

4. **Download the world folder**\
   Download the entire `<WorldID>` folder including all files it contains to your PC. Individual files are not enough – the world consists of the complete folder.

5. **Start the server**\
   Start your server again.

> [!TIP]
> The `<WorldID>` folder is named with an alphanumeric string. You can tell which folder is the right one from your server's [island ID](/tutorials/gameserver/windrose/set-island-id) – it matches the folder name. Note down the `<GameVersion>` and the island ID as well, so you can restore the save correctly later.

> [!TIP]
> **Restoring the savegame**
>
> If you want to transfer the save back to a server later, follow the guide [Add savegame](/tutorials/gameserver/windrose/add-savegame).

> [!NOTE]
> **Regular backups**
>
> For automatic or regular backups you can also use the backup function: [Create backup](/tutorials/gameserver/windrose/create-backup).
