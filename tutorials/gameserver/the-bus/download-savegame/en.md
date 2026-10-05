---
slug: "download-savegame"
language: "en"
title: "How to Download the Savegame of Your The Bus Server"
description: "Download a savegame from a The Bus server"
tags: []
date: "2026-07-30"
visibility: "public"
updated: "2026-10-05"
cta: "gameserver"
product_keys: ["the-bus"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Download Savegame"
sort: 12
related: ["gameserver/the-bus/configure-server", "gameserver/the-bus/create-backup", "gameserver/the-bus/enable-ai-buses", "gameserver/the-bus/add-mods"]
---

You can download your server's savegame to your PC at any time – e.g. as an additional backup, to archive a savegame, or to move it to another server.

> [!WARNING]
> Stop your server before downloading the files. This ensures that no files are changed during the download and that your savegame is complete.

1. **Stop the server**\
   Stop your server via the dashboard.

2. **Connect via SFTP**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection).

3. **Open the directory**\
   Navigate to the following directory:

   ```text
   /TheBus/Saved/SaveGames/
   ```

4. **Download the files**\
   Download all save files from this directory to your PC. The easiest way is to select the entire contents of the `SaveGames` folder and store them together in one folder on your PC.

5. **Start the server**\
   Start your server again.

> [!NOTE]
> Savegames are not necessarily compatible between major game versions – older savegames from Early Access, for example, may no longer work since the release of version 1.0. That's why you should download your savegame before major updates.

> [!TIP]
> If you want to transfer the savegame back to a server later, follow the guide [Add savegame](/tutorials/gameserver/the-bus/add-savegame). For regular backups you can also use the backup function: [Create backup](/tutorials/gameserver/the-bus/create-backup).
