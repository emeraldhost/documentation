---
slug: "download-savegame"
language: "en"
title: "How to Download the Savegame of Your Palworld Server"
description: "Download a savegame from a Palworld server"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["palworld"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Download Savegame"
sort: 21
related: ["gameserver/palworld/create-backup", "gameserver/palworld/disable-death-penalty", "gameserver/palworld/edit-server-config", "gameserver/palworld/enable-fast-travel"]
---

You can download your server's savegame to your PC at any time, for example as an extra backup, to archive it, or to move it to another server.

> [!WARNING]
> **Caution**
>
> Stop your server before downloading the files. While the server is running, it saves regularly, otherwise you would download an incomplete or corrupted save.

1. **Stop the server**\
   Stop your server via the dashboard.

2. **Connect via SFTP**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection).

3. **Open the directory**\
   Navigate to the following directory:

   ```text
   /Pal/Saved/SaveGames/0/
   ```

4. **Download the savegame folder**\
   Download the complete savegame folder to your PC. The folder name is a long string of letters and numbers and contains all world and player data.

5. **Start the server**\
   Start your server again.

> [!TIP]
> If there are several folders in `/Pal/Saved/SaveGames/0/`, you can find the currently loaded savegame folder in the following file:
>
> ```text
> /Pal/Saved/Config/LinuxServer/GameUserSettings.ini
> ```
>
> The `DedicatedServerName=` parameter contains the name of the savegame folder in use.

> [!TIP]
> **Restoring the savegame**
>
> If you want to transfer the save back to a server later, follow the guide [Upload savegame](/tutorials/gameserver/palworld/upload-savegame).

> [!NOTE]
> **Regular backups**
>
> For automatic or regular backups you can also use the backup function: [Create backup](/tutorials/gameserver/palworld/create-backup).
