---
slug: "add-savegame"
language: "en"
title: "How to Add a Savegame to Your ARK Survival Evolved Server"
description: "Upload a savegame to an ARK Survival Evolved server"
tags: []
date: "2026-04-11"
visibility: "public"
cta: "gameserver"
product_keys: ["ark-survival-evolved"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Add Savegame"
sort: 3
related: ["gameserver/ark-survival-evolved/add-admin", "gameserver/ark-survival-evolved/add-mods", "gameserver/ark-survival-evolved/create-backup", "gameserver/ark-survival-evolved/download-savegame"]
---

You can transfer your local savegame to your server and continue playing there.

## Find your savegame

You can find your ARK savegames on your PC at:

```text
<Steam>\steamapps\common\ARK\ShooterGame\Saved\SavedArksLocal\
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
   /ShooterGame/Saved/SavedArks/
   ```

> [!WARNING]
> Uploading files will overwrite any existing savegame on the server.

4. **Start the server**\
   Start your server. Your savegame will now be loaded.
