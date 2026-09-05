---
slug: "upload-savegame"
language: "en"
title: "How to Upload a Savegame to Your Palworld Server"
description: "Upload a savegame to a Palworld server"
tags: []
date: "2026-02-27"
visibility: "public"
updated: "2026-02-28"
cta: "gameserver"
product_keys: ["palworld"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Add Savegame"
sort: 33
related: ["gameserver/palworld/kick-ban-players", "gameserver/palworld/reset-world", "gameserver/palworld/restore-automatic-backup", "gameserver/palworld/set-server-password"]
---

You can transfer your local savegame to your server and continue playing there.

## How to find your savegame

You can find your Palworld savegames on your PC at:

```text
%localappdata%\Pal\Saved\SaveGames\
```

Inside this folder there is a subfolder with your Steam ID, and within that your savegame folder (a long string of letters and numbers).

## How to upload the savegame

> [!WARNING]
> Stop your server before uploading files, otherwise they will be overwritten by the server.

1. **Stop the server**\
   Stop your server via the dashboard.

2. **Connect via SFTP**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection).

3. **Upload savegame**\
   Upload your savegame folder to the following directory on the server:

   ```text
   /Pal/Saved/SaveGames/0/
   ```

4. **Enter folder name**\
   Open the file `GameUserSettings.ini` at:

   ```text
   /Pal/Saved/Config/LinuxServer/GameUserSettings.ini
   ```

   Find the parameter `DedicatedServerName=` and enter the name of your uploaded savegame folder:

   ```ini
   DedicatedServerName=YOUR_FOLDER_NAME
   ```

5. **Start the server**\
   Start your server. Your savegame will now be loaded.

> [!TIP]
> You can find the savegame folder name in the directory `/Pal/Saved/SaveGames/0/`. It is the long string that serves as the folder name.
