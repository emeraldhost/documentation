---
slug: "add-savegame"
language: "en"
title: "How to Add a Savegame to Your Aloft Server"
description: "Upload a savegame to an Aloft server"
tags: []
date: "2026-04-11"
visibility: "public"
cta: "gameserver"
product_keys: ["aloft"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Add Savegame"
sort: 3
related: ["gameserver/aloft/activate-private-islands", "gameserver/aloft/add-admin", "gameserver/aloft/change-number-of-islands", "gameserver/aloft/change-server-name"]
---

You can transfer your local savegame to your server and continue playing there.

## Find your savegame

You can find your Aloft savegames on your PC at:

```text
%LOCALAPPDATA%\Aloft\Saved\SaveGames\
```

## Upload the savegame

> [!WARNING]
> Stop your server before uploading files, otherwise they will be overwritten by the server.

1. **Stop the server**\
   Stop your server via the dashboard.

2. **Connect via SFTP**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection).

3. **Upload savegame**\
   Upload your savegame files to the following directory on the server:

   ```text
   /Aloft/Saved/SaveGames/
   ```

> [!WARNING]
> Uploading files will overwrite any existing savegame on the server.

4. **Start the server**\
   Start your server. Your savegame will now be loaded.
