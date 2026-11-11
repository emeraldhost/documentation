---
slug: "add-savegame"
language: "en"
title: "How to Add a Savegame to Your Stormforge Server"
description: "Upload a Stormforge world to your server via SFTP and use worldPrefabID to define which world is loaded."
tags: []
date: "2026-11-11"
visibility: "public"
cta: "gameserver"
product_keys: ["stormforge"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Add Savegame"
sort: 1
related: ["gameserver/stormforge/create-backup", "gameserver/stormforge/download-savegame", "gameserver/stormforge/reset-world", "gameserver/stormforge/change-world-settings"]
---

A Stormforge server stores each world in its own folder under `/saves/Worlds/`. The folder is named after the ID of the world. Which world is loaded on startup is defined by the entry `worldPrefabID` in the file `/settings.json`.

```text
/saves/Worlds/
└── 3f2b8c1e-5a47-4d09-9e6b-7c1d2a4f8b30/
    └── World_3f2b8c1e-5a47-4d09-9e6b-7c1d2a4f8b30.bytes
```

> [!TIP]
> **Where does a savegame come from?**\
> This guide is meant for worlds that come from a Stormforge server, for example when moving to another server or when restoring your own backup. How to download the world from a server is described in [Download savegame](/tutorials/gameserver/stormforge/download-savegame).

## Upload the savegame

1. **Create a backup**\
   Save the current state of your server before you change anything: [Create backup](/tutorials/gameserver/stormforge/create-backup).

2. **Stop the server**\
   Stop your server via the dashboard. The server rewrites `settings.json` itself while it is running, so your change would otherwise be lost.

3. **Connect via SFTP**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection).

4. **Upload the world folder**\
   Navigate to the following directory and upload the complete world folder into it:

   ```text
   /saves/Worlds/
   ```

   Upload the folder as a whole, that is the folder named after the ID including its contents, not just the files inside it.

5. **Enter the world in settings.json**\
   Open the file `/settings.json` in the main directory of your server, via SFTP or in the **File Manager** via the file's menu and **Edit**. Set `worldPrefabID` to exactly the name of the uploaded folder:

   ```json
   "worldPrefabID": "3f2b8c1e-5a47-4d09-9e6b-7c1d2a4f8b30",
   ```

   Change only the value between the quotes and leave all other entries untouched. Save the file.

6. **Start the server**\
   Start your server. The uploaded world is now loaded on startup.

> [!CAUTION]
> **Do not rename the folder or the file**\
> The name of the folder and the ID in the file name `World_<World-ID>.bytes` must match. So rename neither the folder nor the file.

> [!NOTE]
> **World suddenly new?**\
> If `worldPrefabID` holds an ID for which there is no world in `/saves/Worlds/`, for example because of a typo, the server generates a new world on startup. Stop the server, enter the correct ID and start it again.

> [!TIP]
> **Switching between worlds**\
> Several world folders can lie side by side in `/saves/Worlds/`. Only the world whose ID is set in `worldPrefabID` is loaded. To switch worlds, stop the server, enter the ID of the other world and start it again.

> [!NOTE]
> **World from the local game**\
> The game stores local worlds on your PC under `%USERPROFILE%\AppData\LocalLow\RobotoGames\Stormforge\Saves` in the subfolder `Worlds`. Uploading such a world follows the same procedure, but it is not officially documented. So make sure to create a backup first.
