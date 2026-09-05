---
slug: "download-savegame"
language: "en"
title: "How to Download the Savegame of Your The Bus Server"
description: "Download a savegame from a The Bus server"
tags: []
date: "2026-07-30"
visibility: "public"
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
   /TheBus/Saved/SaveGames/
   ```

4. **Download the files**\
   Download all save files from this directory to your PC. The easiest way is to select the entire contents of the `SaveGames` folder and store them together in one folder on your PC.

5. **Start the server**\
   Start your server again.

> [!TIP]
> **Restoring the savegame**
>
> If you want to transfer the save back to a server later, follow the guide [Add savegame](/tutorials/gameserver/the-bus/add-savegame).

> [!NOTE]
> **Regular backups**
>
> For automatic or regular backups you can also use the backup function: [Create backup](/tutorials/gameserver/the-bus/create-backup).
