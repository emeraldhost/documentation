---
slug: "download-savegame"
language: "en"
title: "How to Download the Savegame of Your BeamMP Server"
description: "Download a savegame from a BeamMP server"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["beammp"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Download Savegame"
sort: 11
related: ["gameserver/beammp/change-server-version", "gameserver/beammp/create-backup", "gameserver/beammp/enable-chat-logging", "gameserver/beammp/enable-private-mode"]
---

BeamMP is based on the BeamNG.drive sandbox and does not use persistent world savegames. What you can download instead are the server-side map and resource files – for example as an extra backup, to archive them, or to move them to another server.

> [!WARNING]
> **Caution**
>
> Stop your server before downloading the files. While the server is running it accesses these files, so you would end up with an incomplete or corrupted copy.

1. **Stop the server**\
   Stop your server via the dashboard.

2. **Connect via SFTP**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection).

3. **Open the directory**\
   Navigate to the following directory:

   ```text
   /Resources/Client/
   ```

4. **Download the files**\
   Download the entire contents of the directory to your PC. This is where your custom map files are stored, which the server delivers to the players.

5. **Start the server**\
   Start your server again.

> [!TIP]
> Since BeamMP is based on the BeamNG.drive sandbox, there are no persistent world savegames. Game progress is not saved on the server side – apart from the files in `/Resources/Client/`, there is no save data to back up.

> [!TIP]
> **Restoring the save later**
>
> If you want to transfer the files back to a server later on, follow the guide [Add savegame](/tutorials/gameserver/beammp/add-savegame).

> [!NOTE]
> **Regular backups**
>
> For automatic or regular backups you can also use the backup function: [Create backup](/tutorials/gameserver/beammp/create-backup).
