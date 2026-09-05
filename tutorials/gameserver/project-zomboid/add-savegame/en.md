---
slug: "add-savegame"
language: "en"
title: "How to Upload a Savegame to Your Project Zomboid Server"
description: "Upload a savegame to a Project Zomboid server"
tags: []
date: "2026-04-10"
visibility: "public"
cta: "gameserver"
product_keys: ["project-zomboid"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Add Savegame"
sort: 3
related: ["gameserver/project-zomboid/add-admin", "gameserver/project-zomboid/add-mods", "gameserver/project-zomboid/change-max-players", "gameserver/project-zomboid/change-server-description"]
---

You can transfer your local savegame to your server and continue playing there.

## How to find your savegame

You can find your Project Zomboid multiplayer savegames on your PC at:

```text
%USERPROFILE%\Zomboid\Saves\Multiplayer\
```

## How to upload the savegame

> [!WARNING]
> Stop your server before uploading files. An existing savegame on the server will be overwritten.

1. **Stop the server**\
   Stop your server via the dashboard.

2. **Connect via SFTP**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection).

3. **Upload savegame**\
   Upload your savegame folder to the following directory on the server:

   ```text
   /Zomboid/Saves/Multiplayer/
   ```

4. **Start the server**\
   Start your server. Your savegame will now be loaded.

> [!TIP]
> Create a backup of the existing savegame on the server before uploading, in case you want to restore it later.
